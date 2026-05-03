/**
 * "After a Tulsa Power Outage — Who Do You Call?"
 *
 * Three-lane decision chart for the power-outage blog post. HTML/Tailwind +
 * inline SVG icons (rather than a single SVG) so it scales responsively,
 * stacks on mobile, and uses real semantic headings for accessibility.
 *
 * Designed to be the most shareable/citation-worthy element of the post
 * per the original brief.
 */

type Lane = {
  /** Visual id for color theming + aria. */
  id: "emergency" | "utility" | "electrician";
  callTo: string;
  phone?: string;
  description: string;
  triggers: string[];
  /** Tailwind classes for the lane card. */
  containerClass: string;
  badgeClass: string;
  badgeText: string;
  icon: React.ReactNode;
};

const PhoneIcon = (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const AlertIcon = (
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
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
  </svg>
);

const BoltIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
    aria-hidden
  >
    <path d="M13 2L4.5 13.5h6L9 22l9-12.5h-6L13 2z" />
  </svg>
);

const HouseBoltIcon = (
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
    <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

const LANES: Lane[] = [
  {
    id: "emergency",
    callTo: "Call 911",
    description: "Active danger to life or property.",
    triggers: [
      "A downed, sparking, or arcing power line",
      "A line on a vehicle, fence, tree, or house",
      "Smoke or flames inside walls",
      "Anyone shocked or trapped near electrical equipment",
      "Suspected carbon monoxide poisoning",
    ],
    containerClass:
      "border border-red-600 bg-gradient-to-br from-red-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-red-600 text-white",
    badgeText: "Emergency",
    icon: AlertIcon,
  },
  {
    id: "utility",
    callTo: "Call PSO",
    phone: "1-833-776-6884",
    description: "It's a utility-side outage.",
    triggers: [
      "The whole neighborhood is dark",
      "Streetlights are out",
      "Fallen tree on a power line (from a safe distance)",
      "Damaged utility pole",
      "You need an outage status / ETR",
    ],
    containerClass:
      "border border-sky-700 bg-gradient-to-br from-sky-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-sky-600 text-white",
    badgeText: "Utility",
    icon: BoltIcon,
  },
  {
    id: "electrician",
    callTo: "Call M Electric",
    phone: "(918) 992-6282",
    description: "It's inside your home.",
    triggers: [
      "Only your house is out",
      "Partial power — some rooms work, some don't",
      "Buzzing or scorched electrical panel",
      "Burning smell from outlets, panel, or appliances",
      "Breaker that won't reset",
      "Standing water near electrical equipment",
      "Damage from a power surge",
    ],
    containerClass:
      "border border-red-700 bg-gradient-to-br from-red-900/40 via-neutral-950 to-neutral-950",
    badgeClass: "bg-red-700 text-white",
    badgeText: "Electrician",
    icon: HouseBoltIcon,
  },
];

export function PowerOutageDecisionChart() {
  return (
    <figure
      aria-labelledby="decision-chart-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        {/* Title */}
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Decision Chart
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="decision-chart-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            After a Tulsa power outage —
            <br />
            who do you call?
          </h2>
        </header>

        {/* Lanes */}
        <div className="grid lg:grid-cols-3 gap-5">
          {LANES.map((lane) => (
            <div
              key={lane.id}
              className={`flex flex-col rounded-lg p-6 ${lane.containerClass}`}
              aria-labelledby={`lane-${lane.id}-heading`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-white/10 text-white">
                  {lane.icon}
                </div>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${lane.badgeClass}`}
                >
                  {lane.badgeText}
                </span>
              </div>

              <h3
                id={`lane-${lane.id}-heading`}
                className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white leading-none"
              >
                {lane.callTo}
              </h3>

              {lane.phone && (
                <a
                  href={`tel:${lane.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-white font-mono text-base"
                >
                  {PhoneIcon}
                  <span className="font-bold tracking-wide">{lane.phone}</span>
                </a>
              )}

              <p className="mt-3 text-sm text-neutral-300 italic">
                {lane.description}
              </p>

              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                  If you see…
                </div>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {lane.triggers.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        aria-hidden
                        className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                          lane.id === "utility"
                            ? "bg-sky-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span className="leading-snug">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500 uppercase tracking-widest">
          M Electric, LLC · Licensed Tulsa Electrician · OK Lic #87288 ·
          Same-day emergency response
        </footer>
      </div>
    </figure>
  );
}
