# Sitemap Audit: m-electricllc.com
**Audit date:** 2026-04-30
**Auditor:** Sitemap Architecture Agent

---

## Files Audited

| File | URLs | HTTP Status |
|------|------|-------------|
| `/sitemap.xml` | (index) | 200 |
| `/sitemap_index.xml` | (index) | 200 — identical content to sitemap.xml |
| `page-sitemap.xml` | 34 | 200 |
| `service_page-sitemap.xml` (local: `service-sitemap.xml`) | 355 | 200 |
| **Total declared URLs** | **389** | |

---

## Validation Checks

| Check | Status | Detail |
|-------|--------|--------|
| XML well-formed | PASS | Both sub-sitemaps parse cleanly; valid `<urlset>` with correct namespace |
| Sitemaps.org namespace | PASS | `http://www.sitemaps.org/schemas/sitemap/0.9` present |
| Under 50,000 URL limit | PASS | 389 total URLs, well under limit |
| `priority` / `changefreq` tags | PASS | Not present — good, no noise |
| Sitemap index scheme (http vs https) | FAIL — HIGH | Index `<loc>` entries use `http://` not `https://`; see issue 1 below |
| Page-sitemap `<loc>` scheme | PASS | All 34 `<loc>` entries correctly use `https://` |
| Service-sitemap `<loc>` scheme | PASS | All 355 `<loc>` entries correctly use `https://` |
| Image `<loc>` scheme in page-sitemap | FAIL — MEDIUM | All 114 `<image:loc>` entries use `http://`; will serve mixed-content references |
| `robots.txt` Sitemap directive | FAIL — HIGH | `robots.txt` returns 404; no `Sitemap:` directive pointing to index |
| Duplicate `sitemap.xml` / `sitemap_index.xml` | FAIL — LOW | Both URLs return identical sitemap index content |
| Lastmod accuracy — page-sitemap | WARNING | All 34 pages share a single day: 2025-02-09; sequential 1–2 min gaps suggest bulk-stamp not real edit dates |
| Lastmod accuracy — service-sitemap | WARNING | All 355 URLs share one hour window on 2026-02-12 (16:17–~16:22); bulk-created timestamps, not real edit history |
| `-2` duplicate slugs | FAIL — MEDIUM | 5 WordPress auto-increment collisions (see issue 4) |
| Location page count | WARNING (30+ threshold) | 22 cities × ~13–14 residential sub-pages + 22 cities × ~3 commercial sub-pages = ~350 programmatic pages |
| Parallel URL structure conflict | FAIL — HIGH | Two competing URL trees for the same content (see issue 5) |

---

## Issue 1 — Sitemap Index Uses `http://` for Child Sitemap Locs (HIGH)

**Lines affected:** `sitemap_index.xml` lines 4 and 8

```
http://m-electricllc.com/page-sitemap.xml
http://m-electricllc.com/service_page-sitemap.xml
```

The site itself is HTTPS. Googlebot will follow these HTTP references and likely encounter a redirect chain before reaching the actual XML file. This is a Yoast SEO configuration issue: WordPress `siteurl` is still stored as `http://` in the database. Fix: in WordPress > Settings > General, ensure Site Address is `https://m-electricllc.com`. Yoast regenerates the index from that value.

**Impact:** Google may not be efficiently crawling child sitemaps; Search Console will flag as "couldn't fetch" or show redirect warnings.

---

## Issue 2 — No `robots.txt` (HIGH)

`/robots.txt` returns 404. This has two consequences:

1. No `Sitemap:` directive — Google discovers the sitemap only via Search Console submission or accidental crawl of `/sitemap.xml`. The sitemap is effectively invisible to Googlebot until manually submitted.
2. No crawl budget controls on the 350+ programmatic pages.

**Fix:** Create a `robots.txt` at the domain root with at minimum:
```
User-agent: *
Allow: /

Sitemap: https://m-electricllc.com/sitemap.xml
```

---

## Issue 3 — Stale Lastmod Dates (MEDIUM)

