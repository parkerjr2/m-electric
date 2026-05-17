/**
 * "AC Breaker Tripping in Tulsa? Who Should You Call?"
 *
 * Three-lane decision chart for the AC-breaker blog post. Same visual
 * pattern as PowerOutageDecisionChart but with electrical / HVAC /
 * both-needed scenarios. The article's most shareable element.
 */

type Lane = {
  id: "electrician" | "hvac" | "both";
  callTo: string;
  description: string;
  triggers: string[];
  containerClass: string;
  badgeClass: string;
  badgeText: string;
  bulletClass: string;
  icon: React.ReactNode;
};

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

const SnowflakeIcon = (
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
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M9 5l3 3 3-3M9 19l3-3 3 3M5 9l3 3-3 3M19 9l-3 3 3 3" />
  </svg>
);

const BothIcon = (
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
    <path d="M16 3h5v5M4 20l16-16M21 16v5h-5M15 15l6 6M4 4l5 5M4 9V4h5" />
  </svg>
);

const LANES: Lane[] = [
  {
    id: "electrician",
    callTo: "Call an Electrician",
    description: "Symptoms point to the panel, circuit, or wiring.",
    triggers: [
      "Breaker keeps tripping",
      "Lights dim across the home",
      "Panel buzzes or smells hot",
      "Outlets or switches feel warm",
      "Breaker will not reset",
      "Problems started after a storm",
    ],
    containerClass:
      "border border-red-700 bg-gradient-to-br from-red-900/40 via-neutral-950 to-neutral-950",
    badgeClass: "bg-red-700 text-white",
    badgeText: "Electrical",
    bulletClass: "bg-red-500",
    icon: BoltIcon,
  },
  {
    id: "hvac",
    callTo: "Call HVAC",
    description: "Symptoms point to the cooling equipment itself.",
    triggers: [
      "Outdoor AC unit hums but won't start",
      "AC coil freezes up",
      "System runs but doesn't cool",
      "Fan or compressor seems faulty",
      "Breaker trips only at compressor startup",
    ],
    containerClass:
      "border border-sky-700 bg-gradient-to-br from-sky-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-sky-600 text-white",
    badgeText: "HVAC",
    bulletClass: "bg-sky-500",
    icon: SnowflakeIcon,
  },
  {
    id: "both",
    callTo: "You May Need Both",
    description: "Start with the electrical side to confirm the circuit is safe.",
    triggers: [
      "The AC is older",
      "The panel is outdated",
      "Breaker trips during startup AND under load",
      "Electrical and cooling symptoms appear together",
    ],
    containerClass:
      "border border-amber-700 bg-gradient-to-br from-amber-950/60 via-neutral-950 to-neutral-950",
    badgeClass: "bg-amber-600 text-white",
    badgeText: "Both",
    bulletClass: "bg-amber-500",
    icon: BothIcon,
  },
];

export function AcBreakerCallChart() {
  return (
    <figure
      aria-labelledby="ac-call-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Who Do You Call?
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="ac-call-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            AC breaker tripping in Tulsa?
            <br />
            Who should you call?
          </h2>
        </header>

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
                className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-tight text-white leading-tight"
              >
                {lane.callTo}
              </h3>

              <p className="mt-2 text-sm text-neutral-300 italic">
                {lane.description}
              </p>

              <ul className="mt-5 pt-5 border-t border-white/10 space-y-2 text-sm text-neutral-200">
                {lane.triggers.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      aria-hidden
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${lane.bulletClass}`}
                    />
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500 uppercase tracking-widest">
          Not sure where to start? M Electric checks the electrical side first.
          {" · "}OK Lic #87288 · (918) 992-6282
        </footer>
      </div>
    </figure>
  );
}
