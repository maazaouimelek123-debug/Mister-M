-- =====================================================================
-- Mister M — Gestion de la carte par le Super Admin
-- À exécuter UNE FOIS dans Supabase > SQL Editor (relançable sans risque)
--
-- Principe :
--   * La carte par défaut reste dans menu.js (fidèle au menu papier).
--   * Cette table ne stocke que les MODIFICATIONS (nom, prix, description,
--     masqué). Supprimer une ligne = revenir à la carte d'origine.
--   * Lecture publique (le site applique les modifications).
--   * Écriture UNIQUEMENT via des fonctions qui vérifient un jeton de
--     session de super_admin, créé côté base à partir de mister_m_login.
-- =====================================================================

create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------
-- 1. Sessions staff (jetons) — jamais exposées à l'API
-- ---------------------------------------------------------------------
create table if not exists public.mister_m_admin_sessions (
  token      uuid primary key default gen_random_uuid(),
  username   text not null,
  role       text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '12 hours'
);
alter table public.mister_m_admin_sessions enable row level security;
revoke all on public.mister_m_admin_sessions from anon, authenticated;

-- ---------------------------------------------------------------------
-- 2. Modifications de la carte
-- ---------------------------------------------------------------------
create table if not exists public.mister_m_menu_overrides (
  item_key       text primary key check (length(item_key) <= 300),
  name           text check (name is null or length(trim(name)) between 1 and 80),
  price          numeric(10,2) check (price is null or (price >= 0 and price < 10000)),
  variant_prices jsonb check (variant_prices is null or jsonb_typeof(variant_prices) = 'array'),
  description    text check (description is null or length(description) <= 200),
  hidden         boolean not null default false,
  updated_at     timestamptz not null default now(),
  updated_by     text
);
alter table public.mister_m_menu_overrides enable row level security;
revoke all on public.mister_m_menu_overrides from anon, authenticated;
grant select on public.mister_m_menu_overrides to anon, authenticated;

drop policy if exists "mm_menu_read" on public.mister_m_menu_overrides;
create policy "mm_menu_read" on public.mister_m_menu_overrides
  for select to anon, authenticated using (true);
-- Aucune policy d'écriture : insert/update/delete impossibles via l'API.

-- ---------------------------------------------------------------------
-- 3. Ouverture de session : réutilise mister_m_login (même hachage)
-- ---------------------------------------------------------------------
create or replace function public.mister_m_start_session(u text, p text)
returns table (token uuid, username text, role text)
language plpgsql
security definer
set search_path = public, extensions
as $$
#variable_conflict use_column
declare
  v_user text;
  v_role text;
begin
  select l.username, l.role into v_user, v_role
  from public.mister_m_login(u, p) l
  limit 1;

  if v_user is null then
    return;                                   -- identifiants invalides : aucune ligne
  end if;

  delete from public.mister_m_admin_sessions s where s.expires_at < now();

  return query
    insert into public.mister_m_admin_sessions (username, role)
    values (v_user, v_role)
    returning mister_m_admin_sessions.token,
              mister_m_admin_sessions.username,
              mister_m_admin_sessions.role;
end $$;

create or replace function public.mister_m_end_session(t uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.mister_m_admin_sessions where token = t;
$$;

-- ---------------------------------------------------------------------
-- 4. Contrôle super_admin (interne)
-- ---------------------------------------------------------------------
create or replace function public.mister_m_require_super(t uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare v_user text;
begin
  select s.username into v_user
  from public.mister_m_admin_sessions s
  where s.token = t
    and s.expires_at > now()
    and s.role = 'super_admin';

  if v_user is null then
    raise exception 'not_authorized' using errcode = '42501';
  end if;
  return v_user;
end $$;

-- ---------------------------------------------------------------------
-- 5. Enregistrer / réinitialiser un article
-- ---------------------------------------------------------------------
create or replace function public.mister_m_menu_save(
  t uuid, k text,
  p_name text, p_price numeric, p_variants jsonb, p_desc text, p_hidden boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare v_user text := public.mister_m_require_super(t);
begin
  insert into public.mister_m_menu_overrides
    (item_key, name, price, variant_prices, description, hidden, updated_at, updated_by)
  values
    (k, nullif(trim(p_name), ''), p_price, p_variants, p_desc, coalesce(p_hidden, false), now(), v_user)
  on conflict (item_key) do update set
    name           = excluded.name,
    price          = excluded.price,
    variant_prices = excluded.variant_prices,
    description    = excluded.description,
    hidden         = excluded.hidden,
    updated_at     = now(),
    updated_by     = v_user;
end $$;

create or replace function public.mister_m_menu_reset(t uuid, k text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare v_user text := public.mister_m_require_super(t);
begin
  delete from public.mister_m_menu_overrides where item_key = k;
end $$;

-- ---------------------------------------------------------------------
-- 6. Droits d'exécution
-- ---------------------------------------------------------------------
revoke all on function public.mister_m_start_session(text, text)  from public;
revoke all on function public.mister_m_end_session(uuid)           from public;
revoke all on function public.mister_m_require_super(uuid)         from public, anon, authenticated;
revoke all on function public.mister_m_menu_save(uuid, text, text, numeric, jsonb, text, boolean) from public;
revoke all on function public.mister_m_menu_reset(uuid, text)      from public;

grant execute on function public.mister_m_start_session(text, text) to anon, authenticated;
grant execute on function public.mister_m_end_session(uuid)          to anon, authenticated;
grant execute on function public.mister_m_menu_save(uuid, text, text, numeric, jsonb, text, boolean) to anon, authenticated;
grant execute on function public.mister_m_menu_reset(uuid, text)     to anon, authenticated;

-- Recharge le cache de l'API pour que les nouvelles fonctions soient visibles tout de suite
notify pgrst, 'reload schema';