- **page-sitemap.xml:** Every entry is dated 2025-02-09 — all within a 32-minute window. No page has been updated since, or the timestamps are not reflecting real edits.
- **service-sitemap.xml:** All 355 entries are dated 2026-02-12 — created in a ~5-minute bulk generation. Timestamps are effectively synthetic.

Google has documented that it ignores `lastmod` when the dates appear to be bulk-stamped or unreliable. Having identical-batch timestamps reduces the credibility of this signal across the entire domain. If content is genuinely updated, Yoast should be configured to write real post modified dates.

---

## Issue 4 — WordPress Auto-Increment Slug Collisions (MEDIUM)

Five URLs contain `-2` suffixes, indicating Yoast registered duplicate posts that WordPress resolved by appending an increment:

| Collision URL | Type |
|---|---|
| `/residential-services-tulsa/lighting-indoor-tulsa-2/` | Duplicate indoor lighting page (page-sitemap) |
| `/commercial-services/broken-arrow-ok/commercial-electrical-wiring-2/` | Duplicate commercial wiring (service-sitemap) |
| `/commercial-services/tulsa-ok/commercial-lighting-solutions-2/` | Duplicate commercial lighting (service-sitemap) |
| `/residential-services/bixby-ok-2/` | Duplicate city hub (service-sitemap) |
| `/residential-services/bixby-ok/ceiling-fan-installation-2/` | Duplicate service page (service-sitemap) |

The `-2` versions are almost certainly thin duplicates of their `-1` counterparts. They should be audited: if the content is truly duplicate, add `noindex` and 301-redirect to the canonical, then remove from the sitemap.

---

## Issue 5 — Two Parallel URL Architectures for the Same Services (HIGH — Content Quality Risk)

The site maintains two entirely separate URL trees covering overlapping service territory:

**Old structure (page-sitemap.xml, Tulsa-centric):**
- `/residential-services-tulsa/panel-upgrades-tulsa/`
- `/commercial-services-tulsa/wiring-tulsa/`
- `/service-areas/bixby/`, `/service-areas/sapulpa/`, etc.

**New structure (service-sitemap, city × service matrix):**
- `/residential-services/bixby-ok/electrical-panel-upgrades/`
- `/commercial-services/bixby-ok/commercial-electrical-wiring/`

These are separate WordPress post types generating separate indexed URLs. Google is being asked to crawl and evaluate both. The old `/residential-services-tulsa/` pages likely have duplicate or near-duplicate content versus `/residential-services/tulsa-ok/` sub-pages.

**Fix:** Audit for content overlap. Where pages are functionally identical, canonicalize old to new, redirect, and remove old from sitemap.

---

## Issue 6 — Service-Areas Coverage Mismatch (MEDIUM)

`page-sitemap.xml` declares these `/service-areas/` hub pages:
`berryhill, bixby, broken-arrow, glenpool, jenks, oakhurst, owasso, sand-springs, sapulpa, tulsa, turley`

**Glenpool** and **Sapulpa** have `/service-areas/` hub pages in the page-sitemap but zero entries in the service-sitemap city × service matrix. Either these cities were dropped from the new content generation pass, or those service-area pages are orphaned stubs pointing to cities with no corresponding service sub-pages.

**Fix:** Either add glenpool-ok and sapulpa-ok to the service page matrix, or remove the orphaned `/service-areas/glenpool/` and `/service-areas/sapulpa/` pages from the sitemap (and add noindex/redirect if they have thin content).

---

## Issue 7 — Image URLs Use `http://` Scheme (MEDIUM)

All 114 `<image:loc>` entries in page-sitemap.xml reference images via `http://`:
```
http://m-electricllc.com/wp-content/uploads/2022/11/M_Electric_Logo_Tulsa-300x63.png
```

This is the same root cause as Issue 1 (WordPress siteurl stored as http). Fixing the WordPress Site Address to `https://` will resolve both. Until then, Google's image indexing via sitemap is pointing at URLs that will redirect, reducing image crawl efficiency.

---

## Issue 8 — Location Page Quality Gate Warning (WARNING)

