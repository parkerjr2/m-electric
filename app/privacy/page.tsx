import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy | M Electric, LLC";
const DESCRIPTION =
  "How M Electric, LLC collects, uses, and protects information from customers across the Tulsa metro. Last updated 2026.";
const LAST_UPDATED = "May 1, 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: `${SITE_URL}/privacy`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main className="bg-black text-white">
        <SiteHeader />
        <article className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-28">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-500 mb-8 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Privacy Policy</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm text-neutral-500">
            Last updated: {LAST_UPDATED}
          </p>

          <section className="mt-10 space-y-6 text-neutral-300 leading-relaxed">
            <p>
              M Electric, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects the privacy of our customers and
              website visitors. This Privacy Policy explains what information
              we collect, how we use it, and the limited circumstances in
              which we share it.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Information we collect
            </h2>
            <p>
              When you contact us, request an estimate, or hire us for
              electrical work, we collect information you choose to provide:
              your name, phone number, email address, the property address
              where work is performed, and details about the electrical work
              you need. We do not collect Social Security numbers, government
              IDs, or financial account information through this website.
            </p>
            <p>
              When you visit{" "}
              <Link href="/" className="text-red-400 hover:text-red-300">
                m-electricllc.com
              </Link>
              , our hosting provider may automatically log standard server
              information including IP address, browser type, referring page,
              and pages visited. This is used for security and basic site
              analytics, not for advertising profiling.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              How we use information
            </h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and perform electrical work you have requested</li>
              <li>
                Provide written estimates, invoices, and warranty
                documentation
              </li>
              <li>
                Contact you about your project, follow up after service, or
                respond to questions
              </li>
              <li>Maintain customer records and warranty history</li>
              <li>Comply with applicable Oklahoma licensing and tax law</li>
            </ul>

            <h2 className="text-xl font-semibold text-white pt-4">
              How we share information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We
              share information only when necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With municipal building departments and utility companies
                (PSO, OEC, gas utilities) for permit and inspection
                coordination on your project
              </li>
              <li>
                With our payment processor when you pay for service (we do not
                store credit card numbers)
              </li>
              <li>
                With our insurance carrier in the rare event of a claim
              </li>
              <li>
                When required by law, subpoena, or court order
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white pt-4">Reviews</h2>
            <p>
              When you choose to leave a public review on Google, the BBB,
              Facebook, or another platform, that review and your associated
              public profile are governed by the policies of that platform.
              We may publicly respond to or quote reviews you have made
              public.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">Cookies</h2>
            <p>
              This website uses minimal cookies for basic site functionality.
              We do not use third-party advertising cookies, tracking pixels,
              or behavioral retargeting. Most browsers allow you to disable
              cookies in settings.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Children
            </h2>
            <p>
              This website is not directed to children under 13. We do not
              knowingly collect information from children under 13.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Your choices
            </h2>
            <p>
              You may request a copy of the information we hold about you, or
              ask us to correct or delete it, by contacting us at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-red-400 hover:text-red-300"
              >
                {EMAIL}
              </a>
              {" "}or{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-red-400 hover:text-red-300"
              >
                {PHONE_DISPLAY}
              </a>
              . We will respond within 30 days. Note that we may need to
              retain some records to comply with Oklahoma tax, licensing, and
              warranty obligations.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">Contact</h2>
            <p>Questions about this policy? Reach out:</p>
            <p>
              M Electric, LLC<br />
              Tulsa, Oklahoma<br />
              Phone:{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-red-400 hover:text-red-300"
              >
                {PHONE_DISPLAY}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-red-400 hover:text-red-300"
              >
                {EMAIL}
              </a>
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;Last updated&rdquo; date at the top of this page reflects
              the most recent revision.
            </p>
          </section>
        </article>
        <SiteFooter />
      </main>
    </>
  );
}
