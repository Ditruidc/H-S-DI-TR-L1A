-- =============================================================================
-- TRAO ĐỔI (CHAT) TRONG PORTAL
--   • case  : mỗi hồ sơ 1 kênh — người được phân công hồ sơ + Quản trị
--   • group : nhóm tự tạo (chat chung) — thành viên do người tạo chọn; Quản trị vào được mọi nhóm
--   • dm    : nhắn riêng 1-1 — chỉ 2 người trong cuộc thấy
-- Ghi tin nhắn / tạo nhóm chỉ qua các hàm chat_* (kiểm tra quyền ở máy chủ).
-- @nhắc tên: người được nhắc nhận email (nếu đang bật thông báo).
-- Chạy sau notify.sql + assign.sql. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================
create table if not exists public.chat_rooms (
  id         uuid primary key default gen_random_uuid(),
  kind       text not null check (kind in ('case','group','dm')),
  client_id  text references public.clients(id) on delete cascade,
  name       text,
  members    text[] not null default '{}',
  created_by text,
  created_at timestamptz not null default now(),
  last_at    timestamptz not null default now(),
  last_text  text,
  last_by    text
);
create unique index if not exists chat_rooms_case_uq on public.chat_rooms (client_id) where kind = 'case';
create unique index if not exists chat_rooms_dm_uq   on public.chat_rooms ((members[1]), (members[2])) where kind = 'dm';

