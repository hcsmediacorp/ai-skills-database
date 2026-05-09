create extension if not exists pgcrypto;
create table if not exists public.skills (id uuid primary key default gen_random_uuid(), slug text not null unique, title text not null, description text not null, tags text[] not null default '{}', created_at timestamptz not null default now());
create index if not exists skills_created_at_idx on public.skills (created_at desc); create index if not exists skills_tags_idx on public.skills using gin (tags); create index if not exists skills_search_idx on public.skills using gin (to_tsvector('english', title || ' ' || description));
alter table public.skills enable row level security; drop policy if exists "Public can read skills" on public.skills; create policy "Public can read skills" on public.skills for select using (true);
