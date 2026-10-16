-- =============================================================================
-- MỐC TIẾN ĐỘ + TỰ CHUYỂN BƯỚC
--   • Bước 1 → 2: tự chuyển khi mọi tài liệu bắt buộc (không tính "Không áp dụng") đã được duyệt
--   • Bước 2 → 3: tự chuyển khi nhập kết quả phỏng vấn = Đậu
--   • Mỗi lần tự chuyển: ghi nhật ký + email báo người phụ trách và Quản trị
--   • Nhắc lịch phỏng vấn trước 7 ngày và 1 ngày (8:40 sáng mỗi ngày)
-- Mốc Bước 2 lưu trong clients.data.ms:
--   feeDate, premium (true/false), premiumDate, i129Date, receipt, approvedDate,
--   interviewDate, interviewPlace, result ('pass' | 'rfe' | 'deny'), resultDate
-- Bấm tay vẫn được như cũ (patch có "step" thì không tự chuyển). Mỗi lần tự chuyển chỉ chạy 1 lần / hồ sơ
-- (cờ data.auto.s2 / data.auto.s3), nên lùi bước bằng tay sẽ không bị tự đẩy lại.
-- Chạy sau notify.sql + assign.sql + reminders.sql. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================

-- tất cả tài liệu bắt buộc đã duyệt?
create or replace function public.case_docs_done(d jsonb) returns boolean
language sql stable security definer set search_path = public as $$
  with codes as (
    select coalesce(
      (select array_agg(x ->> 'code') from public.settings s, jsonb_array_elements(coalesce(s.value -> 'docs','[]'::jsonb)) x
        where s.key = 'program_l1a' and coalesce(x ->> 'code','') <> ''),
      (select array_agg(k) from jsonb_object_keys(coalesce(d -> 'docs','{}'::jsonb)) k)) a),
  st as (select coalesce(d -> 'docs' -> c ->> 's', 'missing') s from codes, unnest(codes.a) c)
  select count(*) filter (where s <> 'na') > 0 and bool_and(s in ('approved','na')) from st
$$;

-- email báo chuyển bước
create or replace function public.notify_step(p_id text, p_step int, p_reason text) returns void
language plpgsql security definer set search_path = public as $$
declare
  cfg jsonb; portal text;
  c record; who text[]; nm text; st text;
  names text[] := array['Thẩm định & chứng từ','Nộp I-129 · Phỏng vấn','Nhận visa L-1A','I-140 · I-485','Thẻ xanh EB-1C'];
  en    text[] := array['Due diligence & documents','I-129 filing · Interview','L-1A visa issued','I-140 · I-485','EB-1C green card'];
begin
  cfg := public.notify_cfg(); portal := coalesce(cfg ->> 'portal','https://hoso.ditruidc.com');
  if coalesce((cfg ->> 'enabled')::boolean, false) is not true then return; end if;
  select id, data into c from public.clients where id = p_id;
  if not found then return; end if;
  who := public.notify_clean(array(select jsonb_array_elements_text(coalesce(c.data -> 'assignees','[]'::jsonb))) || public.notify_admins());
  nm  := concat_ws(' – ', nullif(c.data ->> 'name',''), nullif(c.data ->> 'company',''));
  st  := names[p_step];
  perform public.notify_send(who,
    p_id || ' · ' || nm || ' · Sang bước ' || p_step || ': ' || st || ' / Moved to step ' || p_step,
    public.notify_wrap('Hồ sơ ' || public.notify_html_escape(p_id) || ' đã sang Bước ' || p_step
        || ' <span style="color:#6B7A70;font-weight:normal">· Case moved to step ' || p_step || '</span>',
      '<p style="margin:0 0 8px"><b>' || public.notify_html_escape(nm) || '</b></p>'
      || '<p style="margin:0 0 4px">Bước mới: <b>' || p_step || '. ' || public.notify_html_escape(st) || '</b>'
      || ' <span style="color:#6B7A70">(' || en[p_step] || ')</span></p>'
      || '<p style="margin:0;color:#6B7A70">Lý do / Reason: ' || public.notify_html_escape(p_reason) || '</p>',
      portal || '/#' || p_id));
