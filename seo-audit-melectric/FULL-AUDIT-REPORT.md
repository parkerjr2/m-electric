# Full SEO Audit — m-electricllc.com

**Audit date:** 2026-04-30
**Site:** https://m-electricllc.com (M Electric, LLC — electrician, Tulsa, OK)
**Business type detected:** Local Service-Area Business (SAB), 25-year electrician, family-owned, Army-veteran-owned, WordPress + Yoast SEO, programmatic city × service architecture
**Pages declared in sitemaps:** 389 (34 in `page-sitemap.xml`, 355 in `service_page-sitemap.xml`)

---

## SEO Health Score: **34 / 100** — POOR

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 22 | 4.8 |
| Content Quality | 23% | 34 | 7.8 |
| On-Page SEO | 20% | 50 | 10.0 |
| Schema / Structured Data | 10% | 16 | 1.6 |
| Performance (CWV) | 10% | 48 | 4.8 |
| AI Search Readiness (GEO) | 10% | 18 | 1.8 |
| Images | 5% | 65 | 3.3 |
| **Total** | **100%** | — | **34** |

Supplementary scores (not in weighted total):
- SXO (search experience): 41 / 100
- Local SEO: 38 / 100
- Backlinks: 35 / 100
- Visual / UX: 42 / 100
- Sitemap quality: 38 / 100

---

## Executive Summary

**The headline finding: 70% of the URLs in `/page-sitemap.xml` return real HTTP 404s.** The site went through a URL migration (old `/residential-services-tulsa/...` structure → new `/residential-services/{city}-ok/{service}/` structure) but the editorial layer was never updated. As a result:

- `/about/` 404s
- `/contactus/` 404s
- `/job-gallery/` 404s
- `/emergency-services-tulsa/` 404s
- All 8 sub-items in the homepage's "Residential" dropdown 404 (`/residential-services-tulsa/electrical-repairs-tulsa/`, `/panel-upgrades-tulsa/`, etc.)
- All 2 sub-items in the homepage's "Commercial" dropdown 404
- All 3 sub-items in the homepage's "Specialized" dropdown 404
- The hub `/service-areas/` 404s
- 2 of 11 named service-area cities (Glenpool, Sapulpa) 404

**Even worse: when users land on a 404 page, the WordPress 404 template displays a leftover "Gym Website / Join our tribe / © 2020 Fitness & Gym Website" footer** — a placeholder from initial theme installation that was never customized. This appears on dozens of dead URLs and is brand-damaging.

The **programmatic city × service grid (286 residential + 69 commercial pages, new URL structure) is largely intact (97% alive in random sample)** and at least one sample (Broken Arrow) shows good locally-specific content. So the site has real SEO substance underneath — it's just buried under a broken editorial layer and missing every supporting trust signal.

Compounding issues:
- `/robots.txt` returns 404 entirely
- `/llms.txt` is missing
- GPTBot, ClaudeBot, and CCBot are blocked at the TCP level (no AI training-corpus presence)
- Schema is wrong type (`Organization` instead of `Electrician`/`LocalBusiness`) with no NAP, no `areaServed`, no hours, no services
- Sitemap declares URLs with `http://` scheme on an HTTPS site

The site is, in effect, a working homepage and a working programmatic city × service grid — but every navigational link a visitor would reasonably click takes them to a 404 with placeholder branding.

---

## Top 5 Critical Issues (fix immediately)

1. **24 of 34 URLs in page-sitemap.xml return HTTP 404.** Includes /about/, /contactus/, /job-gallery/, /emergency-services-tulsa/, all `/residential-services-tulsa/*`, all `/commercial-services-tulsa/*`, all `/specialized-services-tulsa/*`, /service-areas/, /service-areas/glenpool/, /service-areas/sapulpa/.
2. **Homepage navigation menu links to those dead URLs.** Every nav click except "Home" leads to a 404.
3. **404 template renders "Gym Website" placeholder branding.** Footer shows "© 2020 Fitness & Gym Website All rights reserved" on every 404 page.
4. **Schema is wrong type** (Organization, not Electrician/LocalBusiness) with no NAP, areaServed, openingHoursSpecification, or hasOfferCatalog.
5. **GPTBot / ClaudeBot / CCBot blocked at TCP level** — site is excluded from major AI training datasets and Common Crawl.

