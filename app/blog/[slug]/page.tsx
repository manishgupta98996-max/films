import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { buildMetadata, buildArticleJsonLd } from "@/lib/seo";
import { SITE_URL, COURSE_TITLE, getActiveTier } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import CheckoutButton from "@/components/CheckoutButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.meta.title} — AI Filmmaking Studio`,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}`,
    ogImage: post.meta.cover || undefined,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const activeTier = getActiveTier();
  const isPillar = post.meta.slug === "ai-filmmaking-complete-beginners-guide";

  const articleJsonLd = buildArticleJsonLd({
    title: post.meta.title,
    description: post.meta.description,
    url: `${SITE_URL}/blog/${post.meta.slug}`,
    datePublished: post.meta.date,
    dateModified: post.meta.updated,
    author: post.meta.author,
    imageUrl: post.meta.cover || undefined,
  });

  return (
    <article className="bg-light-bg text-light-text min-h-screen py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Article JSON-LD */}
      <JsonLd data={articleJsonLd} />

      <div className="max-w-3xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true">←</span>
            Back to All Articles
          </Link>
        </div>

        {/* Article Meta Header */}
        <header className="mb-10 pb-8 border-b border-light-muted/20">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold text-amber-700">
            {isPillar && (
              <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-amber-900 font-bold text-[11px] uppercase tracking-wider">
                Pillar Guide
              </span>
            )}
            <span className="uppercase tracking-wider">
              {post.meta.primaryKeyword}
            </span>
            <span>•</span>
            <span className="text-light-muted font-normal">
              {post.meta.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-text mb-4 leading-tight">
            {post.meta.title}
          </h1>

          <p className="text-base sm:text-lg text-light-muted mb-6 leading-relaxed">
            {post.meta.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs text-light-muted pt-4 border-t border-light-muted/15">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-light-text">
                By {post.meta.author}
              </span>
              <span>•</span>
              <time dateTime={post.meta.date}>
                Published: {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="font-medium text-amber-800 bg-amber-500/10 px-2.5 py-1 rounded">
              Last updated:{" "}
              <time dateTime={post.meta.updated}>
                {new Date(post.meta.updated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Cross-linking block */}
        <div className="mt-14 p-6 rounded-xl border border-light-muted/25 bg-light-surface shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
            {isPillar ? "Next Step in the Production Workflow" : "Recommended Foundational Guide"}
          </span>
          {isPillar ? (
            <div>
              <h3 className="text-base font-bold text-light-text mb-1">
                <Link
                  href="/blog/ai-filmmaking-workflow-idea-to-final-cut"
                  className="hover:text-amber-800 transition-colors"
                >
                  AI Filmmaking Workflow: From Idea to Final Cut →
                </Link>
              </h3>
              <p className="text-xs sm:text-sm text-light-muted">
                Step-by-step technical breakdown of scene sequencing, audio engineering, and color LUT finishing.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-base font-bold text-light-text mb-1">
                <Link
                  href="/blog/ai-filmmaking-complete-beginners-guide"
                  className="hover:text-amber-800 transition-colors"
                >
                  AI Filmmaking: The Complete Beginner&apos;s Guide →
                </Link>
              </h3>
              <p className="text-xs sm:text-sm text-light-muted">
                The high-level foundation for understanding character sheets, motion prompting, and model capabilities.
              </p>
            </div>
          )}
        </div>

        {/* Landing Page CTA Section */}
        <div className="mt-10 rounded-2xl border border-dark-surface bg-dark-bg text-dark-text p-8 sm:p-10 text-center shadow-xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Make Your First Feature Film
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Enroll in {COURSE_TITLE}
          </h2>
          <p className="text-sm text-dark-muted max-w-lg mx-auto mb-6 leading-relaxed">
            Stop stitching disconnected generations together. Learn the comprehensive 10+ hour curriculum to produce a cohesive 1-hour AI movie from scratch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Claim Founding Seat: $${activeTier.price}`}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-dark-text underline hover:text-accent font-semibold"
            >
              Explore Course Details →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
