import CheckoutButton from "./CheckoutButton";
import { COURSE_PRICE } from "@/lib/config";

export default function Pricing() {
  const includedItems = [
    "10+ hours across 8 production modules",
    "Complete script-to-screen pipeline",
    "Prompt packs, shot list templates, Foley stems",
    "Character consistency system for 50+ scenes",
    "Instant access + all future updates",
    "14-day refund guarantee",
  ];

  return (
    <section id="pricing" className="bg-[#FAF9F6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* CHANGE 16 - Main heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Start your film this week.
          </h2>
          {/* CHANGE 16 - Subheading */}
          <p className="text-base sm:text-lg text-neutral-600 mt-3">
            You&apos;ve watched enough 4-second clips. This is how you make something real.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="rounded-3xl border-2 border-[#FF5B00] bg-white p-6 sm:p-10 mb-8 shadow-xl shadow-[#FF5B00]/10 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0E6] text-[#D64700] font-black text-xs uppercase tracking-wider mb-2">
                Full Masterclass Access
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950">
                AI Filmmaking Pro
              </h3>
            </div>

            {/* CHANGE 16 - Price display */}
            <div className="text-left md:text-right flex-shrink-0">
              <div className="flex items-baseline gap-1 md:justify-end">
                <span className="text-4xl sm:text-6xl font-black text-neutral-950">
                  ${COURSE_PRICE}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">
                One-time · No subscription · No recurring charges
              </p>
            </div>
          </div>

          {/* CHANGE 16 - Included items list */}
          <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {includedItems.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-800 font-medium">
                <span className="text-emerald-600 font-black text-base">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CHANGE 16 - CTA button text */}
          <div className="pt-2">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
              className="w-full text-center py-4 text-base sm:text-lg font-black shadow-xl shadow-[#FF5B00]/25 bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl transition-all hover:scale-[1.01]"
            />
          </div>

          {/* CHANGE 16 - Below button fine print */}
          <p className="text-xs text-neutral-500 text-center mt-3 font-medium">
            Secure checkout via Lemon Squeezy. Taxes may apply depending on your country.
          </p>
        </div>
      </div>
    </section>
  );
}
