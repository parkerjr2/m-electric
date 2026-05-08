/**
 * "What Does Whole-Home Surge Protection Help Protect?"
 *
 * Three-category infographic for the surge-protection blog post.
 * Categorizes the equipment a panel-level SPD protects — including
 * hard-wired loads that plug-in surge strips can't reach.
 *
 * Built as Tailwind + inline SVG icons rather than a literal house
 * cutaway: more maintainable, sharper at every zoom, easier to update
 * as protected categories evolve. The "60-80% of surges originate
 * inside" stat is the share-worthy data hook.
 */

type Category = {
  id: "entertainment" | "appliances" | "mechanical";
  label: string;
  caption: string;
  items: string[];
  icon: React.ReactNode;
  containerClass: string;
  badgeClass: string;
  bulletClass: string;
};

const TvIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
    aria-hidden
  >
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M8 22h8M12 18v4" />
  </svg>
);

const FridgeIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
    aria-hidden
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M5 10h14M8 6v2M8 14v2" />
  </svg>
);

const HvacIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
    aria-hidden
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const CATEGORIES: Category[] = [
  {
    id: "entertainment",
    label: "Electronics",
    caption: "Plug-in strips help — but only for what's plugged in.",
    items: [
      "TVs and AV equipment",
      "Computers, monitors, docks",
      "Wi-Fi router and mesh systems",
      "Gaming consoles",
      "Smart speakers and hubs",
      "Security cameras and NVRs",
    ],
    icon: TvIcon,
    containerClass:
      "border border-sky-700 bg-gradient-to-br from-sky-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-sky-600 text-white",
    bulletClass: "bg-sky-500",
  },
  {
    id: "appliances",
    label: "Hard-wired appliances",
    caption: "Most are NOT plugged into a wall. Power strips can't reach them.",
    items: [
      "Refrigerator (built-in or hard-wired)",
      "Range, oven, cooktop",
      "Dishwasher",
      "Washer and dryer",
      "Microwave (built-in)",
      "Garage door opener",
    ],
    icon: FridgeIcon,
    containerClass:
      "border border-red-700 bg-gradient-to-br from-red-900/40 via-neutral-950 to-neutral-950",
    badgeClass: "bg-red-700 text-white",
    bulletClass: "bg-red-500",
  },
  {
    id: "mechanical",
    label: "HVAC & mechanical",
    caption: "Surge-vulnerable control boards. $400–$1,500 to replace.",
    items: [
      "AC compressor and condenser",
      "Furnace / heat pump control board",
      "Smart thermostat",
      "Water heater (hard-wired)",
      "Well pump and sump pump",
      "EV charger circuit",
    ],
    icon: HvacIcon,
    containerClass:
      "border border-amber-700 bg-gradient-to-br from-amber-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-amber-600 text-white",
    bulletClass: "bg-amber-500",
  },
];

export function SurgeProtectionCoverage() {
  return (
    <figure
      aria-labelledby="surge-coverage-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            What&rsquo;s Protected
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="surge-coverage-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            What does whole-home
            <br />
            surge protection cover?
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            A panel-mounted SPD protects circuits, not just outlets — including
            most of the equipment a power strip can&rsquo;t.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`flex flex-col rounded-lg p-6 ${cat.containerClass}`}
              aria-labelledby={`cat-${cat.id}-heading`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-white/10 text-white">
                  {cat.icon}
                </div>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${cat.badgeClass}`}
                >
                  {cat.label}
                </span>
              </div>

              <h3
                id={`cat-${cat.id}-heading`}
                className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-tight text-white leading-tight"
              >
                {cat.label}
              </h3>

              <p className="mt-2 text-sm text-neutral-300 italic">
                {cat.caption}
              </p>

              <ul className="mt-5 pt-5 border-t border-white/10 space-y-2 text-sm text-neutral-200">
                {cat.items.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      aria-hidden
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${cat.bulletClass}`}
                    />
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-8 pt-6 border-t border-neutral-800 grid sm:grid-cols-2 gap-2 sm:gap-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          <div>
            <span className="text-red-400 font-semibold">60–80%</span> of surges
            originate inside the home (NEMA)
          </div>
          <div>
            <span className="text-amber-400 font-semibold">No SPD</span> can
            stop a direct lightning strike (ESFI)
          </div>
        </footer>
      </div>
    </figure>
  );
}
