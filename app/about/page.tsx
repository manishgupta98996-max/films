import Link from "next/link";
import Image from "next/image";
import { buildMetadata, buildPersonJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL, COURSE_TITLE, INSTRUCTOR, getActiveTier } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata = buildMetadata({
  title: "About the Creator & Director | AI Filmmaking Studio",
  description:
    "Learn about the filmmaker behind AI Filmmaking Studio and the AI Filmmaking Pro curriculum. Dedicated to empowering solo storytellers with generative AI.",
  path: "/about",
  ogImage: "/og-default.png",
});

export default function AboutPage() {
  const activeTier = getActiveTier();

  const personJsonLd = buildPersonJsonLd({
    name: INSTRUCTOR.name,
    jobTitle: INSTRUCTOR.title || "Director",
    description: INSTRUCTOR.bio,
    url: `${SITE_URL}/about`,
    image: INSTRUCTOR.photoUrl,
  });

  return (
    <div className="bg-light-bg text-light-text min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Person JSON-LD */}
      <JsonLd data={personJsonLd} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-800 mb-2 block">
            The Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-light-text mb-4">
            About {SITE_NAME}
          </h1>
          <p className="text-base sm:text-lg text-light-muted">
            Democratizing feature-length cinema for solo storytellers, writers, and visual artists.
          </p>
        </div>

        {/* Author Bio Card */}
        <div className="rounded-2xl border border-light-muted/25 bg-light-surface p-8 sm:p-12 shadow-sm mb-14">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-light-muted/15">
            {INSTRUCTOR.photoUrl ? (
              <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-md bg-zinc-900 relative">
                <Image
                  src={INSTRUCTOR.photoUrl}
                  alt={INSTRUCTOR.name}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            ) : (
              <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center text-center p-3 text-light-muted">
                <svg className="w-12 h-12 text-amber-800/60 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs text-amber-800 font-semibold">
                  {INSTRUCTOR.name}
                </span>
              </div>
            )}

            {/* Author Meta Details */}
            <div className="flex-1 space-y-2 text-center md:text-left">
              <span className="inline-block text-xs font-semibold tracking-wide text-amber-800 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">
                AI Filmmaker &amp; Producer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text">
                Dan Kieft
              </h2>
              <p className="text-sm font-medium text-amber-800">
                Founder of {SITE_NAME} • Creator of {COURSE_TITLE}
              </p>
            </div>
          </div>

          {/* Narrative Body */}
          <div className="space-y-4 text-sm sm:text-base text-light-muted leading-relaxed">
            <h3 className="text-lg font-bold text-light-text">
              Why I Built This Course
            </h3>
            <p>
              For decades, the biggest barrier between a storyteller and their finished film was never lack of imagination: it was the astronomical cost of production. Cameras, locations, lighting equipment, crew salaries, and soundstages made feature filmmaking inaccessible to the vast majority of creators.
            </p>
            <p>
              When generative AI emerged, many dismissed it as a novelty for generating short, random 4-second video clips. But when you systematically connect the dots (using Claude for screenwriting, image engines for character reference locks, Runway and Kling AI for camera movement, and ElevenLabs for natural voice acting), you unlock something historic: the ability for a single creator to direct a full 1-hour movie.
            </p>
            <p>
              I built <em>{COURSE_TITLE}</em> to share the exact, repeatable pipeline I discovered through thousands of hours of testing. No fluff, no false income claims: just the real craft of synthetic cinema.
            </p>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-xl border border-light-muted/20 bg-light-surface p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center mb-4 text-sm">
              01
            </div>
            <h4 className="text-base font-bold text-light-text mb-2">
              Story First, Tech Second
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              Generative models are tools, not shortcuts for narrative craft. Every prompt must serve drama, character, and emotion.
            </p>
          </div>

          <div className="rounded-xl border border-light-muted/20 bg-light-surface p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center mb-4 text-sm">
              02
            </div>
            <h4 className="text-base font-bold text-light-text mb-2">
              Radical Transparency
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              We never promise push-button wealth or hide tool subscription realities. Real filmmaking takes deliberate effort and editing.
            </p>
          </div>

          <div className="rounded-xl border border-light-muted/20 bg-light-surface p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center mb-4 text-sm">
              03
            </div>
            <h4 className="text-base font-bold text-light-text mb-2">
              Finished Capstone Output
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              We don&apos;t teach disconnected tricks. Everything converges toward one tangible milestone: your complete 1-hour AI film.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl border border-dark-surface bg-dark-bg text-dark-text p-8 sm:p-10 text-center shadow-xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-2 block">
            Start Your Film Journey
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Direct Your Feature?
          </h3>
          <p className="text-sm text-dark-muted max-w-lg mx-auto mb-6">
            Enroll in {COURSE_TITLE} and get instant digital access to the full 10+ hour curriculum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${activeTier.price}`}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-dark-text underline hover:text-accent font-semibold"
            >
              Explore Course Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
