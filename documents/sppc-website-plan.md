# Saints Peter & Paul (Cecil Park) — Website & Member Portal Plan

## 0. Why this project is worth doing
Right now the parish's only online presence is Facebook/Instagram and an email address. That means:
- Newcomers searching "Assyrian Church of the East Sydney" or "church near Cecil Park" can't easily find service times, what to expect, or how to get in touch.
- There's no single source of truth for the community calendar, sacramental info (baptism, weddings), or ministries.
- Everything is locked inside an algorithm-controlled feed instead of something the parish owns.

So this isn't just a Cursor exercise — there's a real, useful product here, and it splits naturally into two things:

1. **The Public Website** — evangelistic and informational. Built for visitors, newcomers, and the wider community (including non-Assyrians, since the parish already serves in English).
2. **The Member Portal** — community and ministry-focused. Built for parishioners: events, groups, giving, communication.

Build the website first (it's 80% of the value, 20% of the complexity). Treat the member portal as a clearly separated Phase 2.

---

## 1. Public Website

### Purpose
Answer three questions fast: *Who are you? What do you believe? How do I show up?* Then invite deeper engagement.

### Sitemap
- **Home** — hero (church photo), next service time countdown, short "what to expect" line, 3 CTAs: Plan a Visit / About Us / Watch Online
- **About**
  - Who We Are — parish history, photo of the building
  - What We Believe — the Nicene Creed, displayed in full as the centrepiece of the page, alongside a short description of the apostolic tradition
  - Our Bishop & Clergy — Archdiocese of Australia, NZ & Lebanon context, parish priest and clergy list
- **Visit Us**
  - Service times (Holy Raza, Accessible Liturgy, Bible Studies, Friday Night Preaching)
  - What to expect, including a clear note on who the Holy Raza's Communion is reserved for, and that newcomers are best invited via Bible Study or Friday Night Preaching
  - Map + parking + address (32-40 Kosovich Place, Cecil Park)
- **Ministries** — the three core ministries only: Liturgy, Bible Studies, Friday Night Preaching (kept deliberately narrow — see plan notes below)
- **Sacraments & Life Events** — baptism, marriage, funerals — what to do and who to contact
- **Guest Guide** — a short page for baptism/wedding guests on what to expect and what's expected of them in the house of God
- **Give** — online giving link/info
- **Contact** — form, phone, email, social links

*(No News & Events page — the parish doesn't want the ongoing burden of posting events, and the site is built around what's steady, not what's on this week.)*

### Tone & content principles
- Write for someone who has never heard of the Assyrian Church of the East. Don't assume insider knowledge.
- Lead with welcome, not theology — depth comes after the visitor feels invited.
- Every page should answer "what do I do next?"

---

## 2. Member Portal (Phase 2)

### Purpose
Keep the existing community connected and organised — this is the "stay in contact with members" piece.

### Core features (roughly in build order)
1. **Login/accounts** (email + password, or magic link — simple)
2. **Parish calendar** — services, feast days, ministry meetings, RSVP for events
3. **Announcements feed** — parish-wide, push-style notices
4. **Ministry/group pages** — membership lists (admin-managed), group-specific announcements
5. **Directory** — opt-in member contact list (privacy-gated, admin-approved)
6. **Giving/pledges** — recurring giving management, statements
7. **Volunteer sign-up** — serving rosters (altar servers, hospitality, etc.)
8. **Admin dashboard** — for clergy/parish council to post announcements, manage events, approve directory entries

Don't build all of this at once. Start with calendar + announcements — that alone solves "staying in contact."

---

## 3. Design Direction

- **Identity, not generic-church-template.** The Church of the East has a distinct visual heritage — Syriac cross (no crucifix figure, distinct from Latin cross imagery), warm earth tones, simple iconography rather than ornate Western Catholic imagery. Use real photos of *this* church building and community, not stock photography.
- **Typography:** one serif for headings (reverent, traditional feel), one clean sans-serif for body text (readability). Avoid anything overly modern/startup-like — this should feel rooted, not trendy.
- **Color palette:** suggest deep maroon/burgundy + gold accent + warm off-white background — common in Eastern Christian visual tradition — rather than generic blue/white "corporate" church sites.
- **Mobile-first.** Most visitors will land from a phone (Instagram/Facebook link, Google search). Service times and address must be visible without scrolling.
- **Accessibility:** large readable type, good contrast, alt text on images (clergy and parish council will include older members).

---

## 4. Technology Stack (chosen for: beginner + Cursor + low cost + room to grow)

### Public Website (Phase 1)
- **Next.js** (React framework) — Cursor/Claude know it extremely well, huge community, great defaults.
- **Tailwind CSS** — fast styling, pairs well with AI-assisted coding.
- **Content stored as Markdown/MDX files in the repo** (not a CMS yet) — no extra accounts, no monthly cost, and AI tools are excellent at editing structured Markdown. You (or a tech-savvy volunteer) edit content by editing files and pushing — Cursor can do this for you conversationally.
- **Hosting: Vercel** — free tier is plenty for a parish site, deploys automatically when you push code, easy custom domain (e.g. sppc.org.au, which the parish already partially owns via its email).

### Member Portal (Phase 2)
- **Supabase** — Postgres database + authentication + file storage, generous free tier, and it's a very common stack pairing with Next.js that AI tools handle well. This is what gives you logins, the calendar data, directory, etc.
- Same Next.js app, just gains authenticated routes (`/portal/...`).

### Why not a no-code builder (Wix/Squarespace/Church-specific platforms)?
You explicitly want to learn Cursor and AI-assisted building — a no-code tool would defeat that purpose, and a custom Next.js site costs nothing to host at this scale while giving you full control and a real transferable skill.

---

## 5. Suggested Build Roadmap

**Phase 1 — Public site MVP (this is the realistic first project)**
1. Home, About, Visit Us, Contact pages
2. Real photos + address + service times locked in
3. Deploy to Vercel with a custom domain

**Phase 1.5 — Content depth**
4. Ministries, Sacraments, News/Events pages
5. Simple announcements as MDX "posts"

**Phase 2 — Member portal**
6. Supabase auth + basic login
7. Calendar + announcements feed
8. Directory, giving, volunteer sign-up (as needed)

---

## 6. Practical Next Steps for You
1. Confirm with the parish priest/council: which content above is accurate (ministries that exist, current service times, who to list as contact for sacraments) — I've structured the plan so you can fill gaps without redesigning anything.
2. Gather: a handful of real photos, the exact service schedule, and a short "About Us" paragraph from someone who knows the parish history.
3. Open Cursor, start a fresh Next.js + Tailwind project, and use this document as your prompt/brief — feed it sections at a time (start with "build the Home and Visit Us pages using this content and this design direction").
4. Get the Phase 1 site live before touching the member portal — it's the highest-value, lowest-complexity piece, and a great place to actually learn Cursor's workflow.
