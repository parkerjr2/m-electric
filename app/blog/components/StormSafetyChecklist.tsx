/**
 * "Tulsa Spring Storm Electrical Checklist — Before, During, After"
 *
 * Three-panel checklist infographic for the spring-storm blog post.
 * Color-coded by phase per the spec: blue (calm/before), amber (during),
 * green (clearing/after). Stacks vertically on mobile, three columns on
 * desktop.
 */

type Phase = {
  id: "before" | "during" | "after";
  label: string;
  caption: string;
  items: string[];
  /** Tailwind classes for the panel card. */
  containerClass: string;
  badgeClass: string;
  bulletClass: string;
  icon: React.ReactNode;
};

const SunCloudIcon = (
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
    <circle cx="6" cy="6" r="2.5" />
    <path d="M6 1v1.5M6 9.5v1.5M1 6h1.5M9.5 6H11M2.5 2.5l1 1M8.5 8.5l1 1M2.5 9.5l1-1M8.5 3.5l1-1" />
    <path d="M6 17a5 5 0 0 1 9.5-2A4 4 0 1 1 17 22H8a4 4 0 0 1-2-5z" />
  </svg>
);

const StormIcon = (
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
    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
    <path d="m13 12-3 5h4l-3 5" />
  </svg>
);

const CheckCircleIcon = (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

const PHASES: Phase[] = [
  {
    id: "before",
    label: "Before",
    caption: "Pre-storm prep — high-leverage hours.",
    items: [
      "Schedule a pre-storm electrical inspection",
      "Install whole-home surge protection",
      "Test every GFCI outlet (kitchen, bath, garage, exterior)",
      "Test the sump pump and battery backup",
      "Visually inspect weatherhead, mast, meter, panel",
      "Trim limbs over service drop and roof",
      "Decide your generator plan now",
      "Sign up for NWS Tulsa alerts and bookmark the PSO outage map",
    ],
    containerClass:
      "border border-sky-700 bg-gradient-to-br from-sky-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-sky-600 text-white",
    bulletClass: "bg-sky-500",
    icon: SunCloudIcon,
  },
  {
    id: "during",
    label: "During",
    caption: "Stay sheltered — don't make it worse.",
    items: [
      "Don't touch anything plugged into a wall outlet",
      "Don't shower, bathe, or wash dishes",
      "Stay sheltered until 30 minutes after the last thunder",
      "Don't run generators indoors or in a garage",
      "Don't try to inspect outdoor equipment",
      "Reset a tripped breaker once — only once",
    ],
    containerClass:
      "border border-amber-700 bg-gradient-to-br from-amber-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-amber-600 text-white",
    bulletClass: "bg-amber-500",
    icon: StormIcon,
  },
  {
    id: "after",
    label: "After",
    caption: "Inspect carefully, then call the right person.",
    items: [
      "Stay 35+ feet from any downed line — call 911, then PSO",
      "Walk the property; look at weatherhead, meter, panel from a distance",
      "Reset GFCIs; test every outlet",
      "Check the sump pump",
      "Watch for surge symptoms over the next several days",
      "Document everything for insurance",
      "Buzzing, scorching, burning smell? Stop and call a licensed electrician",
    ],
    containerClass:
      "border border-emerald-700 bg-gradient-to-br from-emerald-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-emerald-600 text-white",
    bulletClass: "bg-emerald-500",
    icon: CheckCircleIcon,
  },
];

export function StormSafetyChecklist() {
  return (
    <figure
      aria-labelledby="storm-checklist-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            One-Page Playbook
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="storm-checklist-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            Tulsa spring storm
            <br />
            electrical checklist.
          </h2>
        </header>

        <div className="grid lg:grid-cols-3 gap-5">
          {PHASES.map((phase) => (
            <div
              key={phase.id}
              className={`flex flex-col rounded-lg p-6 ${phase.containerClass}`}
              aria-labelledby={`phase-${phase.id}-heading`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-white/10 text-white">
                  {phase.icon}
                </div>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${phase.badgeClass}`}
                >
                  {phase.label}
                </span>
              </div>

              <h3
                id={`phase-${phase.id}-heading`}
                className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white leading-none"
              >
                {phase.label} the storm
              </h3>

              <p className="mt-2 text-sm text-neutral-300 italic">
                {phase.caption}
              </p>

              <ul className="mt-5 pt-5 border-t border-white/10 space-y-2 text-sm text-neutral-200">
                {phase.items.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      aria-hidden
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${phase.bulletClass}`}
                    />
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-8 pt-6 border-t border-neutral-800 grid sm:grid-cols-3 gap-2 sm:gap-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          <div>
            <span className="text-red-400 font-semibold">911</span> · Downed
            line, fire, injury
          </div>
          <div>
            <span className="text-sky-400 font-semibold">
              PSO 1-833-776-6884
            </span>{" "}
            · Utility outage
          </div>
          <div>
            <span className="text-emerald-400 font-semibold">
              M Electric (918) 992-6282
            </span>{" "}
            · Inside your home
          </div>
        </footer>
      </div>
    </figure>
  );
}
