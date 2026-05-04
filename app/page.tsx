"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { GbpMapEmbed } from "./components/GbpMapEmbed";
import { HeroGeometric } from "./components/HeroGeometric";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckShieldIcon,
  DollarIcon,
  GoogleGIcon,
  HouseIcon,
  PhoneIcon,
  ShieldIcon,
  StarIcon,
} from "./components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { linkify } from "@/lib/inline-links";

const UNSPLASH = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

const POWER_LINES_IMG = "photo-1473341304170-971dccb5ac1e";
const SMART_HOME_IMG = "photo-1558002038-1055907df827";
const COMMERCIAL_IMG = "photo-1587293852726-70cdb56c2866";
const GENERATOR_IMG = "/job-gallery/generac-transfer-switch.png";
const EV_CHARGER_IMG = "photo-1692052664566-477579a08e8c";

const residentialServices: { name: string; href?: string }[] = [
  { name: "Electrical repair", href: "/services/electrical-repair" },
  { name: "Electrical panel upgrades", href: "/services/panel-upgrades" },
  { name: "Home rewiring", href: "/services/home-rewiring" },
  { name: "Outlet installation & repair", href: "/services/outlet-installation" },
  { name: "Indoor lighting installation", href: "/services/indoor-lighting" },
  { name: "Outdoor lighting installation", href: "/services/outdoor-lighting" },
  { name: "Landscape & security lighting", href: "/services/outdoor-lighting" },
  { name: "Ceiling fan installation", href: "/services/ceiling-fan-installation" },
  { name: "Whole-home surge protection", href: "/services/surge-protection" },
  { name: "Smoke & carbon-monoxide detector installation" },
  { name: "Home electrical inspections" },
  { name: "New home construction wiring" },
];

const specialtyServices = [
  {
    title: "Smart Home Wiring",
    body: "Hardwired smart switches, video doorbells, security systems, and the structured cabling to make it all work.",
    img: SMART_HOME_IMG,
    alt: "Tulsa electrician installing a hardwired smart lock by M Electric",
    href: "/services/smart-home-wiring",
  },
  {
    title: "Commercial Service",
    body: "Commercial lighting solutions and full electrical wiring — LED retrofits, tenant build-outs, and new construction across the Tulsa metro.",
    img: COMMERCIAL_IMG,
    alt: "M Electric commercial electrician installing LED warehouse lighting in Tulsa",
    href: "/commercial",
  },
  {
    title: "Standby Generators",
    body: "Whole-home standby generators sized to your panel — permitted, inspected, and tested under load.",
    img: GENERATOR_IMG,
    alt: "Generac whole-home standby generator transfer switch installed beside a residential breaker panel by M Electric in Tulsa",
    href: "/services/generator-installation",
  },
  {
    title: "EV Charger Installation",
    body: "Level 2 EV chargers for any electric vehicle — load calculations, dedicated circuits, and inspection-ready work.",
    img: EV_CHARGER_IMG,
    alt: "Level 2 EV charger installed at a Tulsa home garage by M Electric",
    href: "/services/ev-charger-installation",
  },
];

const trustItems = [
  { value: "Since 1999", label: "Family Owned" },
  { value: "Veteran", label: "Army-Owned" },
  { value: "4.9 ★", label: "Google Rating · 90+ Reviews" },
  { value: "24/7", label: "Emergency Response" },
];

const serviceAreas = [
  "Tulsa",
  "Broken Arrow",
  "Owasso",
  "Bixby",
  "Jenks",
  "Sapulpa",
  "Sand Springs",
  "Berryhill",
  "Turley",
  "Oakhurst",
  "Glenpool",
  "Mounds",
  "Kiefer",
  "Kellyville",
  "Leonard",
  "Liberty",
];

