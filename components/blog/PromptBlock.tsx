"use client";

import { useState } from "react";

interface PromptBlockProps {
  prompt: string;
  label?: string;
}

export default function PromptBlock({ prompt, label = "AI Video / Script Prompt" }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-6 rounded-2xl border border-dark-surface bg-dark-bg text-dark-text overflow-hidden shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-dark-surface/80 border-b border-dark-surface text-xs font-semibold">
        <span className="text-accent flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="px-2.5 py-1 rounded bg-dark-surface hover:bg-dark-surface/80 border border-dark-muted/30 text-white text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
        >
          {copied ? "✓ Copied" : "Copy Prompt"}
        </button>
      </div>
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-dark-text/90 whitespace-pre-wrap leading-relaxed select-all">
        {prompt}
      </div>
    </div>
  );
}
