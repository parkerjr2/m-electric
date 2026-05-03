import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts, type PostContent } from "../posts-data";
import { SITE_URL } from "@/lib/site";
import { PostContentView } from "./PostContent";

type RouteParams = { slug: string };

const ogImageUrl = (slug: string) =>
  `${SITE_URL}/blog/${slug}/opengraph-image.png`;

export function generateStaticParams(): RouteParams[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Marshall Morgan"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

function buildSchema(post: PostContent) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const businessId = `${SITE_URL}#business`;
  const authorId = `${SITE_URL}#marshall-morgan`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.metaDescription,
    image: ogImageUrl(post.slug),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-US",
    wordCount: post.wordCount,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": authorId },
    publisher: { "@id": businessId },
    articleSection: post.pillar,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return [blogPostingSchema, breadcrumbSchema, faqSchema].filter(Boolean);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schemas = buildSchema(post);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PostContentView post={post} />
    </>
  );
}
