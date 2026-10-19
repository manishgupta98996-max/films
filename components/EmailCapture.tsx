"use client";

import { EMAIL_FORM_ACTION } from "@/lib/config";

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  theme?: "dark" | "light";
  className?: string;
}

export default function EmailCapture({
  title = "Get the Free AI Filmmaking Starter Pack",
  subtitle = "Join our creator mailing list to receive prompt sheets, workflow updates, and free filmmaking guides.",
  buttonLabel = "Get Free Templates",
  theme = "dark",
  className = "",
}: EmailCaptureProps) {
  const isDark = theme === "dark";
  const hasAction = Boolean(EMAIL_FORM_ACTION);

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center ${
        isDark
          ? "border border-dark-surface bg-dark-surface/70 text-dark-text"
          : "border border-light-muted/25 bg-light-surface text-light-text shadow-sm"
      } ${className}`}
    >
      {!hasAction && (
        <div
          className={`inline-block text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded mb-4 ${
            isDark
              ? "text-amber-300/80 bg-amber-950/40 border border-amber-800/40"
              : "text-amber-800 bg-amber-500/10 border border-amber-500/20"
          }`}
        >
          [OWNER: configure email provider form action URL in NEXT_PUBLIC_EMAIL_FORM_ACTION]
        </div>
      )}

      <h3 className={`text-lg sm:text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-light-text"}`}>
        {title}
      </h3>
      <p
        className={`text-xs sm:text-sm mb-6 max-w-md mx-auto leading-relaxed ${
          isDark ? "text-dark-muted" : "text-light-muted"
        }`}
      >
        {subtitle}
      </p>

      {/* Hosted email form — connects directly to provider without backend */}
      <form
        action={hasAction ? EMAIL_FORM_ACTION : undefined}
        method="POST"
        onSubmit={hasAction ? undefined : (e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <label htmlFor={`email-input-${theme}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-input-${theme}`}
          type="email"
          name="email"
          required
          disabled={!hasAction}
          placeholder="Enter your email address"
          className={`flex-1 px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
            isDark
              ? "bg-dark-bg border border-dark-surface text-dark-text placeholder:text-dark-muted/60 disabled:opacity-75"
              : "bg-light-bg border border-light-muted/30 text-light-text placeholder:text-light-muted/70 disabled:opacity-75"
          }`}
        />
        <button
          type={hasAction ? "submit" : "button"}
          disabled={!hasAction}
          className="px-6 py-3 rounded-lg bg-accent text-dark-bg text-sm font-bold shadow-md shadow-accent/20 transition-colors hover:bg-accent-hover disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {buttonLabel}
        </button>
      </form>

      <p
        className={`text-[11px] mt-3 ${
          isDark ? "text-dark-muted/70" : "text-light-muted/80"
        }`}
      >
        Instant digital delivery. No spam. Unsubscribe at any time.
      </p>
    </div>
  );
}