exception when others then
  raise warning 'notify_step: %', sqlerrm;   -- lỗi gửi thư không chặn việc lưu hồ sơ
end $$;

-- patch_client v3 = v2 (assign.sql) + mốc tiến độ + tự chuyển bước
create or replace function public.patch_client(p_id text, p_patch jsonb, p_log text default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  who   text := public.my_email();
  r     text := public.my_role();
  patch jsonb := coalesce(p_patch, '{}'::jsonb);
  cur   jsonb;
  nd    jsonb;
  stp   int;
  auto_to int := null;
  auto_msg text;
  logs  jsonb := '[]'::jsonb;
begin
  if r is null or r not in ('admin','staff','lawyer') then raise exception 'permission denied'; end if;
  select data into cur from public.clients where id = p_id;
  if not found then raise exception 'client % not found', p_id; end if;
  if r <> 'admin' and not (coalesce(cur -> 'assignees','[]'::jsonb) ? who) then
    raise exception 'permission denied: hồ sơ này chưa được phân cho bạn';
  end if;
  if r <> 'admin' and (patch ? 'assignees' or patch ? 'due') then
    raise exception 'permission denied: chỉ Quản trị được phân công / đặt hạn hồ sơ';
  end if;
  if r = 'lawyer' and exists (select 1 from jsonb_object_keys(patch) k where k <> 'docs') then
    raise exception 'permission denied: Luật sư chỉ được cập nhật trạng thái và ghi chú tài liệu';
  end if;
  if r = 'staff' and jsonb_typeof(patch -> 'docs') = 'object' and exists (
       select 1 from jsonb_each(patch -> 'docs') d
        where d.value ? 's'
          and (d.value ->> 's') is distinct from (cur -> 'docs' -> d.key ->> 's')
          and ((d.value ->> 's') = 'approved' or (cur -> 'docs' -> d.key ->> 's') = 'approved')) then
    raise exception 'permission denied: chỉ Luật sư hoặc Quản trị được duyệt / bỏ duyệt tài liệu';
  end if;
  if patch ? 'auto' then patch := patch - 'auto'; end if;

  nd  := public.jsonb_deep_merge(cur, patch);
  stp := coalesce(nullif(nd ->> 'step','')::int, 1);
  if p_log is not null then logs := jsonb_build_array(jsonb_build_object('t', now(), 'by', who, 'm', p_log)); end if;

  if not (patch ? 'step') then
    if stp = 1 and (nd -> 'auto' ->> 's2') is null and public.case_docs_done(nd) then
      auto_to := 2; auto_msg := 'Tự chuyển sang bước 2: Nộp I-129 · Phỏng vấn – đã đủ chứng từ được duyệt';
    elsif stp = 2 and (nd -> 'auto' ->> 's3') is null and (nd -> 'ms' ->> 'result') = 'pass' then
      auto_to := 3; auto_msg := 'Tự chuyển sang bước 3: Nhận visa L-1A – đậu phỏng vấn';
    end if;
  end if;
  if auto_to is not null then
    nd := jsonb_set(jsonb_set(nd, '{step}', to_jsonb(auto_to)), '{auto}',
            coalesce(nd -> 'auto','{}'::jsonb) || jsonb_build_object('s' || auto_to, now()));
    logs := jsonb_build_array(jsonb_build_object('t', now(), 'by', 'Hệ thống', 'm', auto_msg)) || logs;
  end if;

  update public.clients
     set data = nd,
         log  = case when jsonb_array_length(logs) = 0 then log
                     else (select coalesce(jsonb_agg(x.e order by x.n),'[]'::jsonb) from (
                             select e, n from jsonb_array_elements(logs || coalesce(log,'[]'::jsonb)) with ordinality as t(e, n)
                             order by n limit 60) x) end,
         updated_at = now()
   where id = p_id;

  if auto_to is not null then
    perform public.notify_step(p_id, auto_to, case auto_to when 2 then 'Đủ chứng từ đã được duyệt / All required documents approved'
                                                         else 'Đậu phỏng vấn lãnh sự / Consular interview passed' end);
  end if;
end $$;
revoke all on function public.patch_client(text, jsonb, text) from public, anon;
grant execute on function public.patch_client(text, jsonb, text) to authenticated;
revoke all on function public.notify_step(text, int, text) from public, anon, authenticated;
revoke all on function public.case_docs_done(jsonb) from public, anon;

-- Nhắc lịch phỏng vấn (trước 7 ngày và 1 ngày) -----------------------------------
create or replace function public.notify_interviews() returns int
language plpgsql security definer set search_path = public as $$
declare
  cfg jsonb := public.notify_cfg(); portal text := coalesce(cfg ->> 'portal','https://hoso.ditruidc.com');
  today date := (now() at time zone 'Asia/Ho_Chi_Minh')::date;
  c record; d date; left_days int; nm text; n int := 0;
begin
  if coalesce((cfg ->> 'enabled')::boolean, false) is not true then return 0; end if;
  for c in select id, data from public.clients
            where coalesce(data -> 'ms' ->> 'interviewDate','') ~ '^\d{4}-\d{2}-\d{2}$'
              and coalesce(data -> 'ms' ->> 'result','') = ''
  loop
    d := (c.data -> 'ms' ->> 'interviewDate')::date; left_days := d - today;
    continue when left_days not in (1, 7);
    nm := concat_ws(' – ', nullif(c.data ->> 'name',''), nullif(c.data ->> 'company',''));
    perform public.notify_send(
      public.notify_clean(array(select jsonb_array_elements_text(coalesce(c.data -> 'assignees','[]'::jsonb))) || public.notify_admins()),
      'Nhắc phỏng vấn · ' || c.id || ' · ' || nm || ' · còn ' || left_days || ' ngày / Interview in ' || left_days || ' day(s)',
      public.notify_wrap('Lịch phỏng vấn lãnh sự còn ' || left_days || ' ngày <span style="color:#6B7A70;font-weight:normal">· Interview in ' || left_days || ' day(s)</span>',
        '<p style="margin:0 0 8px"><b>' || public.notify_html_escape(c.id) || ' · ' || public.notify_html_escape(nm) || '</b></p>'
        || '<p style="margin:0 0 4px">Ngày phỏng vấn / Date: <b>' || to_char(d,'DD/MM/YYYY') || '</b></p>'
        || case when coalesce(c.data -> 'ms' ->> 'interviewPlace','') <> '' then '<p style="margin:0 0 4px">Địa điểm / Location: <b>' || public.notify_html_escape(c.data -> 'ms' ->> 'interviewPlace') || '</b></p>' else '' end
        || '<p style="margin:8px 0 0;color:#6B7A70">Nhắc khách chuẩn bị hồ sơ gốc, hộ chiếu, thư hẹn và I-797. / Remind the client to bring originals, passport, appointment letter and I-797.</p>',
        portal || '/#' || c.id));
    n := n + 1;
  end loop;
  return n;
end $$;
revoke all on function public.notify_interviews() from public, anon, authenticated;

select cron.unschedule(jobid) from cron.job where jobname = 'idc-notify-interviews';
select cron.schedule('idc-notify-interviews', '40 1 * * *', 'select public.notify_interviews()');  -- 01:40 UTC = 8:40 VN, mỗi ngày

-- kiểm tra
select id, data ->> 'name' as khach, coalesce(data ->> 'step','1') as buoc, public.case_docs_done(data) as du_chung_tu
  from public.clients order by id;
