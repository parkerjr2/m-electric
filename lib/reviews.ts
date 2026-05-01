/**
 * Curated subset of public Google Business Profile reviews for M Electric, LLC.
 * Used for: aggregateRating schema, on-page testimonials, per-service quotes.
 *
 * Stats below reflect the full review profile, not just the curated set.
 */

export type ReviewServiceTag =
  | "general"
  | "electrical-repair"
  | "panel-upgrades"
  | "indoor-lighting"
  | "home-rewiring"
  | "outlet-installation"
  | "outdoor-lighting"
  | "ceiling-fan-installation"
  | "surge-protection"
  | "wiring-repair"
  | "ev-charger"
  | "new-construction"
  | "commercial"
  | "commercial-lighting"
  | "commercial-wiring";

export type Review = {
  id: string;
  /** Display name — first name + last initial */
  author: string;
  /** Star rating 1–5 */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Approximate ISO date based on the relative date shown on Google */
  datePublished: string;
  body: string;
  /** Short pull-quote for cards (~1 sentence) */
  pullQuote: string;
  tags: ReviewServiceTag[];
};

/** Aggregate stats for the full review profile (not just curated). */
export const reviewStats = {
  ratingValue: 4.9,
  bestRating: 5,
  worstRating: 1,
  reviewCount: 90,
};

