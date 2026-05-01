import type { Metadata } from "next";
import { ServicesIndex } from "./ServicesIndex";
import { services } from "./services-data";
import { SITE_URL } from "@/lib/site";

const TITLE =
  "Residential Electrical Services in Tulsa | M Electric";
const DESCRIPTION =
  "Full-service Tulsa residential electrician — repairs, panel upgrades, rewiring, lighting, outlets, ceiling fans, and surge protection. 24/7 emergency. Call (918) 992-6282.";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200&h=630&q=80&auto=format&fit=crop";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/services",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Residential electrical services in Tulsa by M Electric",
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

export default function ServicesIndexPage() {
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Residential Electrical Services in Tulsa",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/services/${s.slug}`,
      name: s.serviceType,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ServicesIndex services={services} />
    </>
  );
}
