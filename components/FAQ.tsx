"use client";

import { useState } from "react";
import Link from "next/link";
import { REFUND_DAYS, COURSE_HOURS } from "@/lib/config";

const FAQS = [
  {
    question: "Do I need prior filmmaking or video editing experience?",
    answer:
      "No prior film background is required. The course starts from ground zero: establishing your idea, prompting the script, generating character sheets, and directing video clips. Basic familiarity with a standard computer and a free editing program (like DaVinci Resolve or CapCut) is all you need.",
  },
  {
    question: "Do I need an expensive GPU or powerful desktop PC?",
    answer:
      "No. All the core generative AI models (Claude, Runway, Kling AI, ElevenLabs, Suno) execute in the cloud through standard web browsers. You do not need local workstation hardware or CUDA cards to generate clips.",
  },
  {
    question: "Are the AI tool subscriptions included in the course tuition?",
    answer:
      "No. Generative tool subscriptions and API/generation credits are separate third-party services billed directly by those platforms. We teach a 'minimum stack' workflow so you can begin using free tiers or affordable entry bundles without committing to expensive enterprise plans.",
  },
  {
    question: "How is the course content delivered?",
    answer:
      `Immediately upon completing checkout via Lemon Squeezy, you will receive an automated delivery email with your course access documentation containing all ${COURSE_HOURS} hours of organized video lessons and bonus templates.`,
  },
  {
    question: "Will I actually make a full-length movie, or just short clips?",
    answer:
      "The entire curriculum is structured around a single capstone outcome: completing a continuous 1-hour AI movie. You will learn scene sequencing, pacing, multi-scene character locks, and editing to maintain story coherence across an extended feature runtime.",
  },
  {
    question: "What is your refund policy?",
    answer:
      `We offer an honest ${REFUND_DAYS}-day refund guarantee. If you go through the introductory lessons and decide the workflow is not the right fit for your creative goals, email us within ${REFUND_DAYS} days for a full refund processed through Lemon Squeezy.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-light-bg text-light-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Questions &amp; Clarity
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-light-muted">
            Everything you need to know about the pipeline, tools, delivery, and guarantees.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-xl border border-light-muted/25 bg-light-surface overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h3 className="text-base font-bold text-light-text pr-2">
                    {faq.question}
                  </h3>
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
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-sm text-light-muted leading-relaxed border-t border-light-muted/15"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-light-muted">
          Have a specific question not covered here? Visit our{" "}
          <Link href="/contact" className="font-semibold text-amber-800 underline hover:text-amber-900">
            Contact Page
          </Link>{" "}
          or browse the full{" "}
          <Link href="/faq" className="font-semibold text-amber-800 underline hover:text-amber-900">
            FAQ Directory
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
