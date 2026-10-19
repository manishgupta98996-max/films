import { buildMetadata } from "@/lib/seo";
import { REFUND_DAYS, COURSE_TITLE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Refund Policy — AI Filmmaking Studio",
  description: `Refund policy for ${COURSE_TITLE}. Learn about our ${REFUND_DAYS}-day refund guarantee.`,
  path: "/refund",
});

export default function RefundPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 bg-light-bg text-light-text min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Refund Policy
      </h1>

      {/* DRAFT banner */}
      <div className="mt-6 rounded-lg border-2 border-accent bg-amber-50 p-4 text-sm text-amber-900">
        <strong>⚠️ DRAFT:</strong> This document needs owner/legal review
        before launch. Do not publish as-is.
      </div>

      <div className="mt-8 space-y-4 text-light-text leading-relaxed">
        <p>
          We offer a <strong>{REFUND_DAYS}-day</strong> refund guarantee on{" "}
          {COURSE_TITLE}. If you are not satisfied with the course, contact us
          within {REFUND_DAYS} days of purchase to request a full refund.
        </p>
        <p>
          Refunds are processed through Lemon Squeezy, our payment provider. The
          refund period and conditions here must match the refund setting
          configured in Lemon Squeezy.
        </p>
        <p className="text-light-muted text-sm italic">
          The specific refund period ({REFUND_DAYS} days) is a configuration
          value that the owner will confirm before launch.
        </p>
      </div>
    </section>
  );
}