## Top 5 Quick Wins (fix this week)

1. **Create `/robots.txt`** with `Sitemap: https://m-electricllc.com/sitemap_index.xml` directive. (5 minutes)
2. **Fix WordPress `Site Address (URL)` to `https://`** — auto-corrects all `http://` references in the sitemap. (1 minute, 1 admin field)
3. **Update homepage nav menu** to point at live URLs (`/residential-services/`, `/commercial-services/`, etc.). (15 minutes in WP admin)
4. **Add 4 trust badges immediately under H1** — "Veteran-Owned · Licensed · Bonded · Insured · Since 1999". (30 minutes)
5. **Replace `Organization` schema with `Electrician` schema** including NAP, all 11 cities in `areaServed`, full `hasOfferCatalog`, `openingHoursSpecification`. (Ready-to-paste JSON-LD in `schema-findings.md`. 15 minutes via WPCode plugin.)

---

## Detailed Findings

| Section | File |
|---|---|
| Technical SEO | [technical-findings.md](technical-findings.md) |
| Content Quality (E-E-A-T) | [content-findings.md](content-findings.md) |
| Schema / Structured Data | [schema-findings.md](schema-findings.md) |
| Sitemap Architecture | [sitemap-findings.md](sitemap-findings.md) |
| Performance (CWV) | [performance-findings.md](performance-findings.md) |
| Visual / Mobile UX | [visual-findings.md](visual-findings.md) |
| GEO / AI Search | [geo-findings.md](geo-findings.md) |
| Local SEO | [local-findings.md](local-findings.md) |
| SXO (Search Experience) | [sxo-findings.md](sxo-findings.md) |
| Backlinks | [backlinks-findings.md](backlinks-findings.md) |

Screenshots (mobile + desktop, ATF + full): [screenshots/](screenshots/)
Sample page HTML: `homepage-googlebot.html`, `about.html`, `contact.html`, `panel-upgrades.html`, `broken-arrow.html`, `emergency.html`
URL sweeps: `page-sweep-results.txt`, `url-sweep-results.txt`

---

## What's working

- Homepage loads cleanly with phone number visible above the fold (mobile + desktop)
- Title (67 chars) and meta description (155 chars) are well-tuned
- 1 H1, valid canonical, valid viewport meta, mobile-responsive
- HTTPS with HTTP→HTTPS 301 redirect in place
- Programmatic city × service grid (~355 URLs) is mostly alive
- One audited city service-area page (Broken Arrow) shows real localized content (specific neighborhoods)
- All homepage images have `alt` text
- BBB profile exists; Google Business Profile exists (`g.page/m-electric-llc`)
- Trustindex review widget integrated (4.5+ stars, per SXO finding)
- Site has been online and operating since 1999 — domain age & business age are real assets

---

## Audit limitations / caveats

- **No Google API credentials** — could not pull real CrUX field data for CWV, GSC URL indexation status, or GA4 organic traffic.
- **No Moz / Bing Webmaster Tools API** — backlink scoring relies on Common Crawl alone, which under-counts due to CCBot block.
- **No DataForSEO MCP** — no live SERP rank tracking, no per-keyword position data.
- **Could not deeply audit all 286 small-town programmatic pages** — only sampled 30 random URLs. Doorway-page risk on smallest cities (Verdigris, Lotsee, Liberty, Justice, etc.) was flagged by the sitemap subagent and not refuted.
- **Visual subagent terminated before final analysis** — 12 screenshots were saved but the agent's analysis was completed inline here.
- **Several SEO subagents terminated before saving findings** (technical, content, performance, GEO, local, backlinks) — those reports were written inline using directly-collected data. The 3 subagents that completed cleanly (schema, sitemap, sxo) delivered their own reports.
