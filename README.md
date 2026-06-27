# Sts Peter & Paul — Cecil Park Website

Public website for Sts Peter & Paul Assyrian Church of the East, Cecil Park NSW.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Content in `src/content/` (edit copy without touching components)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

- Site facts (phone, address, service times): `src/content/site.ts`
- Page copy: `src/content/pages/*.ts`
- News posts: `src/content/news/posts.ts` (add real announcements only)
- Navigation: `src/content/navigation.ts`

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra config needed
4. Add custom domain (e.g. `sppc.org.au`) in Project Settings → Domains
5. Update `siteConfig.url` in `src/content/site.ts` to your live domain

## Phase 2 (not yet built)

Member portal (`/portal/*`) with Supabase auth, calendar, and announcements — planned for a future phase.

## Reference documents

Planning and copy source files live in `documents/`:

- `sppc-website-plan.md`
- `sppc-full-website-copy.md`
- `sppc-homepage-prototype.html`
