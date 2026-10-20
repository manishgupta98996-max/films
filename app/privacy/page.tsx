import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, COURSE_TITLE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Privacy Policy | AI Filmmaking Studio",
  description: `Privacy policy for ${SITE_NAME}. Learn how we protect your personal information.`,
  path: "/privacy",
  ogImage: "/og-default.png",
});

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg text-light-text">
      {/* Dark Subpage Header */}
      <header className="bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Privacy &amp; Data Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            How we protect, process, and handle your data when using {SITE_NAME}.
          </p>
        </div>
      </header>

      {/* Privacy Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-light-muted/20 bg-light-surface p-8 sm:p-10 shadow-sm space-y-6 text-base leading-relaxed text-zinc-800">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">
              1. Information We Collect
            </h2>
            <p>
              When you purchase <strong>{COURSE_TITLE}</strong> or subscribe to our free template library, we collect basic transactional contact information such as your name and email address to deliver your course materials, receipts, and product updates.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              2. Payment Data &amp; Merchant of Record
            </h2>
            <p>
              All payment transactions are handled through our merchant of record, <strong>Lemon Squeezy</strong>. {SITE_NAME} never sees, stores, or processes your credit card numbers or banking information directly on our servers. Lemon Squeezy adheres to PCI-DSS Level 1 compliance standards.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              3. Analytics &amp; Cookies
            </h2>
            <p>
              We utilize Google Analytics to understand aggregate page views, browser types, and navigation patterns on our site. This data is collected anonymously and is used solely to improve our curriculum, documentation, and user experience.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              4. Contact Us
            </h2>
            <p>
              If you have any questions or data privacy requests, you can contact us at any time via our{" "}
              <Link href="/contact" className="text-amber-800 font-semibold underline hover:text-amber-900">
                Contact Page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
