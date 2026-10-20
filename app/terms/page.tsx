import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { COURSE_TITLE, SITE_NAME } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Terms of Service | AI Filmmaking Studio",
  description: `Terms of service for ${SITE_NAME} and the ${COURSE_TITLE} masterclass.`,
  path: "/terms",
  ogImage: "/og-default.png",
});

export default function TermsPage() {
  return (
    <div className="flex-1 flex flex-col bg-light-bg text-light-text">
      {/* Dark Subpage Header */}
      <header className="bg-gradient-to-b from-dark-bg via-[#0c1224] to-[#0A0F1E] border-b border-dark-surface/60 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            Legal &amp; Usage
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Please read these terms carefully before accessing {SITE_NAME} educational materials.
          </p>
        </div>
      </header>

      {/* Terms Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-light-muted/20 bg-light-surface p-8 sm:p-10 shadow-sm space-y-6 text-base leading-relaxed text-zinc-800">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or purchasing <strong>{COURSE_TITLE}</strong> from <strong>{SITE_NAME}</strong>, you agree to abide by these Terms of Service. If you do not agree with any portion of these terms, you should not access or purchase the course.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              2. Intellectual Property &amp; Course License
            </h2>
            <p>
              All video lessons, proprietary prompt packs, shot-list templates, and curriculum materials provided within {COURSE_TITLE} are the intellectual property of {SITE_NAME}.
            </p>
            <p>
              Your enrollment grants you a single-user, non-transferable, personal license to view the materials. You may not re-distribute, resell, share login/access links, or publicly upload the course videos. However, all films, scripts, voice tracks, and creative projects you produce using these techniques are 100% your own property.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              3. Independent AI Tool Subscriptions
            </h2>
            <p>
              {COURSE_TITLE} teaches practical workflows utilizing third-party generative tools (including Runway, Kling AI, Claude, ElevenLabs, etc.). Subscriptions, compute credits, and accounts with these third-party platforms are managed directly by each provider and are billed separately from your course tuition. {SITE_NAME} is independent and not affiliated with the third-party tools mentioned.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-light-muted/15">
            <h2 className="text-xl font-bold text-zinc-900">
              4. Questions and Inquiries
            </h2>
            <p>
              If you have any questions regarding these terms, please contact us via our{" "}
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
