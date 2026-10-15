-- =============================================================================
-- THÔNG BÁO EMAIL KHI CÓ TỆP MỚI · IDC VIETNAM Portal hồ sơ định cư
-- Chạy MỘT LẦN trong Supabase → SQL Editor (sau schema.sql). Chạy lại nhiều lần vẫn an toàn.
--
-- Cách hoạt động
--   • Mỗi 5 phút: gom các tệp mới tải lên (chưa báo) theo từng hồ sơ → 1 email gửi MỌI người
--     có tài khoản portal (nhân viên, sếp, luật sư…) đang bật "Nhận thông báo" trong bảng Nhân viên
--     + danh sách "Nhận thêm" (người ngoài portal). Người tự tải tệp lên không nhận thư về tệp của mình.
--   • 17:00 hằng ngày (giờ Việt Nam): thư tổng hợp các tệp nhận trong 24 giờ qua
--     + số tài liệu đang chờ duyệt, gửi danh sách "Tổng hợp cuối ngày" (trống → quản trị viên).
--   • Email chỉ có mã hồ sơ, tên khách, mã tài liệu và link portal; người nhận phải đăng nhập
--     mới xem được tệp.
--
-- Cần có trước (xem HUONG_DAN_THONG_BAO.md):
--   1. Tài khoản Resend (resend.com) đã xác minh tên miền gửi thư.
--   2. Khoá API của Resend lưu trong Supabase Vault với tên  resend_api_key
--      (Project Settings → Vault, hoặc:  select vault.create_secret('re_xxx','resend_api_key');)
--   3. (Tuỳ chọn) Zalo: bot tạo tại bot.zaloplatforms.com, token lưu trong Vault tên  zalo_bot_token;
--      mỗi nhân viên nhắn cho bot 1 tin, quản trị nhập Zalo chat ID của họ trong Quản trị → Nhân viên.
-- =============================================================================

create extension if not exists pg_net;
create extension if not exists pg_cron;

-- 1. Đánh dấu tệp đã được báo --------------------------------------------------
alter table public.files add column if not exists notified_at timestamptz;
alter table public.staff add column if not exists zalo_chat_id text;   -- chat ID Zalo của nhân viên (nhận tin từ bot)
alter table public.staff add column if not exists notify boolean not null default true;  -- nhận thông báo tệp mới
-- tệp đã có từ trước khi bật tính năng: coi như đã báo, tránh gửi dồn
update public.files set notified_at = coalesce(notified_at, now()) where notified_at is null and created_at < now() - interval '10 minutes';
create index if not exists files_unnotified on public.files (created_at) where notified_at is null;

-- 2. Cấu hình mặc định (sửa được trong portal: Quản trị → Thông báo email) ------
insert into public.settings (key, value, updated_by)
values ('notify', jsonb_build_object(
  'enabled', false,
  'from',    'IDC VIETNAM <thongbao@ditruidc.com>',
  'portal',  'https://hoso.ditruidc.com',
  'instant', '[]'::jsonb,   -- email nhận thêm (người không có tài khoản portal)
  'digest',  '[]'::jsonb,   -- email nhận thư tổng hợp 17:00 (trống = quản trị viên)
  'email',   true,          -- gửi qua email
  'zalo',    false,         -- gửi thêm qua bot Zalo
  'zalo_groups', '[]'::jsonb -- chat ID nhóm Zalo nhận mọi thông báo (nếu bot vào được nhóm)
), 'notify.sql')
on conflict (key) do nothing;

-- 3. Tiện ích ------------------------------------------------------------------
create or replace function public.notify_cfg() returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce((select value from public.settings where key = 'notify'), '{}'::jsonb)
$$;

create or replace function public.notify_html_escape(t text) returns text
language sql immutable as $$
  select replace(replace(replace(replace(coalesce(t,''), '&', '&amp;'), '<', '&lt;'), '>', '&gt;'), '"', '&quot;')
$$;

-- tên tài liệu theo danh mục đã lưu trong Quản trị (nếu có)
create or replace function public.notify_doc_name(p_code text) returns text
language sql stable security definer set search_path = public as $$
  select d ->> 'name'
    from public.settings s, jsonb_array_elements(coalesce(s.value -> 'docs', '[]'::jsonb)) d
   where s.key = 'program_l1a' and d ->> 'code' = p_code
   limit 1
$$;

-- tên tiếng Anh của tài liệu (cột "en" trong danh mục)
create or replace function public.notify_doc_en(p_code text) returns text
language sql stable security definer set search_path = public as $$
  select d ->> 'en'
    from public.settings s, jsonb_array_elements(coalesce(s.value -> 'docs', '[]'::jsonb)) d
   where s.key = 'program_l1a' and d ->> 'code' = p_code
   limit 1
