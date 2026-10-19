import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service — AI Filmmaking Studio",
  description:
    "Terms of service for AI Filmmaking Studio and the AI Filmmaking Pro course.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 bg-light-bg text-light-text min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Terms of Service
      </h1>

      {/* DRAFT banner */}
      <div className="mt-6 rounded-lg border-2 border-accent bg-amber-50 p-4 text-sm text-amber-900">
        <strong>⚠️ DRAFT:</strong> This document needs owner/legal review
        before launch. Do not publish as-is.
      </div>

      <div className="mt-8 space-y-4 text-light-text leading-relaxed">
        <p>
          These terms of service govern your use of the AI Filmmaking Studio
          website and the AI Filmmaking Pro course. By purchasing or accessing
          the course, you agree to these terms.
        </p>
        <p className="text-light-muted text-sm italic">
          Full terms will be drafted by the owner or a legal professional before
          launch. This placeholder outlines the structure only.
        </p>
      </div>
    </section>
  );
}
