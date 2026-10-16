-- =============================================================================
-- TRAO ĐỔI: GỬI ẢNH / TỆP
--   • Kho riêng 'chat' (không công khai), tối đa 25 MB / tệp; đường dẫn <id phòng>/<tên tệp>
--   • Chỉ người trong cuộc trò chuyện xem / tải lên được (theo can_chat)
--   • Tin nhắn có thêm danh sách tệp đính kèm; được gửi tệp không kèm chữ
-- Chạy sau chat.sql. Chạy lại nhiều lần vẫn an toàn.
-- =============================================================================
insert into storage.buckets (id, name, public, file_size_limit)
values ('chat', 'chat', false, 26214400)
on conflict (id) do update set public = false, file_size_limit = 26214400;

drop policy if exists chat_obj_read   on storage.objects;
drop policy if exists chat_obj_insert on storage.objects;
drop policy if exists chat_obj_delete on storage.objects;
create policy chat_obj_read on storage.objects for select to authenticated
  using (bucket_id = 'chat' and public.can_chat(nullif(split_part(name,'/',1),'')::uuid));
create policy chat_obj_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'chat' and public.can_chat(nullif(split_part(name,'/',1),'')::uuid));
create policy chat_obj_delete on storage.objects for delete to authenticated
  using (bucket_id = 'chat' and public.is_admin());

alter table public.chat_messages add column if not exists attachments jsonb not null default '[]'::jsonb;
alter table public.chat_messages drop constraint if exists chat_messages_body_check;
alter table public.chat_messages add constraint chat_messages_body_check check (char_length(body) <= 4000);

-- chat_send mới: thêm p_files = [{path,name,size,mime}]
drop function if exists public.chat_send(uuid, text, text[]);
create or replace function public.chat_send(p_room uuid, p_body text, p_mentions text[] default '{}', p_files jsonb default '[]'::jsonb)
returns bigint language plpgsql security definer set search_path = public as $$
declare
  me text := public.my_email(); b text := trim(coalesce(p_body,'')); mid bigint; rm record;
  ments text[]; cfg jsonb; portal text; who text; title text; files jsonb; nfile int; preview text;
begin
  if not public.can_chat(p_room) then raise exception 'permission denied: bạn không ở trong cuộc trò chuyện này'; end if;
  select coalesce(jsonb_agg(jsonb_build_object(
           'path', f ->> 'path', 'name', left(coalesce(f ->> 'name','tệp'), 200),
           'size', coalesce((f ->> 'size')::bigint, 0), 'mime', left(coalesce(f ->> 'mime',''), 100))), '[]'::jsonb)
    into files
    from jsonb_array_elements(case when jsonb_typeof(p_files) = 'array' then p_files else '[]'::jsonb end) f
   where split_part(f ->> 'path', '/', 1) = p_room::text;
  nfile := jsonb_array_length(files);
  if nfile > 10 then raise exception 'Tối đa 10 tệp mỗi tin nhắn'; end if;
  if b = '' and nfile = 0 then raise exception 'Tin nhắn trống'; end if;
  select * into rm from public.chat_rooms where id = p_room;
  ments := array(select m from unnest(public.chat_clean_members(coalesce(p_mentions,'{}'))) m where m <> me);
  insert into public.chat_messages(room_id, author, body, mentions, attachments)
    values (p_room, me, left(b, 4000), ments, files) returning id into mid;
  preview := case when b <> '' then left(b, 160)
                  when nfile = 1 and (files -> 0 ->> 'mime') like 'image/%' then '🖼 Ảnh'
                  else '📎 ' || (files -> 0 ->> 'name') || case when nfile > 1 then ' (+' || (nfile - 1) || ')' else '' end end;
  update public.chat_rooms set last_at = now(), last_text = preview, last_by = me where id = p_room;
  insert into public.chat_reads(room_id, email, read_at) values (p_room, me, now())
    on conflict (room_id, email) do update set read_at = excluded.read_at;
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
              || public.notify_html_escape(left(preview, 1200)) || '</div>'
              || case when nfile > 0 then '<p style="margin:8px 0 0;color:#6B7A70">Kèm ' || nfile || ' tệp — mở portal để xem. / ' || nfile || ' attachment(s).</p>' else '' end,
            portal || case when rm.kind = 'case' then '/#' || rm.client_id else '' end));
      end if;
    exception when others then raise warning 'chat mention email: %', sqlerrm;
    end;
  end if;
  return mid;
end $$;
revoke all on function public.chat_send(uuid, text, text[], jsonb) from public, anon;
grant execute on function public.chat_send(uuid, text, text[], jsonb) to authenticated;

select 'OK – gửi ảnh / tệp trong Trao đổi đã sẵn sàng' as ket_qua;