$$;

-- khung thư chung (màu IDC)
create or replace function public.notify_wrap(p_title text, p_body text, p_portal text) returns text
language sql immutable as $$
  select '<div style="font-family:Arial,Helvetica,sans-serif;background:#F3F6F1;padding:24px 12px">'
      || '<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #DCE8D7;border-radius:10px;overflow:hidden">'
      || '<div style="background:#1B6B1B;padding:14px 20px;color:#F5C400;font-weight:bold;letter-spacing:.06em">IDC VIETNAM'
      || '<span style="color:#ffffff;font-weight:normal;letter-spacing:0"> · Portal hồ sơ định cư · Immigration Case Portal</span></div>'
      || '<div style="height:3px;background:#F5C400"></div>'
      || '<div style="padding:20px;color:#14201A;font-size:14px;line-height:1.55">'
      || '<h2 style="margin:0 0 12px;font-size:17px">' || p_title || '</h2>' || p_body
      || '<p style="margin:20px 0 0"><a href="' || p_portal || '" style="display:inline-block;background:#1B6B1B;color:#ffffff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:bold">Mở portal · Open portal</a></p>'
      || '</div><div style="padding:12px 20px;border-top:1px solid #EEF3EC;color:#6B7A70;font-size:12px">'
      || 'Thư tự động từ portal nội bộ. Tệp chỉ xem được sau khi đăng nhập. Vui lòng không trả lời thư này.<br>'
      || 'Automated message from the internal portal. Files can only be viewed after signing in. Please do not reply.'
      || '</div></div></div>'
$$;

-- 4. Gửi một email qua Resend (pg_net, bất đồng bộ) ------------------------------
create or replace function public.notify_send(p_to text[], p_subject text, p_html text) returns bigint
language plpgsql security definer set search_path = public, extensions as $$
declare
  k   text;
  cfg jsonb := public.notify_cfg();
  rid bigint;
begin
  select decrypted_secret into k from vault.decrypted_secrets where name = 'resend_api_key' limit 1;
  if k is null or k = '' then raise exception 'Chưa có khoá resend_api_key trong Supabase Vault'; end if;
  if p_to is null or cardinality(p_to) = 0 then return null; end if;
  select net.http_post(
           url     := 'https://api.resend.com/emails',
           headers := jsonb_build_object('Authorization', 'Bearer ' || k, 'Content-Type', 'application/json'),
           body    := jsonb_build_object('from', coalesce(cfg ->> 'from', 'IDC VIETNAM <thongbao@ditruidc.com>'),
                                         'to', to_jsonb(p_to), 'subject', p_subject, 'html', p_html)
         ) into rid;
  return rid;
end $$;

-- 4b. Gửi một tin Zalo qua Zalo Bot API (pg_net) ---------------------------------
create or replace function public.notify_zalo(p_chat text, p_text text) returns bigint
language plpgsql security definer set search_path = public, extensions as $$
declare k text; rid bigint;
begin
  if p_chat is null or trim(p_chat) = '' then return null; end if;
  select decrypted_secret into k from vault.decrypted_secrets where name = 'zalo_bot_token' limit 1;
  if k is null or k = '' then raise exception 'Chưa có zalo_bot_token trong Supabase Vault'; end if;
  select net.http_post(
           url     := 'https://bot-api.zaloplatforms.com/bot' || k || '/sendMessage',
           headers := jsonb_build_object('Content-Type', 'application/json'),
           body    := jsonb_build_object('chat_id', trim(p_chat), 'text', left(p_text, 1900))
         ) into rid;
  return rid;
end $$;

-- gửi tin Zalo cho danh sách email (theo chat ID trong bảng Nhân viên) + các nhóm cấu hình
create or replace function public.notify_zalo_many(p_emails text[], p_text text, p_groups boolean default true) returns int
language plpgsql security definer set search_path = public as $$
declare cfg jsonb := public.notify_cfg(); ch text; n int := 0;
begin
  if coalesce((cfg ->> 'zalo')::boolean, false) is not true then return 0; end if;
  for ch in
    select distinct x from (
      select s.zalo_chat_id x from public.staff s where lower(s.email) = any(p_emails) and coalesce(s.zalo_chat_id,'') <> ''
      union all
      select jsonb_array_elements_text(coalesce(cfg -> 'zalo_groups','[]'::jsonb)) where p_groups
    ) t where coalesce(x,'') <> ''
  loop
    perform public.notify_zalo(ch, p_text); n := n + 1;
  end loop;
  return n;