const testimonials = [
  {
    quote:
      "Marshal did a fantastic job with our electric panel replacement. We initially brought a “larger” company out — ridiculously high price and pressure to add things on. M Electric was night-and-day better — fair quote, no upsells, excellent work.",
    name: "Austin C.",
    location: "Tulsa, OK",
    sourceLabel: "Verified Google Review",
  },
  {
    quote:
      "An incredible job. 10/10 on everything. Worked super hard and got everything done with perfection and meticulous attention to detail. We are having him come back to do more work because he’s so amazing and trustworthy.",
    name: "FaithAnn C.",
    location: "Tulsa, OK",
    sourceLabel: "Verified Google Review",
  },
  {
    quote:
      "Outdoor outlet, ceiling fan, switches and plates, and a panel repair — all done in one visit. Punctual, professional, and reasonable. Will definitely use him again.",
    name: "Susan C.",
    location: "Tulsa, OK",
    sourceLabel: "Verified Google Review",
  },
];

const faqs = [
  {
    q: "How fast can a Tulsa electrician get to my house in an emergency?",
    a: "M Electric provides 24/7 emergency electrical dispatch across the entire Tulsa metro. For homes inside Tulsa city limits, our typical response is under 60 minutes during the day and under 90 minutes overnight. For Broken Arrow, Owasso, Bixby, Jenks, and Sapulpa, expect 60–120 minutes depending on traffic and current job-site commitments. Sand Springs, Berryhill, Turley, Oakhurst, Glenpool, Mounds, Kiefer, Kellyville, Leonard, and Liberty are typically reached within 75–150 minutes. Marshall Morgan answers the emergency line personally — there is no call center. When you call (918) 992-6282, you are talking directly to a licensed Oklahoma electrician who can often diagnose the issue over the phone. Same-day service is available for most non-emergency calls placed before 11 a.m.",
  },
  {
    q: "Are electrical estimates free in Tulsa?",
    a: "Yes — M Electric provides free written estimates for any electrical project in the Tulsa metro. We come on-site, walk the job, explain options in plain language, and leave a detailed itemized quote in writing before any work begins. There are no hidden fees, no surprise upsells, and no high-pressure sales tactics. Straightforward jobs like outlet replacement or ceiling fan installation can usually be quoted on the spot. Larger projects — panel upgrades, full house rewires, generator installs — may require a half-day estimate visit. Either way, the estimate is free and there is no obligation to book.",
  },
  {
    q: "Is M Electric licensed and insured in Oklahoma?",
    a: "Yes. M Electric, LLC is fully licensed by the Oklahoma Construction Industries Board (license #87288), bonded, and insured for both residential and light-commercial electrical work. Owner Marshall Morgan is a US Army veteran and the company has been family-owned and operated since 1999. We carry general liability coverage in excess of state requirements and workers' compensation insurance for all on-site personnel. M Electric is also accredited by the Better Business Bureau and maintains a 4.9-star rating across 90+ verified Google reviews.",
  },
  {
    q: "What areas around Tulsa do you serve?",
    a: "M Electric serves the entire greater Tulsa metro, including every Tulsa neighborhood — Downtown, Midtown, South Tulsa, Brookside, East Tulsa, Admiral Place, Cherry Street, Maple Ridge, Riverside, and Kendall-Whittier — plus Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, Glenpool, Mounds, Kiefer, Kellyville, Leonard, and Liberty. Our standard service radius is roughly 30 miles from downtown Tulsa, which covers all of Tulsa County and most of Wagoner, Rogers, and Creek counties. If you are outside that radius but still in Green Country, call (918) 992-6282 — we will let you know whether we can reach you and whether a travel surcharge applies.",
  },
  {
    q: "What's the difference between 100-amp and 200-amp electrical service?",
    a: "A 100-amp electrical panel can support a typical pre-1990s home with a few high-draw appliances — a single AC unit, electric range, dryer, and water heater — but it is increasingly common for 100-amp panels to trip when running multiple modern loads at once. A 200-amp panel doubles the available current and is the code-default for new Tulsa-area construction. For homes adding an EV charger, heat pump, hot tub, induction range, or any pair of those, a 200-amp upgrade is usually required. M Electric handles 100A-to-200A upgrades regularly across the Tulsa metro, including utility coordination, permits, and final inspection. We can also size up to 320A or 400A service for larger homes or properties planning multiple high-draw additions.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stripProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });
  const stripY = useTransform(stripProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <SiteHeader />

      {/* Hero (animated geometric) */}
      <div id="top">
        <HeroGeometric
          primaryCta={{
            label: `Call ${PHONE_DISPLAY}`,
            href: `tel:${PHONE_TEL}`,
          }}
          secondaryCta={{
            label: "Request Free Estimate",
            href: "/contact",
          }}
        />
      </div>

      {/* Trust strip */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center md:text-left"
            >
              <div className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-white tracking-wide">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-1">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Residential services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
        <SectionHeader
          eyebrow="Residential"
          title="Tulsa whole-house electrical, top to bottom."
          subtitle="From a single dead outlet to wiring a brand-new build, our team handles it cleanly and to code."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {residentialServices.map((service, i) => {
            const inner = (
              <>
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                  <BoltIcon className="size-3.5" />
                </div>
                <span className="text-neutral-200 leading-snug">
                  {service.name}
                </span>
              </>
            );
            const className =
              "group flex items-start gap-3 bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-md px-5 py-4 transition-colors duration-200";
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              >
                {service.href ? (
                  <Link href={service.href} className={className}>
                    {inner}
                  </Link>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Specialty service cards (with photos) */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="Specialty Work"
            title="Beyond the basics — Tulsa specialty electrical work."
            subtitle="Smart home systems, commercial retrofits, generators, and EV chargers — all by the same crew you'd trust in your living room."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {specialtyServices.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={s.href}
                  className="group block bg-black border border-neutral-800 hover:border-red-600 rounded-lg overflow-hidden transition-colors duration-200"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.img.startsWith("/") ? s.img : UNSPLASH(s.img, 800)}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-neutral-400 leading-relaxed">
                      {/* linkify-skip: card body is inside a wrapping Link; nested anchors not allowed */}
                      {s.body}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Atmospheric power-lines parallax strip */}
      <section
        ref={stripRef}
        className="relative h-[40vh] sm:h-[50vh] overflow-hidden"
        aria-hidden
      >
        <motion.div style={{ y: stripY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
          <Image
            src={UNSPLASH(POWER_LINES_IMG, 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <div className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl tracking-tight text-white">
              POWER YOU CAN <span className="text-red-500">COUNT ON.</span>
            </div>
            <div className="mt-3 text-neutral-300 text-sm sm:text-base uppercase tracking-[0.3em]">
              Tulsa &middot; Broken Arrow &middot; Owasso &middot; Bixby &middot; Jenks
            </div>
          </div>
        </div>
      </section>

      {/* About / Family-owned + Veteran */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-14 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl shadow-red-900/30"
        >
          <Image
            src="/marshall-morgan-m-electric-van.jpg"
            alt="Marshall Morgan, owner of M Electric, standing beside the M Electric service van outside the BBB-accredited business location in Tulsa, Oklahoma"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs uppercase tracking-widest text-red-400 font-semibold">
              Marshall Morgan · Owner &amp; Master Electrician
            </div>
            <div className="text-white font-semibold mt-1">
              OK LIC #87288 · BBB Accredited · US Army Veteran
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="Why M Electric"
            title="No games. Just good work."
            subtitle={[
              linkify(
                "M Electric is the trusted Tulsa electrician families and small businesses have relied on since 1999. Marshall Morgan, a US Army veteran, founded the company — and it's stayed family-owned for over 25 years.",
                { currentPath: "/" }
              ),
              linkify(
                "Our service area is the entire Tulsa metro: Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, Glenpool, Mounds, Kiefer, Kellyville, Leonard, and Liberty. The same crew that wires your living room wires the next strip mall down the road.",
                { currentPath: "/" }
              ),
              linkify(
                "Every job is licensed, bonded, and insured to Oklahoma standards, and all work is warrantied. 24/7 emergency dispatch is available across the metro. M Electric carries a 4.9-star rating across 90+ verified Google reviews — earned one job at a time.",
                { currentPath: "/" }
              ),
            ]}
            align="left"
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Veteran-Owned",
                body: "Founded and run by an Army veteran who brings the same standards to your job site as he did to his unit.",
                Icon: ShieldIcon,
              },
              {
                title: "Family Operated",
                body: "We answer the phone ourselves. You'll know who's coming to your house before they knock on the door.",
                Icon: HouseIcon,
              },
              {
                title: "Upfront Pricing",
                body: "Flat-rate quotes in writing. No surprise upsells, no clock-watching, no fine print.",
                Icon: DollarIcon,
              },
              {
                title: "Workmanship Warranty",
                body: "We stand behind our work — if anything fails, we're back on-site at no charge.",
                Icon: CheckShieldIcon,
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-neutral-950 border border-neutral-800 rounded-lg p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
                    <f.Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {linkify(f.body, { currentPath: "/" })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section
        id="area"
        className="border-y border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="Service Area"
            title="Serving the greater Tulsa metro."
            subtitle="If you're in or near any of these cities, we're your electrician. Not on the list? Give us a call — we likely cover you."
          />
          <p className="mt-8 text-center text-neutral-400 text-base max-w-3xl mx-auto leading-relaxed">
            Inside Tulsa we cover{" "}
            <span className="text-neutral-200">
              Downtown, Midtown, South Tulsa, Brookside, East Tulsa,
              Admiral Place, Cherry Street, Maple Ridge, Riverside, and
              Kendall-Whittier
            </span>{" "}
            — plus every surrounding city in the metro.
          </p>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {serviceAreas.map((area, i) => {
              const slug = area.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <Link
                    href={`/service-areas/${slug}`}
                    className="inline-block px-5 py-2.5 rounded-full bg-black border border-neutral-800 text-neutral-200 text-sm hover:border-red-600 hover:text-white transition-colors duration-200"
                    aria-label={`Electrician services in ${area}, OK`}
                  >
                    {area}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Find Us on Google
              <span className="h-px w-8 bg-red-600" />
            </div>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              M Electric, LLC · 4.9★ across 90+ verified Google reviews
            </p>
          </div>
          <GbpMapEmbed className="mt-8" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
        <SectionHeader
          eyebrow="What Tulsa Says"
          title="Trusted by Tulsa neighbors since 1999."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-7"
            >
              <div className="flex gap-1 text-red-500" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} className="size-4" />
                ))}
              </div>
              <blockquote className="mt-4 text-neutral-200 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div>
                  <span className="text-white font-semibold">{t.name}</span>
                  <span className="text-neutral-500"> · {t.location}</span>
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-neutral-500">
                  <GoogleGIcon className="size-3.5" />
                  <span>{t.sourceLabel}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-y border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="Common Questions"
            title="Tulsa electrician FAQs."
            subtitle="The questions homeowners ask before they pick up the phone."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group bg-black border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer text-white font-semibold list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg">{faq.q}</h3>
                  <span className="text-red-500 transition-transform duration-200 group-open:rotate-45 text-2xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-neutral-300 leading-relaxed">
                  {linkify(faq.a, { currentPath: "/" })}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="quote" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:40px_40px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white">
            TULSA ELECTRICAL TROUBLE?
            <br />
            CALL US RIGHT NOW.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            Live dispatch around the clock for the entire Tulsa metro. Same-day
            service available.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white font-bold text-2xl sm:text-3xl px-8 py-5 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <PhoneIcon className="size-7" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white border-2 border-white/40 hover:border-white font-semibold px-6 py-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Request Free Estimate
              <ArrowRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* --------------------------- shared components --------------------------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  /**
   * Accepts a single ReactNode (rendered as one <p>) or an array of nodes
   * (rendered as a stack of <p> blocks with vertical rhythm — used when the
   * intro is dense enough to deserve breathing room between paragraphs).
   */
  subtitle?: React.ReactNode | React.ReactNode[];
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
        <span className="h-px w-8 bg-red-600" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[0.95]">
        {title}
      </h2>
      {Array.isArray(subtitle) ? (
        <div className="mt-5 space-y-4 text-neutral-400 text-lg leading-relaxed">
          {subtitle.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : subtitle ? (
        <p className="mt-5 text-neutral-400 text-lg leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}


