-- =============================================================================
-- PHÂN QUYỀN: Quản trị · Luật sư · Nhân viên  (chạy lại nhiều lần vẫn an toàn)
--   Quản trị : toàn quyền + trang Quản trị
--   Luật sư  : xem mọi hồ sơ, tải tệp, đổi trạng thái tài liệu (kể cả Đã duyệt), ghi chú,
--              yêu cầu bổ sung. KHÔNG sửa thông tin khách / thanh toán, KHÔNG tải lên / xoá tệp.
--   Nhân viên: tạo/sửa hồ sơ, tải lên/xoá tệp, đổi trạng thái tài liệu, NHƯNG không được
--              Duyệt hoặc Bỏ duyệt (việc của Luật sư / Quản trị).
-- =============================================================================
alter table public.staff drop constraint if exists staff_role_check;
update public.staff set role = 'lawyer' where role = 'viewer';
alter table public.staff add constraint staff_role_check check (role in ('admin','staff','lawyer'));

create or replace function public.can_review() returns boolean language sql stable as $$
  select public.my_role() in ('admin','staff','lawyer')
$$;

create or replace function public.patch_client(p_id text, p_patch jsonb, p_log text default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  who   text := lower(coalesce(auth.jwt() ->> 'email',''));
  r     text := public.my_role();
  patch jsonb := coalesce(p_patch, '{}'::jsonb);
  cur   jsonb;
begin
  if r is null or r not in ('admin','staff','lawyer') then raise exception 'permission denied'; end if;
  select data into cur from public.clients where id = p_id;
  if not found then raise exception 'client % not found', p_id; end if;

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

  update public.clients
     set data = public.jsonb_deep_merge(data, patch),
         log  = case when p_log is null then log
                     else (select coalesce(jsonb_agg(x.e order by x.n),'[]'::jsonb) from (
                             select e, n from jsonb_array_elements(
                               jsonb_build_array(jsonb_build_object('t', now(), 'by', who, 'm', p_log)) || log) with ordinality as t(e, n)
                             order by n limit 60) x) end,
         updated_at = now()
   where id = p_id;
end $$;

revoke all on function public.patch_client(text, jsonb, text) from public, anon;
grant execute on function public.patch_client(text, jsonb, text) to authenticated;

select email, role from public.staff order by role, email;
