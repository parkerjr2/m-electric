# Implementation Roadmap — M Electric, LLC

**Status legend**: ✅ done · 🟢 in progress · 🟡 next · 🔴 not started · ⏸ deferred

The standard 4-phase template (Foundation / Expansion / Scale / Authority) is adapted below to reflect the **current state** of the M Electric build. Phase 1 (Foundation) is largely complete; the work shifts to off-page and content from Phase 2 onward.

---

## Phase 1 — Foundation (mostly DONE)

**Standard scope**: Technical setup, infrastructure, core pages, essential schema, analytics.

### Already done (✅)

- ✅ Next.js 16 SSG site with 35 prerendered routes
- ✅ Sitewide design system (Bebas Neue display + Geist body, black/red palette, Framer Motion)
- ✅ Home page (hero, trust strip, residential grid, specialty cards, about section, service-area pills, testimonials, FAQ, final CTA)
- ✅ About page (with founder bio paragraph)
- ✅ Services index + 14 service detail pages (residential + commercial + specialty)
- ✅ Service Areas index + 11 city pages
- ✅ Commercial overview page
- ✅ Job Gallery with before/after slider + lightbox + 14 photos
- ✅ Privacy + Terms pages
- ✅ Schema graph: Electrician + WebSite + Person (founder) + Service per page + BreadcrumbList per page + FAQPage on 27/30 + ImageGallery + AggregateRating + 12 first-party Review entries
- ✅ robots.ts with explicit AI crawler permissions
- ✅ llms.txt with all URLs grouped by category
- ✅ Sitemap.ts with all 32+ URLs
- ✅ Per-page canonical, OG, Twitter card
- ✅ Internal link graph: no orphans, max click depth 2
- ✅ Real Google Reviews integrated as testimonials with attribution

### Pre-launch — must complete before going live (🟡 NEXT)

