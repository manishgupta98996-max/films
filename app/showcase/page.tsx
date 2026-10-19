import Link from "next/link";
import { buildMetadata, buildVideoObjectJsonLd } from "@/lib/seo";
import { SHOWCASE_FILMS } from "@/lib/config";
import JsonLd from "@/components/JsonLd";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata = buildMetadata({
  title: "Student Showcase & Film Gallery — AI Filmmaking Studio",
  description:
    "Explore feature scenes, short films, and cinematic experiments created by students and creators using the AI Filmmaking Pro pipeline.",
  path: "/showcase",
});

/*
 * TODO (Owner to obtain student permissions & specific best-video URLs):
 * The following channels have been listed for student verification:
 * - @ReelixBox
 * - @StellarCinema-z6v
 * - @SonyHidayatAIFilms
 * - @karmaaifilms
 * - @Crepel_Studio
 * - @WhenCrownsBleed
 *
 * Once permissions and video links are verified, add them to `SHOWCASE_FILMS`
 * in `lib/config.ts`.
 */

export default function ShowcasePage() {
  const hasFilms = SHOWCASE_FILMS.length > 0;

  return (
    <div className="bg-dark-bg text-dark-text min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* VideoObject JSON-LD for active films */}
      {hasFilms &&
        SHOWCASE_FILMS.map((film) => (
          <JsonLd
            key={film.id}
            data={buildVideoObjectJsonLd({
              name: film.title,
              description: film.description,
              thumbnailUrl:
                film.thumbnailUrl ||
                `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`,
              uploadDate: film.uploadDate,
              embedUrl: `https://www.youtube-nocookie.com/embed/${film.youtubeId}`,
              duration: film.duration,
            })}
          />
        ))}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-2 block">
            Creator Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Student Showcase &amp; Films
          </h1>
          <p className="text-base sm:text-lg text-dark-muted">
            Original movies, episode pilots, and scene tests produced using the AI Filmmaking Pro pipeline.
          </p>
        </div>

        {/* Owner Verification Banner */}
        <div className="rounded-xl border border-amber-800/40 bg-amber-950/30 p-5 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-amber-300 font-semibold block mb-1">
            [OWNER: verify student creator permissions &amp; add YouTube URLs to SHOWCASE_FILMS in lib/config.ts]
          </span>
          <p className="text-xs text-dark-muted">
            Per our compliance standards, student works are only featured after explicit creator authorization and verification.
          </p>
        </div>

        {/* Video Grid */}
        {hasFilms ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SHOWCASE_FILMS.map((film) => (
              <div
                key={film.id}
                className="rounded-2xl border border-dark-surface bg-dark-surface/50 overflow-hidden hover:border-accent/40 transition-colors flex flex-col justify-between"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}`}
                    title={film.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-accent mb-1 block">
                      Directed by {film.creatorName}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {film.title}
                    </h3>
                    <p className="text-xs text-dark-muted line-clamp-3 leading-relaxed">
                      {film.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty / Placeholder State */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="rounded-2xl border border-dashed border-dark-surface bg-dark-surface/30 p-6 flex flex-col items-center justify-center text-center aspect-video"
              >
                <div className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center text-accent mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-white mb-1">
                  Featured Film Slot 0{slot}
                </span>
                <span className="text-[11px] font-mono text-dark-muted">
                  [OWNER: add video embed]
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="rounded-2xl border border-dark-surface bg-dark-surface/60 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Want to See Your Film Featured Here?
          </h2>
          <p className="text-sm text-dark-muted max-w-lg mx-auto mb-6">
            Enroll in AI Filmmaking Pro, build your capstone feature, and submit your finished cut for inclusion in the official creator showcase.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CheckoutButton
              label="Join the Founding Cohort: $49"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm text-dark-text underline hover:text-accent font-semibold"
            >
              Explore Course Syllabus →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
