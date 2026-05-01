# M Electric, LLC — SEO Strategy

**Date**: 2026-05-01
**Business type**: Service Area Business (SAB) — Home Services / Electrician
**Industry template applied**: `local-service.md`
**Site status**: Built (35 prerendered routes), pending deployment

---

## Executive summary

M Electric, LLC has a strong foundation. The site is structurally exceptional for a local-electrician site:

- 35 prerendered routes with full schema (Electrician + Service + BreadcrumbList + FAQPage + Person + ImageGallery + AggregateRating)
- 14 dedicated service pages (residential, commercial, specialty)
- 11 city pages with genuinely-distinct content (no doorway pattern)
- Real review integration (4.9★ / 90+ Google reviews)
- BBB + GBP + Facebook in `sameAs`
- Real job photos in a gallery with before/after slider
- llms.txt + AI crawler explicit allow + Person schema for the founder

**Current SEO Health Score**: ~89/100 (post-fixes)

The remaining ranking lift is almost entirely **off-page**. The on-page work is done. The strategic plan below focuses on:

1. **Off-page authority building** (highest-impact, slowest-moving)
2. **Content marketing** (blog/educational content for topical authority)
3. **Continuous technical maintenance** (review velocity, schema updates)
4. **AI search visibility** (Bing Places, Wikidata, Reddit/YouTube presence)

---

## Discovery

### Business profile

- **Company**: M Electric, LLC
- **Owner**: Marshall Morgan (US Army veteran)
- **Founded**: 1999 (25+ years in business)
- **Location**: Tulsa, Oklahoma
- **Business type**: SAB — operates from owner's home base, no public address
- **Coverage**: 11 cities in Tulsa metro (~30-mile radius)
- **License**: Oklahoma Construction Industries Board
- **Accreditation**: BBB
- **Reviews**: 4.9★ across 90+ Google reviews (industry-leading for a local electrician)

### Target audience

| Segment | Share | Primary need | Channel |
|---|---|---|---|
| Tulsa-area homeowners | 65% | Repair / panel / lighting / EV / generator | Google search, GBP, AI Overviews |
| Light commercial property owners | 20% | Tenant build-outs, panel upgrades, retrofits | Google search, referrals |
| New construction GCs | 10% | Sub on residential/light-commercial builds | Direct relationships, referrals |
| Insurance / property mgmt | 5% | Emergency repair after damage events | GBP, prior relationship |

### Goals (12-month)

1. **Rank #1–3 in Google's local pack** for "Tulsa electrician" and primary city + service combinations (e.g., "Broken Arrow electrician", "Tulsa panel upgrade")
2. **Be cited by AI search** (ChatGPT/Perplexity/AI Overviews) for local electrician queries in the Tulsa metro
3. **2× organic-driven leads** from baseline (rough estimate; actual baseline established post-deploy)
4. **Maintain 4.9★ rating** with steady review velocity (no 18-day cliff per Sterling Sky)
5. **Increase brand mention diversity** across Bing Places, Apple Business Connect, BBB, Wikidata, Reddit, YouTube

### Current state assessment

| Dimension | Grade |
|---|---|
| Technical SEO | A (95/100) |
| Schema | A (95/100) |
| Content quality | B+ (86/100 post-Marshall pass) |
| On-page SEO | A− (92/100) |
| Internal linking | A (no orphans, max click depth 2) |
| AI search readiness | B− (75/100 — strong on-site, weak off-site) |
| Off-page authority | C (3 sameAs profiles only) |
| Performance | B+ (estimated; SSG, Next/Image — needs CrUX baseline) |
| Image / multimedia | A (100% alt coverage; real job photos) |
| Local-pack readiness | B+ (NAP consistent, schema rich; missing Bing Places/Apple) |

---

## Architecture (built)

URL structure follows the local-service template:

```
/
├── /about
├── /services                    (residential index)
├── /services/[slug]             (14 service detail pages)
├── /commercial                  (commercial overview)
├── /service-areas               (location index)
├── /service-areas/[slug]        (11 city pages)
├── /job-gallery                 (with before/after slider + lightbox)
├── /privacy
└── /terms
```

See [SITE-STRUCTURE.md](SITE-STRUCTURE.md) for full details.

---

## Content strategy

### Topical authority pillars

The site already establishes 3 strong topical pillars. These are the queries we own (or should own) within the Tulsa metro:

1. **General electrical repair / Tulsa electrician** — anchored by `/services/electrical-repair` and `/`
2. **Panel upgrades / EV charging** — anchored by `/services/panel-upgrades` + `/services/ev-charger-installation`. High-intent, growing query category.
3. **Generator + storm preparedness** — anchored by `/services/generator-installation` + `/services/surge-protection`. Seasonally peaks Mar–Sep (storm season).

Secondary pillars:
4. Home rewiring / older homes
5. Lighting (indoor/outdoor/landscape)
6. Commercial / tenant build-outs

### Content gaps to fill

