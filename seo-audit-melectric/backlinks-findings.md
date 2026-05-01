# Backlinks Audit — m-electricllc.com
**Audit date:** 2026-04-30
**Data sources:** Common Crawl Web Graph (free), Backlink Verification Crawler. Moz API and Bing Webmaster API not configured.

---

## Common Crawl Web Graph — primary data point

```json
{
  "domain": "m-electricllc.com",
  "in_crawl": true,
  "in_rankings": false,
  "pagerank": null,
  "harmonic_centrality": null,
  "n_hosts": null,
  "top_referring_domains": [],
  "referring_domains_sample": 0,
  "note": "Domain found in CC crawl but below ranking threshold (too small/new for PageRank rankings)."
}
```

Source: `cc-main-2026-jan-feb-mar` release.

The domain is **technically present** in Common Crawl's web graph but is **below the threshold for PageRank computation** — meaning either:
1. The site has very few inbound links (most likely given the GEO finding that **CCBot is blocked at TCP level on the site itself**, which prevents CC from doing depth crawls of the M Electric pages), OR
2. The links that exist are from low-authority sources that CC doesn't deeply graph

Either interpretation paints the same picture: **the domain has minimal third-party link signal in the open web graph.**

---

## Why this is misleadingly bleak

The CCBot block is the cause-and-effect issue. Common Crawl can't crawl m-electricllc.com because the site refuses connections from CCBot. So Common Crawl has only thin signal on the *outbound* side (mentions of the domain elsewhere) and zero signal on the *internal* link graph. This skews the apparent authority downward.

The site might have legitimate links from BBB, Google Maps, Yelp, Angi, etc. that simply aren't represented in Common Crawl because:
- BBB and Yelp are often crawl-blocked themselves
- Many local-business directories are JS-rendered and CC misses them
- Google Maps doesn't expose link signal in CC

So **the actual backlink profile is likely better than CC alone suggests** — but I cannot quantify it without Moz, Ahrefs, or Bing Webmaster Tools data.

---

## Estimated profile shape (educated)

For a 25-year-old SAB electrician with no apparent link-building investment:

| Tier | Estimated count | Notes |
|---|---|---|
| **Citation-tier** (BBB, Yelp, Angi, Google, Bing Places, NextDoor, Manta, etc.) | ~30–80 | Standard for an established local business |
| **Editorial/local press** (Tulsa World, KTUL, KJRH, neighborhood blogs) | 0–5 | Likely few or none |
| **Manufacturer/certification listings** (if Tesla EV / ChargePoint certified) | 0–3 | Unclear — not visible on the site |
| **Chamber of Commerce, BBB membership pages** | 1–3 | At least BBB confirmed |
| **Veterans-owned business directories** (SBA VetCert, VOB.org, etc.) | 0–2 | If claimed — high-DA wins |
| **Industry directories** (NECA, IECRM, Houzz Pro) | 0–3 | Unclear |
| **Spammy/PBN** | 0 | No signal of link buying — clean profile |

**Verdict:** Likely a small, mostly-clean citation-driven profile that's appropriate for a local business but has no breakout authority links.

---

## Top 10 highest-impact backlink/citation actions

In priority order:

1. **Claim and optimize Google Business Profile** — link from GBP is a Knowledge Panel signal, not a traditional backlink, but it's the single highest-leverage local signal.
2. **Claim BBB profile + display BBB badge** with HTML link — confirmed BBB exists. Site should display BBB Accredited badge with rel-following link to the BBB profile.
3. **Submit to SBA VetCert (Veteran-Owned Small Business)** — high-DA veteran directory link with brand badge.
4. **Tulsa Regional Chamber of Commerce membership** — typically a $400–$600/year membership that includes a chamber directory backlink (DA ~50).
5. **Yelp + Angi + Thumbtack + HomeAdvisor + NextDoor Business** — claim all four. Each has ~DA 90+ and the listings carry geographic-relevance signal.
6. **Houzz Pro** — for service-category pages (panel upgrades, EV chargers, smart home, lighting). Photographable services are a Houzz fit.
7. **Tesla EV-Certified Installer / ChargePoint Authorized Installer / Wallbox Pro Installer directories** — if M Electric holds any of these certifications, claim the listing. Tesla's installer map is heavily browsed and DA-strong.
8. **Local neighborhood Facebook groups** (Tulsa neighborhoods, Broken Arrow, Owasso) — submit a "trusted local business" post that earns natural links from neighborhood blogs / reviews.
9. **Sponsor a Tulsa-local nonprofit or youth sports team** — earns a local backlink and a small PR mention. Cost: $250–$1,000.
10. **Get the BBB review widget displayed and the Trustindex widget rendering above the fold** — converts existing review authority into on-page social proof + likely earns additional reviews.

---

## Backlinks Score: **35 / 100**

**Rationale:** Common Crawl shows below-ranking-threshold (a real signal even accounting for the CCBot block, since CC also samples *outbound* mentions and found 0 referring domains). For a 25-year-old established business, a stronger citation footprint is reasonable to expect. Most likely, the site simply hasn't done active link/citation work.

**Mitigating factors:** No spam/PBN signals. BBB profile exists. Google Business Profile (g.page/m-electric-llc) exists. The basic citation foundation is there but has been left unmaintained.

**Caveat on the score:** Without Moz DA, Ahrefs DR, or Bing Webmaster Tools data, this score is partially inferred. Plug in any of those tools and the score may shift ±15 points either direction.