end $$;

-- người nhận: danh sách email hợp lệ, không trùng, bỏ người loại trừ
create or replace function public.notify_clean(p_list text[], p_exclude text default null) returns text[]
language sql immutable as $$
  select coalesce(array_agg(distinct e order by e), '{}')
    from (select lower(trim(x)) e from unnest(p_list) x) t
   where e ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' and e is distinct from lower(coalesce(p_exclude,''))
$$;

create or replace function public.notify_admins() returns text[]
language sql stable security definer set search_path = public as $$
  select coalesce(array_agg(email), '{}') from public.staff where role = 'admin'
$$;

-- 5. Báo tệp mới (chạy mỗi 5 phút) ---------------------------------------------
create or replace function public.notify_uploads() returns int
language plpgsql security definer set search_path = public as $$
declare
  cfg     jsonb := public.notify_cfg();
  portal  text  := coalesce(cfg ->> 'portal', 'https://hoso.ditruidc.com');
  instant text[] := array(select jsonb_array_elements_text(coalesce(cfg -> 'instant', '[]'::jsonb)));
  c       record;
  trs     text;
  rcpt    text[];
  sent    int := 0;
begin
  if coalesce((cfg ->> 'enabled')::boolean, false) is not true then return 0; end if;

  for c in
    select f.client_id,
           concat_ws(' – ', nullif(cl.data ->> 'name',''), nullif(cl.data ->> 'company','')) as cname,
           cl.data ->> 'staff' as staff_name,
           array_agg(f.id order by f.created_at)                     as ids,
           count(*)                                                  as n,
           array_agg(distinct lower(coalesce(f.created_by,'')))      as uploaders,
           max(f.created_at)                                         as last_at
      from public.files f join public.clients cl on cl.id = f.client_id
     where f.notified_at is null
     group by f.client_id, cl.data
    having max(f.created_at) < now() - interval '3 minutes'   -- chờ khách/nhân viên tải xong một đợt
  loop
    -- người nhận: mọi tài khoản portal đang bật "Nhận thông báo" + danh sách nhận thêm
    rcpt := array(select s.email from public.staff s where s.notify) || instant;
    -- một người tự tải tất cả tệp → không báo lại cho chính người đó
    rcpt := public.notify_clean(rcpt, case when cardinality(c.uploaders) = 1 then c.uploaders[1] end);

    if cardinality(rcpt) > 0 then
      select string_agg(
               '<tr><td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;font-family:monospace">' || public.notify_html_escape(f.code) || '</td>'
            || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC">' || public.notify_html_escape(coalesce(public.notify_doc_name(f.code), ''))
            || coalesce('<div style="color:#6B7A70;font-size:12px;font-style:italic">' || public.notify_html_escape(nullif(public.notify_doc_en(f.code), '')) || '</div>', '')
            || '<div style="color:#6B7A70;font-size:12px">' || public.notify_html_escape(f.name) || '</div></td>'
            || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;color:#6B7A70">' || public.notify_html_escape(coalesce(f.created_by,'')) || '</td></tr>',
               '' order by f.created_at)
        into trs from public.files f where f.id = any(c.ids);

      if coalesce((cfg ->> 'email')::boolean, true) then perform public.notify_send(
        rcpt,
        c.client_id || ' · ' || coalesce(c.cname,'') || ' · ' || c.n || ' tệp mới chờ duyệt / ' || c.n || ' new file(s) to review',
        public.notify_wrap(
          public.notify_html_escape(c.client_id) || ' · ' || public.notify_html_escape(coalesce(c.cname,'')),
          '<p style="margin:0 0 2px">Hồ sơ vừa nhận <b>' || c.n || ' tệp mới</b>, đang ở trạng thái <b>Chờ duyệt</b>.</p>'
          || '<p style="margin:0 0 12px;color:#6B7A70">The case just received <b>' || c.n || ' new file(s)</b>, now <b>Pending review</b>.</p>'
          || '<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#E8F2E5;color:#1B6B1B;text-align:left">'
          || '<th style="padding:6px 8px">Mã<br><span style="color:#6B7A70;font-weight:normal">Code</span></th><th style="padding:6px 8px">Tài liệu<br><span style="color:#6B7A70;font-weight:normal">Document</span></th><th style="padding:6px 8px">Người tải<br><span style="color:#6B7A70;font-weight:normal">Uploaded by</span></th></tr>'
          || trs || '</table>',
          portal || '/#' || c.client_id)); end if;
      perform public.notify_zalo_many(rcpt,
        'IDC Portal · ' || c.client_id || ' · ' || coalesce(c.cname,'') || E'\n' || c.n || ' tệp mới chờ duyệt / new file(s) to review: '
        || (select string_agg(distinct f.code, ', ') from public.files f where f.id = any(c.ids))
        || E'\nMở hồ sơ / Open case: ' || portal || '/#' || c.client_id);
      sent := sent + 1;
    end if;

    update public.files set notified_at = now() where id = any(c.ids);
  end loop;
  return sent;
