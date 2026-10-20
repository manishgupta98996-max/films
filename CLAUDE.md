# CLAUDE.md: AI Filmmaking Studio (v1)

Project instructions for Claude Code. Read fully before making changes. Scope is **v1 only**; do not build v2 items unless the owner asks.

## 1. Project overview

- **Brand:** AI Filmmaking Studio
- **Domain:** `aifilmmakingstudio.site` (read from `NEXT_PUBLIC_SITE_URL`; the owner may switch to `.com` later, so never hardcode the domain)
- **Product:** one course, **AI Filmmaking Pro** (10+ hours). Final project: a complete 1-hour AI movie.
- **Goal of the site:** (1) sell the course through Lemon Squeezy (LS) checkout, (2) rank on Google for AI filmmaking keywords, (3) build topical authority through a blog.
- **Audience:** international, mainly USA. English only. Prices in USD.
- **Owner:** solo founder, developer. Writes in Roman Urdu or English. **Reply in the language the owner writes in.** Be direct, no fluff, be honest about risks, suggest the cheapest solution first.

## 2. Tech stack and constraints

- Next.js 14 (App Router), TypeScript (strict), Tailwind CSS
- **Static export** (`output: 'export'` in `next.config.js`), hosted on **Cloudflare Pages**
- Cloudflare Pages settings: build command `npm run build`, output directory `out`, env `NODE_VERSION=20`
- `images: { unoptimized: true }` (image optimization is not available with static export)
- No server runtime in v1: **no API routes, no database, no auth.** If something needs a server, stop and ask the owner.
- Blog: MDX files in `content/blog/*.mdx`, parsed with `gray-matter` + `next-mdx-remote/rsc` (or `@next/mdx`), pages built with `generateStaticParams`
- `app/sitemap.ts` and `app/robots.ts` must export `const dynamic = 'force-static'`
- Server Components by default. Use `"use client"` only for interactive parts (curriculum accordion, sticky CTA, checkout button, email form)
- Keep dependencies minimal. Ask before adding any package. Pin exact versions.

## 3. Commands

```bash
npm install
npm run dev        # local dev
npm run build      # static export to /out
npm run lint
npx tsc --noEmit   # type check
```

## 4. Directory structure

```
app/
  layout.tsx            # fonts, global metadata, Organization JSON-LD, lemon.js script
  page.tsx              # landing page (primary keyword: ai filmmaking course)
  blog/page.tsx         # blog index
  blog/[slug]/page.tsx  # post (Article JSON-LD, author, last updated)
  about/page.tsx        # real author page (E-E-A-T, Person JSON-LD)
  showcase/page.tsx     # student films (VideoObject JSON-LD)
  templates/page.tsx    # free templates / lead magnet + email capture
  faq/page.tsx
  contact/page.tsx
  refund/page.tsx  terms/page.tsx  privacy/page.tsx
  sitemap.ts  robots.ts
components/
  Hero, Showreel, StudentShowcase, StudentReviews, SuccessStories, Curriculum, ToolsCovered,
  WhoIsItFor, Instructor, Pricing, FAQ, StickyCTA, EmailCapture,
  CheckoutButton, JsonLd
content/blog/*.mdx
lib/
  config.ts   # site, pricing tiers, seat counter, links, course data
  blog.ts     # read/parse MDX
  seo.ts      # metadata + JSON-LD helpers
public/       # favicon, og images (never put course files or Mega links here)
```

All course facts (title, hours, modules, tools, pricing) live in `lib/config.ts`. Components read from it. Never duplicate these values in JSX.

## 5. v1 pages and SEO targets

| Route | Purpose | Primary target |
|---|---|---|
| `/` | Sales landing page | ai filmmaking course |
| `/blog` + `/blog/[slug]` | Topical authority | see section 8 |
| `/about` | Author credibility | brand + Person schema |
| `/showcase` | Student proof | video content |
| `/templates` | Lead magnet | free AI filmmaking resources |
| `/faq`, `/contact` | Trust, objections | n/a |
| `/refund`, `/terms`, `/privacy` | Trust + LS compliance | n/a |

Keyword data (keyword tools, Oct 2026): "ai filmmaking course" ~170 searches/month, CPC ~$6; "ai filmmaking" difficulty "Easy", volume >100; "google flow ai filmmaking tool" >100. Volumes are small. Do not stuff keywords. Do not target India city-based variants or "free download" variants.

## 6. SEO rules (apply to every page)