**Count:** 22 cities × ~13 residential sub-pages + 22 cities × ~3 commercial sub-pages = approximately 350 programmatic location pages declared in the service-sitemap.

This exceeds the 30-page WARNING threshold. The key question is whether pages like `/residential-services/gregory-ok/ceiling-fan-installation/` contain genuinely unique, city-specific content (local landmarks, specific service details, local pricing context) or are template clones with only the city name swapped.

Thin programmatic location pages are a known doorway-page risk. If these pages are near-identical templated content with city-name substitution only, they represent a significant penalty risk at this volume.

**Recommendation:** Spot-check 5–10 city/service combinations for content uniqueness. If content is >80% identical across cities, consolidate or noindex the weaker-traffic pages and invest in genuine city-specific content for the highest-value cities (Tulsa, Broken Arrow, Owasso, Jenks, Bixby).

---

## Missing Pages Assessment

**Present in sitemap:** `/job-gallery/`, `/about/`, `/contactus/`, `/service-areas/`

**Not in sitemap (check if these exist):**
- No blog/resources section declared — if a blog exists, those URLs are completely invisible to Google via sitemap
- No privacy policy / terms pages (normal to exclude, but worth confirming they are noindexed)
- No team/staff page visible — if one exists it should be included

---

## Sitemap Discoverability Without robots.txt

Without a `robots.txt` carrying a `Sitemap:` directive, Google can discover the sitemap only via:

1. **Google Search Console manual submission** — most reliable path; if already submitted, crawling proceeds but loses the robots.txt path for other crawlers (Bing, etc.)
2. **Crawling `/sitemap.xml` directly** — Googlebot does attempt `/sitemap.xml` and `/sitemap_index.xml` by convention, so there is passive discoverability
3. **Inbound links** — not applicable for XML files

Creating `robots.txt` with a `Sitemap:` directive is the correct fix. It also enables Bing/DuckDuckGo to discover the sitemap without manual submission.

---

## URL Structure Observations

- Consistent trailing slashes throughout — good
- URL slugs are lowercase, hyphenated — good
- `-ok` suffix on city slugs in new structure is slightly verbose but consistent
- `service_page-sitemap.xml` uses an underscore while `page-sitemap.xml` uses a hyphen — inconsistent naming convention; not a functional issue but worth normalizing
- The XSL stylesheet href uses a scheme-relative URL (`//m-electricllc.com/...`) which is fine for browser rendering

---

## Recommended Fix Priority

1. **Fix WordPress siteurl to `https://`** — resolves sitemap index http:// issue AND all 114 image:loc http:// issues simultaneously
2. **Create `robots.txt`** with `Sitemap:` directive pointing to `https://m-electricllc.com/sitemap.xml`
3. **Audit and remove/redirect the 5 `-2` duplicate slug pages** from sitemap
4. **Audit old `/residential-services-tulsa/` pages** against new `/residential-services/{city}-ok/` pages for duplication; canonicalize or redirect
5. **Add glenpool-ok and sapulpa-ok** to service-sitemap or remove orphaned `/service-areas/` hub pages
6. **Spot-check programmatic city pages** for content uniqueness; noindex thin clones

---

## Sitemap Quality Score: 38 / 100

| Dimension | Score | Notes |
|-----------|-------|-------|
| XML validity | 18/20 | Well-formed XML; correct namespaces; minor: index http:// locs |
| Scheme consistency | 4/15 | Index locs all http://; all 114 image locs http://; page locs correct |
| Discoverability | 2/10 | No robots.txt; sitemap discoverable only by convention crawl or GSC |
| Lastmod accuracy | 3/10 | Bulk timestamps throughout; no real edit signal |
| Content quality (location pages) | 5/20 | 350 programmatic pages at WARNING threshold; parallel duplicate URL trees |
| URL hygiene | 6/15 | 5 -2 slug collisions; glenpool/sapulpa coverage gap; two parallel structures |
| Coverage completeness | 0/10 | No blog; glenpool/sapulpa gap; parallel architecture creates confusion |

**Score interpretation:** Below 50 — significant structural issues requiring immediate attention before expecting Google to efficiently process and rank these pages.
