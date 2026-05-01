import type { Metadata } from "next";
import { CommercialIndex } from "./CommercialIndex";
import { getService } from "../services/services-data";
import { SITE_URL } from "@/lib/site";
import { reviewStats, reviewsForService } from "@/lib/reviews";

const TITLE =
  "Commercial Electrical Services in Tulsa, OK | M Electric";
const DESCRIPTION =
  "Tulsa commercial electrician — commercial wiring, LED lighting retrofits, panel upgrades, tenant build-outs, and 24/7 emergency service. Licensed, bonded, insured.";
const OG_IMAGE_ID = "photo-1776062157223-5bc78f5b893b";
const OG_IMAGE = `https://images.unsplash.com/${OG_IMAGE_ID}?w=1200&h=630&q=80&auto=format&fit=crop`;

const TULSA_GEO = { latitude: 36.1539816, longitude: -95.992775 };
const SERVICE_RADIUS_METERS = 48280;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/commercial" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/commercial",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "M Electric — Tulsa commercial electrician installing electrical infrastructure",
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

const COMMERCIAL_FAQS = [
  {
    q: "How quickly can you respond to commercial electrical emergencies in Tulsa?",
    a: "Our emergency response team is available 24/7 and typically arrives within 60 minutes for urgent commercial electrical problems in the Tulsa metro. For Broken Arrow, Owasso, Bixby, and Jenks, expect 60–90 minutes. We carry stocked service vehicles with the most common commercial-grade parts so we can usually restore power on the first visit, even for after-hours calls.",
  },
  {
    q: "Do you handle large-scale commercial projects in Tulsa?",
    a: "Yes. M Electric has extensive experience managing large commercial electrical projects across the Tulsa metro, including ground-up new construction, major tenant build-outs, multi-phase facility upgrades, and industrial installations. We work directly with general contractors, building owners, and facility managers from preconstruction through final inspection. Project scopes range from a single circuit to complete electrical for 50,000+ sq ft commercial buildings.",
  },
  {
    q: "Are your commercial electricians licensed and insured in Oklahoma?",
    a: "Yes. All M Electric commercial electricians are fully licensed by the Oklahoma Construction Industries Board, bonded, and insured. We carry general liability coverage in excess of state requirements plus workers' compensation for all on-site personnel. Certificates of insurance are available on request for any commercial project, and we can name additional insureds as required by your contract.",
  },
  {
    q: "How do you minimize business disruption during commercial electrical work?",
    a: "We carefully plan work schedules around your business operations. For retail, restaurant, and office spaces, we typically offer evening, overnight, and weekend work to avoid disrupting customers and staff. We coordinate site access, security, and cleanup with your facilities team in advance. For occupied buildings we use temporary lighting, generator backup, and circuit-level switching to maintain power to critical systems while we work.",
  },
  {
    q: "What kinds of Tulsa businesses does M Electric serve?",
    a: "We work with the full range of Tulsa-area commercial customers — single-tenant retail, restaurants, office tenants and building owners, medical and dental practices, industrial and warehouse facilities, multi-tenant property managers, churches, schools, and light-manufacturing operations. We also work with general contractors as the electrical sub on new commercial construction across the Tulsa metro and Green Country.",
  },
];

export default function CommercialPage() {
  const lighting = getService("commercial-lighting");
  const wiring = getService("commercial-wiring");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Commercial",
        item: `${SITE_URL}/commercial`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/commercial#service`,
    name: "Commercial Electrical Services in Tulsa",
    serviceType: "Commercial Electrical Service",
    description: DESCRIPTION,
    url: `${SITE_URL}/commercial`,
    image: OG_IMAGE,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: {
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
      reviewCount: reviewStats.reviewCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Electrical Services",
      itemListElement: [
        "Commercial Lighting Installation",
        "Commercial Electrical Wiring",
        "Tenant Improvement Electrical",
        "Industrial Electrical Service",
        "Commercial Panel Upgrades",
        "24/7 Emergency Commercial Electrical",
        "Energy-Efficient LED Retrofits",
        "Generator Transfer Switches",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: COMMERCIAL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const commercialReviews = reviewsForService("commercial", 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CommercialIndex
        heroImageId={OG_IMAGE_ID}
        services={[lighting, wiring].filter(Boolean) as NonNullable<
          ReturnType<typeof getService>
        >[]}
        faqs={COMMERCIAL_FAQS}
        reviews={commercialReviews}
      />
    </>
  );
}
