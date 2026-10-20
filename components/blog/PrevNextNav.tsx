import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface PrevNextNavProps {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
}

export default function PrevNextNav({ prev, next }: PrevNextNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Previous and Next Guide Navigation"
      className="mt-14 pt-8 border-t border-zinc-200"
    >
      <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-4">
        Explore More Guides
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Post */}
        {prev ? (
          <Link
            href={`/guide/${prev.slug}`}
            className="group block p-5 rounded-2xl border border-zinc-200/80 bg-white hover:border-amber-500/50 hover:shadow-md transition-all text-left"
          >
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-amber-600 transition-colors mb-1.5">
              <span>&larr;</span>
              <span>Previous Guide</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
              {prev.title}
            </div>
            <div className="mt-2 text-xs text-zinc-500">
              {prev.category} &bull; {prev.readingTime}
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next Post */}
        {next ? (
          <Link
            href={`/guide/${next.slug}`}
            className="group block p-5 rounded-2xl border border-zinc-200/80 bg-white hover:border-amber-500/50 hover:shadow-md transition-all text-right"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-amber-600 transition-colors mb-1.5">
              <span>Next Guide</span>
              <span>&rarr;</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
              {next.title}
            </div>
            <div className="mt-2 text-xs text-zinc-500">
              {next.category} &bull; {next.readingTime}
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
}
