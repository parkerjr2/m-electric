import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

const TITLE = "Terms of Service | M Electric, LLC";
const DESCRIPTION =
  "Terms governing M Electric, LLC's electrical services in the Tulsa metro: scope of work, warranties, payment, liability, and dispute resolution.";
const LAST_UPDATED = "May 1, 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Service",
        item: `${SITE_URL}/terms`,
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
            <span className="text-red-500">Terms of Service</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            Terms of Service
          </h1>
          <p className="mt-6 text-sm text-neutral-500">
            Last updated: {LAST_UPDATED}
          </p>

          <section className="mt-10 space-y-6 text-neutral-300 leading-relaxed">
            <p>
              These Terms of Service govern your use of{" "}
              <Link href="/" className="text-red-400 hover:text-red-300">
                m-electricllc.com
              </Link>{" "}
              and the electrical services provided by M Electric, LLC, an
              Oklahoma limited liability company. By using this website or
              hiring us for electrical work, you agree to these terms.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Scope of services
            </h2>
            <p>
              M Electric, LLC provides residential and light-commercial
              electrical services across the Tulsa metropolitan area. All
              electrical work is performed by licensed Oklahoma electricians
              under Oklahoma Construction Industries Board licensing. Specific
              scope of any project is documented in a written estimate or
              contract before work begins.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Estimates and pricing
            </h2>
            <p>
              Free written estimates are provided without obligation. Quoted
              prices are valid for 30 days from the date of the estimate
              unless otherwise stated. Final pricing is documented before work
              begins. Significant scope changes (additional circuits,
              undisclosed conditions in walls, customer-requested upgrades)
              may require a written change order.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">Payment</h2>
            <p>
              Payment is due upon completion of work unless otherwise agreed
              in writing. We accept cash, check, and major credit cards.
              Larger projects may require a deposit before work begins.
              Late-payment terms, if applicable, are stated on each invoice.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Workmanship warranty
            </h2>
            <p>
              M Electric warrants its workmanship for one year from the date
              of completion against defects caused by our installation. If
              workmanship covered under this warranty fails, we will return
              and remedy the defect at no additional labor charge to the
              customer. Material warranties are passed through from the
              manufacturer per the manufacturer&rsquo;s terms. This warranty
              does not cover damage caused by misuse, modifications by
              others, acts of nature, or normal wear.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Permits and inspections
            </h2>
            <p>
              Where required by local code, M Electric obtains electrical and
              mechanical permits and coordinates inspections with the
              applicable City of Tulsa, Broken Arrow, Owasso, Bixby, Jenks,
              Sapulpa, Sand Springs, Glenpool, or Mounds building department,
              or with Tulsa County or Creek County for unincorporated work.
              Permit fees are passed through to the customer at cost unless
              quoted otherwise.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Property access
            </h2>
            <p>
              Customer agrees to provide reasonable access to the work site
              and to clear the work area of personal items. Customer is
              responsible for unauthorized work performed by others on the
              same electrical system after our installation.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Limitation of liability
            </h2>
            <p>
              M Electric, LLC carries general liability and workers&rsquo;
              compensation insurance in excess of Oklahoma state requirements.
              Certificates of insurance are available upon request.
              M Electric&rsquo;s liability for any claim arising from work
              performed is limited to the amount paid by the customer for the
              specific service in question, except where Oklahoma law
              provides otherwise. M Electric is not liable for indirect,
              incidental, or consequential damages.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Use of website
            </h2>
            <p>
              The content of this website is provided for informational
              purposes. Pricing examples on the website are estimates only
              and do not constitute a binding offer. The actual quote for any
              project is the written estimate provided after on-site
              assessment.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Reviews and testimonials
            </h2>
            <p>
              Reviews displayed on this website are real reviews left by
              customers on Google or other public platforms and are
              attributed accordingly. We do not pay for, gate, or pre-screen
              reviews.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">
              Governing law
            </h2>
            <p>
              These terms and any electrical-services contract between
              M Electric, LLC and a customer are governed by the laws of the
              State of Oklahoma. Any disputes will be resolved in the courts
              of Tulsa County, Oklahoma.
            </p>

            <h2 className="text-xl font-semibold text-white pt-4">Contact</h2>
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
              Changes to these terms
            </h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date at the top of this page reflects the most
              recent revision. Continued use of the website constitutes
              acceptance of the revised terms.
            </p>
          </section>
        </article>
        <SiteFooter />
      </main>
    </>
  );
}
