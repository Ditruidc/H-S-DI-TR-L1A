-- =============================================================================
-- NHẮC NHỞ VIỆC TỒN: email nhắc Nhân viên / Luật sư về hồ sơ được giao nhưng
--   • quá hạn hoàn thiện chứng từ (data.due, mặc định ngày mở hồ sơ + 30 ngày)
--   • Luật sư: tài liệu chờ duyệt quá 3 ngày
--   • Nhân viên: hồ sơ còn thiếu mà 7 ngày chưa thao tác
-- Tự gửi 8:45 sáng thứ 2–7; Quản trị bấm "Gửi nhắc nhở" trong Báo cáo để gửi ngay.
-- Chạy sau notify.sql + assign.sql. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================
create or replace function public.case_due(d jsonb, created timestamptz) returns date
language sql immutable as $$
  select coalesce(
    case when coalesce(d ->> 'due','') ~ '^\d{4}-\d{2}-\d{2}$' then (d ->> 'due')::date end,
    case when coalesce(d ->> 'opened','') ~ '^\d{1,2}/\d{1,2}/\d{4}' then to_date(substring(d ->> 'opened' from '^\d{1,2}/\d{1,2}/\d{4}'),'DD/MM/YYYY') + 30 end,
    case when coalesce(d ->> 'opened','') ~ '^\d{4}-\d{2}-\d{2}' then substring(d ->> 'opened' from 1 for 10)::date + 30 end,
    (created at time zone 'Asia/Ho_Chi_Minh')::date + 30)
$$;

create or replace function public.remind_items(p_email text)
returns table(client_id text, cname text, reasons text)
language sql stable security definer set search_path = public as $$
  with me as (select lower(p_email) e, (select role from public.staff where lower(email) = lower(p_email)) r),
  cs as (
    select c.id, c.data, c.log, c.created_at,
           (select count(*) from jsonb_each(coalesce(c.data -> 'docs','{}'::jsonb)) x where x.value ->> 's' = 'missing') miss,
           (select count(*) from jsonb_each(coalesce(c.data -> 'docs','{}'::jsonb)) x where x.value ->> 's' = 'review') rev,
           (select count(*) from jsonb_each(coalesce(c.data -> 'docs','{}'::jsonb)) x
             where x.value ->> 's' = 'review' and coalesce(x.value ->> 'at','') <> '' and (x.value ->> 'at')::timestamptz < now() - interval '3 days') rev_old,
           (select max((l ->> 't')::timestamptz) from jsonb_array_elements(coalesce(c.log,'[]'::jsonb)) l, me where lower(l ->> 'by') = me.e) last_mine,
           public.case_due(c.data, c.created_at) due
      from public.clients c, me
     where coalesce(c.data -> 'assignees','[]'::jsonb) ? me.e)
  select cs.id, concat_ws(' – ', nullif(cs.data ->> 'name',''), nullif(cs.data ->> 'company','')),
         concat_ws(' · ',
           case when current_date > cs.due then 'Quá hạn ' || (current_date - cs.due) || ' ngày (hạn ' || to_char(cs.due,'DD/MM/YYYY') || ')' end,
           case when me.r = 'lawyer' and cs.rev_old > 0 then cs.rev_old || ' tài liệu chờ duyệt quá 3 ngày' end,
           case when me.r <> 'lawyer' and cs.miss > 0 and (cs.last_mine is null or cs.last_mine < now() - interval '7 days')
                then case when cs.last_mine is null then 'Chưa thao tác lần nào' else 'Chưa thao tác ' || extract(day from now() - cs.last_mine)::int || ' ngày' end end)
    from cs, me
   where (cs.miss + cs.rev) > 0
     and (current_date > cs.due
          or (me.r = 'lawyer' and cs.rev_old > 0)
          or (me.r <> 'lawyer' and cs.miss > 0 and (cs.last_mine is null or cs.last_mine < now() - interval '7 days')))
   order by cs.id