end $$;

-- 6. Thư tổng hợp cuối ngày (17:00 giờ VN) --------------------------------------
create or replace function public.notify_digest() returns int
language plpgsql security definer set search_path = public as $$
declare
  cfg     jsonb := public.notify_cfg();
  portal  text  := coalesce(cfg ->> 'portal', 'https://hoso.ditruidc.com');
  rcpt    text[] := public.notify_clean(array(select jsonb_array_elements_text(coalesce(cfg -> 'digest', '[]'::jsonb))));
  newrows text;
  pend    text;
  nfiles  int;
  npend   int;
begin
  if coalesce((cfg ->> 'enabled')::boolean, false) is not true then return 0; end if;
  if cardinality(rcpt) = 0 then rcpt := public.notify_clean(public.notify_admins()); end if;
  if cardinality(rcpt) = 0 then return 0; end if;

  select count(*), string_agg(line, '' order by cid)
    into nfiles, newrows
    from (select f.client_id cid, count(*) n,
                 '<tr><td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;font-family:monospace"><a href="' || portal || '/#' || f.client_id || '" style="color:#1B6B1B">' || public.notify_html_escape(f.client_id) || '</a></td>'
              || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC">' || public.notify_html_escape(coalesce(cl.data ->> 'name','')) || coalesce('<div style="color:#6B7A70;font-size:12px">' || public.notify_html_escape(nullif(cl.data ->> 'company','')) || '</div>', '') || '</td>'
              || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;text-align:right">' || count(*) || '</td>'
              || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;font-family:monospace;color:#6B7A70">' || public.notify_html_escape(string_agg(distinct f.code, ', ')) || '</td></tr>' line
            from public.files f join public.clients cl on cl.id = f.client_id
           where f.created_at >= now() - interval '24 hours'
           group by f.client_id, cl.data) t;
  nfiles := coalesce((select count(*) from public.files where created_at >= now() - interval '24 hours'), 0);

  select coalesce(sum(n), 0), string_agg(line, '' order by n desc)
    into npend, pend
    from (select cl.id, count(*) n,
                 '<li><a href="' || portal || '/#' || cl.id || '" style="color:#1B6B1B">' || public.notify_html_escape(cl.id) || '</a> · '
              || public.notify_html_escape(concat_ws(' – ', nullif(cl.data ->> 'name',''), nullif(cl.data ->> 'company',''))) || ': <b>' || count(*) || '</b> tài liệu / document(s)</li>' line
            from public.clients cl, jsonb_each(coalesce(cl.data -> 'docs', '{}'::jsonb)) d
           where d.value ->> 's' = 'review'
           group by cl.id, cl.data) t;

  if nfiles = 0 and npend = 0 then return 0; end if;   -- không có gì mới, không gửi

  perform public.notify_zalo_many(rcpt,
    'IDC Portal · Tổng hợp / Daily summary ' || to_char(now() at time zone 'Asia/Ho_Chi_Minh', 'DD/MM/YYYY') || E'\n'
    || nfiles || ' tệp mới trong 24 giờ, ' || npend || ' tài liệu chờ duyệt.' || E'\n'
    || nfiles || ' new file(s) in 24 hours, ' || npend || ' document(s) pending review.' || E'\nMở portal / Open portal: ' || portal);
  if coalesce((cfg ->> 'email')::boolean, true) is not true then return 1; end if;
  perform public.notify_send(
    rcpt,
    'Tổng hợp hồ sơ / Daily summary ' || to_char(now() at time zone 'Asia/Ho_Chi_Minh', 'DD/MM/YYYY') || ': ' || nfiles || ' tệp mới / new files, ' || npend || ' chờ duyệt / pending',
    public.notify_wrap(
      'Tổng hợp ngày ' || to_char(now() at time zone 'Asia/Ho_Chi_Minh', 'DD/MM/YYYY') || ' <span style="color:#6B7A70;font-weight:normal">· Daily summary</span>',
      '<p style="margin:0 0 2px"><b>' || nfiles || '</b> tệp mới trong 24 giờ qua · <b>' || npend || '</b> tài liệu đang chờ duyệt.</p>'
      || '<p style="margin:0 0 8px;color:#6B7A70"><b>' || nfiles || '</b> new file(s) in the last 24 hours · <b>' || npend || '</b> document(s) pending review.</p>'
      || case when newrows is not null then
           '<table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0 14px"><tr style="background:#E8F2E5;color:#1B6B1B;text-align:left">'
        || '<th style="padding:6px 8px">Hồ sơ<br><span style="color:#6B7A70;font-weight:normal">Case</span></th><th style="padding:6px 8px">Khách hàng<br><span style="color:#6B7A70;font-weight:normal">Client</span></th><th style="padding:6px 8px;text-align:right">Tệp<br><span style="color:#6B7A70;font-weight:normal">Files</span></th><th style="padding:6px 8px">Tài liệu<br><span style="color:#6B7A70;font-weight:normal">Documents</span></th></tr>'
        || newrows || '</table>' else '' end
      || case when pend is not null then '<p style="margin:8px 0 4px"><b>Đang chờ duyệt</b> <span style="color:#6B7A70;font-weight:normal">· Pending review</span></p><ul style="margin:0;padding-left:18px">' || pend || '</ul>' else '' end,
      portal));
  return 1;
