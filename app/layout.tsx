import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import {
  STREET_ADDRESS,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  POSTAL_CODE,
  GBP_MAP_URL,
} from "@/lib/site";

/** Actual premises coordinates (8990 S Sheridan Rd, Suite B) — the business `geo`. */
const BUSINESS_GEO = { latitude: 36.032358, longitude: -95.904307 };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const SITE_URL = "https://m-electricllc.com";

/** External profiles used in `sameAs` schema and visible credentials row. */
const SAME_AS = [
  "https://www.bbb.org/us/ok/tulsa/profile/electrical-contractors/m-electric-llc-1025-38093098",
  "https://maps.app.goo.gl/XMfj5yKsF9Dh6jm19",
  "https://www.facebook.com/profile.php?id=100063716923948",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "M Electric — Licensed Electrician in Tulsa, OK | 24/7 Emergency",
  description:
    "Tulsa's trusted electrician. Residential, commercial, and 24/7 emergency electrical service across the Tulsa metro. Licensed, bonded, and insured.",
  alternates: { canonical: "/" },
  // OG image is generated dynamically via app/opengraph-image.tsx so
  // share previews match the actual hero. Per-page metadata that doesn't
  // override openGraph.images inherits this generated image.
  openGraph: {
    type: "website",
    siteName: "M Electric, LLC",
    title: "M Electric — Licensed Electrician in Tulsa, OK | 24/7 Emergency",
    description:
      "Tulsa's trusted electrician since 1999. Residential, commercial, and 24/7 emergency electrical service across the Tulsa metro.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Electric — Licensed Electrician in Tulsa, OK",
    description:
      "Tulsa's trusted electrician since 1999. 24/7 emergency electrical service across the Tulsa metro.",
  },
  robots: { index: true, follow: true },
  category: "electrician",
};

const electricianSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE_URL}#business`,
  name: "M Electric, LLC",
  alternateName: "M Electric",
  description:
    "Family-owned, Army-veteran-led electrical contractor serving the Tulsa metro since 1999. Residential, commercial, and 24/7 emergency electrical service.",
  url: SITE_URL,
  telephone: "+1-918-992-6282",
  email: "info@m-electricllc.com",
  image: [
    `${SITE_URL}/m-electric-logo.png`,
    `${SITE_URL}/marshall-morgan-m-electric-van.jpg`,
  ],
  logo: `${SITE_URL}/m-electric-logo.png`,
  priceRange: "$$",
  foundingDate: "1999",
  slogan: "Get Wired Up!",
  sameAs: SAME_AS,
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Oklahoma Electrical Contractor License #87288",
    identifier: "87288",
    recognizedBy: {
      "@type": "Organization",
      name: "Oklahoma Construction Industries Board",
      url: "https://oklahoma.gov/cib.html",
    },
  },
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}#marshall-morgan`,
    name: "Marshall Morgan",
    jobTitle: "Master Electrician & Owner",
    image: `${SITE_URL}/marshall-morgan-m-electric-van.jpg`,
    worksFor: { "@id": `${SITE_URL}#business` },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Oklahoma Electrical Contractor License #87288",
      identifier: "87288",
      recognizedBy: {
        "@type": "Organization",
        name: "Oklahoma Construction Industries Board",
        url: "https://oklahoma.gov/cib.html",
      },
    },
    knowsAbout: [
      "Residential electrical systems",
      "Electrical panel upgrades",
      "Home rewiring",
      "Generator installation",
      "EV charger installation",
      "Smart home wiring",
      "Commercial electrical service",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "United States Army",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: STREET_ADDRESS,
    addressLocality: ADDRESS_LOCALITY,
    addressRegion: ADDRESS_REGION,
    postalCode: POSTAL_CODE,
    addressCountry: "US",
  },
  hasMap: GBP_MAP_URL,
  areaServed: [
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
  ].map((name) => ({ "@type": "City", name })),
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_GEO.latitude,
    longitude: BUSINESS_GEO.longitude,
  },
  // Coverage is expressed via the explicit areaServed city list above.
  // aggregateRating/review are intentionally NOT included: Google does not
  // grant review rich results for self-serving reviews on a business's own
  // LocalBusiness/Organization markup. Testimonials remain visible on-page.
  // Open 24 hours Monday–Saturday; closed Sunday (matches Google Business
  // Profile). Sunday is intentionally omitted to signal "not open".
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      "Residential Electrical Service",
      "Commercial Electrical Service",
      "24/7 Emergency Electrical Service",
      "Electrical Panel Upgrades",
      "EV Charger Installation",
      "Generator Installation",
      "Smart Home Wiring",
      "Lighting Installation",
      "Home Rewiring",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(electricianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "M Electric, LLC",
              url: SITE_URL,
              publisher: { "@id": `${SITE_URL}#business` },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
