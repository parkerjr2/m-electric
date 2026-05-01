import type { Metadata } from "next";
import { ServiceAreasIndex } from "./ServiceAreasIndex";
import { areas } from "./areas-data";
import { SITE_URL } from "@/lib/site";

const TITLE =
  "Service Areas | M Electric — Tulsa Metro Electrician Coverage";
const DESCRIPTION =
  "M Electric serves the entire Tulsa metro — Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, Glenpool. Licensed, bonded, insured.";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200&h=630&q=80&auto=format&fit=crop";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/service-areas",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "M Electric service areas across the Tulsa metro",
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

export default function ServiceAreasIndexPage() {
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
        name: "Service Areas",
        item: `${SITE_URL}/service-areas`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "M Electric Service Areas — Greater Tulsa Metro",
    itemListElement: areas.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/service-areas/${a.slug}`,
      name: `${a.city}, ${a.state}`,
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
      <ServiceAreasIndex areas={areas} />
    </>
  );
}
