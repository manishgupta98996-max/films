import CheckoutButton from "./CheckoutButton";
import { COURSE_HOURS, PRICING_TIERS, SEATS_SOLD, REFUND_DAYS } from "@/lib/config";

export default function Hero() {
  const foundingTier = PRICING_TIERS[0];
  const seatsRemaining = Math.max(0, foundingTier.seats - SEATS_SOLD);

  return (
    <section className="relative overflow-hidden bg-dark-bg text-dark-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-dark-surface/60">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/15 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Cohort badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-surface border border-accent/30 text-accent text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Founding Price: ${foundingTier.price} • First {foundingTier.seats} Seats Only ({seatsRemaining} remaining)</span>
        </div>

        {/* Exact H1 per CLAUDE.md */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          AI Filmmaking Pro: Make a Full 1-Hour AI Movie
        </h1>

        {/* Exact Subhead per CLAUDE.md */}
        <p className="text-lg sm:text-xl lg:text-2xl text-dark-text/90 font-medium max-w-3xl mx-auto mb-8">
          10+ hours, 9 AI tools, one finished movie. No camera, no crew.
        </p>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-dark-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop generating disconnected 4-second video clips. Master the end-to-end cinematic pipeline to script, direct, voice, score, and edit a cohesive, full-length feature film entirely with AI.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CheckoutButton
            label={`Get Founding Price: $${foundingTier.price}`}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold shadow-lg shadow-accent/20"
          />
        </div>

        {/* Trust bullet points */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-dark-muted mb-12">
          <span>✓ Instant digital access</span>
          <span>✓ {COURSE_HOURS} hours step-by-step</span>
          <span>✓ {REFUND_DAYS}-day refund guarantee</span>
          <span>✓ One-time payment</span>
        </div>

        {/* Showreel preview teaser */}
        <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden border border-dark-surface bg-dark-surface/80 shadow-2xl shadow-black/80 aspect-video flex flex-col items-center justify-center p-6 text-center group">
          <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-4 text-accent transition-transform group-hover:scale-110">
            <svg
              className="w-7 h-7 fill-current translate-x-0.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-semibold text-white mb-2">
            AI Filmmaking Pro — Showreel Preview
          </p>
          <p className="text-xs sm:text-sm text-dark-muted max-w-md">
            Watch scenes, character consistency tests, and motion generated entirely by students and workflow examples.
          </p>
          <span className="mt-4 inline-block text-[11px] font-mono tracking-wider uppercase text-amber-300/80 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded">
            [OWNER: add featured YouTube showreel embed URL or video link]
          </span>
        </div>
      </div>
    </section>
  );
}