$$;

create or replace function public.notify_remind_email(p_email text) returns int
language plpgsql security definer set search_path = public as $$
declare
  cfg jsonb := public.notify_cfg(); portal text := coalesce(cfg ->> 'portal','https://hoso.ditruidc.com');
  nm text := (select coalesce(name, p_email) from public.staff where lower(email) = lower(p_email));
  trs text; n int;
begin
  select count(*), string_agg('<tr><td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;font-family:monospace"><a href="' || portal || '/#' || client_id || '" style="color:#1B6B1B">' || public.notify_html_escape(client_id) || '</a></td>'
           || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC">' || public.notify_html_escape(cname) || '</td>'
           || '<td style="padding:6px 8px;border-bottom:1px solid #EEF3EC;color:#A3271D">' || public.notify_html_escape(reasons) || '</td></tr>', '' order by client_id)
    into n, trs from public.remind_items(p_email);
  if n = 0 then return 0; end if;
  perform public.notify_send(array[lower(p_email)],
    'Nhắc việc · ' || n || ' hồ sơ cần xử lý / Reminder · ' || n || ' case(s) need attention',
    public.notify_wrap('Nhắc việc hồ sơ được giao <span style="color:#6B7A70;font-weight:normal">· Assigned case reminder</span>',
      '<p style="margin:0 0 2px">Chào <b>' || public.notify_html_escape(nm) || '</b>, bạn có <b>' || n || ' hồ sơ</b> được giao đang quá hạn hoặc chưa được xử lý gần đây:</p>'
      || '<p style="margin:0 0 12px;color:#6B7A70">You have <b>' || n || ' assigned case(s)</b> that are overdue or have had no recent activity.</p>'
      || '<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#FCF1D3;color:#8A5A00;text-align:left"><th style="padding:6px 8px">Hồ sơ<br><span style="color:#6B7A70;font-weight:normal">Case</span></th><th style="padding:6px 8px">Khách hàng<br><span style="color:#6B7A70;font-weight:normal">Client</span></th><th style="padding:6px 8px">Cần làm<br><span style="color:#6B7A70;font-weight:normal">Action</span></th></tr>'
      || trs || '</table>', portal));
  return n;
end $$;

-- Quản trị bấm "Gửi nhắc nhở" trong Báo cáo
create or replace function public.notify_remind(p_email text) returns text
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.is_admin() then raise exception 'permission denied: chỉ Quản trị được gửi nhắc nhở'; end if;
  n := public.notify_remind_email(p_email);
  return case when n = 0 then 'Người này không có việc tồn, không gửi email.' else 'Đã gửi email nhắc ' || n || ' hồ sơ cho ' || p_email end;
end $$;

-- Tự động mỗi sáng
create or replace function public.notify_reminders() returns int
language plpgsql security definer set search_path = public as $$
declare s record; total int := 0;
begin
  if coalesce((public.notify_cfg() ->> 'enabled')::boolean, false) is not true then return 0; end if;
  for s in select email from public.staff where role in ('staff','lawyer') and notify loop
    total := total + public.notify_remind_email(s.email);
  end loop;
  return total;
end $$;

revoke all on function public.remind_items(text)        from public, anon, authenticated;
revoke all on function public.notify_remind_email(text) from public, anon, authenticated;
revoke all on function public.notify_reminders()        from public, anon, authenticated;
revoke all on function public.notify_remind(text)       from public, anon;
grant execute on function public.notify_remind(text) to authenticated;

select cron.unschedule(jobid) from cron.job where jobname = 'idc-notify-reminders';
select cron.schedule('idc-notify-reminders', '45 1 * * 1-6', 'select public.notify_reminders()');  -- 01:45 UTC = 8:45 VN, thứ 2–7

select s.email, s.role, (select count(*) from public.remind_items(s.email)) viec_ton
  from public.staff s where s.role in ('staff','lawyer') order by s.role, s.email;
