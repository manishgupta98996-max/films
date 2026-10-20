"use client";

import { useState } from "react";
import CheckoutButton from "../CheckoutButton";
import { COURSE_PRICE } from "@/lib/config";

export default function MobileStickyBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Quick course enrollment action"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3"
    >
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-bold text-white truncate">
          AI Filmmaking Pro
        </span>
        <span className="text-[11px] font-semibold text-amber-400">
          Complete Masterclass &bull; ${COURSE_PRICE}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <CheckoutButton
          label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
          className="py-2 px-3.5 text-xs font-bold whitespace-nowrap shadow-md shadow-amber-500/20"
        />
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss quick action"
          className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
