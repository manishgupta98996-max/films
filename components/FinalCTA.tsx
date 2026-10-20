import CheckoutButton from "./CheckoutButton";
import { COURSE_PRICE } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 mb-4 tracking-tight leading-tight [text-wrap:balance]">
          Start your film this week.
        </h2>

        <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          You&apos;ve watched enough 4-second clips. This is how you make something real.
        </p>

        <div className="max-w-md mx-auto mb-4">
          <CheckoutButton
            label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
            className="w-full py-4 text-base sm:text-lg font-black shadow-xl shadow-[#FF5B00]/25 bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl transition-all hover:scale-[1.01]"
          />
        </div>

        <p className="text-xs text-neutral-500 font-medium">
          Secure checkout via Lemon Squeezy. Taxes may apply depending on your country.
        </p>
      </div>
    </section>
  );
}
