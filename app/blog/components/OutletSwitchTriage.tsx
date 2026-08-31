/**
 * "Outlet or Switch Problem? Here's When to Call an Electrician"
 *
 * Red / amber / green triage infographic for the outlet-and-switch blog post.
 * Three tiers by urgency — Stop now / Schedule a repair / Watch & document —
 * each a card with a colored header, an icon, and a short symptom list. Three
 * columns on desktop, single column on mobile. Mirrors the layout language of
 * PanelUpgradeWarningSigns / OlderHomeRedFlags for site consistency.
 */

type Tier = {
  key: string;
  heading: string;
  ring: string;
  chipBg: string;
  chipText: string;
  dot: string;
  icon: React.ReactNode;
  items: string[];
};

const StopIcon = (
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
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

const WrenchIcon = (
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

const EyeIcon = (
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
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TIERS: Tier[] = [
  {
    key: "stop",
    heading: "Stop using it now",
    ring: "border-red-600/40",
    chipBg: "bg-red-600/15 border-red-600/40",
    chipText: "text-red-400",
    dot: "bg-red-500",
    icon: StopIcon,
    items: [
      "Burning smell",
      "Warm outlet or switch",
      "Sparks",
      "Buzzing or crackling",
      "Discoloration",
      "Mild shock or tingle",
    ],
  },
  {
    key: "repair",
    heading: "Schedule a repair",
    ring: "border-amber-500/40",
    chipBg: "bg-amber-500/15 border-amber-500/40",
    chipText: "text-amber-400",
    dot: "bg-amber-400",
    icon: WrenchIcon,
    items: [
      "Loose outlet",
      "Dead outlet",
      "GFCI won’t reset",
      "Switch works intermittently",
      "Plug falls out",
      "Two-prong outlet",
    ],
  },
  {
    key: "watch",
    heading: "Watch & document",
    ring: "border-emerald-500/40",
    chipBg: "bg-emerald-500/15 border-emerald-500/40",
    chipText: "text-emerald-400",
    dot: "bg-emerald-400",
    icon: EyeIcon,
    items: [
      "One bulb flickers",
      "One outlet works only with a switch",
      "Problem happens only with one device",
    ],
  },
];

export function OutletSwitchTriage() {
  return (
    <figure
      aria-labelledby="outlet-triage-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            When to Call
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="outlet-triage-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            Outlet or switch problem?
            <br />
            Here’s when to call an electrician.
          </h2>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.key}
              className={`rounded-lg border ${tier.ring} bg-neutral-950 p-5`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-md border ${tier.chipBg} ${tier.chipText}`}
                >
                  {tier.icon}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl tracking-tight text-white leading-none">
                  {tier.heading}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-neutral-200 text-sm leading-relaxed">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${tier.dot}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-400 uppercase tracking-widest">
          Not sure what’s normal? M Electric inspects outlets, switches,
          circuits &amp; wiring — Licensed Tulsa Electrician · OK Lic #87288 ·
          (918) 992-6282
        </footer>
      </div>
    </figure>
  );
}
