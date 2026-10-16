-- =============================================================================
-- NHẬT KÝ ĐĂNG NHẬP: Quản trị thấy ai vừa đăng nhập / mở portal.
--   • kind = 'login' : vừa nhập email + mật khẩu
--   • kind = 'open'  : mở lại portal khi vẫn còn phiên đăng nhập (tối đa 1 dòng / 30 phút / người)
-- Chỉ Quản trị đọc được. Ghi qua hàm log_login (không ai ghi thẳng vào bảng).
-- Email cho Quản trị chỉ khi: lần đầu đăng nhập, thiết bị lạ, hoặc ngoài giờ (22:00–6:00).
-- Tự xoá dòng cũ hơn 180 ngày. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================
create table if not exists public.login_log (
  id     bigserial primary key,
  email  text not null,
  at     timestamptz not null default now(),
  kind   text not null default 'login' check (kind in ('login','open')),
  device text,
  ua     text
);
create index if not exists login_log_at_idx on public.login_log (at desc);
create index if not exists login_log_email_idx on public.login_log (email, at desc);

alter table public.login_log enable row level security;
drop policy if exists login_log_admin_read on public.login_log;
create policy login_log_admin_read on public.login_log for select to authenticated using (public.is_admin());
revoke insert, update, delete on public.login_log from anon, authenticated;
grant select on public.login_log to authenticated;

-- email cho Quản trị khi đăng nhập đáng chú ý: lần đầu / thiết bị lạ / ngoài giờ (22:00–6:00)
create or replace function public.notify_login(p_email text, p_device text, p_reasons text[]) returns void
language plpgsql security definer set search_path = public as $$
declare cfg jsonb; portal text; nm text; rl text; vn timestamp := now() at time zone 'Asia/Ho_Chi_Minh';
begin
  cfg := public.notify_cfg(); portal := coalesce(cfg ->> 'portal','https://hoso.ditruidc.com');
  if coalesce((cfg ->> 'enabled')::boolean, false) is not true then return; end if;
  select coalesce(nullif(name,''), p_email), role into nm, rl from public.staff where lower(email) = lower(p_email);
  perform public.notify_send(public.notify_clean(public.notify_admins(), p_email),
    'Đăng nhập · ' || nm || ' · ' || array_to_string(p_reasons, ', ') || ' / Sign-in alert',
    public.notify_wrap(public.notify_html_escape(nm) || ' vừa đăng nhập portal <span style="color:#6B7A70;font-weight:normal">· Sign-in alert</span>',
      '<table style="font-size:14px;border-collapse:collapse">'
      || '<tr><td style="padding:3px 12px 3px 0;color:#6B7A70">Người / User</td><td><b>' || public.notify_html_escape(nm) || '</b> (' || public.notify_html_escape(p_email) || ')</td></tr>'
      || '<tr><td style="padding:3px 12px 3px 0;color:#6B7A70">Quyền / Role</td><td>' || case rl when 'admin' then 'Quản trị' when 'lawyer' then 'Luật sư' else 'Nhân viên' end || '</td></tr>'
      || '<tr><td style="padding:3px 12px 3px 0;color:#6B7A70">Thời gian / Time</td><td>' || to_char(vn,'HH24:MI DD/MM/YYYY') || '</td></tr>'
      || '<tr><td style="padding:3px 12px 3px 0;color:#6B7A70">Thiết bị / Device</td><td>' || public.notify_html_escape(coalesce(p_device,'—')) || '</td></tr>'
      || '<tr><td style="padding:3px 12px 3px 0;color:#6B7A70">Lý do báo / Reason</td><td style="color:#A3271D"><b>' || public.notify_html_escape(array_to_string(p_reasons, ' · ')) || '</b></td></tr></table>'
      || '<p style="margin:12px 0 0;color:#6B7A70">Nếu không phải người này đăng nhập, hãy đổi mật khẩu tài khoản trong Supabase → Authentication. / If this was not expected, reset the account password.</p>',
      portal || '/#admin'));
exception when others then
  raise warning 'notify_login: %', sqlerrm;
end $$;
revoke all on function public.notify_login(text, text, text[]) from public, anon, authenticated;

create or replace function public.log_login(p_kind text, p_device text default null, p_ua text default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  who text := public.my_email(); k text := case when p_kind = 'login' then 'login' else 'open' end;
  dev text := left(p_device, 120); hr int := extract(hour from now() at time zone 'Asia/Ho_Chi_Minh');
  why text[] := '{}';
begin
  if public.my_role() is null then return; end if;   -- chỉ ghi người có trong bảng Nhân viên
  if k = 'open' and exists (select 1 from public.login_log where email = who and at > now() - interval '30 minutes') then return; end if;
  if not exists (select 1 from public.login_log where email = who) then why := why || 'lần đầu đăng nhập'::text;
  elsif coalesce(dev,'') <> '' and not exists (select 1 from public.login_log where email = who and device = dev) then why := why || 'thiết bị lạ'::text; end if;
  if hr >= 22 or hr < 6 then why := why || 'ngoài giờ làm'::text; end if;
  insert into public.login_log(email, kind, device, ua) values (who, k, dev, left(p_ua, 300));
  delete from public.login_log where at < now() - interval '180 days';
  if cardinality(why) > 0 then perform public.notify_login(who, dev, why); end if;
end $$;
revoke all on function public.log_login(text, text, text) from public, anon;
grant execute on function public.log_login(text, text, text) to authenticated;

do $$ begin
  begin alter publication supabase_realtime add table public.login_log; exception when duplicate_object then null; end;
end $$;

select 'OK – nhật ký đăng nhập đã sẵn sàng' as ket_qua, count(*) as so_dong from public.login_log;
