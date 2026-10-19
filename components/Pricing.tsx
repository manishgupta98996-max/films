import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import {
  PRICING_TIERS,
  SEATS_SOLD,
  BONUSES,
  REFUND_DAYS,
  getActiveTier,
} from "@/lib/config";

export default function Pricing() {
  const activeTier = getActiveTier();
  const seatsRemaining = Math.max(0, activeTier.seats - SEATS_SOLD);

  return (
    <section id="pricing" className="bg-light-bg text-light-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4">
            Enroll Today at the Founding Creator Rate
          </h2>
          <p className="text-base text-light-muted">
            The first 20 students receive founding pricing of ${activeTier.price}. Price tiers rise transparently as cohorts fill.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {PRICING_TIERS.map((tier) => {
            const isCurrent = tier.active;

            return (
              <div
                key={tier.name}
                className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                  isCurrent
                    ? "bg-light-surface border-2 border-accent shadow-lg shadow-accent/10 relative"
                    : "bg-light-surface/60 border border-light-muted/25 opacity-75"
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-dark-bg font-bold text-[11px] uppercase tracking-wider">
                    Current Active Tier
                  </span>
                )}

                <div>
                  <h3 className="text-sm font-bold text-light-text uppercase tracking-wider mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-extrabold text-light-text">
                      ${tier.price}
                    </span>
                    <span className="text-xs text-light-muted">/ one-time</span>
                  </div>

                  <p className="text-xs text-light-muted mb-4">
                    {tier.seats > 0
                      ? `${tier.seats} seats allocation`
                      : "Standard public access"}
                  </p>

                  {isCurrent ? (
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center mb-4">
                      <p className="text-xs font-bold text-amber-800">
                        {SEATS_SOLD} of {tier.seats} seats claimed
                      </p>
                      <p className="text-[11px] text-amber-700">
                        {seatsRemaining} seats left at ${tier.price}
                      </p>
                    </div>
                  ) : (
                    <div className="py-2 mb-4">
                      <span className="text-[11px] font-mono text-light-muted/80 block">
                        {tier.ownerConfirm
                          ? "[OWNER: confirm tier before launch]"
                          : "Upcoming tier"}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  {isCurrent ? (
                    <CheckoutButton
                      label={`Get Founding Price: $${tier.price}`}
                      className="w-full text-center py-3 text-sm font-bold"
                    />
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full py-2.5 px-3 rounded-lg bg-light-bg border border-light-muted/20 text-xs font-semibold text-light-muted cursor-not-allowed text-center"
                    >
                      Locked Tier
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Included Bonuses Section */}
        <div className="rounded-2xl border border-light-muted/25 bg-light-surface p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-light-muted/15">
            <div>
              <h3 className="text-lg font-bold text-light-text">
                Production Bonuses Included with Every Enrollment
              </h3>
              <p className="text-xs sm:text-sm text-light-muted">
                Turnkey assets to jumpstart your 1-hour film without starting from scratch.
              </p>
            </div>
            <span className="text-[11px] font-mono text-amber-800 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded self-start sm:self-auto">
              [OWNER: confirm final bonus inclusions before launch]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {BONUSES.map((bonus, idx) => (
              <div
                key={bonus}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-light-bg border border-light-muted/15"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-amber-800 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-light-text">
                    {bonus}
                  </h4>
                  <p className="text-[11px] text-light-muted mt-0.5">
                    Ready-to-use template &amp; prompt files
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Refund Guarantee Block */}
        <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700 flex-shrink-0">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="space-y-1 text-center md:text-left flex-1">
            <h3 className="text-base sm:text-lg font-bold text-light-text">
              {REFUND_DAYS}-Day Money-Back Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              We want you to feel completely confident in this training. If you review the curriculum and decide this workflow is not for you within {REFUND_DAYS} days of purchase, request a prompt refund through Lemon Squeezy. See our full{" "}
              <Link href="/refund" className="underline font-semibold text-emerald-800 hover:text-emerald-900">
                Refund Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex-shrink-0">
            <CheckoutButton
              label={`Claim Founding Seat: $${activeTier.price}`}
              className="px-6 py-3 text-sm font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
