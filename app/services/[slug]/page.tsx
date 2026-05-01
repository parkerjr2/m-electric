import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getService,
  services,
  type ServiceContent,
} from "../services-data";
import { SITE_URL } from "@/lib/site";
import {
  reviewStats,
  reviewsForService,
  type ReviewServiceTag,
} from "@/lib/reviews";
import { ServiceContentView } from "./ServiceContent";

type RouteParams = { slug: string };

const TULSA_GEO = { latitude: 36.1539816, longitude: -95.992775 };
const SERVICE_RADIUS_METERS = 48280; // ~30 miles

const ogImageUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&h=630&q=80&auto=format&fit=crop`;

export function generateStaticParams(): RouteParams[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `/services/${service.slug}`;
  const ogImage = ogImageUrl(service.heroImageId);
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
  };
}

function buildSchema(service: ServiceContent) {
  const url = `${SITE_URL}/services/${service.slug}`;
  const businessId = `${SITE_URL}#business`;

  const serviceTag = service.slug as ReviewServiceTag;
  const serviceReviews = reviewsForService(serviceTag, 5);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.navTitle,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url,
    image: `https://images.unsplash.com/${service.heroImageId}?w=1200&q=80&auto=format&fit=crop`,
    provider: { "@id": businessId },
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
    ...(serviceReviews.length > 0
      ? {
          review: serviceReviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            datePublished: r.datePublished,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
            },
            reviewBody: r.body,
          })),
        }
      : {}),
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
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.serviceType,
        item: url,
      },
    ],
  };

  const faqSchema =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return [serviceSchema, breadcrumbSchema, faqSchema].filter(Boolean);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const schemas = buildSchema(service);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceContentView service={service} />
    </>
  );
}
