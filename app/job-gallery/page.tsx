import type { Metadata } from "next";
import { JobGalleryView } from "./JobGalleryView";
import {
  galleryItems,
  featuredBeforeAfter,
} from "@/lib/job-gallery";
import { reviewsForService } from "@/lib/reviews";
import { SITE_URL } from "@/lib/site";

const TITLE = "Job Gallery | M Electric — Real Tulsa Electrical Work";
const DESCRIPTION =
  "Recent electrical projects across the Tulsa metro by M Electric — outdoor lighting, recessed lighting, panel upgrades, and before/after work. Owned by US Army veteran Marshall Morgan.";
const OG_IMAGE = `${SITE_URL}/job-gallery/houselights-2.jpg`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/job-gallery" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/job-gallery",
    images: [
      {
        url: OG_IMAGE,
        width: 753,
        height: 500,
        alt: "M Electric job gallery — Tulsa stone home with custom outdoor lighting",
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

export default function JobGalleryPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Job Gallery",
        item: `${SITE_URL}/job-gallery`,
      },
    ],
  };

  // ImageGallery schema with all featured photos including the before/after pair
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${SITE_URL}/job-gallery#gallery`,
    name: "M Electric Job Gallery — Real Tulsa Electrical Work",
    description: DESCRIPTION,
    url: `${SITE_URL}/job-gallery`,
    publisher: { "@id": `${SITE_URL}#business` },
    image: [
      ...galleryItems.map((item) => ({
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${item.src}`,
        url: `${SITE_URL}${item.src}`,
        width: item.width,
        height: item.height,
        caption: item.caption,
        description: item.alt,
        creator: { "@id": `${SITE_URL}#business` },
        copyrightHolder: { "@id": `${SITE_URL}#business` },
      })),
      {
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${featuredBeforeAfter.beforeSrc}`,
        url: `${SITE_URL}${featuredBeforeAfter.beforeSrc}`,
        width: featuredBeforeAfter.width,
        height: featuredBeforeAfter.height,
        caption: `BEFORE — ${featuredBeforeAfter.caption}`,
        description: featuredBeforeAfter.beforeAlt,
        creator: { "@id": `${SITE_URL}#business` },
      },
      {
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${featuredBeforeAfter.afterSrc}`,
        url: `${SITE_URL}${featuredBeforeAfter.afterSrc}`,
        width: featuredBeforeAfter.width,
        height: featuredBeforeAfter.height,
        caption: `AFTER — ${featuredBeforeAfter.caption}`,
        description: featuredBeforeAfter.afterAlt,
        creator: { "@id": `${SITE_URL}#business` },
      },
    ],
  };

  // Surface 3 general reviews on the gallery page
  const reviews = reviewsForService("general", 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageGallerySchema),
        }}
      />
      <JobGalleryView
        items={galleryItems}
        beforeAfter={featuredBeforeAfter}
        reviews={reviews}
      />
    </>
  );
}
