# Full SEO Audit — m-electricllc.com

**Date**: 2026-05-01
**Pages analyzed**: 30 (production-built static HTML at `.next/server/app/`)
**Method**: Static site crawl of prerendered output. The site has no live URL; what's measured here is what `next start` would serve and what crawlers would see.

---

## SEO Health Score: **86 / 100**

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 95 | 20.9 |
| Content Quality | 23% | 82 | 18.9 |
| On-Page SEO | 20% | 85 | 17.0 |
| Schema | 10% | 95 | 9.5 |
| Performance (CWV)* | 10% | 80 | 8.0 |
| AI Search Readiness | 10% | 75 | 7.5 |
| Images | 5% | 90 | 4.5 |
| **Total** | **100%** | | **86.3** |

\* Performance is estimated from the build artifact (SSG, Next/Image, set aspect ratios); not field-measured. Run [PageSpeed Insights](https://pagespeed.web.dev/) post-deploy for real CrUX data.

**Business type**: Service Area Business (SAB) — family-owned residential and light-commercial electrician.
**Industry vertical**: Home Services — Electrician.

---

## Executive Summary

### Top 5 Critical / High issues

1. 🔴 **3 pages have zero `og:image`** — `/about`, `/services`, `/service-areas`. Their layout files override `openGraph` without preserving the parent's `images` key. Social shares of these URLs render no preview image. Blocks ~10–15% expected social-share CTR.
2. 🟠 **7 title tags exceed 70 characters** — Google truncates them in SERPs. Notable: `/services/sand-springs` (77c), `/services/ev-charger-installation` (77c), `/services` (76c).
3. 🟠 **`/about` meta description is 187 characters** (Google truncates around 160c). The end of the description is cut in SERP previews.
4. 🟠 **Off-page entity gap** — zero detectable Wikipedia, Reddit, YouTube, or LinkedIn brand presence. Brand mentions correlate **3× more strongly** with AI-search visibility than backlinks (Ahrefs 2025).
5. 🟠 **Bing Places not claimed** — ChatGPT, Copilot, and Alexa source from Bing, not GBP. Largest invisible channel currently.

### Top 5 quick wins

1. Fix the 3 missing `og:image` references (one-line `images: parent.openGraph?.images` per layout)
2. Trim 7 over-length title tags by 5–10 characters each
3. Tighten `/about` meta description from 187 → ≤160 chars
4. Claim Bing Places of Business (free, ~30 min, ChatGPT discovery surfaces immediately)
5. Generate a per-page custom OG image (currently uses Unsplash photo — branded text-on-red would convert better)

---

## Technical SEO — 95 / 100

### What's working

- ✓ **`robots.txt`** — explicit `Allow: /` for all 8 major AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended) plus wildcard
- ✓ **Sitemap** — `/sitemap.xml` lists all 30 prerendered routes with `lastmod`, `changefreq`, `priority`
- ✓ **Canonical** — every page has a self-referencing canonical, 30/30
- ✓ **Static Site Generation** — full prerender via Next 16 SSG. AI crawlers (which don't run JS) see 100% of content
- ✓ **`/llms.txt`** — present, 5,959 bytes, lists all major URLs grouped by category
- ✓ **HTTP status codes** — `next build` reports clean (no 404s in linked routes)
- ✓ **Mobile responsive** — Tailwind CSS, viewport meta correct
- ✓ **Internal link graph** — every page has 20+ unique internal outbound links, max click depth 2 from root, **no orphan pages**

### What's missing

- ⚠ **No live URL deployed** — can't measure HTTPS, HSTS, CSP, or actual response codes
- ⚠ **No mobile menu** — desktop nav uses `hidden md:flex`; on mobile only the Call button shows. Not a crawl issue (Google parses both viewports), but UX/CWV-adjacent
- ⚠ **No `/services/[slug]/` trailing-slash redirect** — `next build` settled this but Vercel/host may serve both with/without slash duplicates depending on config

---

## Content Quality — 82 / 100

### Distribution

| Metric | Value |
|---|---|
| Total visible words across 30 pages | 23,532 |
| Min page word count | 306 (`/service-areas/oakhurst` — smallest unincorporated city) |
| Median | 748 |
| Max | 1,290 (`/service-areas/tulsa` — flagship city page) |
| Pages flagged as thin (<300w) | **0** |
| Pages with FAQ schema | 27 / 30 |

### What's working

- ✓ **No thin content** — every page clears the 300-word threshold
- ✓ **Real Google reviews integrated** — 12 first-party reviews with author + date in JSON-LD; testimonials on home, service, and area pages with "Verified Google Review" attribution
- ✓ **Founder mention with credentials** — Marshall Morgan, US Army veteran, Oklahoma CIB licensed
- ✓ **City pages avoid the doorway pattern** — each one cites real neighborhoods, real housing-stock characteristics, real utility, real driving distance, real common work
- ✓ **No duplicate titles** detected across 30 pages

### What's weaker

- ⚠ **Keyword profile is locale-heavy, service-light**:
  - `tulsa` density: 3.17% (slightly above the 1–3% ideal range — at the upper limit, not stuffing yet)
  - `electrician` density: only 0.27%
  - `tulsa electrician` exact phrase: only **9 occurrences** sitewide across 30 pages — that's the keyword the title and H1 target most aggressively

- ⚠ **Founder content is sparse on dedicated pages** — Marshall is mentioned across pages but there's no `/about/marshall-morgan` Person-schema-backed bio page that AI systems could cite as the "expert behind the brand"

---

## On-Page SEO — 85 / 100

### Title tags

| Issue | Count | Pages |
|---|---|---|
| `>70 chars` (truncation risk) | **7** | see below |
| `<30 chars` | 0 | – |
| Duplicates | 0 | – |
| Missing | 0 | – |

**Over-length titles** (in chars):

```
77  /service-areas/sand-springs
77  /services/ev-charger-installation
76  /services
74  /services/commercial-lighting
73  /about
73  /service-areas/glenpool
71  /service-areas/owasso
```

### Meta descriptions

| Issue | Count | Pages |
|---|---|---|
| `>180 chars` | **1** | `/about` (187c) |
| `<120 chars` | 0 | – |
| Missing | 0 | – |

### Heading hierarchy

- ✓ All 30 pages have **exactly 1 `<h1>`**
- ✓ No `H2 → H4` skips detected (post-recent fix on `/about` and service pages)
- ✓ **91 question-shaped H2/H3 headings** sitewide (FAQ accordions) — strong AI/SERP feature signal

### Internal linking

After the recent linking fix (footer + about page), the link graph is dense and healthy:

| Metric | Result |
|---|---|
| Min outbound unique links per page | 20 (`/service-areas` index) |
| Max | 30 (`/services` index + city pages) |
| Min in-degree | 15 (commercial-lighting/wiring — fewest inbound) |
| Max in-degree | 29 (every page that's in the footer or sitewide nav) |
| Click depth from `/` | max 2 |
| Orphan pages | 0 |

---

## Schema & Structured Data — 95 / 100

### Coverage

| Schema | Where | Count |
|---|---|---|
| `Electrician` | sitewide via root layout | 30/30 |
| `WebSite` | sitewide via root layout | 30/30 |
| `BreadcrumbList` | every non-root page | 30/30 |
| `Service` | service detail + commercial overview + city pages | 26/30 |
| `FAQPage` | home + 14 service pages + 11 city pages + commercial | 27/30 |
| `Place` | each city page | 11/30 |
| `ItemList` | services + service-areas index | 2/30 |
| `aggregateRating` | inside Electrician + each Service | sitewide |
| `review` array | 12 first-party reviews on Electrician | sitewide |

### Schema-graph integrity

✓ **Single `Electrician` `@id`** (`https://m-electricllc.com#business`) — not fragmented across pages
✓ **All 26 `Service.provider` references resolve** to the same business `@id`
✓ **`sameAs`** points at BBB, Google Business Profile, Facebook
✓ **`GeoCircle`** on the business + every Service: 30-mile radius around Tulsa centroid (36.1539816, −95.992775)
✓ **Per-page `Service.areaServed`** on city pages narrows to a single `City` with proper `containedInPlace: AdministrativeArea`

### What's missing

- ⚠ No `Person` schema for Marshall Morgan as `founder` — would link the business entity to the human expert
- ⚠ No `numberOfEmployees` field
- ⚠ Reviews use `LocalBusiness.review` style — **policy reminder**: Google's structured-data policy expects reviews to be first-party-collected. Reviews here are public Google reviews republished with attribution. Defensible (real, dated, attributed) but if Google ever flags it the JSON-LD `review[]` may need to be removed (the on-page testimonials would be unaffected)

---

## Performance — 80 / 100 *(estimated, not field-measured)*

Cannot compute LCP, INP, or CLS without a deployed URL. The audit is based on signals in the build artifact:

| Signal | Status |
|---|---|
| SSR / SSG (zero JS-rendered content) | ✓ Full SSG |
| Next.js `<Image>` (auto WebP/AVIF) | ✓ All hero photos |
| Aspect ratios on `Image fill` containers | ✓ All set (CLS-safe) |
| Hero image with `priority` | ✓ Set on city + service detail page heroes |
| Below-fold `loading="lazy"` | 10/86 images (mostly correct — header/footer logos and `priority` heroes are eager by design) |
| Render-blocking JS (Framer Motion) | Bundle size impact: small. Framer is used for animation only |
| Custom font count | 2 (Geist + Bebas Neue), both via `next/font` (auto-preloaded, no FOIT) |
| External script tags | 0 — no analytics, no chat, no third-party tracking |

**Recommendation**: After deploy, run [PageSpeed Insights](https://pagespeed.web.dev/) for real CrUX field data. The score above is a structural estimate.

---

## AI Search Readiness — 75 / 100

### What's working

- ✓ `/llms.txt` present (5,959 bytes, all URLs grouped)
- ✓ All 8 major AI crawlers explicitly allowed in `robots.ts`
- ✓ Full SSG ⇒ JS-disabled crawlers see complete content
- ✓ **27/30 pages have `FAQPage` schema** — primary AI extraction signal
- ✓ **91 question-shaped H2/H3 headings** sitewide
- ✓ Schema-graph entity disambiguation: single `Electrician` `@id`, `sameAs` to BBB/GBP/Facebook, `aggregateRating`, dated `review[]`, `GeoCircle`
- ✓ Per-page hero image with descriptive alt — improves image-citation eligibility

### What's weak

| Gap | Impact |
|---|---|
| **0 detectable Wikipedia / Wikidata presence** | High weight in ChatGPT (47.9% of citations) |
| **0 detectable Reddit / r/tulsa presence** | 46.7% of Perplexity citations |
| **0 detectable YouTube channel presence** | Strongest AI-citation correlate per Ahrefs (~0.737) |
| **0 detectable LinkedIn company page** | Moderate AI weight |
| **Bing Places not claimed** | Powers ChatGPT, Copilot, Alexa local recommendations |
| **Only 2 paragraphs in the 134–167w "optimal answer block" range** | 404 paragraphs total. Most are short marketing copy or headings; FAQ answers are the citation candidates but they're inside `<div>` not `<p>` (still extractable but less semantically clear) |
| **`tulsa electrician` exact phrase: only 9 occurrences sitewide** | Title/H1 target this phrase but body copy uses it sparingly |

---

## Images — 90 / 100

| Metric | Value |
|---|---|
| Total `<img>` tags rendered | 86 |
| With alt text (incl. intentional empty `""` for decorative) | **86 / 86 (100%)** |
| Decorative (alt="") | 1 (parallax background) |
| Lazy-loaded | 10 (correct — most are above-fold logos or `priority` hero photos) |
| Format | WebP/AVIF (via Next.js `_next/image` proxy with content negotiation) |
| Responsive `srcset` | All hero images (full breakpoint range from 384w to 3840w) |

### What's missing

- ⚠ **`/og-default.jpg` referenced by sitewide layout doesn't exist** in `public/` — but the actual rendered `og:image` was redirected to an Unsplash URL. The dead static reference is leftover but unused.
- ⚠ **Stock Unsplash photos** instead of real on-the-job photography. Real photos would help E-E-A-T and GBP photo signals (45% more direction requests with photos per Agency Jet)
- ⚠ **No `<img>` width/height** attributes on the SVG logos in header/footer (negligible CLS risk for SVGs but lint-best-practice would add them)

---

## Sitewide stats

```
Sitemap:                  30 URLs
robots.txt:               9 user-agent blocks (8 AI + wildcard)
llms.txt:                 5,959 bytes (covers all URLs + key facts)
Schema graph:             single Electrician @id, all Services link to it correctly
Internal link health:     no orphans, max click depth 2
Word count median:        748 / page (well above thin-content threshold)
Reviews integrated:       4.9 ★ / 90+ count (sitewide aggregateRating)
Total prerendered routes: 30 + sitemap.xml + robots.txt + favicon.ico
```

---

## Limitations of this audit

What this audit could **not** measure (gaps that need a live URL or paid tool):

- **Real Core Web Vitals** (LCP, INP, CLS) — need PageSpeed / CrUX field data post-deploy
- **Actual ranking position** for "Tulsa electrician" / related queries — need DataForSEO, Semrush, Ahrefs, or manual SERP checks
- **Backlink profile** — referring domains, anchor text distribution, spam scores. Need Moz/Ahrefs/Majestic
- **Domain Authority / Page Authority** — need Moz API
- **GBP Insights** — direction requests, calls, photo views, search queries. Need Google Business Profile API access
- **Real AI citation rate** — whether ChatGPT/Perplexity/AIO cite the site for target queries today. Need DataForSEO `ai_optimization_chat_gpt_scraper`
- **Long-tail citation accuracy** across 100+ directories. Need BrightLocal / Whitespark / Yext
- **Competitor comparison** vs Mister Sparky, Mr. Electric Tulsa, etc.

---

See [ACTION-PLAN.md](ACTION-PLAN.md) for prioritized fixes.
