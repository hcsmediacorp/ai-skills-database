# Deployment Guide

## 1. Create Supabase Project

1. Go to Supabase and create a new project.
2. Open **Project Settings → API**.
3. Copy the Project URL, anon public key, and service role key.

## 2. Create Database Table

Open **SQL Editor** and run `supabase/schema.sql` from this repository. It creates:

- `public.skills` table
- unique `slug`
- `tags text[]`
- indexes for created date, tags, and text search
- a public read RLS policy

## 3. Create Public Storage Bucket

1. Open **Storage**.
2. Create a bucket named `skills`.
3. Set the bucket to **Public**.
4. Confirm raw files are reachable at:

```text
https://<project>.supabase.co/storage/v1/object/public/skills/<slug>.md
```

## 4. Configure Local Environment

```bash
cp .env.example .env.local
```

Fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```

## 5. Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 6. Seed 50 Skills

```bash
npm run seed
```

This uploads all markdown files into Storage and upserts metadata into Postgres. Re-running is safe because uploads use `upsert: true` and rows use `onConflict: slug`.

## 7. Deploy to Vercel

1. Push this project to GitHub.
2. Create a new Vercel project from the repository.
3. Add environment variables in **Vercel → Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy.

## 8. Verify Production

- Homepage loads with the seeded skills.
- Search returns results after a short debounce.
- Tag pills filter the grid.
- Detail pages show markdown previews.
- Download buttons open public `.md` files.
- Uploading a valid `.md` under 500KB redirects to the new detail page.
- Raw URLs are public without authentication.

## Notes

The service role key is intentionally used only in server-side route handlers and the seed script. Client components use only public data returned by API routes or server components.