| Gap | Pages | Value |
|---|---|---|
| **Blog / educational content** | 0 currently | Topical authority, AI citation, long-tail traffic |
| **Pricing transparency content** | 0 (some FAQ refs) | High-intent query coverage |
| **Marshall founder bio** | 0 (mentioned in body) | Person-schema-backed expertise signal |
| **Case studies (longform)** | 0 (gallery captions only) | Conversion + AI citation |
| **Service + city combos** | 0 | "Tulsa panel upgrade", "Broken Arrow EV charger" — currently we have city pages OR service pages, not both intersected |
| **Tools / calculators** | 0 | Differentiation, link bait, dwell time |

See [CONTENT-CALENDAR.md](CONTENT-CALENDAR.md) for the 12-month editorial plan.

---

## Technical foundation (mostly done)

### Schema implemented per page type

| Page type | Schema |
|---|---|
| Sitewide layout | `Electrician` + `WebSite` + `Person` (founder) |
| Home | + `FAQPage` (5 Q&As) |
| Service detail | + `Service` (with `provider` `@id` link) + `BreadcrumbList` + `FAQPage` |
| City detail | + `Service` (city-scoped `City`) + `Place` + `BreadcrumbList` + `FAQPage` |
| Index pages | + `BreadcrumbList` + `ItemList` |
| Commercial overview | + `Service` (commercial offer catalog) + `BreadcrumbList` + `FAQPage` |
| Job gallery | + `ImageGallery` (16 `ImageObject` entries) + `BreadcrumbList` |

### Performance posture

- Full Static Site Generation (Next.js 16 SSG)
- `<Image>` proxy with auto-WebP/AVIF for every hero
- Set aspect ratios on every fill-mode image (CLS-safe)
- `priority` flag on hero images, lazy below the fold
- 2 fonts via `next/font` (Geist + Bebas Neue) — auto-preloaded
- Zero third-party scripts (no analytics, no chat, no tracking)

**Action item post-deploy**: Run PageSpeed Insights, capture baseline LCP/INP/CLS, enroll the URL in CrUX for ongoing field data.

### AI search readiness