- Unique `<title>` (aim ≤ 60 chars) and meta description (~150 chars) per page via the Metadata API
- Exactly one `<h1>`, containing the page's primary keyword naturally
- Landing page:
  - Title: `AI Filmmaking Course: Make a 1-Hour AI Movie`
  - H1: `AI Filmmaking Pro: Make a Full 1-Hour AI Movie`
  - Meta: `AI Filmmaking Pro is a 10+ hour AI filmmaking course. Learn Claude, Runway, Kling, Seedance, ElevenLabs & more, and finish a full 1-hour AI movie.`
- Canonical URL on every page, built from `NEXT_PUBLIC_SITE_URL`
- Open Graph + Twitter card images per page
- Descriptive `alt` text on all images
- Internal links: every blog post links to the pillar post and to the landing page; the pillar links to all cluster posts
- Posts show author and a visible **Last updated** date (AI tools change fast; update posts when tools change)
- JSON-LD types allowed: `Organization` (with `sameAs` social links), `Person` (author), `Article`, `VideoObject` (showcase), `Course` (optional)
- **Never add fake `Review`/`AggregateRating` markup.** Only use real, verifiable reviews.
- Do not rely on FAQ schema for rich results (limited by Google); FAQ content is for users.
- Performance targets: Lighthouse ≥ 90 on mobile for Performance, SEO, Accessibility. No layout shift. Lazy-load below-the-fold media.

## 7. Design and conversion rules

- **Hybrid theme:** dark/cinematic for hero, showreel, student showcase; light off-white for curriculum, pricing, FAQ and long text (readability). Use CSS variables / Tailwind tokens, not hardcoded colors.
- One accent color (suggested warm amber `#F5A524`, owner may change) reserved for primary CTAs. Check contrast (WCAG AA).
- Mobile first. **Sticky CTA bar on mobile.** One primary action per screen.
- Landing page section order:
  1. Hero (H1, subhead "10+ hours, 9 AI tools, one finished movie. No camera, no crew.", CTA, showreel)
  2. Student demos (thumbnail strip, click to play)
  3. What you'll get (3 short bullets: the 1-hour movie, the workflow, the tools)
  4. Curriculum (8 modules, collapsed accordion, one-line outcome each)
  5. Tools covered (one line of names) + short minimum-stack note
  6. Student reviews
  7. Student success stories
  8. Instructor
  9. Who it's for / not for (3 bullets per column)
  10. Pricing ($79 one-time, bonuses, refund guarantee only if refund period is set in config)
  11. FAQ
  12. Final CTA + email capture
- Sections 2, 6 and 7 render nothing if they have no approved entries (see section 7b).
- Showreel: use a YouTube lite-embed, or a compressed local file. Cloudflare Pages has a per-file size limit (about 25 MiB; verify the current limit). Never commit large videos.
- CTA copy example: `Get AI Filmmaking Pro: $79`. CTAs open the LS checkout overlay.

## 7b. Social proof sections (student demos, reviews, success stories)

All three are driven by arrays in `lib/config.ts` and **render nothing when empty or when no entry is approved.** No placeholders in production (placeholders only when `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true` in dev).

- **Student demos** (`studentDemos[]`): `{ studentName, channelHandle, videoUrl, thumbnail, permission }`. Thumbnail strip on the landing page (YouTube lite-embed, click to play); full grid on `/showcase`. Render only entries with `permission: true`.
- **Student reviews** (`studentReviews[]`): `{ name, text, videoUrl?, source, permission, date }`. Real, unedited quotes (trim for length only, never change meaning). Show the student's name/handle. Never add star ratings the student did not give.
- **Success stories** (`successStories[]`): `{ name, channelHandle, summary, whatTheyBuilt, factsVerified, permission }`. Describe what the student actually made (films, channel launch) using facts the owner has verified. Do not state income, subscriber or view numbers unless they are verified, current, and labeled as that student's individual result. No "you will earn" language.
- Skip any entry with `permission: false`, `factsVerified: false`, or missing fields.
- Do not add `Review` or `AggregateRating` structured data.

## 8. Course data (source of truth, keep in `lib/config.ts`)

- **Title:** AI Filmmaking Pro, 10+ hours
- **Final project:** a complete 1-hour AI movie
- **Modules:**
  1. Introduction
  2. Tools Overview (tools we use to generate AI films)
  3. Ideas & Script Generation
  4. Detailed Character Images + Location Images Generation
  5. AI Video Generation
  6. Sound Generation
  7. Editing
  8. Earn from YouTube
- **Tools covered:** Claude, Higgsfield, LTX Studio, Meliés (**owner to confirm spelling**), Runway, Kling AI, Seedance, ElevenLabs, Suno
- **Pricing:** **$79 one-time payment, single fixed price** (USD). No tiers, no seat limit, no countdown. Keep `price: 79` in `config.ts`. Do not show any "founding price", "limited seats", "X remaining" or "price increases" messaging.
- **Bonuses (suggested, owner to confirm):** prompt library, script/Claude prompt pack, character and location sheet templates, 1-hour movie shot-list template, lifetime updates.

