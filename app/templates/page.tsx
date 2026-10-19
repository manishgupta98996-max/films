import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import EmailCapture from "@/components/EmailCapture";
import CheckoutButton from "@/components/CheckoutButton";
import { COURSE_TITLE, getActiveTier } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Free AI Filmmaking Resources & Templates — AI Filmmaking Studio",
  description:
    "Download free AI filmmaking resources: 1-hour movie shot-list templates, Claude screenwriting prompt packs, character model sheets, and camera movement guides.",
  path: "/templates",
});

export default function TemplatesPage() {
  const activeTier = getActiveTier();

  const resources = [
    {
      title: "1-Hour Movie Shot-List Template",
      format: "Spreadsheet & PDF",
      desc: "Structured scene-by-scene tracking template to organize scene numbers, character references, motion tags, and audio cues across a full 60-minute timeline.",
      icon: "🎬",
    },
    {
      title: "Claude Screenplay Prompt Architecture",
      format: "Prompt Pack",
      desc: "Pre-tested system prompts to generate Hollywood-standard screenplays, three-act beat sheets, subtext dialogue, and cinematic action beats with Claude.",
      icon: "✍️",
    },
    {
      title: "Character Turnaround Model Sheet",
      format: "Reference Guide",
      desc: "Standard prompt structures for generating front, profile, and 3/4 angle character reference plates to eliminate character drift in video models.",
      icon: "👤",
    },
    {
      title: "Camera Motion & Lighting Keyword Guide",
      format: "Cheat Sheet",
      desc: "The essential lexicon of directorial verbs (dolly, crane, tracking, orbit) and lighting tags (chiaroscuro, rim light, golden hour) for Runway and Kling AI.",
      icon: "🎥",
    },
  ];

  return (
    <div className="bg-light-bg text-light-text min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Lead Magnet &amp; Free Starter Kit
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-light-text mb-4">
            Free AI Filmmaking Resources &amp; Templates
          </h1>
          <p className="text-base sm:text-lg text-light-muted">
            Jumpstart your film production with the exact prompt packs, shot lists, and character sheets we use in the studio. 100% free.
          </p>
        </div>

        {/* Lead Magnet Capture Form */}
        <div className="mb-16">
          <EmailCapture
            title="Download the Complete Starter Pack"
            subtitle="Enter your email to receive direct digital access to all 4 template packs, plus weekly AI filmmaking breakdowns and prompt tests."
            buttonLabel="Send Me the Free Templates"
            theme="light"
          />
        </div>

        {/* Resources Grid */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-light-text text-center mb-8">
            What Is Included in the Free Pack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res) => (
              <div
                key={res.title}
                className="rounded-2xl border border-light-muted/25 bg-light-surface p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl" role="img" aria-hidden="true">
                      {res.icon}
                    </span>
                    <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded">
                      {res.format}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-light-text mb-2">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Up-sell CTA */}
        <div className="rounded-2xl border border-dark-surface bg-dark-bg text-dark-text p-8 sm:p-12 text-center shadow-xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Looking for Step-by-Step Video Training?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Upgrade to {COURSE_TITLE}
          </h2>
          <p className="text-sm text-dark-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Templates are great, but watching the full production workflow in over 10+ hours of dedicated video lessons will take your film from concept to premiere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Join Founding Cohort: $${activeTier.price}`}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-dark-text underline hover:text-accent font-semibold"
            >
              View Full Course Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
