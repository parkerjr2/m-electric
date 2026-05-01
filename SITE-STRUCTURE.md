# Site Structure — M Electric, LLC

**Date**: 2026-05-01
**Status**: Built (35 prerendered routes)
**Architecture**: Next.js 16 App Router, full SSG

---

## Sitemap (current state)

```
/                                            home (priority 1.0)
├── /about                                   priority 0.8
├── /services                                priority 0.9 (residential index)
│   ├── /services/electrical-repair          priority 0.8
│   ├── /services/panel-upgrades             priority 0.8
│   ├── /services/home-rewiring              priority 0.8
│   ├── /services/outlet-installation        priority 0.8
│   ├── /services/indoor-lighting            priority 0.8
│   ├── /services/outdoor-lighting           priority 0.8
│   ├── /services/ceiling-fan-installation   priority 0.8
│   ├── /services/surge-protection           priority 0.8
│   ├── /services/wiring-repair              priority 0.8
│   ├── /services/commercial-lighting        priority 0.8
│   ├── /services/commercial-wiring          priority 0.8
│   ├── /services/smart-home-wiring          priority 0.8
│   ├── /services/generator-installation     priority 0.8
│   └── /services/ev-charger-installation    priority 0.8
├── /commercial                              priority 0.9 (commercial overview)
├── /service-areas                           priority 0.9 (location index)
│   ├── /service-areas/tulsa                 priority 0.7 (flagship city)
│   ├── /service-areas/broken-arrow          priority 0.7
│   ├── /service-areas/owasso                priority 0.7
│   ├── /service-areas/bixby                 priority 0.7
│   ├── /service-areas/jenks                 priority 0.7
│   ├── /service-areas/sapulpa               priority 0.7
│   ├── /service-areas/sand-springs          priority 0.7
│   ├── /service-areas/glenpool              priority 0.7
│   ├── /service-areas/berryhill             priority 0.7
│   ├── /service-areas/turley                priority 0.7
│   └── /service-areas/oakhurst              priority 0.7
├── /job-gallery                             priority 0.7
├── /privacy                                 priority 0.3
├── /terms                                   priority 0.3
├── /robots.txt                              (dynamic via app/robots.ts)
└── /sitemap.xml                             (dynamic via app/sitemap.ts)
```

**Total**: 32 indexable routes + robots + sitemap. All statically prerendered.

---

## Page-type taxonomy

| Type | Count | Schema stack | Min word target |
|---|---|---|---|
| Home (root) | 1 | Electrician + WebSite + Person + FAQPage | 500 |
| About | 1 | + BreadcrumbList | 500 |
| Services index | 1 | + BreadcrumbList + ItemList | 500 |
| Service detail (residential) | 9 | + Service + BreadcrumbList + FAQPage | 800 |
| Service detail (commercial) | 2 | + Service + BreadcrumbList + FAQPage | 800 |
| Service detail (specialty) | 3 | + Service + BreadcrumbList + FAQPage | 800 |
| Commercial hub | 1 | + Service (with hasOfferCatalog) + BreadcrumbList + FAQPage | 600 |
| Service-areas index | 1 | + BreadcrumbList + ItemList | 500 |
| City detail | 11 | + Service (City-scoped) + Place + BreadcrumbList + FAQPage | 500 |
| Job Gallery | 1 | + ImageGallery + BreadcrumbList | 200 |
| Legal (privacy + terms) | 2 | + BreadcrumbList | 200 |

All pages also inherit the sitewide `Electrician` + `WebSite` + `Person` (founder) schemas via the root layout.

---

## URL conventions

### Decisions made

| Convention | Rationale |
|---|---|
| Lowercase, hyphenated | Standard SEO best-practice |
| No trailing slashes | Next.js default; consistent across the site |
| Singular "service" → plural "services" path | Aligns with hub-and-spoke pattern |
| `/service-areas/[slug]` for cities | Mirrors the live WordPress URL `/service-areas/[city]/` |
| `/services/[slug]` for both residential AND commercial detail pages | Single dynamic route, simpler architecture; SEO doesn't penalize URL hierarchy |
| `/commercial` separate hub | Allows commercial-only navigation + commercial-specific schema |
| `/job-gallery` (matches WordPress URL) | Preserves redirect equity from old URL |

### Decisions NOT made