create table if not exists public.chat_messages (
  id         bigserial primary key,
  room_id    uuid not null references public.chat_rooms(id) on delete cascade,
  author     text not null,
  body       text not null check (char_length(body) between 1 and 4000),
  mentions   text[] not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists chat_messages_room_idx on public.chat_messages (room_id, id desc);

create table if not exists public.chat_reads (
  room_id uuid not null references public.chat_rooms(id) on delete cascade,
  email   text not null,
  read_at timestamptz not null default now(),
  primary key (room_id, email)
);

-- ai được xem / nhắn trong phòng
create or replace function public.can_chat(p_room uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.chat_rooms x where x.id = p_room and (
           (x.kind = 'case'  and public.can_see_client(x.client_id))
        or (x.kind = 'group' and (public.is_admin() or public.my_email() = any(x.members)))
        or (x.kind = 'dm'    and public.my_email() = any(x.members))))
$$;

alter table public.chat_rooms    enable row level security;
alter table public.chat_messages enable row level security;
alter table public.chat_reads    enable row level security;
drop policy if exists chat_rooms_read on public.chat_rooms;
drop policy if exists chat_msgs_read  on public.chat_messages;
drop policy if exists chat_reads_own  on public.chat_reads;
create policy chat_rooms_read on public.chat_rooms    for select to authenticated using (public.can_chat(id));
create policy chat_msgs_read  on public.chat_messages for select to authenticated using (public.can_chat(room_id));
create policy chat_reads_own  on public.chat_reads    for select to authenticated using (email = public.my_email());
revoke insert, update, delete on public.chat_rooms, public.chat_messages, public.chat_reads from anon, authenticated;
grant select on public.chat_rooms, public.chat_messages, public.chat_reads to authenticated;

-- danh sách email nhân viên hợp lệ
create or replace function public.chat_clean_members(p_list text[]) returns text[]
language sql stable security definer set search_path = public as $$
  select coalesce(array_agg(distinct lower(s.email) order by lower(s.email)), '{}')
    from public.staff s where lower(s.email) = any(select lower(trim(x)) from unnest(p_list) x)
$$;

-- kênh của hồ sơ (tạo nếu chưa có)
create or replace function public.chat_case_room(p_client text) returns uuid
language plpgsql security definer set search_path = public as $$
declare rid uuid;
begin
  if not public.can_see_client(p_client) then raise exception 'permission denied: bạn không thuộc hồ sơ này'; end if;
  select id into rid from public.chat_rooms where kind = 'case' and client_id = p_client;
  if rid is null then
    insert into public.chat_rooms(kind, client_id, created_by) values ('case', p_client, public.my_email())
      on conflict do nothing returning id into rid;
    if rid is null then select id into rid from public.chat_rooms where kind = 'case' and client_id = p_client; end if;
  end if;
  return rid;
end $$;

-- tạo nhóm
create or replace function public.chat_create_group(p_name text, p_members text[]) returns uuid
language plpgsql security definer set search_path = public as $$
declare me text := public.my_email(); rid uuid; nm text := left(trim(coalesce(p_name,'')), 80);
begin
  if public.my_role() is null then raise exception 'permission denied'; end if;
  if nm = '' then raise exception 'Nhập tên nhóm'; end if;
  insert into public.chat_rooms(kind, name, members, created_by)
    values ('group', nm, public.chat_clean_members(coalesce(p_members,'{}') || me), me) returning id into rid;
  return rid;
end $$;

-- sửa tên / thành viên nhóm: người tạo hoặc Quản trị
create or replace function public.chat_update_group(p_room uuid, p_name text, p_members text[]) returns void
language plpgsql security definer set search_path = public as $$
declare g record;
begin
  select * into g from public.chat_rooms where id = p_room and kind = 'group';
  if not found then raise exception 'Không tìm thấy nhóm'; end if;
  if not (public.is_admin() or g.created_by = public.my_email()) then raise exception 'permission denied: chỉ người tạo nhóm hoặc Quản trị được sửa nhóm'; end if;
  update public.chat_rooms
     set name = coalesce(nullif(left(trim(coalesce(p_name,'')),80),''), name),
         members = public.chat_clean_members(coalesce(p_members,'{}') || g.created_by)
   where id = p_room;
end $$;

-- rời nhóm
create or replace function public.chat_leave_group(p_room uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  update public.chat_rooms set members = array_remove(members, public.my_email()) where id = p_room and kind = 'group';
end $$;

-- nhắn riêng 1-1
create or replace function public.chat_dm_room(p_email text) returns uuid
language plpgsql security definer set search_path = public as $$
declare me text := public.my_email(); other text := lower(trim(p_email)); rid uuid; pair text[];
begin
  if public.my_role() is null then raise exception 'permission denied'; end if;
  if other = me or not exists (select 1 from public.staff where lower(email) = other) then raise exception 'Người nhận không hợp lệ'; end if;
  pair := array[least(me, other), greatest(me, other)];
  select id into rid from public.chat_rooms where kind = 'dm' and members[1] = pair[1] and members[2] = pair[2];
  if rid is null then
    insert into public.chat_rooms(kind, members, created_by) values ('dm', pair, me) on conflict do nothing returning id into rid;
    if rid is null then select id into rid from public.chat_rooms where kind = 'dm' and members[1] = pair[1] and members[2] = pair[2]; end if;
  end if;
  return rid;
end $$;

-- gửi tin
create or replace function public.chat_send(p_room uuid, p_body text, p_mentions text[] default '{}') returns bigint
language plpgsql security definer set search_path = public as $$
declare
  me text := public.my_email(); b text := trim(coalesce(p_body,'')); mid bigint; rm record;
  ments text[]; cfg jsonb; portal text; who text; title text;
begin
  if not public.can_chat(p_room) then raise exception 'permission denied: bạn không ở trong cuộc trò chuyện này'; end if;
  if b = '' then raise exception 'Tin nhắn trống'; end if;
  select * into rm from public.chat_rooms where id = p_room;
  ments := array(select m from unnest(public.chat_clean_members(coalesce(p_mentions,'{}'))) m where m <> me);
  insert into public.chat_messages(room_id, author, body, mentions) values (p_room, me, left(b, 4000), ments) returning id into mid;
  update public.chat_rooms set last_at = now(), last_text = left(b, 160), last_by = me where id = p_room;
  insert into public.chat_reads(room_id, email, read_at) values (p_room, me, now())
    on conflict (room_id, email) do update set read_at = excluded.read_at;
  -- email cho người được @nhắc
  if cardinality(ments) > 0 then
    begin
      cfg := public.notify_cfg(); portal := coalesce(cfg ->> 'portal','https://hoso.ditruidc.com');
      if coalesce((cfg ->> 'enabled')::boolean, false) then
        select coalesce(nullif(name,''), me) into who from public.staff where lower(email) = me;
        title := case rm.kind when 'case' then 'hồ sơ ' || rm.client_id || coalesce(' · ' || (select data ->> 'name' from public.clients where id = rm.client_id), '')
                              when 'group' then 'nhóm ' || coalesce(rm.name,'') else 'tin nhắn riêng' end;
        perform public.notify_send(ments,
          who || ' nhắc bạn trong ' || title || ' / mentioned you',
          public.notify_wrap(public.notify_html_escape(who) || ' nhắc bạn trong ' || public.notify_html_escape(title)
              || ' <span style="color:#6B7A70;font-weight:normal">· You were mentioned</span>',
            '<div style="border-left:3px solid #1B6B1B;background:#F6FAF4;padding:10px 12px;border-radius:6px;white-space:pre-wrap">'
              || public.notify_html_escape(left(b, 1200)) || '</div>',
            portal || case when rm.kind = 'case' then '/#' || rm.client_id else '' end));
      end if;
    exception when others then raise warning 'chat mention email: %', sqlerrm;
    end;
  end if;
  return mid;
end $$;

create or replace function public.chat_mark_read(p_room uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.can_chat(p_room) then return; end if;
  insert into public.chat_reads(room_id, email, read_at) values (p_room, public.my_email(), now())
    on conflict (room_id, email) do update set read_at = excluded.read_at;
end $$;

-- số tin chưa đọc theo phòng
create or replace function public.chat_unread() returns table(room_id uuid, n bigint)
language sql stable security definer set search_path = public as $$
  select m.room_id, count(*)
    from public.chat_messages m
    left join public.chat_reads r on r.room_id = m.room_id and r.email = public.my_email()
   where m.author <> public.my_email()
     and m.created_at > coalesce(r.read_at, '-infinity'::timestamptz)
     and m.created_at > now() - interval '90 days'
     and public.can_chat(m.room_id)
   group by m.room_id
$$;

revoke all on function public.chat_clean_members(text[]) from public, anon, authenticated;
do $$ declare f text; begin
  foreach f in array array['can_chat(uuid)','chat_case_room(text)','chat_create_group(text, text[])','chat_update_group(uuid, text, text[])',
                           'chat_leave_group(uuid)','chat_dm_room(text)','chat_send(uuid, text, text[])','chat_mark_read(uuid)','chat_unread()'] loop
    execute 'revoke all on function public.' || f || ' from public, anon';
    execute 'grant execute on function public.' || f || ' to authenticated';
  end loop;
end $$;

do $$ begin
  begin alter publication supabase_realtime add table public.chat_messages; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.chat_rooms;    exception when duplicate_object then null; end;
end $$;

select 'OK – Trao đổi (chat) đã sẵn sàng' as ket_qua, (select count(*) from public.chat_rooms) as so_phong;
