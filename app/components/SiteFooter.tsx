import Link from "next/link";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREAS,
  SITE_HOST,
  SITE_URL,
} from "@/lib/site";

const PROFILES = [
  {
    label: "Google Business Profile",
    short: "Google",
    href: "https://maps.app.goo.gl/XMfj5yKsF9Dh6jm19",
  },
  {
    label: "BBB profile · Tulsa Electrical Contractor",
    short: "BBB",
    href: "https://www.bbb.org/us/ok/tulsa/profile/electrical-contractors/m-electric-llc-1025-38093098",
  },
  {
    label: "Facebook",
    short: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063716923948",
  },
];

const FOOTER_SERVICES = [
  { label: "Residential", href: "/services" },
  { label: "Commercial", href: "/commercial" },
  { label: "Smart Home", href: "/services/smart-home-wiring" },
  { label: "Generators", href: "/services/generator-installation" },
  { label: "EV Chargers", href: "/services/ev-charger-installation" },
  { label: "Surge Protection", href: "/services/surge-protection" },
];

function citySlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/m-electric-logo.png"
              alt="M Electric, LLC — Tulsa electrician"
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            Family-owned, Army-veteran-led electrical contractor serving the
            Tulsa metro since 1999.
          </p>
          <p className="mt-3 text-xs text-neutral-500 italic">
            &ldquo;Get Wired Up!&rdquo;
          </p>
          <div className="mt-5 flex flex-col gap-1 text-xs">
            <Link
              href="/about"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              About M Electric
            </Link>
            <Link
              href="/job-gallery"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Job Gallery
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              24/7 Emergency Dispatch
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li>
              <a
                className="hover:text-white transition-colors duration-200 cursor-pointer"
                href={`tel:${PHONE_TEL}`}
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition-colors duration-200 cursor-pointer"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition-colors duration-200 cursor-pointer"
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_HOST}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Link
            href="/service-areas"
            className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
          >
            Service Area →
          </Link>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-neutral-300">
            {SERVICE_AREAS.map((city) => (
              <li key={city}>
                <Link
                  href={`/service-areas/${citySlug(city)}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link
            href="/services"
            className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
          >
            Services →
          </Link>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-neutral-500">
          <span className="uppercase tracking-widest text-neutral-600">
            Verified on
          </span>
          {PROFILES.map((p) => (
            <a
              key={p.short}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.label}
              className="px-4 py-2.5 text-sm rounded-full border border-neutral-800 hover:border-red-600 hover:text-white text-neutral-400 transition-colors duration-200"
            >
              {p.short}
            </a>
          ))}
          <span
            aria-label="Oklahoma Construction Industries Board electrical contractor license number 87288"
            className="px-4 py-2.5 text-sm rounded-full border border-neutral-800 text-neutral-400"
          >
            OK LIC #87288
          </span>
        </div>
      </div>

      <div className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>
              © {new Date().getFullYear()} M Electric, LLC. All rights
              reserved.
            </span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div>Tulsa, Oklahoma · Family Owned Since 1999</div>
        </div>
      </div>
    </footer>
  );
}
