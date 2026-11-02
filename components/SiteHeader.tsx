import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { SITE_NAME, COURSE_PRICE } from "@/lib/config";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/90 text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-base sm:text-lg font-black tracking-tight text-neutral-950 hover:text-[#FF5B00] transition-colors flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/30 flex items-center justify-center font-black text-sm shadow-2xs">
            🎬
          </span>
          <span>{SITE_NAME}</span>
        </Link>

        {/* Desktop Nav Links: Standard Nav Order */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-neutral-700" aria-label="Main navigation">
          <Link
            href="/#curriculum"
            className="hover:text-neutral-950 transition-colors"
          >
            Curriculum
          </Link>
          <Link
            href="/showcase"
            className="hover:text-neutral-950 transition-colors"
          >
            Showcase
          </Link>
          <Link
            href="/guide"
            className="hover:text-neutral-950 transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/templates"
            className="hover:text-neutral-950 transition-colors"
          >
            Templates
          </Link>
          <Link
            href="/#reviews"
            className="hover:text-neutral-950 transition-colors"
          >
            Reviews
          </Link>
        </nav>

        {/* Mobile Navigation Strip (Direct crawlable hub links) */}
        <div className="flex md:hidden items-center gap-2.5 text-xs font-bold text-neutral-700">
          <Link href="/guide" className="hover:text-neutral-950 transition-colors">
            Guides
          </Link>
          <span className="text-neutral-300">·</span>
          <Link href="/templates" className="hover:text-neutral-950 transition-colors">
            Templates
          </Link>
          <span className="text-neutral-300">·</span>
          <Link href="/showcase" className="hover:text-neutral-950 transition-colors">
            Showcase
          </Link>
        </div>

        {/* Header CTA */}
        <div className="flex items-center gap-3">
          <CheckoutButton
            label={`Get Course: $${COURSE_PRICE}`}
            className="py-2.5 px-3 sm:px-4 text-xs sm:text-sm font-extrabold bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl shadow-md shadow-[#FF5B00]/20 transition-all hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
}
