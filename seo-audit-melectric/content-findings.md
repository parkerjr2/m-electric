# Content Quality / E-E-A-T Audit — m-electricllc.com
**Audit date:** 2026-04-30
**Auditor:** Inline

---

## CRITICAL — The "About" page (the canonical E-E-A-T document) is a 404

`/about/` returns HTTP 404. For a local service business whose entire trust pitch is "family-owned, Army-veteran-led, since 1999," **having no About page is a top-tier E-E-A-T failure.** Without it, there's no on-site place to demonstrate:
- Owner identity
- Veteran-owned status
- 25-year company history
- Team credentials
- Business address / NAP detail
- Photos of the team

The veteran-owned claim is referenced briefly on the homepage but has no supporting page to back it.

## CRITICAL — `/contactus/` is a 404

The contact page also 404s. Visitors who click "Contact Us" in the nav land on the broken-template "Page not found" screen. This violates basic e-commerce/local-services trust (Google's Quality Rater Guidelines explicitly call out missing/broken contact pages as YMYL trust failures even for non-medical sites).

## CRITICAL — `/job-gallery/` is a 404

The site advertises "Job Gallery" as a top-level nav item — visual proof of work is a major Experience signal for trades. The link 404s. Whatever portfolio/before-after work was on this page, it's gone.

---

## Homepage content analysis

**Title (67 chars):** "Premier Electrical Contractors in Tulsa, Oklahoma | M Electric, LLC" — well-optimized, contains primary keyword + city + brand.

**Meta description (155 chars):** "Discover premier electrical contractors in Tulsa, OK, with M Electric, LLC. Offering the best expert residential and commercial services. Contact us today!" — generic but functional.

**H1 (single, correct):** "Trusted Electrical Services in Tulsa, OK"

**H2s (23 total, excessive):**
- Most are individual service names ("Electric Vehicle Charger," "New Home Construction," "Outlet Installation & Repair," "Indoor Lighting Installation") — these should arguably be H3 inside a single H2 like "Our Services."
- Templated WordPress block layout creates unnecessary heading sprawl.

**Body word count: ~683 words.** Marginal for a homepage. The SERP for "electrician tulsa" rewards 1,200+ word pages with embedded FAQs, pricing transparency, and process explanations.

**Trust signals visible on homepage:**
- ✅ Phone number `(918) 992-6282` (in header, twice in body — visible above the fold)
- ✅ Email `info@m-electricllc.com`
- ✅ "Since 1999" mentioned
- ✅ Trustindex 4.5+ rating widget (referenced)
- ✅ Google reviews link (`g.page/m-electric-llc?share`)
- ❌ Veteran-owned mention is muted (single line, no badge or callout)
- ❌ License # not visible on homepage
- ❌ Insurance / bonded language not above fold
- ❌ Physical address absent (acceptable for SAB but a Google Maps embed would still help)
- ❌ BBB rating / accreditation badge not displayed (yet they ARE on BBB at https://www.bbb.org/us/ok/profile/electrical-contractors/m-electric-llc-1025-38093098)

---

## Programmatic city × service pages — quality assessment

Spot-checked `/service-areas/broken-arrow/` (92 KB, real content) — H1 "Residential Electrical Services in Broken Arrow." First paragraph reads:

> "Broken Arrow's suburban expansion, particularly around 1985, has created a unique landscape for electrical systems. Properties in neighborhoods like Elm Creek, Brookhaven, and the Rose District often require specialized electrical services due to their age and construction patterns. Many of these homes were built during a time when electrical standards were different, leading to a variety of upgrades and..."

**This is genuinely good local content.** Specific neighborhoods, period-relevant electrical context, real differentiation from a generic "electrician in Broken Arrow" template.

**Verdict on programmatic pages:** Tested 30 random URLs from `service-sitemap.xml` — 29 returned HTTP 200. The new `/residential-services/{city}-ok/{service}/` structure is alive and at least the Broken Arrow city page sample shows authentic, localized content. **The programmatic layer is the site's real SEO asset** — it's the editorial layer that's broken.

**Caveats:**
- Could not deeply audit all 286 residential variants for duplicate-content patterns; with 11 cities × ~26 services, small towns like Verdigris/Lotsee/Liberty/Justice may carry near-duplicate templates that risk doorway-page perception. The sitemap agent flagged this as a "WARNING" — concur.
- Could not verify whether each city page has unique testimonials or job photos.

---

## E-E-A-T signal inventory

| Signal | Status |
|---|---|
| **Experience** — Year founded mentioned | ✅ "Since 1999" on homepage |
| **Experience** — Photos of actual jobs | ❌ Job Gallery page 404 |
| **Experience** — Specific neighborhood/landmark mentions | ✅ On Broken Arrow service-area page (Elm Creek, Brookhaven, Rose District) |
| **Expertise** — Owner credentials / bio | ❌ About page 404 |
| **Expertise** — Service breadth list | ✅ Homepage H2 cluster |
| **Expertise** — Technical depth (e.g., panel types, code references) | ⚠️ Marginal — surface-level descriptions |
| **Authoritativeness** — License # visible | ❌ Not on homepage |
| **Authoritativeness** — BBB / accreditation badge | ❌ Not displayed |
| **Authoritativeness** — Manufacturer certifications (Tesla EV, ChargePoint, generator brands) | ❌ Not surfaced |
| **Trust** — Phone, email visible | ✅ |
| **Trust** — Physical address / map embed | ❌ |
| **Trust** — Reviews with names/dates | ⚠️ Trustindex widget present (couldn't render) |
| **Trust** — Working contact path | ❌ Contact page 404 |
| **Trust** — Privacy policy / Terms | ❓ Not verified — likely also 404 if in old sitemap |

**E-E-A-T Score: 28 / 100.** The brand has the *substance* to score well (25-year veteran-owned business, real reviews, real BBB profile) but virtually none of it makes it to the rendered site. The 404s on About / Contact / Job Gallery wipe out three of the four pages where these signals live.

---

## AI Citation Readiness

- ❌ No FAQ schema on homepage (FAQPage is high-leverage for AI snippets)
- ❌ No Q&A section in body copy ("What does panel upgrade cost in Tulsa?" / "How long does EV charger install take?")
- ❌ No definition-style passages ("A panel upgrade is when…")
- ❌ No comparison content ("100A vs 200A service: which do you need?")
- ⚠️ Programmatic pages have local context (good for citation) but Tulsa/Broken Arrow specificity is the only differentiator
- ❌ AI crawlers (GPTBot, ClaudeBot, CCBot) blocked at TCP level — cannot ingest content even if it were citation-ready

---

## Content Quality Score: **34 / 100**

The single highest-leverage content fix: **resurrect /about/, /contactus/, and /job-gallery/.** Those three URLs alone would lift the E-E-A-T score by 30+ points. After that: add a homepage FAQ block, surface license # and veteran-owned badge above the fold, and audit a sample of 20 small-city programmatic pages for content uniqueness vs. the larger metro pages.
