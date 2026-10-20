"use client";

import CheckoutButton from "./CheckoutButton";
import { COURSE_TITLE, COURSE_PRICE } from "@/lib/config";

export default function StickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl"
      role="complementary"
      aria-label="Quick checkout action"
    >
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-black text-neutral-900 truncate">
          {COURSE_TITLE}
        </span>
        <span className="text-[11px] text-[#D64700] font-bold">
          One-Time Payment: ${COURSE_PRICE}
        </span>
      </div>

      <div className="flex-shrink-0">
        <CheckoutButton
          label={`Get Pro: $${COURSE_PRICE} →`}
          className="py-2.5 px-4 text-xs font-black whitespace-nowrap bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl shadow-md shadow-[#FF5B00]/20"
        />
      </div>
    </div>
  );
}
