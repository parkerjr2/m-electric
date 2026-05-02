import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { GbpMapEmbed } from "../components/GbpMapEmbed";
import { ArrowRightIcon, PhoneIcon } from "../components/icons";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const TITLE = "Contact M Electric — Tulsa Electrician | (918) 992-6282";
const DESCRIPTION =
  "Get a free written estimate from M Electric — Tulsa's family-owned, Army-veteran-led electrician since 1999. Call (918) 992-6282 or send a message. 24/7 emergency dispatch.";
const OG_IMAGE = `${SITE_URL}/marshall-morgan-m-electric-van.jpg`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    images: [
      {
        url: OG_IMAGE,
        width: 2048,
        height: 1536,
        alt: "Marshall Morgan, owner of M Electric, with the M Electric service van in Tulsa, Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  name: "Contact M Electric",
  description: DESCRIPTION,
  url: `${SITE_URL}/contact`,
  primaryImageOfPage: OG_IMAGE,
  about: { "@id": `${SITE_URL}#business` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}#business`,
    name: "M Electric, LLC",
    url: SITE_URL,
    telephone: "+1-918-992-6282",
    email: EMAIL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-918-992-6282",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "US-OK",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-918-992-6282",
        contactType: "emergency",
        availableLanguage: ["English"],
        areaServed: "US-OK",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-500 mb-8 flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Contact</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Get In Touch
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              READY TO
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              GET WIRED UP?
            </span>
          </h1>
          <p className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Send a message below for a free written estimate, or call directly
            for emergency dispatch. Marshall answers the phone himself — no call
            center, no menu tree.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Form (LEFT) */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-7 sm:p-10">
            <div className="mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white leading-tight">
                Send us a message.
              </h2>
              <p className="mt-3 text-neutral-400 leading-relaxed">
                Most messages get a same-day response during business hours. For
                anything urgent, please call.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Sidebar (RIGHT) */}
          <aside className="space-y-5">
            {/* Phone CTA — primary */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="group block bg-gradient-to-br from-red-700 via-red-600 to-red-700 hover:from-red-600 hover:via-red-500 hover:to-red-600 rounded-lg p-7 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
            >
              <div className="text-xs uppercase tracking-widest text-white/80 font-semibold flex items-center gap-2">
                <span className="relative inline-flex size-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-white" />
                </span>
                24/7 Emergency Dispatch
              </div>
              <div className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight text-white leading-none">
                {PHONE_DISPLAY}
              </div>
              <div className="mt-4 text-white/90 text-sm leading-relaxed">
                Marshall answers the phone himself. Average response: under 60
                minutes inside Tulsa, 60–120 minutes metro-wide.
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-white font-semibold text-sm">
                <PhoneIcon className="size-4" />
                Tap to call
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Email card */}
            <a
              href={`mailto:${EMAIL}`}
              className="group block bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors cursor-pointer"
            >
              <div className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                Email
              </div>
              <div className="mt-2 text-white font-semibold">{EMAIL}</div>
              <div className="mt-2 text-neutral-400 text-sm">
                Or use the form — both deliver to the same inbox.
              </div>
            </a>

            {/* Service-area card */}
            <Link
              href="/service-areas"
              className="group block bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors"
            >
              <div className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                Service Area
              </div>
              <div className="mt-2 text-white font-semibold leading-snug">
                Tulsa metro · 11 cities · ~30-mile radius
              </div>
              <div className="mt-2 text-neutral-400 text-sm">
                Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand
                Springs, Berryhill, Turley, Oakhurst, Glenpool.
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-red-500 font-semibold">
                See coverage <ArrowRightIcon className="size-4" />
              </div>
            </Link>

            {/* Trust pills */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
              <div className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                Verified
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1.5 rounded-full bg-black border border-neutral-800 text-neutral-300 text-xs">
                  OK LIC #87288
                </span>
                <span className="inline-block px-3 py-1.5 rounded-full bg-black border border-neutral-800 text-neutral-300 text-xs">
                  BBB Accredited
                </span>
                <span className="inline-block px-3 py-1.5 rounded-full bg-black border border-neutral-800 text-neutral-300 text-xs">
                  4.9★ · 90+ reviews
                </span>
                <span className="inline-block px-3 py-1.5 rounded-full bg-black border border-neutral-800 text-neutral-300 text-xs">
                  US Army Veteran
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Find Us on Google
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white leading-tight">
              4.9 stars across 90+ Google reviews.
            </h2>
          </div>
          <GbpMapEmbed />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
