/**
 * "Before You Install an EV Charger in Tulsa: 5 Questions to Answer"
 *
 * Signature shareable graphic for the EV-charger planning post. Vertical
 * 5-question numbered list with topical inline-SVG icons. Same dark-card
 * pattern as the other blog embeds.
 */

type Question = {
  num: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
};

const HouseCarIcon = (
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
    <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
    <path d="M6 21h12" />
  </svg>
);

const ClockChargeIcon = (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2M16 4l2 2-1 1M8 4L6 6l1 1" />
  </svg>
);

const PanelCheckIcon = (
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
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h3M13 7h3M8 11h3M13 11h3M7 17l2 2 5-5" />
  </svg>
);

const PlugWireIcon = (
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
    <path d="M6 4v4M10 4v4M5 8h6v3a3 3 0 0 1-6 0V8z" />
    <path d="M8 14v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V8h-3" />
  </svg>
);

const MoonBatteryIcon = (
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
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    <path d="M14 17h5v3h-5z M19.2 18v1" />
  </svg>
);

const QUESTIONS: Question[] = [
  {
    num: 1,
    question: "Where do you park every night?",
    answer: "Garage, driveway, carport, or detached structure?",
    icon: HouseCarIcon,
  },
  {
    num: 2,
    question: "How fast do you need to charge?",
    answer: "Level 1 backup (~5 mi/hr) vs. Level 2 daily (~25 mi/hr).",
    icon: ClockChargeIcon,
  },
  {
    num: 3,
    question: "Can your panel handle it?",
    answer: "Dedicated circuit, breaker space, load calculation.",
    icon: PanelCheckIcon,
  },
  {
    num: 4,
    question: "Plug-in or hardwired?",
    answer: "Flexibility vs. permanent, weather-rated install.",
    icon: PlugWireIcon,
  },
  {
    num: 5,
    question: "When will you charge?",
    answer: "PSO super off-peak window: 11 p.m. to 6 a.m.",
    icon: MoonBatteryIcon,
  },
];

export function EvChargerPlanChecklist() {
  return (
    <figure
      aria-labelledby="ev-plan-heading"
      className="not-prose my-10 sm:my-14"
    >
      <div className="bg-black border border-neutral-800 rounded-xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Before You Install
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2
            id="ev-plan-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]"
          >
            5 questions to answer
            <br />
            before you buy.
          </h2>
        </header>

        <ol className="space-y-3">
          {QUESTIONS.map((q) => (
            <li
              key={q.num}
              className="flex items-start gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-red-600/15 border border-red-600/40 text-red-400 font-[family-name:var(--font-display)] text-xl leading-none">
                {q.num}
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-white">
                {q.icon}
              </span>
              <div className="min-w-0">
                <p className="text-white font-semibold leading-tight">
                  {q.question}
                </p>
                <p className="mt-1 text-sm text-neutral-400 leading-snug italic">
                  {q.answer}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <footer className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500 uppercase tracking-widest">
          M Electric — Tulsa EV charger installation · OK Lic #87288 · (918) 992-6282
        </footer>
      </div>
    </figure>
  );
}
