import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const isDev = process.env.NODE_ENV !== "production";
  const slugs = getAllPostSlugs(isDev);
  if (slugs.length === 0) {
    // With Next.js output: 'export', at least one param must be returned.
    // This placeholder triggers notFound() and is not published.
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || (post.meta.draft && process.env.NODE_ENV === "production")) {
    notFound();
  }

  const isPillar = post.meta.slug === "ai-filmmaking-complete-beginners-guide";
  const relatedPosts = getRelatedPosts(post.meta.slug, 3);

  // Article JSON-LD
  const articleJsonLd = buildArticleJsonLd({
    title: post.meta.title,
    description: post.meta.description,
    url: `${SITE_URL}/blog/${post.meta.slug}`,
    datePublished: post.meta.date,
    dateModified: post.meta.updated,
    author: post.meta.author || INSTRUCTOR.name,
    imageUrl: post.meta.cover ? `${SITE_URL}${post.meta.cover}` : `${SITE_URL}/og-default.png`,
  });

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.meta.title, url: `${SITE_URL}/blog/${post.meta.slug}` },
  ]);

  return (
    <div className="flex-1 flex flex-col bg-dark-bg text-dark-text">
      {/* Structured Data */}
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Cinematic Hero Section */}
      <header className="relative bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-600">/</li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-600">/</li>
              <li className="text-zinc-200 truncate max-w-xs sm:max-w-md">
                {post.meta.category}
              </li>
            </ol>
          </nav>

          {/* Post Title & Description */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl">
            {post.meta.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-8 font-normal">
            {post.meta.description}
          </p>

          {/* Author and Date Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-xs">
                DK
              </div>
              <div>
                <span className="text-zinc-200 font-semibold block">
                  <Link href="/about" className="hover:text-amber-400 transition-colors">
                    {post.meta.author || INSTRUCTOR.name}
                  </Link>
                </span>
                <span className="text-xs text-zinc-500">
                  Published:{" "}
                  <time dateTime={post.meta.date}>
                    {new Date(post.meta.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>
                Last updated:{" "}
                <time dateTime={post.meta.updated} className="font-semibold text-white">
                  {new Date(post.meta.updated).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </span>
            </div>
          </div>

          {/* 2.39:1 Cover Image (Only rendered if present in production) */}
          {post.meta.cover && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl relative aspect-[2.39/1] w-full bg-zinc-950">
              <Image
                src={post.meta.cover}
                alt={post.meta.coverAlt || post.meta.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area: Off-white Readable Background */}
      <main className="flex-1 bg-light-bg text-light-text py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            
            {/* Left / Article Measure Column (Max 720px for optimal reading) */}
            <article className="w-full max-w-[720px] min-w-0">
              {/* Mobile Table of Contents */}
              <TableOfContents headings={post.headings} variant="mobile" />

              {/* Key Takeaways Callout if provided in frontmatter */}
              {post.meta.takeaways && (
                <KeyTakeaways takeaways={post.meta.takeaways} />
              )}

              {/* Parsed Article HTML */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              {/* FAQ Section from Frontmatter */}
              {post.meta.faq && post.meta.faq.length > 0 && (
                <FAQAccordion faq={post.meta.faq} />
              )}

              {/* Author Box linking to /about */}
              <AuthorBox authorName={post.meta.author} />

              {/* Internal Cross-Linking: Pillar <-> Cluster */}
              <div className="my-10 rounded-2xl border border-light-muted/20 bg-light-surface p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 block mb-2 font-semibold">
                  {isPillar ? "Next Step in the Pipeline" : "Foundational Master Guide"}
                </span>
                {isPillar ? (
                  <div>
                    <h3 className="text-lg font-bold text-light-text mb-2">
                      <Link
                        href="/blog/ai-filmmaking-workflow-idea-to-final-cut"
                        className="hover:text-amber-800 transition-colors"
                      >
                        AI Filmmaking Workflow: From Idea to Final Cut &rarr;
                      </Link>
                    </h3>
                    <p className="text-sm text-light-muted leading-relaxed">
                      Detailed step-by-step breakdown across concepting, character turnaround consistency, shot generation, audio synthesis, and non-linear editing.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-bold text-light-text mb-2">
                      <Link
                        href="/blog/ai-filmmaking-complete-beginners-guide"
                        className="hover:text-amber-800 transition-colors"
                      >
                        AI Filmmaking: The Complete Beginner&apos;s Guide &rarr;
                      </Link>
                    </h3>
                    <p className="text-sm text-light-muted leading-relaxed">
                      Start with the core principles of AI video generation, prompt structures, seed locks, and cinematic lighting models.
                    </p>
                  </div>
                )}
              </div>
            </article>

            {/* Right Sticky Sidebar (Desktop only) */}
            <aside
              aria-label="Article navigation and course details"
              className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-24 space-y-6 self-start"
            >
              {/* Desktop Scrollspy TOC */}
              <TableOfContents headings={post.headings} variant="desktop" />

              {/* Course CTA Card */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl text-white">
                <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2">
                  Featured Masterclass
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {COURSE_TITLE}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  10+ hours of video instruction. 9 production AI tools. Complete one finished 1-hour AI film. No camera, no crew.
                </p>

                <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">&#10003;</span>
                    <span>Idea to Final Cut workflow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">&#10003;</span>
                    <span>Runway, Kling, Seedance &amp; Claude</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">&#10003;</span>
                    <span>Character consistency templates</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-zinc-400">One-time payment</span>
                    <span className="text-2xl font-black text-amber-400">${COURSE_PRICE}</span>
                  </div>
                  <CheckoutButton
                    label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
                    className="w-full py-3 text-xs font-bold shadow-lg shadow-amber-500/20"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900 text-center">
                  <Link
                    href="/about"
                    className="text-[11px] text-zinc-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    Taught by Dan Kieft &bull; View Bio &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Full-width Final CTA Banner */}
          <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-950 text-white p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
              Start Your AI Movie Today
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 max-w-2xl mx-auto">
              Ready to Produce Your First Full-Length AI Feature?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Stop generating random 5-second clips. Master the structured 8-module pipeline to direct, score, and finalize a complete 1-hour movie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CheckoutButton
                label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
                className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-amber-500/20"
              />
              <Link
                href="/"
                className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-amber-400 underline transition-colors"
              >
                Review Full Curriculum &rarr;
              </Link>
            </div>
          </div>

          {/* Related Production Guides */}
          <RelatedPosts posts={relatedPosts} />
        </div>
      </main>

      {/* Dismissible Mobile Sticky CTA Bar */}
      <MobileStickyBar />
    </div>
  );
}
