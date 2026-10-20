import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts, getNextPrevPosts } from "@/lib/blog";
import { buildMetadata, buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, COURSE_TITLE, COURSE_PRICE, INSTRUCTOR } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import CheckoutButton from "@/components/CheckoutButton";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBox from "@/components/blog/AuthorBox";
import FAQAccordion from "@/components/blog/FAQAccordion";
import RelatedPosts from "@/components/blog/RelatedPosts";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import MobileStickyBar from "@/components/blog/MobileStickyBar";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import PrevNextNav from "@/components/blog/PrevNextNav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const isDev = process.env.NODE_ENV !== "production";
  const slugs = getAllPostSlugs(isDev);
  if (slugs.length === 0) {
    return [{ slug: "_empty_placeholder" }];
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || (post.meta.draft && process.env.NODE_ENV === "production")) {
    return {};
  }

  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/guide/${post.meta.slug}`,
    ogImage: post.meta.cover || "/og-default.png",
  });
}

export default async function GuidePostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || (post.meta.draft && process.env.NODE_ENV === "production")) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.meta.slug, 3);
  const { prev, next } = getNextPrevPosts(post.meta.slug);

  // Article JSON-LD
  const articleJsonLd = buildArticleJsonLd({
    title: post.meta.title,
    description: post.meta.description,
    url: `${SITE_URL}/guide/${post.meta.slug}`,
    datePublished: post.meta.date,
    dateModified: post.meta.updated,
    author: post.meta.author || INSTRUCTOR.name,
    imageUrl: post.meta.cover ? `${SITE_URL}${post.meta.cover}` : `${SITE_URL}/og-default.png`,
  });

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Guides", url: `${SITE_URL}/guide` },
    { name: post.meta.title, url: `${SITE_URL}/guide/${post.meta.slug}` },
  ]);

  return (
    <div className="flex-1 flex flex-col bg-dark-bg text-dark-text relative">
      {/* Reading Progress Indicator */}
      <ReadingProgressBar />

      {/* Structured Data */}
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Cinematic Hero Section - Centered Backlinko/Editorial Layout */}
      <header className="relative bg-gradient-to-b from-[#060A14] via-[#0A0F1E] to-[#0D1527] border-b border-dark-surface/60 pt-10 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation (Old Left-Aligned Position) */}
          <nav aria-label="Breadcrumbs" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-600">/</li>
              <li>
                <Link href="/guide" className="hover:text-amber-400 transition-colors">
                  Guides
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-600">/</li>
              <li className="text-amber-400 font-semibold truncate max-w-[240px] sm:max-w-md" aria-current="page">
                {post.meta.title}
              </li>
            </ol>
          </nav>

          {/* Article Title (Centered) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto text-center mb-6">
            {post.meta.title}
          </h1>

          {/* Subtitle / Lead Paragraph (Centered) */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto text-center leading-relaxed mb-8 font-normal">
            {post.meta.description}
          </p>

          {/* Author Byline (Centered Brian Dean Style) */}
          <div className="flex items-center justify-center gap-3.5 mb-10">
            {INSTRUCTOR.photoUrl ? (
              <Image
                src={INSTRUCTOR.photoUrl}
                alt={post.meta.author || INSTRUCTOR.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-amber-500/60 shadow-md"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-500/40 text-amber-400 font-bold flex items-center justify-center text-sm shadow-md">
                {(post.meta.author || INSTRUCTOR.name)
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <div className="text-left text-sm">
              <div className="text-white font-semibold">
                Written by{" "}
                <span className="font-bold text-amber-400">
                  {post.meta.author || INSTRUCTOR.name}
                </span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Last updated on{" "}
                {new Date(post.meta.updated).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>

          {/* High-Resolution Cinematic Cover Image (Clean, No Overlays, No Caption Below) */}
          {post.meta.cover && (
            <div className="mt-4 relative">
              <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/80 bg-zinc-950">
                <Image
                  src={post.meta.cover}
                  alt={post.meta.coverAlt || post.meta.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area - Refined Light Mode */}
      <main className="flex-1 bg-[#FAFAF9] text-zinc-900 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Article Body (8 cols on large screens) */}
            <article className="lg:col-span-8 min-w-0">
              {/* Key Takeaways Box (if defined) */}
              {post.meta.takeaways && post.meta.takeaways.length > 0 && (
                <div className="mb-10">
                  <KeyTakeaways takeaways={post.meta.takeaways} />
                </div>
              )}

              {/* Mobile Table of Contents */}
              {post.headings.length > 0 && (
                <div className="block lg:hidden mb-10">
                  <TableOfContents headings={post.headings} />
                </div>
              )}

              {/* MDX Parsed HTML Content with Refined Light Mode Typography */}
              <div
                className="blog-content prose prose-zinc prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              {/* In-Article Masterclass Mid-Callout */}
              <div className="my-14 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white p-7 sm:p-9 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2.5">
                  Featured Masterclass
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                  Want to produce a complete 1-hour film from start to finish?
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  In <strong className="text-white font-bold">{COURSE_TITLE}</strong>, Dan Kieft breaks down the complete 1-hour film creation pipeline: prompt engineering, camera controls, consistent character sheets, and timeline assembly in DaVinci Resolve.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <CheckoutButton
                    label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
                    className="py-3 px-6 text-sm font-bold shadow-lg shadow-amber-500/25"
                  />
                  <Link
                    href="/"
                    className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-amber-400 underline self-center transition-colors"
                  >
                    View course syllabus &rarr;
                  </Link>
                </div>
              </div>

              {/* Previous & Next Article Navigation */}
              <PrevNextNav prev={prev} next={next} />

              {/* FAQ Accordion (if defined) */}
              {post.meta.faq && post.meta.faq.length > 0 && (
                <div className="mt-14 pt-10 border-t border-zinc-200">
                  <FAQAccordion faq={post.meta.faq} />
                </div>
              )}

              {/* Author Box */}
              <div className="mt-14">
                <AuthorBox authorName={post.meta.author || INSTRUCTOR.name} />
              </div>

              {/* Related Posts */}
              <div className="mt-8">
                <RelatedPosts posts={relatedPosts} basePath="/guide" />
              </div>
            </article>

            {/* Right Column: Desktop Sidebar (4 cols on large screens) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Desktop Sticky Table of Contents */}
                {post.headings.length > 0 && (
                  <TableOfContents headings={post.headings} />
                )}

                {/* Sidebar Course Promo Card */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 text-white p-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Full AI Film Course
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {COURSE_TITLE}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-5">
                    Direct your own 1-hour cinematic film. Complete video training on prompt architecture, character sheets, Runway &amp; Kling animation, and final editorial finishing.
                  </p>

                  <div className="mb-5 space-y-2 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">&#10003;</span>
                      <span>10+ hours step-by-step video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">&#10003;</span>
                      <span>Character consistency templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">&#10003;</span>
                      <span>Complete 1-hour film capstone</span>
                    </div>
                  </div>

                  <CheckoutButton
                    label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
                    className="w-full py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 mb-3"
                  />

                  <Link
                    href="/"
                    className="block text-center text-xs text-zinc-400 hover:text-amber-400 underline transition-colors"
                  >
                    View course curriculum &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Sticky Mobile Bar */}
      <MobileStickyBar />
    </div>
  );
}