end $$;

-- 7. Thư thử — quản trị viên bấm trong portal để kiểm tra cài đặt ----------------
create or replace function public.notify_test() returns text
language plpgsql security definer set search_path = public as $$
declare me text := lower(coalesce(auth.jwt() ->> 'email',''));
begin
  if not public.is_admin() then raise exception 'Chỉ quản trị viên được gửi thư thử'; end if;
  if coalesce((public.notify_cfg() ->> 'zalo')::boolean, false) then
    perform public.notify_zalo((select zalo_chat_id from public.staff where email = me), 'IDC Portal · Tin thử: thông báo Zalo đã hoạt động. / Test: Zalo alerts are working.');
  end if;
  if coalesce((public.notify_cfg() ->> 'email')::boolean, true) is not true then return me; end if;
  perform public.notify_send(array[me], 'Thư thử · Test email · Thông báo portal hồ sơ IDC VIETNAM',
    public.notify_wrap('Cài đặt thông báo đã hoạt động <span style="color:#6B7A70;font-weight:normal">· Notifications are working</span>',
      '<p style="margin:0">Nếu bạn đọc được thư này, portal đã gửi email thành công. Từ giờ, khi có tệp mới tải lên, mọi người trên portal sẽ nhận thư báo trong khoảng 5–8 phút.</p>'
      || '<p style="margin:8px 0 0;color:#6B7A70">If you can read this, the portal sent email successfully. From now on, when new files are uploaded, everyone on the portal will be notified within 5–8 minutes.</p>',
      coalesce(public.notify_cfg() ->> 'portal', 'https://hoso.ditruidc.com')));
  return me;
end $$;

-- 8. Quyền: chỉ hệ thống (cron) chạy được các hàm gửi; admin chỉ gọi được thư thử ---
revoke all on function public.notify_send(text[], text, text) from public, anon, authenticated;
revoke all on function public.notify_uploads()               from public, anon, authenticated;
revoke all on function public.notify_digest()                from public, anon, authenticated;
revoke all on function public.notify_zalo(text, text)          from public, anon, authenticated;
revoke all on function public.notify_zalo_many(text[], text, boolean) from public, anon, authenticated;
revoke all on function public.notify_admins()                from public, anon, authenticated;
revoke all on function public.notify_doc_en(text)               from public, anon, authenticated;
revoke all on function public.notify_cfg()                   from public, anon, authenticated;
revoke all on function public.notify_test()                  from public, anon;
grant execute on function public.notify_test() to authenticated;

-- 9. Lịch chạy -----------------------------------------------------------------
select cron.unschedule(jobid) from cron.job where jobname in ('idc-notify-uploads', 'idc-notify-digest');
select cron.schedule('idc-notify-uploads', '*/5 * * * *', 'select public.notify_uploads()');
select cron.schedule('idc-notify-digest',  '0 10 * * *',  'select public.notify_digest()');   -- 10:00 UTC = 17:00 VN

-- Kiểm tra nhanh:
--   select * from cron.job;                                   -- 2 lịch chạy
--   select * from net._http_response order by created desc limit 5;   -- kết quả gửi Resend (200 = thành công)
-- Tắt tạm thời: Quản trị → Thông báo email → bỏ chọn "Bật thông báo" (hoặc sửa settings.notify.enabled = false)
