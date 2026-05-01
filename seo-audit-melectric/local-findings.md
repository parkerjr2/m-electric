# Local SEO Audit — M Electric, LLC (Tulsa, OK)
**Audit date:** 2026-04-30
**Business type:** Service-Area Business (SAB) — electrician
**Auditor:** Inline

---

## NAP consistency across pages

| Page | URL status | Phone | Email | Brand name |
|---|---|---|---|---|
| Homepage | 200 | (918) 992-6282 ✅ | info@m-electricllc.com ✅ | "M Electric, LLC" ✅ |
| About | **404** | — | — | — |
| Contact | **404** | — | — | — |
| `/service-areas/broken-arrow/` | 200 | (918) 992-6282 ✅ | (not visible in body) | "M Electric" ✅ |
| `/service-areas/tulsa/` | 200 | not deeply audited | — | — |

**The homepage NAP is consistent.** Phone formatted as `(918) 992-6282` in display, `9189926282` in `tel:` — correct. Email matches across all rendered pages.

**But:** the absence of a working contact page or an About page means there's no "schema-rich" location for citation directories (BBB, Yelp, Google Business Profile) to scrape canonical NAP from. Crawlers find phone + email on the homepage, but no physical address (acceptable for SAB) and no full business hours.

---

## Service-area page coverage vs. sitemap declaration

The site's `/page-sitemap.xml` declares 11 city pages but only 9 work:

| City (declared) | URL | Status |
|---|---|---|
| Tulsa | `/service-areas/tulsa/` | 200 ✅ |
| Broken Arrow | `/service-areas/broken-arrow/` | 200 ✅ |
| Owasso | `/service-areas/owasso/` | 200 ✅ |
| Bixby | `/service-areas/bixby/` | 200 ✅ |
| Jenks | `/service-areas/jenks/` | 200 ✅ |
| Sand Springs | `/service-areas/sand-springs/` | 200 ✅ |
| Berryhill | `/service-areas/berryhill/` | 200 ✅ |
| Oakhurst | `/service-areas/oakhurst/` | 200 ✅ |
| Turley | `/service-areas/turley/` | 200 ✅ |
| **Glenpool** | `/service-areas/glenpool/` | **404** ❌ |
| **Sapulpa** | `/service-areas/sapulpa/` | **404** ❌ |
| `/service-areas/` (hub) | — | **404** ❌ |

Glenpool and Sapulpa are advertised in the homepage footer/nav as service-area cities but their pages don't exist. The hub `/service-areas/` itself 404s, meaning there's no canonical "all our service areas" page.

The **service-sitemap.xml** has additional cities (Catoosa, Claremore, Verdigris, Mounds, Liberty, Limestone, Lotsee, Justice, Kiefer, Leonard, Sperry, Gregory, Mounds) covered via the new `/residential-services/{city}-ok/{service}/` programmatic structure, and these all 200 OK. So the *programmatic* city coverage is broader than the *editorial* city pages.

---

## Service-area page quality (Broken Arrow sample)

The Broken Arrow service-area page (92 KB) opens with:
> "Broken Arrow's suburban expansion, particularly around 1985, has created a unique landscape for electrical systems. Properties in neighborhoods like Elm Creek, Brookhaven, and the Rose District often require specialized electrical services..."

**This is genuinely localized content** — specific neighborhood names, period-relevant context, and a real reason a Broken Arrow homeowner might choose them. It's not a city-swap template.

**However:** Could not deeply audit the smaller-town variants (Verdigris, Lotsee, Liberty, Justice, Kiefer, Leonard, Sperry, Gregory) — at the 286-page volume those are at risk of being city-swap templates. With Tulsa MSA's smaller suburbs having tiny population bases, doorway-page concerns are real per Google's spam policy. Recommend manual content audit on 5–10 small-town pages before further programmatic expansion.

---

## Veteran-owned signal — under-leveraged

