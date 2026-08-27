/**
 * "Buying an Older Tulsa Home? Check These 10 Electrical Red Flags"
 *
 * Numbered checklist infographic for the older-home red-flags blog post —
 * the most shareable element in the article. Two columns on desktop (5+5),
 * single column on mobile. Each row: number badge + topical inline-SVG icon
 * + one-line label. Mirrors PanelUpgradeWarningSigns for visual consistency.
 */

type Flag = {
  num: number;
  label: string;
  icon: React.ReactNode;
};

const PanelIcon = (
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
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
  </svg>
);

const BreakerIcon = (
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

const WarmOutletIcon = (
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
    <rect x="7" y="10" width="10" height="11" rx="2" />
    <path d="M11 14v2M13 14v2" />
    <path d="M9 6c0-1 1-1.4 1-2.5M13 6c0-1 1-1.4 1-2.5M17 6c0-1 1-1.4 1-2.5" />
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

const DiyIcon = (
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
    <path d="M15 6.5a3.5 3.5 0 0 0-4.7 4.7L3 18.5V21h2.5l7.3-7.3A3.5 3.5 0 0 0 17.5 9l-2 2-2-2 2-2.5z" />
  </svg>
);

const GfciIcon = (
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
    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    <path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
);

const ExtensionCordIcon = (
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
    <path d="M9 2v4M15 2v4M8 6h8v3a4 4 0 0 1-8 0V6z" />
    <path d="M12 15c0 3-5 3-5 6" />
  </svg>
);

const OldWiringIcon = (
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
    <path d="M3 12c3-4 6 4 9 0s6-4 9 0" />
    <circle cx="7" cy="10.2" r="1" />
    <circle cx="17" cy="13.8" r="1" />
  </svg>
);

const CapacityIcon = (
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
    <path d="M4 20a8 8 0 1 1 16 0" />
    <path d="M12 20l4-5" />
    <circle cx="12" cy="20" r="1" />
  </svg>
);

const FLAGS: Flag[] = [
  { num: 1, label: "Outdated panel or fuse box", icon: PanelIcon },
  { num: 2, label: "Breakers trip often", icon: BreakerIcon },
  { num: 3, label: "Two-prong or ungrounded outlets", icon: TwoProngIcon },
  { num: 4, label: "Warm or discolored outlets", icon: WarmOutletIcon },
  { num: 5, label: "Flickering or dimming lights", icon: FlickerIcon },
  { num: 6, label: "Visible DIY wiring", icon: DiyIcon },
  { num: 7, label: "Missing GFCI protection near water", icon: GfciIcon },
  { num: 8, label: "Extension cords used permanently", icon: ExtensionCordIcon },
  { num: 9, label: "Old wiring types (knob-and-tube, aluminum)", icon: OldWiringIcon },
  { num: 10, label: "Not enough capacity for your plans", icon: CapacityIcon },
];

export function OlderHomeRedFlags() {
  return (
    <figure
      aria-labelledby="older-home-red-flags-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Red Flags
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="older-home-red-flags-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            Buying an older Tulsa home?
            <br />
            Check these 10 electrical red flags.
          </h2>
        </header>

        <ul className="grid sm:grid-cols-2 gap-3">
          {FLAGS.map((flag) => (
            <li
              key={flag.num}
              className="flex items-center gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-red-600/15 border border-red-600/40 text-red-400 font-[family-name:var(--font-display)] text-lg leading-none">
                {flag.num}
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-white">
                {flag.icon}
              </span>
              <span className="text-neutral-200 leading-snug">{flag.label}</span>
            </li>
          ))}
        </ul>

        <footer className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-400 uppercase tracking-widest">
          Before closing, schedule an electrical inspection — M Electric,
          Licensed Tulsa Electrician · OK Lic #87288 · (918) 992-6282
        </footer>
      </div>
    </figure>
  );
}
