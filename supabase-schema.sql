create table if not exists public.course_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  level text not null,
  interest text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.course_leads enable row level security;

create policy "service role can manage course leads"
on public.course_leads
for all
to service_role
using (true)
with check (true);

create table if not exists public.student_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  level text default 'Baslangic',
  plan_name text default 'Demo plan',
  created_at timestamptz not null default now()
);

alter table public.student_profiles enable row level security;

create policy "students can read own profile"
on public.student_profiles
for select
to authenticated
using (auth.uid() = id);

create policy "students can update own profile"
on public.student_profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  completed boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.lesson_progress enable row level security;

create policy "students manage own progress"
on public.lesson_progress
for all
to authenticated
using (auth.uid() = student_id)
with check (auth.uid() = student_id);
