"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  CheckShieldIcon,
  ClockIcon,
  DollarIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
} from "../components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { linkify } from "@/lib/inline-links";

const UNSPLASH = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

const POWER_LINES_IMG = "photo-1473341304170-971dccb5ac1e";

const whatWeDo = [
  "New Home Construction",
  "Home Renovations",
  "Light Commercial",
  "Fast Electrical Repair",
];

type ServiceLink = { name: string; href?: string };

const residentialServices: ServiceLink[] = [
  { name: "Complete electrical systems for new home construction" },
  { name: "Home electrical inspections and safety audits" },
  {
    name: "Electrical panel upgrades and modernization",
    href: "/services/panel-upgrades",
  },
  { name: "Indoor lighting design and installation", href: "/services/indoor-lighting" },
  { name: "Outdoor lighting design and installation", href: "/services/outdoor-lighting" },
  { name: "Ceiling fan installation and repair", href: "/services/ceiling-fan-installation" },
  { name: "EV charger installations", href: "/services/ev-charger-installation" },
  { name: "Standby generator installation", href: "/services/generator-installation" },
  { name: "Whole-home surge protection", href: "/services/surge-protection" },
  { name: "Smart home wiring and integrated systems", href: "/services/smart-home-wiring" },
  { name: "Home rewiring", href: "/services/home-rewiring" },
  { name: "Outlet installation & repair", href: "/services/outlet-installation" },
  { name: "Electrical wiring repair", href: "/services/wiring-repair" },
  { name: "Smoke and carbon-monoxide detector installation" },
];

