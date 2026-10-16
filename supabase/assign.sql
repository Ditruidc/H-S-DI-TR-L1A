-- =============================================================================
-- PHÂN CÔNG HỒ SƠ: Nhân viên / Luật sư chỉ thấy và xử lý hồ sơ được phân cho mình.
-- Quản trị thấy tất cả. Danh sách người phụ trách nằm ở clients.data->'assignees' (mảng email).
-- Chạy sau schema.sql + roles.sql. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================
create or replace function public.my_email() returns text language sql stable as $$
  select lower(coalesce(auth.jwt() ->> 'email',''))
$$;

create or replace function public.can_see_client(cid text) returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_admin()
      or (public.is_staff() and exists (select 1 from public.clients c
                                         where c.id = cid and coalesce(c.data -> 'assignees','[]'::jsonb) ? public.my_email()))
$$;

-- Hồ sơ
drop policy if exists clients_read  on public.clients;
drop policy if exists clients_write on public.clients;
create policy clients_read  on public.clients for select
  using (public.is_admin() or (public.is_staff() and coalesce(data -> 'assignees','[]'::jsonb) ? public.my_email()));
create policy clients_write on public.clients for all
  using      (public.is_admin() or (public.can_write() and coalesce(data -> 'assignees','[]'::jsonb) ? public.my_email()))
  with check (public.is_admin() or (public.can_write() and coalesce(data -> 'assignees','[]'::jsonb) ? public.my_email()));

-- Tệp (danh sách)
drop policy if exists files_read  on public.files;
drop policy if exists files_write on public.files;
create policy files_read  on public.files for select using (public.can_see_client(client_id));
create policy files_write on public.files for all
  using (public.can_write() and public.can_see_client(client_id)) with check (public.can_write() and public.can_see_client(client_id));

-- Tệp (kho lưu trữ): đường dẫn dạng <mã hồ sơ>/<mã tài liệu>/<tên tệp>
drop policy if exists hoso_read   on storage.objects;
drop policy if exists hoso_insert on storage.objects;
drop policy if exists hoso_delete on storage.objects;
create policy hoso_read   on storage.objects for select using (bucket_id = 'hoso' and public.can_see_client(split_part(name,'/',1)));
create policy hoso_insert on storage.objects for insert with check (bucket_id = 'hoso' and public.can_write() and public.can_see_client(split_part(name,'/',1)));
create policy hoso_delete on storage.objects for delete using (bucket_id = 'hoso' and public.can_write() and public.can_see_client(split_part(name,'/',1)));

-- Cập nhật hồ sơ: kiểm tra quyền + phân công; chỉ Quản trị được đổi danh sách phân công
create or replace function public.patch_client(p_id text, p_patch jsonb, p_log text default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  who   text := public.my_email();
  r     text := public.my_role();
  patch jsonb := coalesce(p_patch, '{}'::jsonb);
  cur   jsonb;
begin
  if r is null or r not in ('admin','staff','lawyer') then raise exception 'permission denied'; end if;
  select data into cur from public.clients where id = p_id;
  if not found then raise exception 'client % not found', p_id; end if;
  if r <> 'admin' and not (coalesce(cur -> 'assignees','[]'::jsonb) ? who) then
    raise exception 'permission denied: hồ sơ này chưa được phân cho bạn';
  end if;
  if r <> 'admin' and patch ? 'assignees' then
    raise exception 'permission denied: chỉ Quản trị được phân công hồ sơ';
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

-- Phân công ban đầu: hồ sơ chưa có ai phụ trách -> gán Nhân viên có tên trùng ô "Chuyên viên phụ trách"
update public.clients c
   set data = jsonb_set(c.data, '{assignees}',
              coalesce((select jsonb_agg(lower(s.email)) from public.staff s
                         where s.role <> 'admin' and lower(trim(s.name)) = lower(trim(c.data ->> 'staff'))), '[]'::jsonb))
 where c.data -> 'assignees' is null;

select c.id, c.data ->> 'name' as khach, c.data ->> 'staff' as chuyen_vien, c.data -> 'assignees' as phu_trach
  from public.clients c order by c.id;
