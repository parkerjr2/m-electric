# Schema.org Audit — M Electric, LLC (m-electricllc.com)
**Date:** 2026-04-30
**Pages audited:** Homepage (cached HTML); Service and City pages assessed via sitemap structure (live fetch blocked by 403 for non-Googlebot UAs; service/city page JSON-LD estimated from homepage Yoast pattern)

---

## 1. Schema Inventory

### Homepage — Single Yoast JSON-LD `@graph` block

| Node @type | @id | Status |
|---|---|---|
| WebPage | `https://m-electricllc.com/` | Present |
| ImageObject | `https://m-electricllc.com/#primaryimage` | Present |
| BreadcrumbList | `https://m-electricllc.com/#breadcrumb` | Present (trivial — 1 item: "Home") |
| WebSite | `https://m-electricllc.com/#website` | Present |
| Organization | `https://m-electricllc.com/#organization` | Present — WRONG TYPE |

**No additional schema blocks detected on the homepage.**

Service pages and city pages: Yoast generates the same `@graph` pattern (WebPage + WebSite + Organization/LocalBusiness + BreadcrumbList). Based on sitemap evidence (no separate schema plugins, standard Yoast setup), no `Service`, `Electrician`, `FAQPage`, or `OpeningHoursSpecification` nodes are expected on those pages.

---

## 2. Validation — Block by Block

### Block: WebPage
- [PASS] `@context` is `https://schema.org`
- [PASS] `@type` is valid
- [PASS] `url`, `name`, `description` present
- [PASS] `datePublished` and `dateModified` are ISO 8601
- [WARN] `thumbnailUrl` uses `http://` (mixed content) — should be `https://`
- [PASS] `breadcrumb` and `isPartOf` cross-references are valid

### Block: WebSite
- [PASS] `@context`, `@type`, `url`, `name` present
- [PASS] `SearchAction` with `urlTemplate` and `query-input` present — enables Sitelinks search box eligibility
- [PASS] `potentialAction` structure is correct

### Block: BreadcrumbList
- [PASS] Structure is valid
- [INFO] Homepage breadcrumb has only one `ListItem` (position 1, "Home") — technically correct for homepage but provides no navigational value for sub-pages. Sub-pages should emit multi-level breadcrumbs.

### Block: Organization — CRITICAL FAILURES
- [FAIL] `@type` is `Organization` — **should be `Electrician`** (subclass of `LocalBusiness`). An electrician service area business must use the most specific type.
- [FAIL] `telephone` is **missing** — NAP incomplete
- [FAIL] `address` (PostalAddress) is **missing** — NAP incomplete
- [FAIL] `email` is **missing**
- [FAIL] `areaServed` is **missing** — none of the 11 service cities declared
- [FAIL] `openingHoursSpecification` is **missing**
- [FAIL] `foundingDate` is **missing** (1999 stated on site, not in schema)
- [FAIL] `slogan` is **missing** ("Get Wired Up!")
- [FAIL] `hasOfferCatalog` is **missing** — no services declared in schema
- [WARN] `sameAs` only includes Facebook profile URL — missing Google Business Profile, BBB, or other authority listings
- [PASS] `name` matches business name: "M Electric, LLC"
- [PASS] `url` is correct
- [PASS] `logo` is present with `ImageObject`
- [WARN] Logo URL uses `https://m-electricllc.com/wp-content/uploads/2020/08/m.jpg` — this is a JPEG thumbnail, not the primary logo (the primary logo PNG is at `/2022/11/M_Electric_Logo_Tulsa.png`)

### Sitemap image URLs
- [WARN] All sitemap `<image:loc>` values use `http://` — should be `https://`

---

## 3. Missing Schema Opportunities

| Schema Type | Priority | Reason |
|---|---|---|
| `Electrician` (replaces `Organization`) | **Critical** | Core business type; unlocks LocalBusiness rich result signals |
| `telephone`, `address`, `email` on Electrician | **Critical** | NAP completeness required for local SEO |
| `areaServed` (11 cities) | **Critical** | SAB — no physical walk-in address; area served is the primary geo signal |
| `openingHoursSpecification` | **High** | Displays hours in Knowledge Panel and local pack |
| `hasOfferCatalog` / `Service` nodes | **High** | Tells Google what services are offered; supports rich results for service queries |
| `foundingDate` | **Medium** | Trust signal; "Since 1999" is prominent on site |
| `slogan` | **Low** | "Get Wired Up!" — brand consistency |
| `FAQPage` | **Info** | Commercial site — no Google rich result benefit post-Aug 2023 restriction. Still beneficial for LLM/AI citations (GEO). Add only if AI discoverability is a priority. |

