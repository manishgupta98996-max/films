/**
 * SEO helpers — metadata builder and JSON-LD generators.
 *
 * Every page imports `buildMetadata` for its `export const metadata`.
 * JSON-LD helpers produce objects to be passed to the `<JsonLd>` component.
 */

import type { Metadata } from "next";
import { COURSE_TITLE, getActiveTier, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./config";

// ---------------------------------------------------------------------------
// Metadata builder
// ---------------------------------------------------------------------------

interface PageMetaInput {
  title: string;
  description: string;
  /** Route path, e.g. "/faq". Use "/" for home. */
  path: string;
  /** Optional OG image path relative to public/, e.g. "/og/home.png". */
  ogImage?: string;
}

/**
 * Build a Next.js `Metadata` object for a page.
 * Includes title, description, canonical URL, Open Graph and Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const imageUrl = ogImage ? `${SITE_URL}${ogImage}` : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      ...(imageUrl && {
        images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD helpers
// ---------------------------------------------------------------------------

/**
 * Organization JSON-LD for the root layout.
 * Includes `sameAs` social links from config.
 */
export function buildOrganizationJsonLd(): Record<string, unknown> {
  const sameAs = Object.values(SOCIAL_LINKS).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    ...(sameAs.length > 0 && { sameAs }),
  };
}

/**
 * Generic JSON-LD builder.
 * Pass any schema.org type and its data; the function adds `@context`.
 */
export function buildJsonLd(
  type: string,
  data: Record<string, unknown>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
}

/**
 * Course JSON-LD for the landing page.
 * Uses strictly real data from config.ts with zero fake reviews/ratings.
 */
export function buildCourseJsonLd(): Record<string, unknown> {
  const activeTier = getActiveTier();

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: COURSE_TITLE,
    description:
      "AI Filmmaking Pro is a 10+ hour AI filmmaking course. Learn Claude, Runway, Kling, Seedance, ElevenLabs & more, and finish a full 1-hour AI movie.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: activeTier.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT10H",
    },
  };
}

export interface ArticleJsonLdInput {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  imageUrl?: string;
}

/**
 * Article JSON-LD for blog posts.
 */
export function buildArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  imageUrl,
}: ArticleJsonLdInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(imageUrl && { image: [imageUrl] }),
  };
}

export interface PersonJsonLdInput {
  name: string;
  jobTitle?: string;
  description?: string;
  url?: string;
  sameAs?: string[];
  image?: string;
}

/**
 * Person JSON-LD for author and instructor profiles.
 */
export function buildPersonJsonLd({
  name,
  jobTitle,
  description,
  url,
  sameAs,
  image,
}: PersonJsonLdInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(jobTitle && { jobTitle }),
    ...(description && { description }),
    ...(url && { url }),
    ...(sameAs && sameAs.length > 0 && { sameAs }),
    ...(image && { image }),
  };
}

export interface VideoObjectJsonLdInput {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  contentUrl?: string;
  duration?: string;
}

/**
 * VideoObject JSON-LD for student showcase films.
 */
export function buildVideoObjectJsonLd({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  embedUrl,
  contentUrl,
  duration,
}: VideoObjectJsonLdInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: [thumbnailUrl],
    uploadDate,
    embedUrl,
    ...(contentUrl && { contentUrl }),
    ...(duration && { duration }),
  };
}
