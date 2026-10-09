-- IDC Case Portal · Supabase schema
-- Chạy toàn bộ file này một lần trong Supabase → SQL Editor → New query → Run.

-- 1. Bảng ------------------------------------------------------------------
create table if not exists public.staff (
  email      text primary key,
  name       text,
  role       text not null default 'staff' check (role in ('admin','staff','viewer')),
  created_at timestamptz not null default now()
);

create table if not exists public.clients (
  id         text primary key,                 -- Mã hồ sơ, ví dụ L1A-0021
  data       jsonb not null default '{}'::jsonb,-- thông tin khách, docs (trạng thái từng tài liệu), pay, step…
  log        jsonb not null default '[]'::jsonb,-- lịch sử cập nhật (60 mục gần nhất)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.files (
  id           uuid primary key default gen_random_uuid(),
  client_id    text not null references public.clients(id) on delete cascade,
  code         text not null,                  -- mã tài liệu, ví dụ VN-03
  name         text not null,
  size         bigint,
  mime         text,
  storage_path text not null unique,
  created_by   text,
  created_at   timestamptz not null default now()
);
create index if not exists files_client_idx on public.files(client_id);

create table if not exists public.settings (
  key        text primary key,
  value      jsonb not null,
  updated_by text,
  updated_at timestamptz not null default now()
);

-- 2. Quyền ------------------------------------------------------------------
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as $$
  select role from public.staff where email = lower(coalesce(auth.jwt() ->> 'email',''))
$$;
create or replace function public.is_staff()  returns boolean language sql stable as $$ select public.my_role() is not null $$;
create or replace function public.can_write() returns boolean language sql stable as $$ select public.my_role() in ('admin','staff') $$;
create or replace function public.is_admin()  returns boolean language sql stable as $$ select public.my_role() = 'admin' $$;

alter table public.staff    enable row level security;
alter table public.clients  enable row level security;
alter table public.files    enable row level security;
alter table public.settings enable row level security;

drop policy if exists staff_read  on public.staff;
drop policy if exists staff_admin on public.staff;
create policy staff_read  on public.staff for select using (public.is_staff());
create policy staff_admin on public.staff for all    using (public.is_admin()) with check (public.is_admin());

drop policy if exists clients_read  on public.clients;
drop policy if exists clients_write on public.clients;
create policy clients_read  on public.clients for select using (public.is_staff());
create policy clients_write on public.clients for all    using (public.can_write()) with check (public.can_write());

drop policy if exists files_read  on public.files;
drop policy if exists files_write on public.files;
create policy files_read  on public.files for select using (public.is_staff());
create policy files_write on public.files for all    using (public.can_write()) with check (public.can_write());

drop policy if exists settings_read  on public.settings;
drop policy if exists settings_admin on public.settings;
create policy settings_read  on public.settings for select using (public.is_staff());
create policy settings_admin on public.settings for all    using (public.is_admin()) with check (public.is_admin());

-- 3. Cập nhật hồ sơ an toàn (gộp sâu dữ liệu + ghi lịch sử) -------------------
create or replace function public.jsonb_deep_merge(a jsonb, b jsonb) returns jsonb
language sql immutable as $$
  select case
    when jsonb_typeof(a) = 'object' and jsonb_typeof(b) = 'object' then
      (select coalesce(jsonb_object_agg(k,
          case when a ? k and b ? k then public.jsonb_deep_merge(a -> k, b -> k)
               when b ? k then b -> k else a -> k end), '{}'::jsonb)
       from (select jsonb_object_keys(a) k union select jsonb_object_keys(b)) keys)
    else b end
$$;

create or replace function public.patch_client(p_id text, p_patch jsonb, p_log text default null)
returns void language plpgsql security invoker as $$
declare who text := lower(coalesce(auth.jwt() ->> 'email',''));
begin
  if not public.can_write() then raise exception 'permission denied'; end if;
  update public.clients
     set data = public.jsonb_deep_merge(data, coalesce(p_patch,'{}'::jsonb)),
         log  = case when p_log is null then log
                     else (select coalesce(jsonb_agg(x.e order by x.n),'[]'::jsonb) from (
                             select e, n from jsonb_array_elements(
                               jsonb_build_array(jsonb_build_object('t', now(), 'by', who, 'm', p_log)) || log) with ordinality as t(e, n)
                             order by n limit 60) x) end,
         updated_at = now()
   where id = p_id;
  if not found then raise exception 'client % not found', p_id; end if;
end $$;

-- 4. Kho tệp (bucket riêng tư "hoso") ----------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('hoso','hoso', false, 52428800, array['application/pdf','image/png','image/jpeg','image/webp'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists hoso_read   on storage.objects;
drop policy if exists hoso_insert on storage.objects;
drop policy if exists hoso_delete on storage.objects;
create policy hoso_read   on storage.objects for select using (bucket_id = 'hoso' and public.is_staff());
create policy hoso_insert on storage.objects for insert with check (bucket_id = 'hoso' and public.can_write());
create policy hoso_delete on storage.objects for delete using (bucket_id = 'hoso' and public.can_write());

-- 5. Cập nhật trực tiếp giữa các máy -------------------------------------------
do $$ begin
  begin alter publication supabase_realtime add table public.clients; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.files;   exception when duplicate_object then null; end;
end $$;