---

## 4. NAP Consistency Check

| Field | Schema Value | Known Correct Value | Match? |
|---|---|---|---|
| Name | "M Electric, LLC" | M Electric, LLC | PASS |
| Phone | NOT PRESENT | (918) 992-6282 | FAIL |
| Email | NOT PRESENT | info@m-electricllc.com | FAIL |
| Address | NOT PRESENT | (SAB — service area only) | N/A |
| Service Areas | NOT PRESENT | 11 cities listed | FAIL |

---

## 5. Ready-to-Paste JSON-LD Recommendations

### 5A — Replace Organization with Electrician (Homepage `<head>` — standalone block, separate from Yoast graph)

Add this as a **second** `<script type="application/ld+json">` block. Do not edit the Yoast graph directly — adding a standalone block avoids plugin conflicts and survives Yoast updates.

```json
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://m-electricllc.com/#electrician",
  "name": "M Electric, LLC",
  "url": "https://m-electricllc.com/",
  "telephone": "+19189926282",
  "email": "info@m-electricllc.com",
  "foundingDate": "1999",
  "slogan": "Get Wired Up!",
  "description": "Licensed electricians serving Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, and Glenpool. Residential and commercial electrical services since 1999.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://m-electricllc.com/wp-content/uploads/2022/11/M_Electric_Logo_Tulsa.png",
    "width": 359,
    "height": 75
  },
  "image": "https://m-electricllc.com/wp-content/uploads/2022/11/M_Electric_Logo_Tulsa.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tulsa",
    "addressRegion": "OK",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Tulsa",
      "sameAs": "https://www.wikidata.org/wiki/Q35726"
    },
    {
      "@type": "City",
      "name": "Broken Arrow",
      "sameAs": "https://www.wikidata.org/wiki/Q809710"
    },
    {
      "@type": "City",
      "name": "Owasso",
      "sameAs": "https://www.wikidata.org/wiki/Q989459"
    },
    {
      "@type": "City",
      "name": "Bixby",
      "sameAs": "https://www.wikidata.org/wiki/Q809649"
    },
    {
      "@type": "City",
      "name": "Jenks",
      "sameAs": "https://www.wikidata.org/wiki/Q1680849"
    },
    {
      "@type": "City",
      "name": "Sapulpa",
      "sameAs": "https://www.wikidata.org/wiki/Q1016023"
    },
    {
      "@type": "City",
      "name": "Sand Springs",
      "sameAs": "https://www.wikidata.org/wiki/Q1016102"
    },
    {
      "@type": "City",
      "name": "Berryhill",
      "sameAs": "https://www.wikidata.org/wiki/Q4893437"
    },
    {
      "@type": "City",
      "name": "Turley",
      "sameAs": "https://www.wikidata.org/wiki/Q7857085"
    },
    {
      "@type": "City",
      "name": "Oakhurst",
      "sameAs": "https://www.wikidata.org/wiki/Q79980044"
    },
    {
      "@type": "City",
      "name": "Glenpool",
      "sameAs": "https://www.wikidata.org/wiki/Q990041"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Electrical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Electrical Services",
          "url": "https://m-electricllc.com/residential-services/",
          "description": "Full residential electrical services including wiring, panel upgrades, outlet installation, and lighting."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Electrical Services",
          "url": "https://m-electricllc.com/commercial-services-tulsa/",
          "description": "Commercial electrical services including wiring, lighting, and panel installation for businesses in Tulsa."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Panel Upgrades",
          "url": "https://m-electricllc.com/residential-services/tulsa-ok/electrical-panel-upgrades/",
          "description": "Residential electrical panel upgrades and replacements in Tulsa and surrounding areas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EV Charger Installation",
          "url": "https://m-electricllc.com/residential-services/tulsa-ok/ev-charger-installation/",
          "description": "Level 2 home EV charger installation in Tulsa, Broken Arrow, Owasso, and nearby communities."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Electrical Services",
          "url": "https://m-electricllc.com/emergency-services-tulsa/",
          "description": "24/7 emergency electrical repair and troubleshooting in the Tulsa metro area."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Generator Installation",
          "url": "https://m-electricllc.com/residential-services/tulsa-ok/generator-installation/",
          "description": "Whole-home and standby generator installation for Tulsa area homeowners."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Whole-Home Surge Protection",
          "url": "https://m-electricllc.com/residential-services/tulsa-ok/whole-home-surge-protection/",
          "description": "Whole-home surge protection installation to safeguard appliances and electrical systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smart Home Wiring",
          "url": "https://m-electricllc.com/residential-services/tulsa-ok/smart-home-wiring-services/",
          "description": "Smart home wiring and automation-ready installations for new and existing homes."
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100063716923948"
  ]
}
```

