"use client";

import CheckoutButton from "./CheckoutButton";
import { COURSE_TITLE, getActiveTier } from "@/lib/config";

export default function StickyCTA() {
  const activeTier = getActiveTier();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-dark-bg/95 backdrop-blur-md border-t border-dark-surface px-4 py-3 flex items-center justify-between gap-3 shadow-2xl"
      role="complementary"
      aria-label="Quick checkout action"
    >
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-bold text-white truncate">
          {COURSE_TITLE}
        </span>
        <span className="text-[11px] text-accent font-semibold">
          Founding Price: ${activeTier.price}
        </span>
      </div>

      <div className="flex-shrink-0">
        <CheckoutButton
          label={`Get Access — $${activeTier.price}`}
          className="py-2 px-4 text-xs font-bold whitespace-nowrap shadow-md shadow-accent/20"
        />
      </div>
    </div>
  );
}
