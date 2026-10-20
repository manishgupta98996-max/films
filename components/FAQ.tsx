"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      question: "Do I need filmmaking or editing experience?",
      answer: "No. The course starts from zero. You'll learn what you need as you need it.",
    },
    {
      question: "Do I need a powerful computer or GPU?",
      answer: "No. Every tool in this course runs in the cloud. Any modern laptop with a browser is enough.",
    },
    {
      question: "Are the AI tool subscriptions included in the $79?",
      answer: "No. Each platform (Runway, ElevenLabs, etc.) bills you directly. The course shows you how to start on free or entry tiers and upgrade only when it makes sense.",
    },
    {
      question: "Will I actually finish a full-length movie?",
      answer: "That's the final project. A complete, edited, scored 1-hour film. Not a highlight reel.",
    },
    {
      question: "How do I receive the course?",
      answer: "After checkout you get a link to the full course files. Every update goes into the same folder, so you always have the latest version.",
    },
    {
      question: "What's the refund policy?",
      answer: "14 days, no questions asked, through Lemon Squeezy.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-neutral-200/90 bg-[#FAF9F6] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF5B00]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 pr-2 leading-snug">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-600 transition-transform duration-200 ${
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
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 border-t border-neutral-200/60 leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-neutral-500">
          Have an unanswered question?{" "}
          <Link href="/contact" className="underline font-bold text-neutral-800 hover:text-[#FF5B00]">
            Contact our team
          </Link>
        </div>
      </div>
    </section>
  );
}
