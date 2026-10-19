"use client";

/**
 * CheckoutButton — single component for all CTAs on the site.
 *
 * Renders an <a> with the `lemonsqueezy-button` class.
 * Lemon.js (loaded in layout.tsx) automatically binds it to
 * open in the checkout overlay. We call `createLemonSqueezy()`
 * on mount so the overlay works even when the DOM is rendered
 * after lemon.js has already initialised.
 */

import { useEffect } from "react";
import { LS_CHECKOUT_URL, getActiveTier } from "@/lib/config";

// Extend Window for the Lemon Squeezy global
declare global {
  interface Window {
    createLemonSqueezy?: () => void;
  }
}

interface CheckoutButtonProps {
  /** CTA label. Defaults to "Get Founding Price: $<price>". */
  label?: string;
  /** Extra Tailwind classes. */
  className?: string;
}

export default function CheckoutButton({
  label,
  className = "",
}: CheckoutButtonProps) {
  useEffect(() => {
    window.createLemonSqueezy?.();
  }, []);

  const tier = getActiveTier();
  const buttonLabel = label ?? `Get Founding Price: $${tier.price}`;

  // Append ?embed=1 so lemon.js opens the overlay instead of redirecting
  const href = LS_CHECKOUT_URL
    ? `${LS_CHECKOUT_URL}${LS_CHECKOUT_URL.includes("?") ? "&" : "?"}embed=1`
    : "#";

  return (
    <a
      href={href}
      className={`lemonsqueezy-button inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-dark-bg transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${className}`}
      {...(!LS_CHECKOUT_URL && { "aria-disabled": true })}
    >
      {buttonLabel}
    </a>
  );
}
