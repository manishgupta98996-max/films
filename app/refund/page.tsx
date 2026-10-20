import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { REFUND_DAYS, COURSE_TITLE, SITE_NAME } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Refund Policy | AI Filmmaking Studio",
  description: `Refund policy for ${COURSE_TITLE}. Learn about our ${REFUND_DAYS}-day money-back guarantee.`,
  path: "/refund",
  ogImage: "/og-default.png",
});

export default function RefundPage() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg text-light-text">
      {/* Dark Subpage Header */}
      <header className="bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Customer Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Refund &amp; Guarantee Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Clear, honest terms. How our {REFUND_DAYS}-day money-back guarantee works for {COURSE_TITLE}.
          </p>
        </div>
      </header>

      {/* Policy Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-light-muted/20 bg-light-surface p-8 sm:p-10 shadow-sm space-y-6 text-base leading-relaxed text-zinc-800">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">
              1. Our {REFUND_DAYS}-Day Money-Back Guarantee
            </h2>
            <p>
              We want you to feel completely confident enrolling in <strong>{COURSE_TITLE}</strong>. If you review the curriculum and decide within <strong>{REFUND_DAYS} days of your purchase date</strong> that this workflow is not for you, simply reach out to us and we will issue a full refund.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              2. How Refunds Are Processed
            </h2>
            <p>
              All payments for {SITE_NAME} are processed securely through our merchant of record, <strong>Lemon Squeezy</strong>. When an authorized refund request is submitted within the {REFUND_DAYS}-day guarantee window, the transaction is processed directly through Lemon Squeezy to your original payment method.
            </p>
            <p>
              Standard banking turnaround times typically range from 3 to 7 business days for the funds to reflect back on your account, depending on your card issuer or banking provider.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              3. How to Request a Refund
            </h2>
            <p>
              To initiate a refund, simply send an email with your original order receipt number to our support team via our{" "}
              <Link href="/contact" className="text-amber-800 font-semibold underline hover:text-amber-900">
                Contact Page
              </Link>{" "}
              or reply directly to your purchase receipt email from Lemon Squeezy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
