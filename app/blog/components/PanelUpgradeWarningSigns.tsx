/**
 * "Do You Need a Panel Upgrade? 10 Warning Signs"
 *
 * Numbered checklist infographic for the panel-upgrade blog post —
 * the most shareable element in the article. Two columns on desktop
 * (5+5), single column on mobile. Each row: number badge + topical
 * inline-SVG icon + one-line label.
 */

type Sign = {
  num: number;
  label: string;
  icon: React.ReactNode;
};

const TripIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <rect x="6" y="3" width="12" height="18" rx="1" />
    <path d="M6 12h12M9 8v8" />
  </svg>
);

const FlickerIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <path d="M12 2a7 7 0 0 1 4 12.7c-.6.5-1 1.3-1 2v.3H9v-.3c0-.7-.4-1.5-1-2A7 7 0 0 1 12 2z" />
    <path d="M9 21h6M10 18h4" />
  </svg>
);

const HeatIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <path d="M14 4v9a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
  </svg>
);

const SmellIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <path d="M5 18s2-3 7-3 7 3 7 3M9 11c-2 0-3 1-3 3M15 11c2 0 3 1 3 3M9 8c0-2 1-3 3-3s3 1 3 3" />
  </svg>
);

const BuzzIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <path d="M11 5L6 9H2v6h4l5 4V5zM15 9c1.5 1 1.5 5 0 6M18 6c3 2.5 3 9.5 0 12" />
  </svg>
);

const FuseIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <rect x="4" y="8" width="16" height="8" rx="1" />
    <path d="M8 12h8M2 12h2M20 12h2" />
  </svg>
);

const FullPanelIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h3M13 7h3M8 11h3M13 11h3M8 15h3M13 15h3M5 19l14-14" />
  </svg>
);

const EvIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8zM12 16v6" />
  </svg>
);

const TwoProngIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden
  >
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M10 9v3M14 9v3" />
  </svg>
);

const StormBoltIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5"
    aria-hidden
  >
    <path d="M13 2L4.5 13.5h6L9 22l9-12.5h-6L13 2z" />
  </svg>
);

const SIGNS: Sign[] = [
  { num: 1, label: "Breakers trip often", icon: TripIcon },
  { num: 2, label: "Lights flicker or dim", icon: FlickerIcon },
  { num: 3, label: "Panel feels warm", icon: HeatIcon },
  { num: 4, label: "Burning smell near outlets or panel", icon: SmellIcon },
  { num: 5, label: "Buzzing or crackling sounds", icon: BuzzIcon },
  { num: 6, label: "Fuse box or outdated panel", icon: FuseIcon },
  { num: 7, label: "No room for new breakers", icon: FullPanelIcon },
  { num: 8, label: "Adding EV charger, generator, or hot tub", icon: EvIcon },
  { num: 9, label: "Two-prong outlets or old wiring", icon: TwoProngIcon },
  { num: 10, label: "Storm-related electrical issues", icon: StormBoltIcon },
];

export function PanelUpgradeWarningSigns() {
  return (
    <figure
      aria-labelledby="panel-signs-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Warning Signs
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="panel-signs-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            10 signs you may need
            <br />
            a panel upgrade.
          </h2>
        </header>

        <ul className="grid sm:grid-cols-2 gap-3">
          {SIGNS.map((sign) => (
            <li
              key={sign.num}
              className="flex items-center gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-red-600/15 border border-red-600/40 text-red-400 font-[family-name:var(--font-display)] text-lg leading-none">
                {sign.num}
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-white">
                {sign.icon}
              </span>
              <span className="text-neutral-200 leading-snug">
                {sign.label}
              </span>
            </li>
          ))}
        </ul>

        <footer className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500 uppercase tracking-widest">
          Two or more? Schedule a panel inspection — M Electric, Licensed
          Tulsa Electrician · OK Lic #87288 · (918) 992-6282
        </footer>
      </div>
    </figure>
  );
}
