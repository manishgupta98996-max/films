import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import CheckoutButton from "@/components/CheckoutButton";
import { COURSE_TITLE, getActiveTier } from "@/lib/config";

export const metadata = buildMetadata({
  title: "AI Filmmaking Blog: Guides, Tutorials & Workflows",
  description:
    "Master AI filmmaking. Read in-depth tutorials and production workflows on Claude scripting, consistent characters, Runway and Kling video generation, and sound design.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const activeTier = getActiveTier();

  return (
    <div className="bg-light-bg text-light-text min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Articles &amp; Workflows
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-light-text mb-4">
            AI Filmmaking Guides &amp; Tutorials
          </h1>
          <p className="text-base sm:text-lg text-light-muted">
            Practical production techniques, character continuity strategies, and prompt workflows from prompt to final grade.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {posts.map((post, idx) => (
            <article
              key={post.slug}
              className={`rounded-2xl border border-light-muted/25 bg-light-surface p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between ${
                idx === 0 ? "md:col-span-2 border-accent/40 bg-gradient-to-br from-light-surface to-amber-500/5" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-light-muted">
                  {idx === 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-amber-900 font-bold text-[11px] uppercase tracking-wider">
                      Pillar Guide
                    </span>
                  )}
                  <span className="font-semibold text-amber-700">
                    {post.primaryKeyword}
                  </span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                  <span>•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h2 className={`font-bold text-light-text mb-3 hover:text-amber-700 transition-colors ${
                  idx === 0 ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"
                }`}>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-light-muted leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-light-muted/15">
                <span className="text-xs text-light-muted font-medium">
                  By {post.author}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 group"
                >
                  Read Guide
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Internal Link CTA to Course */}
        <div className="rounded-2xl border border-dark-surface bg-dark-bg text-dark-text p-8 sm:p-12 text-center shadow-xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Step-by-Step Video Masterclass
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Master the Complete 1-Hour Film Pipeline
          </h3>
          <p className="text-sm sm:text-base text-dark-muted max-w-xl mx-auto mb-8">
            Go beyond articles. Watch over 10+ hours of over-the-shoulder video walkthroughs showing real prompt generation, camera movements, and audio mixing in {COURSE_TITLE}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Get Founding Access: $${activeTier.price}`}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-dark-text underline hover:text-accent font-semibold"
            >
              View Full Course Details &amp; Syllabus →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