The owner is an **Army veteran**. This is a high-leverage trust signal in local SEO for several reasons:
1. **Google Business Profile attribute** — "Veteran-owned business" is a GBP attribute that displays a badge in the local pack and Maps. Free to claim.
2. **Vetted by SBA** — Veteran-Owned Small Business (VOSB) certification adds Authority signal.
3. **Differentiator** — none of the top Tulsa electrician SERP competitors lead with veteran-owned status (per the SXO subagent's competitive analysis).

**Currently the veteran-owned claim is only mentioned in body copy on the homepage** — no badge, no callout above the fold, no GBP attribute (cannot verify GBP without GBP API access). This should be a top-of-fold trust signal.

---

## Citation gap analysis (recommendations)

Top 10 directory citations to claim/optimize for a Tulsa SAB electrician:

1. **Google Business Profile** — verify and optimize attributes (esp. Veteran-owned, Identifies-as-veteran-owned), service area, services list, hours, photos. Confirmed exists at `g.page/m-electric-llc?share`.
2. **Better Business Bureau** — confirmed at `bbb.org/us/ok/profile/electrical-contractors/m-electric-llc-1025-38093098`. Display BBB badge on homepage + claim BBB review widget.
3. **Yelp** — verify claimed listing
4. **Angi (formerly Angie's List)** — claim and request reviews; high-intent local plumber/electrician traffic
5. **HomeAdvisor / Thumbtack** — service-categorized local intent
6. **Tulsa Regional Chamber of Commerce** — `tulsachamber.com` member directory
7. **NextDoor Business** — neighborhood-level recommendations are the highest-converting source for SAB trades
8. **Houzz** — for the smart home / lighting / panel-upgrade work that's photographable
9. **Veterans-owned business directories** — SBA's [VetCert](https://veterans.certify.sba.gov/), VOB.org, Buy Veteran Business
10. **Trustpilot** — for review portability into Knowledge Panel and AI assistants
11. **Industry-specific:** NECA (National Electrical Contractors Association), IECRM, Tesla EV-Certified Installer directory, ChargePoint Authorized Installer (if certified)

---

## Industry-specific local factors for electricians

| Signal | Status |
|---|---|
| Oklahoma Construction Industries Board (CIB) license # surfaced | ❌ Not visible on homepage; no About page to host it |
| Master Electrician credential surfaced | ❌ Not visible |
| Workers' comp / GL insurance proof | ❌ Not visible |
| Tesla EV-Certified Installer logo (if certified) | ❌ Not visible — Tesla's directory is heavily searched |
| ChargePoint / Wallbox installer badges | ❌ Not visible |
| Generator brand certifications (Generac, Kohler, Briggs & Stratton) | ❌ Not visible |
| Service-pricing transparency ("starting at $X for panel upgrade") | ❌ None |
| Response-time guarantee for emergencies | ❌ None |

---

## Local SEO Score: **38 / 100**

**Strengths:**
- Phone-first homepage UX (good for emergency-caller persona)
- Programmatic city × service grid is wide and at least partially localized
- BBB profile exists; Google Business Profile exists (`g.page/m-electric-llc`)

**Weaknesses:**
- About / Contact pages are 404 — destroys the canonical NAP source
- Service-area hub `/service-areas/` is 404 — destroys internal linking and "area we serve" page
- 2 of 11 named service-area cities (Glenpool, Sapulpa) have 404 pages
- No license # or insurance display
- Veteran-owned status underleveraged
- No service-pricing transparency
- No Google Maps embed on homepage (significant local-pack signal)

**Top 5 quick fixes:**
1. Resurrect `/about/` and `/contactus/` (linked from nav, top-level trust pages, host license # and full NAP)
2. Restore `/service-areas/glenpool/` and `/service-areas/sapulpa/` and the `/service-areas/` hub
3. Add veteran-owned badge above the fold + claim "Veteran-owned" attribute on Google Business Profile
4. Embed a Google Map showing the Tulsa metro service area on the homepage
5. Add Oklahoma electrical contractor license # to header/footer site-wide (one-line WordPress widget)
