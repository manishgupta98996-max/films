"use client";

import { useState } from "react";
import { MODULES, COURSE_HOURS } from "@/lib/config";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light-bg text-light-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Comprehensive Syllabus
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4">
            Curriculum: 8 Modules ({COURSE_HOURS} Hours)
          </h2>
          <p className="text-base text-light-muted max-w-2xl mx-auto">
            From the initial idea in Claude to your final export and YouTube release. Every module delivers a concrete, production-ready outcome.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-3">
          {MODULES.map((m, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={m.number}
                className="rounded-xl border border-light-muted/25 bg-light-surface overflow-hidden transition-shadow shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isOpen}
                  aria-controls={`module-content-${m.number}`}
                  id={`module-header-${m.number}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 font-mono font-bold text-sm flex items-center justify-center">
                      {m.number.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-light-text">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-800 font-medium mt-1">
                        Outcome: {m.outcome}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-light-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-700" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`module-content-${m.number}`}
                    role="region"
                    aria-labelledby={`module-header-${m.number}`}
                    className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-sm text-light-muted border-t border-light-muted/15"
                  >
                    <p className="leading-relaxed mb-3">
                      {m.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-light-text/80 bg-light-bg px-3 py-2 rounded-lg border border-light-muted/15">
                      <span className="text-amber-600">✓ Hands-on deliverable:</span>
                      <span>Real assets generated and integrated directly into your capstone movie project.</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs sm:text-sm text-light-muted">
          Need a copy of the syllabus? All updates and newly added tool lessons are included with lifetime access.
        </div>
      </div>
    </section>
  );
}
