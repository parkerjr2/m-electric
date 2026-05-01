import Link from "next/link";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";
import { PhoneIcon } from "./icons";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Commercial", href: "/commercial" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/job-gallery" },
  { label: "About", href: "/about" },
];

function PulseDot() {
  return (
    <span className="relative inline-flex size-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
      <span className="relative inline-flex size-2.5 rounded-full bg-white" />
    </span>
  );
}

export function SiteHeader({ active }: { active?: string }) {
  return (
    <>
      {/* Top emergency bar */}
      <div className="bg-red-600 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-center sm:justify-between gap-4">
          <span className="hidden sm:inline-flex items-center gap-2 font-medium">
            <PulseDot />
            24/7 Emergency Service · Tulsa Metro
          </span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 font-bold tracking-wide hover:underline cursor-pointer"
          >
            <PhoneIcon className="size-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/80 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/m-electric-logo.png"
              alt="M Electric, LLC — Tulsa electrician"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {NAV.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "text-white"
                      : "hover:text-white transition-colors duration-200"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2.5 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
          >
            <PhoneIcon className="size-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </header>
    </>
  );
}