| # | Task | Effort | Owner |
|---|---|---|---|
| 1 | **301 redirect map** from old WordPress URLs to new clean URLs (in `next.config.ts` `redirects()`) | 1 hour | dev |
| 2 | **OG image** — drop a 1200×630 branded JPG at `/public/og-default.jpg` OR migrate to Next 16's `app/opengraph-image.tsx` for dynamic generation | 30 min – 2 hours | designer/dev |
| 3 | **Deploy to production** (Vercel or hosting target) | 30 min | dev |
| 4 | **Submit `/sitemap.xml`** to Google Search Console + Bing Webmaster Tools | 15 min | SEO |
| 5 | **Verify HTTPS, HSTS, security headers** in production | 30 min | dev |
| 6 | **Run Schema Validator** ([validator.schema.org](https://validator.schema.org/)) on every URL | 30 min | SEO |
| 7 | **Run PageSpeed Insights** on home + 3 service pages + 2 city pages, capture LCP/INP/CLS baseline | 30 min | SEO |
| 8 | **Test on real devices** — iPhone, Android, tablet | 30 min | QA |

**Phase 1 success criterion**: Site live, all 35 pages indexed within 7 days, no 404s on legacy URL paths.

---

## Phase 2 — Expansion (weeks 5–12)

### Off-page foundations (🔴 NOT STARTED)

These are the highest-leverage non-technical actions. Marshall's time, mostly.

| # | Task | Effort | Priority |
|---|---|---|---|
| 1 | **Claim Bing Places of Business** ([bingplaces.com](https://www.bingplaces.com/)) | 30 min | 🔴 Critical (powers ChatGPT/Copilot/Alexa) |
| 2 | **Claim Apple Business Connect** ([businessconnect.apple.com](https://businessconnect.apple.com/)) | 20 min | 🔴 Critical (Apple Maps usage doubled to 27%) |
| 3 | **Update GBP "Website" field** from `/` to `/services` per Sterling Sky 2025 Diversity Update | 5 min | 🔴 Critical |
| 4 | **Submit to data aggregators** (Data Axle, Foursquare, Neustar/TransUnion) | 1 hour | 🟡 High |
| 5 | **Tulsa Chamber of Commerce listing/membership** | 2 hours | 🟡 High |
| 6 | **Verify NAP consistency** across BBB, GBP, Facebook, Bing Places | 30 min | 🟡 High |
| 7 | **GBP photo refresh** — upload 10+ real job photos to GBP | 1 hour | 🟡 High |

### Content launch (🔴 NOT STARTED)

| # | Task | Effort |
|---|---|---|
| 1 | **Create `/blog` route** with category + post detail templates | 2–4 hours |
| 2 | **Publish first 4 blog posts** (1 per pillar from [CONTENT-CALENDAR.md](CONTENT-CALENDAR.md)) | 12–16 hours |
| 3 | **Add `Article` schema** to blog posts | 30 min (template) |
| 4 | **Build internal links** from each post to relevant service pages | 30 min/post |
| 5 | **Create founder bio page** (`/about/marshall-morgan`) with full credentials | 2 hours |

### On-page additions (🟡 NEXT)

| # | Task | Effort |
|---|---|---|
| 1 | Add a `/services/emergency-electrician` dedicated page | 4 hours |
| 2 | Add a `/services/aluminum-wiring` deep-dive page | 4 hours |
| 3 | Lift `service-entrance-during/complete` photo pair into a second before/after slider on `/job-gallery` | 30 min |
| 4 | Add 3 more real job photos (after Marshall completes next jobs) | 30 min/photo |

**Phase 2 success criterion**: Bing Places + Apple Business Connect claimed, 4 blog posts live, GBP optimized, all NAP consistent across major directories.

---

## Phase 3 — Scale (weeks 13–24)

### Content scale (🔴 NOT STARTED)

- Continue 1 post per week (16 more posts in this phase = 20 total)
- Build first interactive tool (Tulsa Panel Load Calculator — see [CONTENT-CALENDAR.md](CONTENT-CALENDAR.md))
- Expand commercial pages — add `/commercial/tenant-buildouts`, `/commercial/restaurant-electrical`, `/commercial/medical-office`
- Service + city intersections — start with the highest-volume combos:
  - `/services/panel-upgrades/tulsa`
  - `/services/ev-charger-installation/tulsa`
  - `/services/panel-upgrades/broken-arrow`
  - `/services/ev-charger-installation/owasso`

⚠️ Apply the local-service quality gate: minimum 800 words unique content per service+city page. Don't doorway.

### Off-page scale (🔴 NOT STARTED)

- **Industry directories** — Angi (5+ reviews), HomeAdvisor, Houzz, Thumbtack, Porch
- **YouTube channel** — first 3 educational videos
- **Reddit footprint** — start helpful answering in r/tulsa, r/electricians (no spam)
- **Local press outreach** — pitch Tulsa World, KOTV, Public Radio Tulsa for 1 story per quarter

### Technical scale (🟡 NEXT)

- **Recurring schema review** — quarterly run through Schema Validator
- **`/seo-drift` baseline** — capture baseline now so future regressions are detectable
- **CrUX field-data review** — month 4 onward, real LCP/INP/CLS visible in PageSpeed

**Phase 3 success criterion**: 20 blog posts live, 1 interactive tool live, 4 service+city pages live, top-10 ranking for primary keyword.

---

## Phase 4 — Authority (months 7–12)

### Authority building (🔴 NOT STARTED)

| # | Task | Effort |
|---|---|---|
| 1 | **Wikidata entry** for M Electric | 30 min |
| 2 | **YouTube channel — 5 more videos** (10 total by month 12) | 4 hours/video |
| 3 | **"Best of Tulsa" submissions** — Tulsa World, KJRH, KOTV reader polls when nomination windows open | varies |
| 4 | **BBB Torch Award nomination** | 2 hours |
| 5 | **Community involvement** — sponsor 1 local team / event / nonprofit per quarter; add a `/community` page | varies |
| 6 | **Trade-association affiliation** — IBEW Local 584, NECA Oklahoma if applicable | varies |
| 7 | **Customer case studies** — convert 4 strong job stories into longform articles with photos | 6 hours each |

### Content depth (🔴 NOT STARTED)

- 50+ blog posts published (cumulative)
- 4 interactive tools published (cumulative)
- 10+ service+city intersection pages (cumulative)
- Quarterly photo refreshes — gallery up to 25+ real photos

### Continuous optimization (ongoing)

| # | Task | Cadence |
|---|---|---|
| 1 | Refresh top-traffic pages with `dateModified` updates + new info | Quarterly |
| 2 | Audit thin/low-traffic pages for consolidation or rewriting | Quarterly |
| 3 | Internal link refresh — connect new content into existing pillars | Monthly |
| 4 | Review velocity — request reviews from completed jobs | Continuous (target: 1 new review every 18 days minimum) |
| 5 | Schema validation pass | Monthly |
| 6 | GSC + Bing Webmaster Tools query/CTR review | Weekly |
| 7 | LocalFalcon geo-grid rank check | Monthly |

**Phase 4 success criterion**: Top-3 local pack for "Tulsa electrician", 50+ blog posts, 10+ YouTube videos, "Best of Tulsa" placement (or equivalent), 100+ Google reviews maintained at 4.9★.

---

## Master Gantt — 12-month visual

```
Month         01 02 03 04 05 06 07 08 09 10 11 12
─────────────────────────────────────────────────
Phase 1   ✓✓ ✓✓
Pre-launch [██]
Bing/Apple    [█]
Chamber       [██]
Blog (M1-3)   [██████]
Founder bio    [█]
Emergency pg    [█]
Aluminum pg     [█]
Blog (M4-6)        [████████]
Tools v1            [████]
City+service        [██████████]
Blog (M7-9)              [████████]
YouTube v1                [██████]
Reddit start              [────────────────]
Wikidata                  [█]
Blog (M10-12)                  [████████]
Tools v2                       [████]
Authority push                  [██████]
Best of subs                       [██]
Case studies                       [████]
─────────────────────────────────────────────────
Continuous: review velocity, GSC monitoring, schema validation, internal linking
```

---

## Resource model — what each phase costs

| Phase | Marshall hours/month | Cash budget/month | Total $ |
|---|---|---|---|
| Phase 1 (pre-launch) | 4 hours one-time | $0 | $0 |
| Phase 2 (M2–M3) | 6 | $400 (writer) + $50 (Chamber) | $450/mo |
| Phase 3 (M4–M6) | 4 | $480 (writer) + $200 (industry directories) | $680/mo |
| Phase 4 (M7–M12) | 6 | $480 (writer) + $400 (video editing/quarterly photo shoot) | $880/mo |

**Year-1 total estimate**: ~$7,500 in cash + ~50 hours of Marshall's time.

This assumes hybrid content production (Marshall outlines + reviews; writer drafts). Higher if outsourced fully; lower if Marshall writes everything himself.

---

## Phase-gate checklist

Before declaring a phase done, all the following should be true:

### Phase 1 done when:
- [ ] Site live on production URL
- [ ] All 35+ routes return 200 in production
- [ ] Sitemap submitted to Google + Bing
- [ ] Old WordPress URLs 301 redirect correctly
- [ ] Schema Validator passes on every URL
- [ ] PageSpeed Insights baseline captured

### Phase 2 done when:
- [ ] Bing Places + Apple Business Connect claimed and complete
- [ ] GBP "website" link points to `/services` not `/`
- [ ] Tulsa Chamber listing live
- [ ] At least 4 blog posts published with `Article` schema
- [ ] First 30-day GSC indexation report shows 100% of intended URLs indexed

### Phase 3 done when:
- [ ] 20 blog posts cumulative
- [ ] 1 interactive tool live
- [ ] At least 4 service+city intersection pages live (with quality gate passed)
- [ ] First "ranking 1–10 for tulsa electrician" milestone hit
- [ ] First documented AI Overview citation (or "behind which competitors" report if none)

### Phase 4 done when:
- [ ] 50+ blog posts cumulative
- [ ] 10+ YouTube videos cumulative
- [ ] "Best of Tulsa" or equivalent recognition received
- [ ] BBB Torch Award nominated
- [ ] Wikidata entry live
- [ ] Top-3 local pack for "Tulsa electrician" achieved

---

## Risks & dependencies

| Risk | Mitigation |
|---|---|
| Marshall too busy to provide content/photos | Hybrid content model + writer; book 1 review session/month on calendar |
| Review velocity drops | Build review-request into completed-job process; weekly GBP check |
| Google core update demotes city pages | Already protected — pages have unique content; monitor monthly |
| 301 redirects don't fire correctly post-deploy | Test thoroughly pre-deploy; have rollback plan |
| Reviews flagged by Google as "Verified Google Review" violation | Already documented in [LOCAL-SEO-ANALYSIS-m-electricllc.md](LOCAL-SEO-ANALYSIS-m-electricllc.md). Reviews are real, dated, attributed; defensible. Worst case: remove from JSON-LD, keep on-page. |
| Bing Places spam claim by competitor | Claim ASAP in Phase 2 |

---

## What this roadmap does NOT include

- Paid search / Google Ads — separate budget, separate plan
- Customer onboarding / scheduling tooling
- CRM integration (HubSpot, Salesforce)
- Email marketing automation
- Live chat / chatbot
- Conversion rate optimization (CRO) — A/B testing, heatmaps

These are valuable but out of scope for organic SEO strategy.
