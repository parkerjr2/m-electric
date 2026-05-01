# Action Plan — m-electricllc.com

Prioritized list of fixes derived from [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md).

Effort estimates assume someone familiar with this codebase. Impact ratings reflect expected SEO lift, not effort-adjusted ROI.

---

## 🔴 CRITICAL (do this week)

### C1. Fix missing `og:image` on 3 index pages

**Status**: 🔴 BUG
**Pages**: `/about`, `/services`, `/service-areas`
**Files**: [app/about/layout.tsx](app/about/layout.tsx), [app/services/page.tsx](app/services/page.tsx), [app/service-areas/page.tsx](app/service-areas/page.tsx)
**Effort**: 10 minutes

**Cause**: Each layout overrides `openGraph` without preserving the parent's `images` key. Next.js merges shallowly — when child sets `openGraph: {...}` without `images`, parent images are dropped.

**Fix**: Add `images` to each child `openGraph` block, pointing at the same Unsplash URL the root layout uses (or a per-page Unsplash photo).

```ts
// app/about/layout.tsx — example
openGraph: {
  title: TITLE,
  description: DESCRIPTION,
  url: "/about",
  type: "website",
  images: [
    {
      url: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200&h=630&q=80&auto=format&fit=crop",
      width: 1200,
      height: 630,
      alt: "M Electric — Tulsa electrician installing residential electrical equipment",
    },
  ],
},
```

**Impact**: Without this, `/about`, `/services`, and `/service-areas` social shares (Facebook, LinkedIn, iMessage, Slack) render no preview image. Major drop in CTR from social channels.

---

## 🟠 HIGH (do this month)

### H1. Trim 7 over-length title tags

**Status**: 🟠 7 pages affected
**Effort**: 30 minutes (data-file edits only)

| Page | Current (chars) | Target |
|---|---|---|
| `/services/sand-springs` | 77 | "Sand Springs Electrician \| M Electric — Licensed in OK" (54c) |
| `/services/ev-charger-installation` | 77 | "EV Charger Installation in Tulsa, OK \| Level 2, Tesla \| M Electric" (66c) |
| `/services` | 76 | "Residential Electrical Services in Tulsa \| M Electric" (56c) |
| `/services/commercial-lighting` | 74 | "Commercial Lighting in Tulsa, OK \| LED Retrofits \| M Electric" (61c) |
| `/about` | 73 | "About M Electric — Tulsa Electrician Since 1999" (47c) |
| `/service-areas/glenpool` | 73 | "Glenpool Electrician \| M Electric — Licensed Residential" (57c) |
| `/service-areas/owasso` | 71 | "Owasso Electrician \| M Electric — Residential & Commercial" (60c) |

**Files**: [app/services/services-data.ts](app/services/services-data.ts), [app/service-areas/areas-data.ts](app/service-areas/areas-data.ts), [app/about/layout.tsx](app/about/layout.tsx), [app/services/page.tsx](app/services/page.tsx)

**Impact**: Google truncates titles around 600 pixels (~58–62 chars typical). Truncated titles lose CTR by ~5–15%. SERP snippet appearance also affects whether the user feels the page matches their query.

---

### H2. Fix `/about` meta description (187c → ≤160c)

**Status**: 🟠
**Effort**: 5 minutes

**File**: [app/about/layout.tsx](app/about/layout.tsx)

**Current** (187c):
> Since 1999, M Electric has been Tulsa's family-owned, Army-veteran-led electrician — licensed, bonded, and insured for residential, commercial, and 24/7 emergency electrical service.

**Suggested** (155c):
> Since 1999, M Electric has been Tulsa's family-owned, Army-veteran-led electrician — licensed, bonded, insured. Residential, commercial, 24/7 emergency.

---

### H3. Claim Bing Places of Business

**Status**: 🟠 OFF-PAGE
**Effort**: 30 minutes (one-time)