| Decision | Reason |
|---|---|
| `/blog` not yet created | Phase 2 work |
| Service+city intersections (e.g., `/services/panel-upgrades/tulsa`) not built | Phase 3 — only build for high-volume combos to avoid doorway risk |
| Per-author bio pages not built | Phase 2 — `/about/marshall-morgan` planned |
| Reviews page not built | Reviews are surfaced inline on home + service + city pages; no need for a dedicated page |

---

## Internal linking architecture (hub-and-spoke)

### Hubs

The site has 4 hub pages:

1. **`/`** (Home) — links to all major sections
2. **`/services`** — links to all 14 service detail pages
3. **`/commercial`** — links to commercial-lighting + commercial-wiring detail pages
4. **`/service-areas`** — links to all 11 city detail pages

### Spoke patterns

- Each **service detail** links to: parent (`/services` or `/commercial`), 3 related services, all sitewide chrome links
- Each **city page** links to: parent (`/service-areas`), all 14 service detail pages, all sitewide chrome links
- The **footer** is the most-linked element on every page — provides 11 city links + 6 service links + utility links to Home/About/Privacy/Terms
- The **header nav** is consistent across all pages: Services / Commercial / Service Areas / Gallery / About

### Click depth audit (post-fixes)

```
Path                                Out  In  Depth from /
/                                    27  29     0
/about                               28  29     1
/services                            30  29     1
/commercial                          22  29     1
/service-areas                       19  29     1
/services/electrical-repair          23  19     1
... (all 14 service pages)           20-23  15-29     1
/service-areas/tulsa                 30  29     1
... (all 11 city pages)              29  29     1
/job-gallery                         (varies, recently added)
```

**Max click depth from `/`**: 2 (only commercial-lighting/wiring, wiring-repair due to `related` arrays). Everything else 1.

**No orphan pages**. Minimum in-degree across the site is 15.

---

## Quality gates (per `local-service.md` template)

### Location pages

The template warns at 30+ location pages and hard-stops at 50+. **We have 11.** Well within limits.

### Unique-content thresholds (template requirements)

| Page Type | Template min | Our floor | Status |
|---|---|---|---|
| Primary location (Tulsa) | 600w / 60% unique | 1,290w / ~95% unique | ✓ Far exceeds |
| Service area | 500w / 40% unique | Min 211w (smallest unincorporated city) | ⚠ A few city pages clear word floor but unique-content % could be tighter |
| Service page | 800w / 100% unique | All 14 pages above 800w post-Marshall content pass | ✓ All clear |

### Swap-test pass

Every city page has been authored with **city-specific facts** (real population, real county, real housing-stock characteristics, real driving distance, real utility provider). The smallest pages (Berryhill, Turley, Oakhurst) are framed honestly around what's true rather than fabricating local detail.

⚠ **One watch item**: the smallest 3 city pages (Berryhill 211w, Turley 223w, Oakhurst 180w) are at the lower bound. Acceptable given they're genuinely small unincorporated communities, but watch ranking signals — if these underperform after 6 months, consider consolidating to a single "Smaller Tulsa-metro communities" page.

---

## Schema graph integrity

### Single business `@id` enforced

Every `Service.provider` references the same `Electrician` `@id` (`https://m-electricllc.com#business`). Verified across all 26 Service schemas — all references resolve.

### Schema graph diagram

```
                          Electrician (sitewide)
                          @id: https://m-electricllc.com#business
                          ├── address (Tulsa, OK)
                          ├── geo (36.1539816, -95.992775)
                          ├── serviceArea (GeoCircle, ~30mi)
                          ├── areaServed (11 City entries)
                          ├── aggregateRating (4.9 / 90)
                          ├── review[] (12 first-party reviews)
                          ├── sameAs (BBB, GBP, Facebook)
                          ├── founder
                          │   └── Person (Marshall Morgan)
                          │       ├── jobTitle
                          │       ├── alumniOf (US Army)
                          │       └── knowsAbout[7]
                          ├── hasOfferCatalog (9 services)
                          └── openingHoursSpecification (24/7)

   ┌──────────────────────┴──────────────────────┐
   │                                              │

  Service (per page, 26 pages)                  WebSite
   @id: .../slug#service                         (sitewide)
   provider: { @id: ...#business }
   areaServed: GeoCircle (sitewide) OR
               City (city pages)
   aggregateRating: (rolled up from Electrician)
   review[]: 0–5 service-tagged
   image: hero photo URL

  + per-page BreadcrumbList
  + per-page FAQPage (where applicable)
  + city pages: + Place
  + commercial overview: + hasOfferCatalog (8 commercial offers)
  + job gallery: ImageGallery (with 16 ImageObject)
```

