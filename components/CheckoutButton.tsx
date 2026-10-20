"use client";

import { useEffect } from "react";
import { LS_CHECKOUT_URL, COURSE_PRICE } from "@/lib/config";

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
  }
}

interface CheckoutButtonProps {
  label?: string;
  className?: string;
}

export default function CheckoutButton({
  label,
  className = "",
}: CheckoutButtonProps) {
  useEffect(() => {
    window.createLemonSqueezy?.();
  }, []);

  const buttonLabel = label ?? `Get AI Filmmaking Pro: $${COURSE_PRICE}`;

  const href = LS_CHECKOUT_URL
    ? `${LS_CHECKOUT_URL}${LS_CHECKOUT_URL.includes("?") ? "&" : "?"}embed=1`
    : "#";

  return (
    <a
      href={href}
      className={`lemonsqueezy-button inline-flex items-center justify-center font-bold transition-all cursor-pointer ${
        className ||
        "rounded-xl bg-[#FF5B00] px-8 py-4 text-base font-black text-white hover:bg-[#E04E00] shadow-lg shadow-[#FF5B00]/25"
      }`}
      {...(!LS_CHECKOUT_URL && { "aria-disabled": true })}
    >
      {buttonLabel}
    </a>
  );
}
