import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { COURSE_TITLE, COURSE_PRICE } from "@/lib/config";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata = buildMetadata({
  title: "AI Filmmaking Guides, Tutorials & Workflows",
  description:
    "Master AI filmmaking with in-depth production guides: Claude scripting, consistent characters, Runway and Kling video generation, sound design, and finishing.",
  path: "/guide",
  ogImage: "/og-default.png",
});

export default function GuideIndexPage() {
  const posts = getAllPosts(false); // loads all published guides

  return (
    <div className="flex-1 flex flex-col bg-dark-bg text-dark-text">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-[#060A14] via-[#0A0F1E] to-[#0D1527] border-b border-dark-surface/60 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 block">
            Production Guides &amp; Tutorials
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            AI Filmmaking Production Guides
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Technical breakdowns, character consistency workflows, and prompt architecture from idea to final cut.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#FAFAF9] text-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 text-center shadow-sm my-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                ✍️
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                Production Guides in Verification
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                Our in-depth production workflows, character sheets, and AI video generator benchmarks are currently undergoing editorial updates.
              </p>
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="rounded-xl bg-zinc-900 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors shadow-sm"
                >
                  Explore Course Curriculum &rarr;
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-zinc-300 px-5 py-3 text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  About the Instructor
                </Link>
              </div>
            </div>
          ) : (
            /* Published Guides Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post, idx) => (
                <article
                  key={post.slug}
                  className={`group rounded-2xl border border-zinc-200/90 bg-white shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    idx === 0
                      ? "md:col-span-2 lg:col-span-3 border-amber-500/40 bg-gradient-to-br from-white via-amber-50/20 to-white"
                      : ""
                  }`}
                >
                  <div>
                    {/* Cover Image Thumbnail */}
                    {post.cover && (
                      <div className={`relative w-full overflow-hidden bg-zinc-950 ${idx === 0 ? "aspect-[21/9]" : "aspect-video"}`}>
                        <Image
                          src={post.cover}
                          alt={post.coverAlt || post.title}
                          fill
                          sizes={idx === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-mono font-bold text-amber-400">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-zinc-500 font-mono">
                        {!post.cover && (
                          <>
                            <span className="rounded bg-amber-500/10 px-2 py-0.5 font-semibold text-amber-800">
                              {post.category}
                            </span>
                            <span>&bull;</span>
                          </>
                        )}
                        <span>{post.readingTime}</span>
                        <span>&bull;</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>

                      <h2
                        className={`font-black text-zinc-900 mb-3 group-hover:text-amber-800 transition-colors leading-tight ${
                          idx === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                        }`}
                      >
                        <Link href={`/guide/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-zinc-100">
                    <span className="text-xs text-zinc-500 font-medium">
                      By {post.author}
                    </span>
                    <Link
                      href={`/guide/${post.slug}`}
                      className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 group/btn"
                    >
                      Read Guide
                      <span
                        className="transition-transform group-hover/btn:translate-x-1"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom Masterclass Callout */}
          <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 text-white p-8 sm:p-12 text-center shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 block">
              Step-by-Step Video Masterclass
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Master the Complete 1-Hour AI Film Pipeline
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Go beyond articles. Direct a full 1-hour movie with 10+ hours of structured video walkthroughs covering prompt architecture, camera control, sound design, and editing in {COURSE_TITLE}.
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
                Review Full Syllabus &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
