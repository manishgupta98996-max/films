import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
  basePath?: string;
}

export default function RelatedPosts({ posts, basePath = "/guide" }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-guides-title" className="mt-16 pt-12 border-t border-zinc-200">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
            Continue Learning
          </span>
          <h2 id="related-guides-title" className="text-2xl font-bold tracking-tight text-zinc-900 mt-1">
            Related Production Guides
          </h2>
        </div>
        <Link
          href={basePath}
          className="text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-amber-700 transition-colors flex items-center gap-1.5 font-semibold"
        >
          View All Guides
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-200 hover:border-amber-500/40 hover:shadow-lg shadow-sm"
          >
            {post.cover && (
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <Image
                  src={post.cover}
                  alt={post.coverAlt || post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/70 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-mono font-semibold text-amber-400">
                    {post.category}
                  </span>
                </div>
              </div>
            )}

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {!post.cover && (
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                    <span className="rounded bg-amber-50 border border-amber-200 px-2 py-0.5 font-semibold text-amber-800">
                      {post.category}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                )}

                <h3 className="text-base font-bold text-zinc-900 group-hover:text-amber-700 transition-colors line-clamp-2 mb-2 leading-snug">
                  <Link href={`${basePath}/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded">
                    {post.title}
                  </Link>
                </h3>

                {post.description && (
                  <p className="text-xs leading-relaxed text-zinc-600 line-clamp-2 mb-4">
                    {post.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>{post.readingTime}</span>
                <span className="text-amber-700 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read &rarr;
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