const commercialServices: ServiceLink[] = [
  {
    name: "Commercial lighting design and installation",
    href: "/services/commercial-lighting",
  },
  {
    name: "Commercial wiring and new-construction electrical",
    href: "/services/commercial-wiring",
  },
  { name: "Energy-efficient LED lighting upgrades", href: "/services/commercial-lighting" },
  { name: "Power distribution and panel upgrades", href: "/services/panel-upgrades" },
  { name: "24/7 emergency commercial service", href: "/commercial" },
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

export default function About() {
  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stripProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });
  const stripY = useTransform(stripProgress, [0, 1], ["-10%", "10%"]);

  const differentiators = [
    {
      title: "Transparent Pricing",
      body: "Honest recommendations and clear, written estimates — no surprise upsells, no fine print.",
      Icon: DollarIcon,
    },
    {
      title: "Punctual & Professional",
      body: "We show up when we say we will, in uniform, ready to work — every job, every time.",
      Icon: ClockIcon,
    },
    {
      title: "Clean & Careful",
      body: "We treat your home like our own. Drop cloths down, debris out, no mess left behind.",
      Icon: SparkleIcon,
    },
    {
      title: "Licensed & Insured",
      body: "Every technician is fully licensed, bonded, and insured to Oklahoma standards.",
      Icon: ShieldIcon,
    },
    {
      title: "Workmanship Warranty",
      body: "We stand behind our work. If anything fails, we're back on-site at no charge.",
      Icon: CheckShieldIcon,
    },
    {
      title: "24/7 Emergency Response",
      body: "Live dispatch around the clock for the entire Tulsa metro. Same-day service available.",
      Icon: BoltIcon,
    },
  ];

  return (
    <main className="bg-black text-white">
      <SiteHeader active="/about" />

      {/* About hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-neutral-900"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
          >
            <span className="h-px w-8 bg-red-600" />
            Your Tulsa Electrician
            <span className="h-px w-8 bg-red-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              ABOUT
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              TULSA&rsquo;S ELECTRICIAN.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {linkify(
              "Since 1999, M Electric has been proud to serve as Tulsa’s premier electrician. As a family-owned and operated business led by a dedicated Army veteran, we bring military precision and unwavering commitment to every electrical project we undertake.",
              { currentPath: "/about" }
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <PhoneIcon className="size-5" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold text-lg px-7 py-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Get Wired Up
              <ArrowRightIcon className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What we do — 4-card strip */}
      <section className="border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center gap-3 bg-black border border-neutral-800 hover:border-red-600 rounded-md px-5 py-5 transition-colors duration-200"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                  <BoltIcon className="size-5" />
                </div>
                <span className="text-neutral-100 font-medium leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Since 1999 — split */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800"
        >
          <Image
            src="/marshall-morgan-m-electric-van.jpg"
            alt="Marshall Morgan, owner and master electrician of M Electric, LLC, standing beside the M Electric service van outside the BBB-accredited Tulsa business location"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
            priority
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
            eyebrow="Tulsa Electrician Since 1999"
            title="Tulsa's trusted electrician."
            subtitle="M Electric has been in the electrical field since 1999, family-owned and operated by US Army veteran Marshall Morgan. We bring a high level of integrity to every job. No games, no unneeded upsells — just high-quality work that exceeds expectations."
            align="left"
          />
          <p className="mt-6 text-neutral-400 leading-relaxed">
            At M Electric, we understand that electrical work is more than just
            wiring and installations — it&rsquo;s about ensuring the safety,
            comfort, and functionality of your home or business. Our team of
            skilled electricians combines decades of experience with ongoing
            training to stay at the forefront of electrical technology and
            safety standards.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 cursor-pointer"
          >
            Get Wired Up!
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </section>

      {/* Parallax credentials strip */}
      <section
        ref={stripRef}
        className="relative h-[40vh] sm:h-[50vh] overflow-hidden"
        aria-hidden
      >
        <motion.div
          style={{ y: stripY }}
          className="absolute inset-0 -top-[10%] -bottom-[10%]"
        >
          <Image
            src={UNSPLASH(POWER_LINES_IMG, 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <div className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl tracking-tight text-white">
              LICENSED <span className="text-red-500">·</span> BONDED{" "}
              <span className="text-red-500">·</span> INSURED.
            </div>
            <div className="mt-3 text-neutral-300 text-sm sm:text-base uppercase tracking-[0.3em]">
              Standing Behind Every Job Since 1999
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services — Residential / Commercial */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
        <SectionHeader
          eyebrow="Comprehensive Services"
          title="Every Tulsa job, every space."
          subtitle={linkify(
            "Whether you're building a new home, upgrading your commercial space, or need reliable electrical repairs, M Electric delivers exceptional service tailored to your needs.",
            { currentPath: "/about" }
          )}
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <ServiceColumn
            title="Residential Services"
            items={residentialServices}
          />
          <ServiceColumn
            title="Commercial Services"
            items={commercialServices}
          />
        </div>
      </section>

      {/* The M Electric Difference */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="The M Electric Difference"
            title="Why Tulsa neighbors keep calling back."
            subtitle="What sets us apart is our unwavering commitment to quality and customer satisfaction. As a local Tulsa business, we take pride in contributing to our community's growth."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="bg-black border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
                    <d.Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-white">{d.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {linkify(d.body, { currentPath: "/about" })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
        <SectionHeader
          eyebrow="Service Area"
          title="Serving Tulsa and beyond."
          subtitle="From downtown Tulsa to surrounding communities, M Electric is your trusted partner for all electrical needs. Our service area continues to grow as more homeowners and businesses discover the difference professional, reliable electrical service makes."
        />
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
                  aria-label={`Electrician services in ${area}, OK`}
                  className="inline-block px-5 py-2.5 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm hover:border-red-600 hover:text-white transition-colors duration-200"
                >
                  {area}
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-sm transition-colors"
          >
            See full service area details →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
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
            GET STARTED WITH
            <br />
            M ELECTRIC.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            Ready to experience the best in electrical services? Contact us
            today to discuss your project or schedule a consultation.
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
  subtitle?: React.ReactNode;
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
      {subtitle && (
        <p className="mt-5 text-neutral-400 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ServiceColumn({
  title,
  items,
}: {
  title: string;
  items: ServiceLink[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950 border border-neutral-800 rounded-lg p-8"
    >
      <div className="flex items-center gap-3 pb-5 border-b border-neutral-800">
        <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
          <BoltIcon className="size-5" />
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.name} className="flex items-start gap-3">
            <CheckIcon className="size-4 mt-1 shrink-0 text-red-500" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-neutral-200 leading-snug hover:text-red-400 transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-neutral-200 leading-snug">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

