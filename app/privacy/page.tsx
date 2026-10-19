import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy — AI Filmmaking Studio",
  description:
    "Privacy policy for AI Filmmaking Studio. Learn how we handle your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 bg-light-bg text-light-text min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Privacy Policy
      </h1>

      {/* DRAFT banner */}
      <div className="mt-6 rounded-lg border-2 border-accent bg-amber-50 p-4 text-sm text-amber-900">
        <strong>⚠️ DRAFT:</strong> This document needs owner/legal review
        before launch. Do not publish as-is.
      </div>

      <div className="mt-8 space-y-4 text-light-text leading-relaxed">
        <p>
          This privacy policy describes how AI Filmmaking Studio collects, uses,
          and protects your personal information when you visit our website or
          purchase the AI Filmmaking Pro course.
        </p>
        <p>
          Payments are processed by Lemon Squeezy. We do not store your payment
          details directly. Please refer to Lemon Squeezy&apos;s privacy policy for
          information on how they handle payment data.
        </p>
        <p className="text-light-muted text-sm italic">
          A complete privacy policy will be drafted by the owner or a legal
          professional before launch. This placeholder outlines the structure
          only.
        </p>
      </div>
    </section>
  );
}
