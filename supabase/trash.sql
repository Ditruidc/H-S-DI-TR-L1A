-- =============================================================================
-- THÙNG RÁC TỆP: xoá tệp = chuyển vào Thùng rác, giữ 60 ngày rồi mới xoá hẳn.
--   • trash_file(id)    : Quản trị / Nhân viên được phân hồ sơ → ẩn tệp, ghi người xoá + giờ xoá
--   • restore_file(id)  : Quản trị (mọi tệp) / Nhân viên (hồ sơ được phân) → khôi phục trong 60 ngày
--   • purge_files(ids)  : chỉ Quản trị — xoá hẳn dòng tệp (portal xoá tệp gốc trong kho trước)
--   • trash_expired()   : danh sách tệp đã quá 60 ngày, portal của Quản trị tự dọn mỗi ngày
-- Xoá vĩnh viễn (dòng tệp + tệp gốc trong kho) từ nay CHỈ Quản trị làm được.
-- Chạy sau assign.sql. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================
alter table public.files add column if not exists deleted_at timestamptz;
alter table public.files add column if not exists deleted_by text;
create index if not exists files_deleted_idx on public.files (deleted_at) where deleted_at is not null;

-- Quyền trên bảng tệp: đọc như cũ; thêm = Quản trị/Nhân viên của hồ sơ; sửa/xoá trực tiếp = chỉ Quản trị
drop policy if exists files_write  on public.files;
drop policy if exists files_insert on public.files;
drop policy if exists files_update on public.files;
drop policy if exists files_delete on public.files;
create policy files_insert on public.files for insert
  with check (public.can_write() and public.can_see_client(client_id));
create policy files_update on public.files for update using (public.is_admin()) with check (public.is_admin());
create policy files_delete on public.files for delete using (public.is_admin());

-- Kho lưu trữ: xoá tệp gốc chỉ Quản trị
drop policy if exists hoso_delete on storage.objects;
create policy hoso_delete on storage.objects for delete
  using (bucket_id = 'hoso' and public.is_admin());

create or replace function public.trash_file(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare f record;
begin
  select id, client_id, deleted_at into f from public.files where id = p_id;
  if not found then raise exception 'Không tìm thấy tệp'; end if;
  if not (public.can_write() and public.can_see_client(f.client_id)) then
    raise exception 'permission denied: bạn không có quyền xoá tệp của hồ sơ này';
  end if;
  if f.deleted_at is null then
    update public.files set deleted_at = now(), deleted_by = public.my_email() where id = p_id;
  end if;
end $$;

create or replace function public.restore_file(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare f record;
begin
  select id, client_id, deleted_at into f from public.files where id = p_id;
  if not found then raise exception 'Không tìm thấy tệp (có thể đã bị xoá vĩnh viễn)'; end if;
  if not (public.is_admin() or (public.can_write() and public.can_see_client(f.client_id))) then
    raise exception 'permission denied: bạn không có quyền khôi phục tệp của hồ sơ này';
  end if;
  if f.deleted_at is not null and f.deleted_at < now() - interval '60 days' then
    raise exception 'Tệp đã quá 60 ngày trong Thùng rác, không khôi phục được';
  end if;
  update public.files set deleted_at = null, deleted_by = null where id = p_id;
end $$;

create or replace function public.trash_expired() returns table(id uuid, storage_path text)
language sql stable security definer set search_path = public as $$
  select f.id, f.storage_path from public.files f
   where public.is_admin() and f.deleted_at is not null and f.deleted_at < now() - interval '60 days'
   order by f.deleted_at limit 500
$$;

create or replace function public.purge_files(p_ids uuid[]) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.is_admin() then raise exception 'permission denied: chỉ Quản trị được xoá vĩnh viễn'; end if;
  delete from public.files where id = any(p_ids) and deleted_at is not null;
  get diagnostics n = row_count;
  return n;
end $$;

revoke all on function public.trash_file(uuid)     from public, anon;
revoke all on function public.restore_file(uuid)   from public, anon;
revoke all on function public.trash_expired()      from public, anon;
revoke all on function public.purge_files(uuid[])  from public, anon;
grant execute on function public.trash_file(uuid), public.restore_file(uuid), public.trash_expired(), public.purge_files(uuid[]) to authenticated;

select 'OK – Thùng rác 60 ngày đã sẵn sàng' as ket_qua,
       (select count(*) from public.files where deleted_at is null) as tep_dang_dung,
       (select count(*) from public.files where deleted_at is not null) as tep_trong_thung_rac;
