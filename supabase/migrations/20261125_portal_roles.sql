-- Apply only to the development database after confirming isolation.
create table if not exists public.portal_members (
 email text primary key check (email = lower(trim(email))),
 role text not null check (role in ('superadmin','admin')),
 active boolean not null default true,
 created_at timestamptz not null default now()
);
alter table public.portal_members enable row level security;
revoke all on public.portal_members from anon, authenticated;
grant select on public.portal_members to authenticated;
create policy "members read own approved membership" on public.portal_members
 for select to authenticated using (active and email = lower(auth.jwt()->>'email'));
-- Initial owner must be inserted by a trusted database administrator.
-- No client-side role assignment or self-registration.
