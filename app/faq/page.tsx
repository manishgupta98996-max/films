import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import FAQ from "@/components/FAQ";
import CheckoutButton from "@/components/CheckoutButton";
import { COURSE_PRICE, COURSE_TITLE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions | AI Filmmaking Studio",
  description:
    `Frequently asked questions about ${COURSE_TITLE}, the 10+ hour course that teaches you to make a complete 1-hour AI movie.`,
  path: "/faq",
  ogImage: "/og-default.png",
});

export default function FaqPage() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg text-light-text">
      {/* Dark Subpage Header */}
      <header className="bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Common Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Everything you need to know about the curriculum, software requirements, video formats, and money-back guarantee.
          </p>
        </div>
      </header>

      {/* Main FAQ Accordion Component */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FAQ />

        {/* CTA Banner */}
        <div className="my-16 rounded-3xl border border-zinc-800 bg-zinc-950 text-white p-8 sm:p-12 text-center shadow-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            Start Your Film
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Reach out directly to our team through our contact page, or enroll today with our complete 14-day refund guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-amber-500/20"
            />
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-amber-400 underline transition-colors"
            >
              Contact Support &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