- `/llms.txt` (~6 KB) lists every URL grouped by category
- `robots.ts` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended
- 27/30 pages have `FAQPage` schema (the 3 indexes correctly don't)
- 91 question-shaped H2/H3 headings sitewide

---

## Off-page strategy (the largest remaining lift)

### Tier 1 — Required claims (do first)

1. **Bing Places of Business** ([bingplaces.com](https://www.bingplaces.com/)) — powers ChatGPT, Copilot, Alexa. Largest single off-page lever. Free, ~30 min.
2. **Apple Business Connect** ([businessconnect.apple.com](https://businessconnect.apple.com/)) — Apple Maps usage doubled to 27% of local searches (BrightLocal 2026).
3. **GBP "website" link audit** — change from `/` to `/services` or `/about` per Sterling Sky's 2025 Diversity Update.

### Tier 2 — Authority building (3-month roll)

4. **Tulsa Chamber of Commerce membership + listing** — high Trust Flow link, ~80% more consumer visits per GlueUp.
5. **BBB Torch Award nomination** — ethics-driven business award; submission window typically Q1.
6. **Data aggregator submission** — Data Axle, Foursquare, Neustar/TransUnion. Each feeds dozens of downstream directories.
7. **Industry directory listings** — Angi, HomeAdvisor, Houzz, Thumbtack, Porch (5+ reviews on each).

### Tier 3 — Brand building (6–12 month roll)

8. **YouTube channel + 5–10 educational videos** — strongest correlate with AI-search citation per Ahrefs (~0.737). Electrician work is naturally video-friendly.
9. **Reddit presence** in r/tulsa, r/oklahoma, r/electricians — drives 46.7% of Perplexity citations.
10. **Wikidata entry** — free, lower bar than Wikipedia, feeds AI training data.
11. **Local press / "best of" placements** — Tulsa World "Best of Tulsa", neighborhood newsletters, community sponsorships. Whitespark 2026 ranks "best of" lists as the **#1 AI-visibility citation factor**.
12. **Trade-association affiliations** — IBEW Local 584, NECA Oklahoma chapter (if applicable). Adds links + expertise signals.

---

## KPI Targets

> **Baseline note**: New site, no live URL deployed yet. Baseline numbers will be captured at deploy. Targets below are realistic goals based on industry benchmarks for Tulsa-metro local-service businesses with strong on-page SEO.

| Metric | Baseline | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Organic traffic (monthly visits) | TBD at deploy | 200–500 | 800–1,500 | 2,000–4,000 |
| Indexed pages (GSC) | 35 routes | 35 (100%) | 35–50 (with blog) | 60–100 (full content calendar) |
| Local pack appearances ("tulsa electrician") | 0 | Top 20 | Top 10 | Top 3 |
| AI search citations | 0 | Sporadic | Regular for service+city | Default cite for "tulsa electrician" |
| Google reviews | 90 | 100 | 115 | 135 |
| GBP direction requests / month | TBD | +20% | +50% | +100% |
| Domain Authority (Moz) | TBD | 10–15 | 15–20 | 20–30 |
| Core Web Vitals | TBD | All "Good" | All "Good" | All "Good" |
| Bing Places established | No | Yes | Optimized | Active |
| YouTube channel videos | 0 | 0 | 3 | 10 |

### Success criteria

- **Phase 1 success** (month 1): All 35 pages indexed by Google + Bing within 30 days of deploy
- **Phase 2 success** (month 3): Bing Places + Apple Business Connect claimed; Chamber listing live; first blog post published
- **Phase 3 success** (month 6): Top-10 ranking for primary keyword; first AI Overview citation observed; 3+ YouTube videos
- **Phase 4 success** (month 12): Top-3 local pack for "tulsa electrician"; 100+ blog visits/day; 2+ "best of" placements

---

## Risks + mitigation

| Risk | Likelihood | Mitigation |
|---|---|---|
| March/Aug Google Core Update demotes thin city pages | Medium | All city pages already have unique 200–400w intros + city-specific common-work + city-specific FAQs (passes the swap test) |
| Review velocity drops below 18-day cliff (Sterling Sky) | Medium | Schedule weekly check; build review-request workflow into completed-job process |
| Aluminum/legacy ranking content removed by competitors | Low | We own substantial content on aluminum wiring + older Tulsa homes — competitive moat |
| Bing Places spam/false claims | Low | Claim early before it becomes a target |
| Migrating WordPress URLs lose ranking equity | High at deploy | Build 301 redirect map from old `/wp-content/...` and `/residential-services-tulsa/...` URLs to new clean URLs before launch |
| AI scrapers block content via Cloudflare/host TOS | Low | We've explicitly opted in via robots.txt; no host blocks active |

### Critical pre-launch task

**Build a 301 redirect map** before going live. Old WordPress URLs to map:
- `/residential-services-tulsa/electrical-repairs-tulsa/` → `/services/electrical-repair`
- `/residential-services-tulsa/panel-upgrades-tulsa/` → `/services/panel-upgrades`
- ...for all 9 residential URLs
- `/commercial-services-tulsa/` → `/commercial`
- `/commercial-services-tulsa/lighting-tulsa/` → `/services/commercial-lighting`
- `/commercial-services-tulsa/wiring-tulsa/` → `/services/commercial-wiring`
- `/specialized-services-tulsa/smart-home-tulsa/` → `/services/smart-home-wiring`
- `/specialized-services-tulsa/generators-tulsa/` → `/services/generator-installation`
- `/specialized-services-tulsa/ev-charging-tulsa/` → `/services/ev-charger-installation`
- `/service-areas/tulsa/` → `/service-areas/tulsa` (path matches; verify trailing slash)

In Next.js this lives in `next.config.ts` `redirects()`.

---

## Resource requirements

| Resource | Where used | Estimate |
|---|---|---|
| Marshall's time (off-page) | Bing/Apple/Chamber claims, BBB Torch submission | 4–6 hours one-time |
| Marshall's time (content) | Review of blog posts, providing real photos/stories | 2 hours / month |
| Content writer | 4 blog posts/month at 800–1,200 words each | $200–$600/month |
| Photographer | Quarterly job-site shoots for gallery | $300/quarter |
| Schema/dev maintenance | Periodic schema updates, redirect adjustments | 1–2 hours / month |
| YouTube production | Smartphone shoots + light editing | 4 hours per video |

Total monthly budget estimate: **$300–$800** for ongoing content + occasional photography. Time investment from Marshall: **~3–4 hours/month** ongoing after the initial off-page push.

---

## See also

- [COMPETITOR-ANALYSIS.md](COMPETITOR-ANALYSIS.md) — Tulsa electrician competitive landscape
- [CONTENT-CALENDAR.md](CONTENT-CALENDAR.md) — 12-month editorial plan
- [IMPLEMENTATION-ROADMAP.md](IMPLEMENTATION-ROADMAP.md) — Phased action plan with what's done vs. what's next
- [SITE-STRUCTURE.md](SITE-STRUCTURE.md) — URL hierarchy, internal linking, quality gates
- [LOCAL-SEO-ANALYSIS-m-electricllc.md](LOCAL-SEO-ANALYSIS-m-electricllc.md) — Detailed local-SEO audit
- [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md) — Comprehensive multi-dimension audit
- [GEO-ANALYSIS.md](GEO-ANALYSIS.md) — AI-search readiness audit
- [ACTION-PLAN.md](ACTION-PLAN.md) — Prioritized issue list

---

## What this strategy does NOT cover

- Paid search (Google Ads, Facebook Ads) — separate strategy
- Email marketing / drip campaigns — separate strategy
- Reputation management beyond review velocity — separate strategy
- Conversion rate optimization (CRO) — separate strategy

This document covers organic search, local pack, and AI-search-visibility strategy only.