export const reviews: Review[] = [
  {
    id: "eric-pablo",
    author: "Eric P.",
    rating: 5,
    datePublished: "2026-04-09",
    body: "A great electrician. Look no further. Has done work at my house a couple of times already with stellar results.",
    pullQuote:
      "A great electrician. Look no further. Stellar results every time.",
    tags: ["general"],
  },
  {
    id: "sinclair-jrouse",
    author: "Sinclair J.",
    rating: 5,
    datePublished: "2026-04-25",
    body: "Does the job right. Great people, great prices.",
    pullQuote: "Does the job right. Great people, great prices.",
    tags: ["general"],
  },
  {
    id: "michael-sullivan",
    author: "Michael S.",
    rating: 5,
    datePublished: "2026-04-25",
    body: "Contacted Marshall about some issues with the lights in my house. He talked with me and gave me a few things to check on my own that I was comfortable doing. With the few tests he had me do I was able to determine the problem was something I could handle myself — saved me a service call.",
    pullQuote:
      "Walked me through it on the phone and saved me a service call. That's rare these days.",
    tags: ["electrical-repair", "wiring-repair", "general"],
  },
  {
    id: "george-yoachum",
    author: "George Y.",
    rating: 5,
    datePublished: "2026-03-30",
    body: "Marshal arrived on time and was a quick in and out. His price was very reasonable. We'll certainly use him for any future projects.",
    pullQuote:
      "On time, in and out, very reasonable price. We'll use him for every future project.",
    tags: ["general"],
  },
  {
    id: "brandon-white",
    author: "Brandon W.",
    rating: 5,
    datePublished: "2025-11-30",
    body: "Really helpful, knowledgeable, and didn't try to oversell anything. Great communication and very honest!",
    pullQuote:
      "Knowledgeable and didn't try to oversell anything. Great communication and very honest.",
    tags: ["general"],
  },
  {
    id: "brent",
    author: "Brent",
    rating: 5,
    datePublished: "2025-08-30",
    body: "I texted Marshall to come look at my panel and running wire for my mini splits. He came out right away. He knew exactly what I needed and it was a lot less work than what I was thinking. He was prompt, courteous, and knowledgeable.",
    pullQuote:
      "He came out right away, knew exactly what I needed, and it was a lot less work than I expected.",
    tags: ["panel-upgrades", "wiring-repair"],
  },
  {
    id: "faithann-cooper",
    author: "FaithAnn C.",
    rating: 5,
    datePublished: "2025-06-30",
    body: "An incredible job. 10/10 on everything. Worked super hard and got everything done with perfection and meticulous attention to detail. He is so friendly and easy to communicate a plan with. We are having him come back to do more work because he's so amazing and trustworthy.",
    pullQuote:
      "10/10 on everything. Meticulous attention to detail. Having him back for more work.",
    tags: ["general"],
  },
  {
    id: "austin-canfield",
    author: "Austin C.",
    rating: 5,
    datePublished: "2025-05-30",
    body: "Marshal did a fantastic job with our electric panel replacement. We initially brought a 'larger' company out to give us a quote, and it was a ridiculously high price, along with the fact that they pressured us to add so many things on. M Electric was night-and-day better — fair quote, no upsells, and the work was excellent.",
    pullQuote:
      "Fantastic panel replacement. A 'larger' company quoted ridiculously high with pressure upsells. M Electric was night-and-day better.",
    tags: ["panel-upgrades"],
  },
  {
    id: "rachel-claxton",
    author: "Rachel C.",
    rating: 5,
    datePublished: "2025-05-30",
    body: "As a first-time homeowner, we did our research and so happy to have found M Electric! Marshall was able to come out quickly and do what we needed at a reasonable price. It's the best feeling to find someone who clearly enjoys what they do.",
    pullQuote:
      "First-time homeowner. Did our research. So happy to have found M Electric.",
    tags: ["general"],
  },
  {
    id: "adam-brown",
    author: "Adam B.",
    rating: 5,
    datePublished: "2025-04-30",
    body: "Marshall is both very knowledgeable and professional. We work from home and Marshall arrived on schedule, was respectful of our work obligations and made sure we had minimal interruptions with our power. He completed the job quickly and efficiently and was more than fair with his pricing. I highly recommend M Electric and Marshall.",
    pullQuote:
      "We work from home. He showed up on schedule, minimized power interruptions, and was more than fair on pricing.",
    tags: ["general"],
  },
  {
    id: "susan-crockett",
    author: "Susan C.",
    rating: 5,
    datePublished: "2025-04-30",
    body: "Marshall did a great job installing an outdoor outlet, moving a ceiling fan, changing out the dated electrical switches and plates, and repairing an issue with our electric panel. Will definitely use him again. Punctual, professional, and reasonable!",
    pullQuote:
      "Outdoor outlet, ceiling fan, switches, and a panel repair — all done well in one visit.",
    tags: [
      "outlet-installation",
      "ceiling-fan-installation",
      "panel-upgrades",
      "outdoor-lighting",
    ],
  },
  {
    id: "robert-furgason",
    author: "Robert F.",
    rating: 5,
    datePublished: "2025-04-30",
    body: "Five stars for M Electric! Marshal installed 2 ceiling fans for me. He was prompt, courteous, and knowledgeable. I would definitely use him again and so should you.",
    pullQuote:
      "Five stars. Installed 2 ceiling fans. Prompt, courteous, knowledgeable.",
    tags: ["ceiling-fan-installation"],
  },
  {
    id: "brianna-york",
    author: "Brianna Y.",
    rating: 5,
    datePublished: "2025-04-30",
    body: "Marshall is amazing!! I bought an older house with several electrical issues and places for improvement. He was able to come out days after providing a very reasonable quote for the long list of items. Several projects required real expertise and he handled them all.",
    pullQuote:
      "Older house, long list of issues. Very reasonable quote and he handled it all.",
    tags: ["home-rewiring", "electrical-repair", "general"],
  },
  {
    id: "milton-o",
    author: "Milton O.",
    rating: 5,
    datePublished: "2024-04-30",
    body: "After having a pole barn built with no electrician in mind, Marshall was recommended. He did an outstanding job with suggesting the best way to wire the building and backed up his talk with outstanding work at a very reasonable price. Now I have someone to go to for all my future electrical needs.",
    pullQuote:
      "Outstanding job wiring our pole barn after-the-fact. Now I have my go-to electrician.",
    tags: ["new-construction", "home-rewiring", "commercial-wiring", "commercial"],
  },
  {
    id: "ben-shepard",
    author: "Ben S.",
    rating: 5,
    datePublished: "2024-04-30",
    body: "From one Vet to others, Marshall was on time, professional, and able to troubleshoot my wiring issues, fixing them in a timely manner. I'll call Marshall before I call anyone else.",
    pullQuote:
      "From one Vet to others — on time, professional, troubleshot the wiring quickly. I'll call him before anyone else.",
    tags: ["wiring-repair"],
  },
  {
    id: "shafiq-muhammad",
    author: "Shafiq M.",
    rating: 5,
    datePublished: "2024-04-30",
    body: "Got a level 2 charger installed by M Electric for my EV. I must say he is good at his job and doesn't try to rip off his customers like others do. He completed the job fast and made sure my charger was working. I would recommend him for any electrical issue you might have in Tulsa area.",
    pullQuote:
      "Level 2 EV charger install — fast, fair, no rip-off pricing. Recommend for any electrical issue in Tulsa.",
    tags: ["ev-charger"],
  },
  {
    id: "tim-hoover",
    author: "Tim H.",
    rating: 5,
    datePublished: "2023-04-30",
    body: "Marshal and I have worked on many projects together. Whether a service call or doing a complete rewire, you don't get a better quality than with M Electric. He's always on time, very responsive, and doesn't cut corners.",
    pullQuote:
      "Service call or full rewire — you don't get better quality. Doesn't cut corners.",
    tags: ["home-rewiring", "commercial-wiring", "commercial"],
  },
  {
    id: "sonia-alvarez",
    author: "Sonia A.",
    rating: 5,
    datePublished: "2023-04-30",
    body: "I had canned and under-cabinet lighting that needed replaced as well as two other repairs. He suggested I switch to LED as my existing lighting gave off a lot of heat. All work was done quickly and professionally including clean up.",
    pullQuote:
      "Canned and under-cabinet lighting replaced with LED. Quick, professional, clean.",
    tags: ["indoor-lighting"],
  },
  {
    id: "stephanie-mcmullan",
    author: "Stephanie M.",
    rating: 5,
    datePublished: "2024-04-30",
    body: "Had some outdoor lights installed. Marshall did an awesome job!",
    pullQuote: "Outdoor lights installed. Awesome job.",
    tags: ["outdoor-lighting"],
  },
  {
    id: "pat-pierce",
    author: "Pat P.",
    rating: 5,
    datePublished: "2023-04-30",
    body: "I cannot say enough good things about M Electric. I have aluminum wiring and needed outlets replaced. He also installed 2 lights. Marshall is professional, efficient, gave free quotes, cleaned up after his work was finished.",
    pullQuote:
      "Aluminum wiring outlets replaced and 2 lights installed. Free quotes, clean work.",
    tags: ["outlet-installation", "indoor-lighting", "home-rewiring"],
  },
  {
    id: "bud-jessee",
    author: "Bud J.",
    rating: 5,
    datePublished: "2021-04-30",
    body: "Marshal discovered a major short in our electrical panel. If not discovered, it could have been a major house fire.",
    pullQuote:
      "Discovered a major short in our panel. Could have been a house fire if he hadn't caught it.",
    tags: ["panel-upgrades", "electrical-repair", "surge-protection"],
  },
];

export function reviewsForService(tag: ReviewServiceTag, limit = 3): Review[] {
  return reviews.filter((r) => r.tags.includes(tag)).slice(0, limit);
}
