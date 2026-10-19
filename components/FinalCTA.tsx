import CheckoutButton from "./CheckoutButton";
import EmailCapture from "./EmailCapture";
import { COURSE_TITLE, COURSE_HOURS, PRICING_TIERS, SEATS_SOLD, REFUND_DAYS } from "@/lib/config";

export default function FinalCTA() {
  const activeTier = PRICING_TIERS[0];
  const seatsRemaining = Math.max(0, activeTier.seats - SEATS_SOLD);

  return (
    <section className="bg-dark-bg text-dark-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-3 block">
          Ready to Direct Your First Feature?
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          Make Your 1-Hour AI Movie Today
        </h2>

        <p className="text-base sm:text-lg text-dark-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          Get instant access to {COURSE_HOURS} hours of structured, step-by-step training, bonus shot-list templates, and lifetime updates.
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface border border-accent/30 text-accent text-xs font-medium mb-6">
          <span>Founding Price: ${activeTier.price} • {seatsRemaining} of {activeTier.seats} seats remaining</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CheckoutButton
            label={`Enroll in ${COURSE_TITLE} — $${activeTier.price}`}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold shadow-xl shadow-accent/20"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-dark-muted mb-6">
          <span>✓ Instant digital access</span>
          <span>✓ {REFUND_DAYS}-day refund guarantee</span>
          <span>✓ Direct Lemon Squeezy checkout</span>
        </div>

        {/* Email capture lead magnet */}
        <EmailCapture />
      </div>
    </section>
  );
}
