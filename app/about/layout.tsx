import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const TITLE = "About M Electric — Tulsa Electrician Since 1999";
const DESCRIPTION =
  "Since 1999, M Electric has been Tulsa's family-owned, Army-veteran-led electrician — licensed, bonded, insured. Residential, commercial, 24/7 emergency.";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=1200&h=630&q=80&auto=format&fit=crop";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "About M Electric — Tulsa electrician installing residential electrical equipment",
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
      name: "About",
      item: `${SITE_URL}/about`,
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