**Why**: ChatGPT, Copilot, and Alexa source local recommendations from Bing's index, **not** from Google Business Profile. With ChatGPT local conversion at **15.9%** vs Google organic 1.76% (Seer Interactive), this is the largest invisible channel currently.

**Action**: Create a Bing Places listing at [bingplaces.com](https://www.bingplaces.com/), match all NAP fields exactly to the GBP listing.

---

### H4. Claim Apple Business Connect

**Status**: 🟠 OFF-PAGE
**Effort**: 20 minutes (one-time)

**Why**: Apple Maps usage doubled to 27% of local searches in 2026 (BrightLocal LCRS).

**Action**: [businessconnect.apple.com](https://businessconnect.apple.com/) — same NAP as GBP/Bing.

---

### H5. Audit GBP "website" link

**Status**: 🟠 OFF-PAGE
**Effort**: 5 minutes (one-time)

**Why**: Per Sterling Sky's 2025 Diversity Update, pointing GBP at your strongest organic page (the homepage) can suppress organic rankings. Pure-win, no downside.

**Action**: In Google Business Profile dashboard, change the "Website" field from `m-electricllc.com` → `m-electricllc.com/services` or `/about`.

---

## 🟡 MEDIUM (this quarter)

### M1. Generate per-page custom branded OG images

**Status**: 🟡
**Effort**: 1–2 hours (one-time setup, then automatic per-page)

**Action**: Use Next.js's [`opengraph-image.tsx`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) file convention to generate 1200×630 OG images dynamically from text + the M Electric brand palette. Each page gets a custom branded social card (currently they all use the same Unsplash photo).

**Impact**: 5–15% CTR lift on social sharing. Branded recognition in feed previews.

---

### M2. Add Tulsa neighborhoods + service-area links to remaining pages

**Status**: 🟡
**Effort**: 30 minutes

The home page and service-area pages mention Tulsa neighborhoods. The about page just got linked pills. Service detail pages also mention neighborhoods in body copy but don't link them. Adding 1–2 contextual neighborhood links per service page would tighten the link graph further.

---

### M3. Increase `tulsa electrician` exact-phrase frequency

**Status**: 🟡 (currently only 9 occurrences sitewide)
**Effort**: 1 hour content pass

The phrase "Tulsa electrician" appears in title and H1 across most pages but is only used **9 times in body content sitewide** across 30 pages. Add 1–2 natural mentions per service detail page in the intro paragraph or a body section.

---

### M4. Add `Person` schema for Marshall Morgan (founder)

**Status**: 🟡
**Effort**: 10 minutes

**File**: [app/layout.tsx](app/layout.tsx) — add inside `electricianSchema`:

```jsonc
"founder": {
  "@type": "Person",
  "name": "Marshall Morgan",
  "jobTitle": "Master Electrician & Owner",
  "worksFor": { "@id": "https://m-electricllc.com#business" },
  "knowsAbout": [
    "Residential electrical systems",
    "Electrical panel upgrades",
    "Home rewiring",
    "Generator installation",
    "EV charger installation"
  ],
  "alumniOf": "United States Army"
}
```

**Impact**: AI systems use Person entities to attribute expertise. Strengthens E-E-A-T signal.

---

### M5. Add a mobile menu

**Status**: 🟡 UX
**Effort**: 1 hour

Desktop nav uses `hidden md:flex`. On mobile, only the Call button shows. Not strictly an SEO issue (Google parses both viewports), but mobile UX directly affects bounce rate, INP, and dwell time — all ranking signals.

**Suggested**: Hamburger button on `<md`, expanding to a drawer/sheet with the same 5 nav items + footer links inline.

---

### M6. Submit to data aggregators (Data Axle, Foursquare, Neustar)

**Status**: 🟡 OFF-PAGE
**Effort**: 1 hour total

These three aggregators feed dozens of downstream directories including Apple Maps, Bing, and many AI training data sources.

- [Data Axle Express Update](https://www.expressupdateusa.com/)
- [Foursquare for Business](https://business.foursquare.com/)
- [Neustar Localeze](https://www.neustarlocaleze.biz/)

---

### M7. Pursue Tulsa Chamber of Commerce listing

**Status**: 🟡 OFF-PAGE
**Effort**: 1–2 hours + membership fee

Chamber link = high Trust Flow + ~80% more consumer visits (GlueUp). For an electrician serving Tulsa metro, also consider Broken Arrow and Owasso chambers if you do meaningful work in those cities.

---

## 🟢 LOW (backlog)

### L1. Build a Person bio page for Marshall Morgan

`/about/marshall-morgan` with full bio, military service notes, certifications, photo. Linked from `Person` schema's `mainEntityOfPage`. Adds an "expert author" entity to the schema graph.

### L2. YouTube channel with 5–10 educational videos

Highest correlation with AI-search visibility (~0.737 per Ahrefs Dec 2025 study, n=75,000 brands). Electrician work is naturally video-friendly: panel walkthroughs, EV charger install timelapses, "common signs you need rewiring" explainers.

### L3. Reddit presence in r/tulsa, r/oklahoma, r/electricians

Drives 46.7% of Perplexity citations and 11.3% of ChatGPT citations. Answer electrical questions without spamming. Slow-burn investment.

### L4. Wikidata entry for M Electric, LLC

Free, lower notability bar than Wikipedia. Feeds AI training data and Google's Knowledge Graph. ~30 minutes to create.

### L5. Replace Unsplash hero photos with real on-the-job photography

Real Tulsa-area photos help E-E-A-T and GBP photo signals (45% more direction requests). Can be done over time as new jobs are completed.

### L6. Remove dead `og-default.jpg` reference

The static `public/og-default.jpg` referenced by an earlier version of the layout was replaced with an Unsplash URL but the static reference may still be lurking. Cleanup pass.

### L7. Add a `/services/emergency` dedicated page

Currently the footer's "24/7 Emergency Dispatch" is a `tel:` link. A dedicated emergency-service landing page would rank for "tulsa emergency electrician" and similar queries.

### L8. Add `numberOfEmployees` to Electrician schema

Helps AI systems describe business scale accurately. Current: not present.

---

## Implementation Roadmap

| Week | Tasks |
|---|---|
| **Week 1** | C1 (og:image fix), H1 (title trims), H2 (about meta desc), H3 (Bing Places), H4 (Apple Business Connect), H5 (GBP website link audit) |
| **Week 2–4** | M1 (custom OG images), M2 (neighborhood linking), M3 (keyword pass), M4 (Person schema) |
| **Month 2** | M5 (mobile menu), M6 (data aggregators), M7 (Chamber) |
| **Quarter 2+** | L-series — YouTube channel, Reddit, Wikidata, real photography, dedicated bio page |

---

## Before going live

Pre-deploy checklist:

1. ✅ Fix C1 (missing OG images)
2. ✅ Fix H1 (title trims) and H2 (about description)
3. ☐ Test PageSpeed Insights against the deployed URL — record baseline LCP, INP, CLS
4. ☐ Submit `/sitemap.xml` to Google Search Console
5. ☐ Submit `/sitemap.xml` to Bing Webmaster Tools (lays groundwork for #H3 too)
6. ☐ Verify GBP "website" link points at `/services` per #H5
7. ☐ Create a 2-week post-deploy review schedule for review velocity (the 18-day rule applies — keep at least one new GBP review per ~3 weeks to maintain rankings)

---

## Recurring agents (optional, via `/schedule`)

If you want any of these automated, they're good candidates:

- **GBP review velocity check** — every 14 days, alert if no new reviews for 18 days
- **Index status check** — weekly GSC URL Inspection on the top 5 service pages
- **Schema validation** — monthly run against [Schema.org Validator](https://validator.schema.org/) on every URL
- **Drift baseline** — capture a baseline now, run `/seo-drift` monthly to detect regressions
