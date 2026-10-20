"use client";

import { useState } from "react";
import type { BlogFAQ } from "@/lib/blog";

interface FAQAccordionProps {
  faq?: BlogFAQ[];
}

export default function FAQAccordion({ faq }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faq || faq.length === 0) {
    return null;
  }

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="my-10 rounded-2xl border border-light-muted/20 bg-light-surface p-6 sm:p-8 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-bold text-light-text mb-6">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3">
        {faq.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-light-muted/15 bg-light-bg/60 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 font-bold text-light-text text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-amber-800 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-5 text-sm sm:text-base text-light-muted leading-relaxed border-t border-light-muted/10">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
