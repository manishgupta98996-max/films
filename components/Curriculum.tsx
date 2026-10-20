"use client";

import { useState } from "react";
import { MODULES, COURSE_HOURS } from "@/lib/config";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First module open by default for immediate context

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="bg-[#FAF9F6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            8 modules. The order a real filmmaker follows.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3">
            Each module ends with something you use in your film, not just theory you forget.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {MODULES.map((m, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={m.number}
                className="rounded-2xl border border-neutral-200/90 bg-white overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF5B00]"
                  aria-expanded={isOpen}
                  aria-controls={`module-content-${m.number}`}
                  id={`module-header-${m.number}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 font-black text-sm flex items-center justify-center">
                      {m.number.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D64700] font-semibold mt-1">
                        Outcome: {m.outcome}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#FF5B00] text-white" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`module-content-${m.number}`}
                    role="region"
                    aria-labelledby={`module-header-${m.number}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 border-t border-neutral-100"
                  >
                    <p className="leading-relaxed mb-4">
                      {m.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-[#FAF9F6] px-3.5 py-2.5 rounded-xl border border-neutral-200/80">
                      <span className="text-[#D64700]">✓ Production Deliverable:</span>
                      <span>Real scene assets integrated directly into your capstone movie project.</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