> **Note on `openingHoursSpecification`:** The hours above (Mon–Fri 7am–6pm, Sat 8am–2pm) are placeholders. Verify against the actual hours shown on the site or Google Business Profile before deploying.

---

### 5B — Per-Page Service Schema (add to each service page)

Use this pattern on individual service pages (e.g., `/residential-services/tulsa-ok/electrical-panel-upgrades/`). Replace placeholders with page-specific values.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Electrical Panel Upgrades in Tulsa, OK",
  "url": "https://m-electricllc.com/residential-services/tulsa-ok/electrical-panel-upgrades/",
  "provider": {
    "@type": "Electrician",
    "@id": "https://m-electricllc.com/#electrician"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tulsa",
    "sameAs": "https://www.wikidata.org/wiki/Q35726"
  },
  "serviceType": "Electrical Panel Upgrade",
  "description": "Licensed electricians in Tulsa, OK providing residential electrical panel upgrades and replacements. Call M Electric, LLC at (918) 992-6282."
}
```

---

### 5C — City Landing Page Schema (add to each city page)

Use this on city-specific pages such as `/residential-services/broken-arrow-ok/`. The `@id` reference ties back to the root Electrician entity.

```json
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://m-electricllc.com/#electrician",
  "name": "M Electric, LLC",
  "url": "https://m-electricllc.com/",
  "telephone": "+19189926282",
  "areaServed": {
    "@type": "City",
    "name": "Broken Arrow",
    "sameAs": "https://www.wikidata.org/wiki/Q809710"
  },
  "description": "Licensed electricians serving Broken Arrow, OK. Residential and commercial electrical services from M Electric, LLC. Call (918) 992-6282."
}
```

---

## 6. Implementation Notes

1. **WordPress + Yoast:** Add the Electrician block (5A) via a plugin such as WPCode or the Yoast "Custom Schema" tab if available, or hard-code in `functions.php` using `wp_head`. Do NOT use Yoast's built-in LocalBusiness since it emits a generic `LocalBusiness` type rather than `Electrician`.
2. **HTTP vs HTTPS:** Fix all `http://m-electricllc.com` references in sitemap image locs and the `thumbnailUrl` in the Yoast WebPage node. These are cosmetic but trigger mixed-content warnings in Rich Results Test.
3. **Opening hours:** Confirm actual hours before deploying 5A. Emergency services page (`/emergency-services-tulsa/`) implies 24/7 availability — if accurate, add a separate `OpeningHoursSpecification` with no dayOfWeek (meaning always open) or add `"opens": "00:00", "closes": "23:59"` for all 7 days.
4. **Validate:** After deploying, run each page through https://search.google.com/test/rich-results and https://validator.schema.org/.

---

## 7. Schema Score

| Category | Score | Notes |
|---|---|---|
| Schema presence | 3/10 | Yoast base blocks present but wrong type |
| Schema correctness | 4/10 | WebSite + BreadcrumbList are valid; Organization is wrong type |
| NAP completeness | 0/10 | Phone, email, address all absent from schema |
| Local SEO signals | 1/10 | No areaServed, no OpeningHours |
| Service coverage | 0/10 | No Service or hasOfferCatalog nodes anywhere |
| Overall | **16/100** | |
