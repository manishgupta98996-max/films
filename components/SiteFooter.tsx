import Link from "next/link";
import { SITE_NAME } from "@/lib/config";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] border-t border-neutral-200/90 text-neutral-600 py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200/80">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-base sm:text-lg font-black tracking-tight text-neutral-950 hover:text-[#FF5B00] transition-colors inline-flex items-center gap-2.5"
            >
              <span className="w-7 h-7 rounded-lg bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/30 flex items-center justify-center text-xs shadow-2xs">
                🎬
              </span>
              <span>{SITE_NAME}</span>
            </Link>
            <p className="text-xs text-neutral-500 mt-1.5 font-medium">
              End-to-end cinematic AI filmmaking masterclass.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold" aria-label="Footer navigation">
            <Link href="/guide" className="text-neutral-600 hover:text-neutral-950 transition-colors">
              Guides
            </Link>
            <Link href="/showcase" className="text-neutral-600 hover:text-neutral-950 transition-colors">
              Showcase
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-neutral-950 transition-colors">
              About
            </Link>
            <Link href="/templates" className="text-neutral-600 hover:text-neutral-950 transition-colors">
              Templates
            </Link>
            <Link href="/faq" className="text-neutral-600 hover:text-neutral-950 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-neutral-950 transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <p>
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link href="/refund" className="hover:text-neutral-900 transition-colors">
              Refund Policy
            </Link>
            <span className="text-neutral-300">·</span>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-300">·</span>
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
