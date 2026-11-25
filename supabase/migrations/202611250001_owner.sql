-- Apply after portal_members migration, to the isolated development database only.
insert into public.portal_members (email, role, active)
values ('franzalbornoz1@gmail.com', 'superadmin', true)
on conflict (email) do nothing;
