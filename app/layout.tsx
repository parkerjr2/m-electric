import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { reviews, reviewStats } from "@/lib/reviews";

/**
 * Geographic centroid used for `geo` and `serviceArea` GeoCircle schema.
 * Tulsa, OK city center; ~30 mile radius covers all 11 service-area cities.
 */
const TULSA_GEO = { latitude: 36.1539816, longitude: -95.992775 };
const SERVICE_RADIUS_METERS = 48280; // ~30 miles

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
const OG_IMAGE =
  "https://images.unsplash.com/photo-1635335874521-7987db781153?w=1200&h=630&q=80&auto=format&fit=crop";

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
  openGraph: {
    type: "website",
    siteName: "M Electric, LLC",
    title: "M Electric — Licensed Electrician in Tulsa, OK | 24/7 Emergency",
    description:
      "Tulsa's trusted electrician since 1999. Residential, commercial, and 24/7 emergency electrical service across the Tulsa metro.",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "M Electric — Licensed Tulsa electrician installing residential electrical equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M Electric — Licensed Electrician in Tulsa, OK",
    description:
      "Tulsa's trusted electrician since 1999. 24/7 emergency electrical service across the Tulsa metro.",
    images: [OG_IMAGE],
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
  dateModified: new Date().toISOString().slice(0, 10),
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
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
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
  ].map((name) => ({ "@type": "City", name })),
  geo: {
    "@type": "GeoCoordinates",
    latitude: TULSA_GEO.latitude,
    longitude: TULSA_GEO.longitude,
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: TULSA_GEO.latitude,
      longitude: TULSA_GEO.longitude,
    },
    geoRadius: SERVICE_RADIUS_METERS,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewStats.ratingValue,
    bestRating: reviewStats.bestRating,
    worstRating: reviewStats.worstRating,
    reviewCount: reviewStats.reviewCount,
  },
  review: reviews.slice(0, 12).map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.datePublished,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.body,
  })),
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
        "Sunday",
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
