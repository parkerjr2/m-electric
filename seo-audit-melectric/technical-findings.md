# Technical SEO Audit — m-electricllc.com
**Audit date:** 2026-04-30
**Auditor:** Inline (subagent did not save report; full data collected directly)

---

## CRITICAL — 70% of "page" sitemap returns HTTP 404

The site has been migrated from an old URL structure (`/residential-services-tulsa/...`, `/commercial-services-tulsa/...`, `/specialized-services-tulsa/...`) to a new programmatic structure (`/residential-services/{city}-ok/{service}/`), but **the page-sitemap.xml still references the old structure** AND **no 301 redirects are in place**.

**Sweep of all 34 URLs in `/page-sitemap.xml`:**

| Status | Count | Examples |
|---|---|---|
| **404** | **24 (71%)** | `/about/`, `/contactus/`, `/job-gallery/`, `/emergency-services-tulsa/`, all `/residential-services-tulsa/*`, all `/commercial-services-tulsa/*`, all `/specialized-services-tulsa/*`, `/service-areas/`, `/service-areas/glenpool/`, `/service-areas/sapulpa/` |
| 200 | 10 | `/`, `/service-areas/{bixby,jenks,tulsa,berryhill,broken-arrow,oakhurst,owasso,sand-springs,turley}/` |

**Random sweep of 30 URLs from the service-sitemap (programmatic city × service grid):** 29 / 30 → 200 OK. Only one `-2` slug collision returned 404 (`/residential-services-tulsa/lighting-indoor-tulsa-2/`).

**Site nav still points at the dead URLs.** Homepage nav links from the rendered HTML include `/about/`, `/contactus/`, `/job-gallery/`, `/residential-services-tulsa/...` (8 links), `/commercial-services-tulsa/...` (2 links), `/specialized-services-tulsa/...` (3 links). Every one of these navigation items 404s.

**Real-user impact:** A visitor clicking "About," "Contact Us," "Job Gallery," or any sub-item in the Residential / Commercial / Specialized dropdowns lands on a 404 page. Phone number does still display in the header on the homepage, but on a 404 page the user sees a "Page not found" template with a footer that visibly says **"Gym Website / Join our tribe / © 2020 Fitness & Gym Website All rights reserved"** (verified via screenshots — the 404 template is using leftover placeholder content from theme installation).

---

## CRITICAL — User-Agent based response anomaly

| User-Agent | Status |
|---|---|
| Default Chrome / Mozilla (`Mozilla/5.0 ... Chrome/131.0.0.0`) | **403** |
| Safari, Firefox, iPhone Safari | 200 |
| Googlebot, Bingbot | 200 |
| ChatGPT-User, PerplexityBot, OAI-SearchBot | 200 |
| **GPTBot, ClaudeBot, CCBot** | **000 (TCP refused / connection terminated)** |
| Plain `curl/8.0.0`, `python-requests/2.31` | 200 |

**Two distinct issues:**
1. **Chrome UA returns 403 to non-JS clients.** Real browsers pass the JS challenge; headless tools, accessibility scanners, and some monitoring services do not. Low end-user impact but blocks legitimate analyzers.
2. **GPTBot, ClaudeBot, CCBot are blocked at network level.** This means the site is **excluded from OpenAI's training corpus, Anthropic's training corpus, and Common Crawl** (cc-main-2026-jan/feb/mar shows the domain "below ranking threshold," referring domains sample = 0 — a direct consequence of the CCBot block).

---

## HIGH — robots.txt is missing (HTTP 404)

`/robots.txt` returns 404. With **no `Sitemap:` directive anywhere on the domain**, sitemap discovery depends entirely on:
- Yoast convention-crawl (Googlebot finds `/sitemap.xml` by trying it)
- Manual GSC submission

**Bing/DuckDuckGo/Yandex have no automatic discovery path.** Combined with the AI bot blocks, this is a textbook GEO/AEO own-goal.

---

## HIGH — Mixed http/https declarations in sitemap

The `<sitemap>` index entries use `http://` URLs:
```xml
<loc>http://m-electricllc.com/page-sitemap.xml</loc>
<loc>http://m-electricllc.com/service_page-sitemap.xml</loc>
```

The actual sites are HTTPS-only (a 301 redirect from `http://` is in place — good — but the redirect chain wastes crawl budget on every sitemap pull). Same issue affects `<image:loc>` entries throughout `page-sitemap.xml`. Root cause: WordPress `Site Address (URL)` setting in `wp-options` still has `http://`. One-field fix in WordPress admin.

---

## MEDIUM — Page architecture issues

- **1 H1 on the homepage (good).** "Trusted Electrical Services in Tulsa, OK"
- **23 H2s on the homepage (excessive).** Templated WordPress block dump. Should be ~5–8 strategic H2s.
- **0 H3s.** No hierarchical depth — all section headers are at H2.
- **Text-to-HTML ratio: 4.0%** (4,702 chars body text in 117 KB HTML). Target is 15–25%. Indicates heavy templating, embedded styles/scripts, low actual content density.
- **Body word count: 683** (homepage). Acceptable for a landing page but light on content vs. competitors. The "best electrician in Tulsa" SERP frequently rewards 1,200–2,000+ word pages.

---

## MEDIUM — Security headers minimal

| Header | Present? |
|---|---|
| `Strict-Transport-Security` (HSTS) | ❌ Missing |
| `Content-Security-Policy` | ❌ Missing |
| `X-Frame-Options` | ❌ Missing |
| `X-Content-Type-Options: nosniff` | ❌ Missing |
| `Referrer-Policy` | ❌ Missing |
| `Permissions-Policy` | ❌ Missing |
| `Server: nginx` | exposed (low risk but unnecessary) |

HTTPS itself is fine (HTTP→HTTPS 301 confirmed) and TLS is current. But the absence of HSTS means the site could be SSL-stripped on first visit.

---

## LOW — Indexability checks pass on living pages

- Homepage `<meta name="robots">`: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` (Yoast default — correct)
- Canonical: `https://m-electricllc.com/` (correct)
- Viewport meta: `width=device-width, initial-scale=1.0, viewport-fit=cover` (correct)
- Mobile-friendly: passes basic checks (responsive theme)

---

## Technical SEO Score: **22 / 100**

**Rationale:** The 404 epidemic alone is worth ~50 score-points. Add the missing robots.txt, mixed http/https sitemap, broken nav, AI-crawler blocks, and absent security headers, and the page is in the bottom decile for a small business site. The bones (HTTPS, mobile responsive, valid canonicals, Yoast install) are fine — but the migration was botched and never cleaned up.

**Immediate fixes (in order of effort × impact):**
1. **301-redirect every old URL → its new equivalent.** Even if some have no equivalent, redirect to homepage or category root rather than 404.
2. **Update WordPress nav menu** to point at live URLs — this is a 5-minute admin task.
3. **Re-build `page-sitemap.xml`** by removing dead URLs in WordPress (likely deleting the pages outright will regenerate the sitemap).
4. **Create `robots.txt`** with a `Sitemap:` directive.
5. **Fix the `Site Address (URL)` WordPress option** to `https://` (auto-corrects sitemap http/https issue).
