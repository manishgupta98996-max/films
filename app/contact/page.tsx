import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, COURSE_TITLE, COURSE_PRICE } from "@/lib/config";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata = buildMetadata({
  title: "Contact & Support | AI Filmmaking Studio",
  description:
    `Get in touch with ${SITE_NAME}. We are here to answer your questions regarding ${COURSE_TITLE}.`,
  path: "/contact",
  ogImage: "/og-default.png",
});

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg text-light-text">
      {/* Dark Subpage Header */}
      <header className="bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Direct Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Have a question about the course, enterprise licenses, or need order support? We typically reply within 24 hours.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Email Support */}
          <div className="rounded-2xl border border-light-muted/20 bg-light-surface p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 font-bold flex items-center justify-center text-xl mb-6">
                ✉️
              </div>
              <h2 className="text-xl font-bold text-zinc-900 mb-2">
                Student &amp; Course Inquiries
              </h2>
              <p className="text-sm text-light-muted leading-relaxed mb-6">
                For questions regarding curriculum access, tool setups, or general inquiries about our directing roadmap:
              </p>
            </div>
            <div className="pt-4 border-t border-light-muted/15">
              <a
                href="mailto:support@aifilmmakingstudio.site"
                className="inline-block text-base font-bold text-amber-800 hover:text-amber-900 underline"
              >
                support@aifilmmakingstudio.site
              </a>
              <span className="block text-xs text-light-muted mt-1">Average response time: &lt; 24 hours</span>
            </div>
          </div>

          {/* Card 2: Billing & Lemon Squeezy */}
          <div className="rounded-2xl border border-light-muted/20 bg-light-surface p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 font-bold flex items-center justify-center text-xl mb-6">
                💳
              </div>
              <h2 className="text-xl font-bold text-zinc-900 mb-2">
                Order &amp; Billing Support
              </h2>
              <p className="text-sm text-light-muted leading-relaxed mb-6">
                Need receipt lookup, VAT invoice, or refund processing? Lemon Squeezy handles order support directly:
              </p>
            </div>
            <div className="pt-4 border-t border-light-muted/15">
              <Link
                href="/refund"
                className="inline-block text-base font-bold text-amber-800 hover:text-amber-900 underline"
              >
                View Refund Policy &amp; Terms &rarr;
              </Link>
              <span className="block text-xs text-light-muted mt-1">14-day hassle-free money back guarantee</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 text-white p-8 sm:p-12 text-center shadow-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            Enroll with Confidence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Start Making Your Film?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Gain immediate access to over 10+ hours of video instruction, downloadable templates, and character consistency workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-amber-500/20"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-amber-400 underline transition-colors"
            >
              Explore Course Syllabus &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