### Starter blog posts (v1)

Pillar first, then cluster. Volumes are unverified beyond the keyword data above.

1. Pillar: "AI Filmmaking: The Complete Beginner's Guide" (ai filmmaking)
2. "Google Flow AI Filmmaking Tool: Tutorial and Honest Review"
3. "AI Filmmaking Workflow: From Idea to Final Cut"
4. "How to Make an AI Short Film, Step by Step"
5. "Consistent Characters in AI Video: What Works"
6. "Best AI Video Generators for Filmmakers" (Runway vs Kling vs Seedance)
7. "How to Write a Film Script With Claude"
8. "Free AI Filmmaking Resources" (links to `/templates`)

Blog frontmatter:

```yaml
title: ""
description: ""        # ~150 chars
slug: ""
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
author: ""
primaryKeyword: ""
cover: ""
```

## 9. Checkout and delivery

- Payments: **Lemon Squeezy** checkout overlay. Checkout URL comes from `NEXT_PUBLIC_LS_CHECKOUT_URL` (never hardcode). Load the LS overlay script (lemon.js) in `layout.tsx` and add the overlay parameter to the checkout URL. **Check the current Lemon Squeezy docs for the exact snippet** before implementing.
- `CheckoutButton` is the single component used for all CTAs.
- **Delivery:** buyers receive a PDF through LS that contains the Mega folder link. **The Mega link must never appear in this repo, in `public/`, in page source, or on any public page.** There is no public thank-you page that reveals access.
- Email capture (`/templates`, final CTA): the site is static, so use an email provider's hosted form/embed (provider TBD, owner to choose). Do not build a custom backend in v1.
- Footer on every page: `Not affiliated with the AI tools mentioned.`

## 10. Compliance and honesty rules (hard rules)

- **No fake testimonials, reviews, enrollment counts, or student numbers.** Reviews and success stories must be real, written by the student, and published with the student's permission (a saved chat message or email is enough; keep the record outside the repo). Never write a review on a student's behalf. If a student is rewarded for a review, disclose it on the page. Until real reviews exist, rely on the showreel, student demos and a free preview lesson.
- **No fake scarcity.** The price is a fixed $79. No countdown timers, "limited seats", "X remaining" or "price increases soon" messaging unless the owner introduces a real, verifiable change.
- **No income claims.** Do not promise or imply earnings (including in module 8 copy, "Earn from YouTube"). Describe it as learning to publish and monetize within YouTube's current policies.
- **Student showcase only with the student's permission.** Show only stats that are real and visible on the channel. Student channels the owner listed: @ReelixBox, @StellarCinema-z6v, @SonyHidayatAIFilms, @karmaaifilms, @Crepel_Studio, @WhenCrownsBleed. Specific best-video links still needed from the owner.
- Be upfront that tool subscriptions/credits are separate and may cost extra; show a "minimum stack". Do not state tool prices unless verified.
- Refund policy page must match the refund setting in Lemon Squeezy.
- Never commit secrets. Only `NEXT_PUBLIC_*` values are exposed to the browser.

## 11. Code conventions

- TypeScript strict, no `any`, no unused code
- Tailwind only, no CSS-in-JS, no extra UI libraries
- Small, single-purpose components; data from `lib/config.ts`
- Semantic HTML, keyboard-accessible interactive elements
- Commit messages: imperative, short (`Add curriculum accordion`)
- Before finishing any task: run `npm run lint`, `npx tsc --noEmit`, `npm run build`

## 12. Out of scope for v1 (v2, do not build unless asked)

Free Claude-powered tool, newsletter system, more cluster posts beyond the starter list, review collection, member area/login, video hosting.

## 13. Open items (owner must provide)

- [ ] 3-5 specific best video links (showreel)
- [ ] Lemon Squeezy checkout URL
- [ ] Final bonuses list (price is fixed at $79 one-time)
- [ ] Confirm "Meliés" spelling and final tool list
- [ ] Refund period (7-14 days suggested)
- [ ] Author photo, bio, and real credentials for `/about`
- [ ] Student permissions for the demos, reviews and success stories (3-5 reviews minimum before launch if possible)
- [ ] Verified facts for each success story
- [ ] Email provider choice
- [ ] DNS email records (SPF, DKIM, DMARC) for the `.site` domain so receipts and emails are not marked as spam
- [ ] Google Search Console and Bing Webmaster verification
