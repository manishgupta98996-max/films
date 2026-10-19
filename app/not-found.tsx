import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "404: Page Not Found — AI Filmmaking Studio",
  description: "The requested page could not be found. Return to AI Filmmaking Studio home.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="bg-dark-bg text-dark-text min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
        Error 404
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
        Scene Not Found
      </h1>
      <p className="text-sm sm:text-base text-dark-muted max-w-md mb-8">
        The take you are looking for doesn&apos;t exist on this set. Head back to the director&apos;s monitor.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-dark-bg transition-colors hover:bg-accent-hover"
        >
          Return to Home
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-dark-surface px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/40"
        >
          Browse Articles
        </Link>
      </div>
    </div>
  );
}
