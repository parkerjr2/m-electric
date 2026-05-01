import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getArea, type ServiceArea } from "../areas-data";
import { SITE_URL } from "@/lib/site";
import { reviewStats, reviewsForService } from "@/lib/reviews";
import { AreaContentView } from "./AreaContent";

type RouteParams = { slug: string };

const HERO_IMAGE_ID = "photo-1635335874521-7987db781153";
const HERO_IMAGE_URL = `https://images.unsplash.com/${HERO_IMAGE_ID}?w=1200&h=630&q=80&auto=format&fit=crop`;

export function generateStaticParams(): RouteParams[] {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  const url = `/service-areas/${area.slug}`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: area.metaTitle,
      description: area.metaDescription,
      url,
      images: [
        {
          url: HERO_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `M Electric — Licensed electrician serving ${area.city}, ${area.state}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [HERO_IMAGE_URL],
    },
  };
}

function buildSchema(area: ServiceArea) {
  const url = `${SITE_URL}/service-areas/${area.slug}`;
  const businessId = `${SITE_URL}#business`;

  // Service schema scoped to JUST this city's GeoCoordinates,
  // not the sitewide GeoCircle. This signals to Google that this
  // page is genuinely about this specific city.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Electrician in ${area.city}, ${area.state}`,
    serviceType: "Electrical Service",
    description: area.metaDescription,
    url,
    image: HERO_IMAGE_URL,
    provider: { "@id": businessId },
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.ratingValue,
      bestRating: reviewStats.bestRating,
      reviewCount: reviewStats.reviewCount,
    },
  };

  // Place schema for the service area itself — helps AI systems and
  // Google's Knowledge Graph identify this page as the canonical
  // resource for "[business] in [city]".
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${url}#place`,
    name: `${area.city}, ${area.state}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.geo.lat,
      longitude: area.geo.lng,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: area.county,
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
        name: "Service Areas",
        item: `${SITE_URL}/service-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.city,
        item: url,
      },
    ],
  };

  const faqSchema =
    area.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: area.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return [serviceSchema, placeSchema, breadcrumbSchema, faqSchema].filter(
    Boolean
  );
}

export default async function AreaPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const schemas = buildSchema(area);
  const reviews = reviewsForService("general", 3);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AreaContentView area={area} reviews={reviews} />
    </>
  );
}
