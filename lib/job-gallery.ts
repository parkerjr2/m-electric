/**
 * Source of truth for the Job Gallery — real M Electric work photos.
 *
 * Photos sourced from m-electricllc.com/job-gallery/ — owned content
 * downloaded into /public/job-gallery/ for direct serving via Next/Image.
 *
 * Adding a new photo: drop the file in /public/job-gallery/, add a
 * GalleryItem entry below with width/height (use `file` or `identify` to
 * read the dimensions), category, caption, and city/year context.
 */

export type GalleryCategory =
  | "outdoor-lighting"
  | "indoor-lighting"
  | "recessed-lighting"
  | "panel-upgrade"
  | "before-after"
  | "ceiling-fan"
  | "ev-charger"
  | "generator"
  | "commercial";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  category: GalleryCategory;
  /** Optional service-page link to drive cross-page traffic */
  service?: string;
};

export const galleryItems: GalleryItem[] = [
  // ─── Outdoor Lighting ───────────────────────────────────────────────
  {
    id: "white-brick-landscape-lighting",
    src: "/job-gallery/white-brick-landscape-lighting.jpg",
    alt: "Tulsa white-brick home with full landscape lighting installed by M Electric, dramatic uplighting on the cedar accents and front entry at night",
    width: 1470,
    height: 1102,
    caption:
      "Full landscape lighting design on a white-brick Tulsa home — cedar-accent uplighting, entry sconces, and warm-white path lighting that turns the property into a nighttime focal point.",
    category: "outdoor-lighting",
    service: "/services/outdoor-lighting",
  },
  {
    id: "stone-home-night-lighting",
    src: "/job-gallery/houselights-2.jpg",
    alt: "Tulsa stone-front home with custom outdoor landscape lighting installed by M Electric, illuminated at dusk",
    width: 753,
    height: 500,
    caption:
      "Custom outdoor lighting on a stone-front Tulsa home — landscape uplighting, soffit cans, and entry illumination, all hardwired and dimmer-controlled.",
    category: "outdoor-lighting",
    service: "/services/outdoor-lighting",
  },
  {
    id: "estate-home-night-lighting",
    src: "/job-gallery/houselights2.jpg",
    alt: "Estate-style Tulsa home with full perimeter outdoor lighting installed by M Electric, illuminated at night",
    width: 681,
    height: 500,
    caption:
      "Full perimeter outdoor lighting on an estate property — porch illumination, soffit lighting around the entire facade, and tree-line accent lighting.",
    category: "outdoor-lighting",
    service: "/services/outdoor-lighting",
  },

  // ─── Indoor Lighting ────────────────────────────────────────────────
  {
    id: "chandelier-entryway",
    src: "/job-gallery/chandelier-entryway.jpg",
    alt: "Cascading alabaster-and-brass chandelier hung in a Tulsa home entryway by M Electric",
    width: 1470,
    height: 3106,
    caption:
      "Cascading alabaster-and-brass chandelier installed in a high-ceiling Tulsa entryway. Custom support, exact center alignment over the foyer, and dimmer-compatible.",
    category: "indoor-lighting",
    service: "/services/indoor-lighting",
  },
  {
    id: "recessed-living-room",
    src: "/job-gallery/recessed-living-room.jpg",
    alt: "Tulsa living room with eleven recessed LED can lights freshly installed by M Electric, ladder still on site",
    width: 1470,
    height: 2080,
    caption:
      "Eleven recessed LED cans installed across a Tulsa living room — drop-in trim with even spacing, dimmer-controlled, ready for paint touch-up.",
    category: "recessed-lighting",
    service: "/services/indoor-lighting",
  },
  {
    id: "kitchen-recessed-lighting",
    src: "/job-gallery/ceiling.jpg",
    alt: "Tulsa kitchen with newly-installed recessed can lighting by M Electric, evenly illuminating the entire space",
    width: 720,
    height: 960,
    caption:
      "Kitchen recessed lighting retrofit — five LED can lights installed across the ceiling for even, energy-efficient illumination.",
    category: "indoor-lighting",
    service: "/services/indoor-lighting",
  },

  // ─── Commercial ─────────────────────────────────────────────────────
  {
    id: "commercial-mood-lighting",
    src: "/job-gallery/commercial-mood-lighting.jpg",
    alt: "Commercial Tulsa space with black ceiling and walls, dimmable recessed cans, and vertical accent strip lighting installed by M Electric",
    width: 1470,
    height: 1960,
    caption:
      "Commercial Tulsa build-out — dimmable recessed cans across a black-ceiling space with vertical accent strip lighting on the back wall. Designed around the room's mood-driven aesthetic.",
    category: "commercial",
    service: "/services/commercial-lighting",
  },
  {
    id: "commercial-strip-accent",
    src: "/job-gallery/commercial-strip-accent.jpg",
    alt: "Commercial Tulsa space with vertical LED accent strip lighting along a black accent wall, installed by M Electric",
    width: 1470,
    height: 1960,
    caption:
      "Vertical LED accent strips integrated into a Tulsa commercial space — recessed in the wall, with the existing acoustic-tile ceiling lit from above.",
    category: "commercial",
    service: "/services/commercial-lighting",
  },
  {
    id: "nail-salon-led-retrofit",
    src: "/job-gallery/nail-salon-led-retrofit.jpg",
    alt: "Tulsa nail salon with full LED recessed lighting retrofit by M Electric, even illumination across the entire ceiling grid",
    width: 1470,
    height: 1960,
    caption:
      "Full LED retrofit for a Tulsa nail salon — every recessed can in the ceiling grid converted to LED for energy savings and consistent color.",
    category: "commercial",
    service: "/services/commercial-lighting",
  },

  // ─── EV Chargers ────────────────────────────────────────────────────
  {
    id: "bmw-ev-charger",
    src: "/job-gallery/bmw-ev-charger.jpg",
    alt: "BMW Level 2 EV charger installed in a Tulsa home garage by M Electric, with cable holster mount and dedicated 240V circuit",
    width: 1470,
    height: 1960,
    caption:
      "BMW Level 2 EV charger install — wall-mounted with cable holster, dedicated 240V circuit run from the home's main panel, and a clean conduit path.",
    category: "ev-charger",
    service: "/services/ev-charger-installation",
  },
  {
    id: "grizzl-e-ev-charger",
    src: "/job-gallery/grizzl-e-ev-charger.jpg",
    alt: "Grizzl-E Level 2 EV charger installed in a Tulsa garage by M Electric with NEMA 14-50 plug and coiled cable",
    width: 526,
    height: 701,
    caption:
      "Grizzl-E Level 2 EV charger install in a Tulsa garage — NEMA 14-50 plug-in mount with cable management hook for a clean, organized finish.",
    category: "ev-charger",
    service: "/services/ev-charger-installation",
  },

  // ─── Generator ──────────────────────────────────────────────────────
  {
    id: "generac-transfer-switch",
    src: "/job-gallery/generac-transfer-switch.png",
    alt: "Generac automatic transfer switch installed alongside a residential breaker panel in a Tulsa home by M Electric",
    width: 1170,
    height: 1554,
    caption:
      "Generac automatic transfer switch installed beside the existing residential panel — wired to seamlessly switch the home onto generator power within seconds of a utility outage.",
    category: "generator",
    service: "/services/generator-installation",
  },

  // ─── Panel / Service Entrance ──────────────────────────────────────
  {
    id: "service-entrance-during",
    src: "/job-gallery/service-entrance-during.jpg",
    alt: "Mid-install service entrance and meter panel mounted on the exterior of a Tulsa home by M Electric, with riser conduit to the roof",
    width: 1470,
    height: 1960,
    caption:
      "Mid-install service-entrance upgrade — new exterior meter panel and riser conduit ready for the utility tie-in. PSO coordination scheduled the next day.",
    category: "panel-upgrade",
    service: "/services/panel-upgrades",
  },
  {
    id: "service-entrance-complete",
    src: "/job-gallery/service-entrance-complete.jpg",
    alt: "Completed exterior service entrance and meter panel on a Tulsa home, installed by M Electric, with clean conduit and patio cleaned up",
    width: 1470,
    height: 1960,
    caption:
      "Completed service-entrance upgrade after PSO tie-in — exterior meter, riser, and disconnect cleanly mounted with the patio cleaned up.",
    category: "panel-upgrade",
    service: "/services/panel-upgrades",
  },
];

/** The before/after pair is featured separately as an interactive slider. */
export const featuredBeforeAfter = {
  id: "kitchen-window-light",
  beforeSrc: "/job-gallery/before1.jpg",
  afterSrc: "/job-gallery/after1.jpg",
  beforeAlt:
    "Before — dim kitchen window area in a Tulsa home with no overhead lighting",
  afterAlt:
    "After — bright, modern recessed LED light installed above the kitchen window by M Electric",
  width: 753,
  height: 500,
  caption:
    "Kitchen window area — added a recessed LED can to a previously dark, unlit corner of the kitchen.",
  context:
    "From dark and dated to bright and modern. A single well-placed recessed can transforms a dim kitchen — code-compliant, dimmable, and warm-white at 3000K.",
  service: "/services/indoor-lighting",
};

export const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "outdoor-lighting", label: "Outdoor Lighting" },
  { id: "indoor-lighting", label: "Indoor Lighting" },
  { id: "recessed-lighting", label: "Recessed Lighting" },
  { id: "commercial", label: "Commercial" },
  { id: "ev-charger", label: "EV Chargers" },
  { id: "generator", label: "Generators" },
  { id: "panel-upgrade", label: "Panel & Service" },
  { id: "before-after", label: "Before / After" },
];