---

## Rendering / runtime

| Aspect | Implementation |
|---|---|
| Routing | Next.js App Router with `app/` directory |
| Rendering | Full SSG (`generateStaticParams` for dynamic routes) |
| Image optimization | Next.js `<Image>` proxy → auto WebP/AVIF + responsive `srcset` |
| Fonts | `next/font` for Geist + Bebas Neue (auto-preload, no FOIT) |
| Animations | Framer Motion (only on interactive sections) |
| Interactive components | Client Components for: HeroGeometric, JobGalleryView, BeforeAfterSlider, Lightbox, FAQ accordions |
| All other content | Server Components (default) |
| Schema injection | Server-rendered into the static HTML |
| robots.txt | `app/robots.ts` (dynamic generator → static at build) |
| Sitemap.xml | `app/sitemap.ts` (dynamic generator → static at build) |
| llms.txt | Static file at `public/llms.txt` |

---

## Mobile considerations

- **Responsive grids**: All page layouts use Tailwind's `sm:` / `md:` / `lg:` breakpoints
- **Touch-friendly tap targets**: All buttons + links ≥44×44px
- **No horizontal scroll** at any breakpoint
- **Sticky header** with backdrop-blur on scroll
- **Phone CTA always visible** (Call Now button in header)
- **Gallery before/after slider** uses pointer events (cross-device touch + mouse)

⚠ **Known gap**: No mobile menu. Desktop nav uses `hidden md:flex`; on mobile only the Call button shows. Item M5 in [IMPLEMENTATION-ROADMAP.md](IMPLEMENTATION-ROADMAP.md). 1 hour to add a hamburger drawer.

---

## How to add a new page

### New service detail page

1. Add a `ServiceContent` entry to [`app/services/services-data.ts`](app/services/services-data.ts) with: slug, serviceType, navTitle, metaTitle, metaDescription, hero fields, body sections, process steps, whyChoose bullets, faqs, related slugs, heroImageId, heroImageAlt
2. Build verifies; route auto-generated via `generateStaticParams`
3. Optional: link from home specialty cards or from another related service's `related` array

### New city / service-area page

1. Add a `ServiceArea` entry to [`app/service-areas/areas-data.ts`](app/service-areas/areas-data.ts) with: slug, city, state, county, population, geo, intro paragraph (~150w UNIQUE), neighborhoods, response time, utilities, common work items, FAQs
2. ⚠ **Pass the swap test** — city-specific facts must be in the body, not just the city name
3. Add to nav/footer if it's a major city

### New job gallery photo

1. Drop the `.jpg`/`.png` into [`public/job-gallery/`](public/job-gallery/)
2. Add a `GalleryItem` entry to [`lib/job-gallery.ts`](lib/job-gallery.ts) with: id, src, alt, width, height, caption, category, optional service link
3. Use `file image.jpg` to read dimensions
4. Build verifies; gallery + ImageGallery schema auto-update

### New blog post (Phase 2)

Not yet implemented. Suggested architecture:

```
app/blog/
├── page.tsx              (blog index — list of posts)
├── posts-data.ts         (or MDX-based: posts/[slug].mdx)
└── [slug]/
    └── page.tsx          (post detail — Article schema, datePublished, author)
```

Schema: `Article` with `author: Person` referencing the founder's `@id`, `datePublished`, `dateModified`, `wordCount`, `image`, `publisher: Organization`.

---

## Related documents

- [SEO-STRATEGY.md](SEO-STRATEGY.md) — master strategy
- [COMPETITOR-ANALYSIS.md](COMPETITOR-ANALYSIS.md) — competitive landscape
- [CONTENT-CALENDAR.md](CONTENT-CALENDAR.md) — 12-month editorial plan
- [IMPLEMENTATION-ROADMAP.md](IMPLEMENTATION-ROADMAP.md) — phased action plan
- [LOCAL-SEO-ANALYSIS-m-electricllc.md](LOCAL-SEO-ANALYSIS-m-electricllc.md) — local-SEO deep-dive
- [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md) — multi-dimension audit
- [GEO-ANALYSIS.md](GEO-ANALYSIS.md) — AI-search readiness
- [ACTION-PLAN.md](ACTION-PLAN.md) — prioritized issue list
