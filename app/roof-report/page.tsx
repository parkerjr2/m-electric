import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  BoltIcon,
  ClockIcon,
  CheckShieldIcon,
  HouseIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "../components/icons";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

const TITLE = "Free Instant Roof Report — Tulsa | M Electric";
const DESCRIPTION =
  "Enter your Tulsa-area address for a free, instant roof report. Check for storm damage in seconds — no phone call, no obligation. Brought to you by M Electric.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/roof-report" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/roof-report",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free Roof Report",
      item: `${SITE_URL}/roof-report`,
    },
  ],
};

const BENEFITS = [
  {
    icon: ClockIcon,
    title: "Instant",
    body: "Your report generates in seconds — no waiting for a callback.",
  },
  {
    icon: HouseIcon,
    title: "Address only",
    body: "Just your home address. No phone number or email required to start.",
  },
  {
    icon: BoltIcon,
    title: "Storm-aware",
    body: "Built for Tulsa weather — see what recent storms may have done to your roof.",
  },
  {
    icon: CheckShieldIcon,
    title: "No obligation",
    body: "Free to run, with nothing to buy. Use it before you file or call anyone.",
  },
];

export default function RoofReportPage() {
  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      {/* Hero + roof-report form */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-400 mb-8 flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Roof Report</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Free Instant Roof Report
            <span className="h-px w-8 bg-red-600" />
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              CHECK YOUR ROOF
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              IN SECONDS.
            </span>
          </h1>

          <p className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Tulsa storms are hard on roofs. Enter your home address for a free,
            instant roof report — see potential storm damage before you file a
            claim or pay for an inspection.
          </p>

          {/* The embed — restyled to match M Electric */}
          <form
            action="https://getzeusai.com/roof/test-roofing"
            method="get"
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto text-left"
          >
            <label htmlFor="roof-address" className="sr-only">
              Home address
            </label>
            <input
              id="roof-address"
              name="address"
              required
              autoComplete="street-address"
              placeholder="Enter your home address"
              className="flex-1 min-w-0 rounded-md border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 transition-colors focus:border-red-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-500 px-6 py-3.5 font-bold text-base text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              Get my roof report
              <ArrowRightIcon className="size-4" />
            </button>
          </form>

          <p className="mt-4 text-sm text-neutral-400">
            Free · Instant · No obligation
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-red-600/15 border border-red-600/40 text-red-400">
                <b.icon className="size-5" />
              </span>
              <h2 className="mt-4 font-semibold text-white text-lg leading-snug">
                {b.title}
              </h2>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Storm → electrical tie-in (why M Electric) */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
                <span className="h-px w-8 bg-red-600" />
                After the Storm
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
                Storms hit roofs and electrical systems.
              </h2>
              <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
                The same Tulsa storms that damage roofs also take out
                weatherheads, meter bases, panels, and service lines. Run your
                free roof report first — and if the storm touched your power,
                M Electric handles the electrical side.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                We’re a licensed, family-owned Tulsa electrician (OK Lic #87288)
                with 24/7 emergency dispatch across the metro.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-7 py-3.5 rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                >
                  Get an electrical estimate
                  <ArrowRightIcon className="size-4" />
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  aria-label={`Call M Electric at ${PHONE_DISPLAY}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold text-lg px-7 py-3.5 rounded-md transition-colors cursor-pointer"
                >
                  <PhoneIcon className="size-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-lg p-7">
              <div className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                Storm electrical damage we fix
              </div>
              <ul className="mt-4 space-y-3 text-neutral-300">
                {[
                  "Damaged weatherheads and service masts",
                  "Pulled-away or crushed meter bases",
                  "Storm-tripped or water-damaged panels",
                  "Partial power after the storm",
                  "Whole-home surge protection",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-red-500"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
