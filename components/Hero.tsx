import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import {
  COURSE_PRICE,
  SHOWREEL_VIDEO_URL,
} from "@/lib/config";

export default function Hero() {
  const hasVideo = Boolean(SHOWREEL_VIDEO_URL && SHOWREEL_VIDEO_URL.trim().length > 0);

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] text-neutral-900 pt-12 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      {/* Subtle warm ambient background gradient */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-[#FFF5EC] via-[#FAF9F6]/40 to-transparent opacity-80"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* CHANGE 1 - Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FF5B00]/30 shadow-xs mb-5">
          <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-[#D64700] tracking-wide">
            AI Filmmaking Course · Instant Access · One-Time Payment
          </span>
        </div>

        {/* CHANGE 2 - Main headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 mb-4 leading-[1.12] [text-wrap:balance]">
          Your first feature film. No camera. No crew. No excuses.
        </h1>

        {/* CHANGE 3 - Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-neutral-700 max-w-3xl mx-auto mb-8 leading-relaxed [text-wrap:balance]">
          AI Filmmaking Pro teaches you the complete pipeline: script, visuals, voice, score, and edit, until you have a finished 1-hour film ready to publish on YouTube.
        </p>

        {/* CHANGE 6 - 3 stat pills / badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold">
            ✓ 10+ Hours of Training
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold">
            ✓ 8 Production Modules
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold">
            ✓ 1 Complete Film as Final Project
          </span>
        </div>

        {/* Central Visual Showcase + Value Props Split */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-200/50 p-6 sm:p-8 lg:p-10 mb-10 text-left">
          {/* Section Header with High-Converting Copywriting */}
          <div className="mb-6 pb-5 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF0E6] border border-[#FF5B00]/30 text-[#D64700] text-xs font-bold mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] animate-pulse" />
                Real Student Result
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight leading-tight">
                Your Output Looks Like This
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-bold">
                42 Min Full Movie
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/80">
                100% AI Built
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Embedded Student Movie (16:9) */}
            <div className="md:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-900 bg-black shadow-xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/kGuW9tChVHI"
                  title="Your Output Looks Like This: KEPLER 42-Minute AI Sci-Fi Full Movie by Stellar Cinema"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-neutral-500">
                <span className="font-semibold text-neutral-800 truncate">
                  KEPLER: THE FIRST EARTH · 42 Min Sci-Fi Feature
                </span>
                <span className="text-[#FF5B00] font-semibold shrink-0 ml-2">@StellarCinema-z6v</span>
              </div>
            </div>

            {/* Right: Value Props Bullet Points */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF0E6] text-[#FF5B00] flex items-center justify-center font-black text-sm mt-0.5">
                  ›
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                    Master pacing, shot composition &amp; storytelling
                  </h3>
                  <p className="text-sm text-neutral-600 mt-0.5">
                    Structure scene beats, camera focal lengths, and 3-act narrative rhythm with Claude.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF0E6] text-[#FF5B00] flex items-center justify-center font-black text-sm mt-0.5">
                  ›
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                    Lock character consistency across 50+ scenes
                  </h3>
                  <p className="text-sm text-neutral-600 mt-0.5">
                    Multi-angle character sheets and lighting plates prevent character drift and face distortion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF0E6] text-[#FF5B00] flex items-center justify-center font-black text-sm mt-0.5">
                  ›
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                    Complete pipeline to final DaVinci master
                  </h3>
                  <p className="text-sm text-neutral-600 mt-0.5">
                    Foley sound layering, ElevenLabs voice pacing, Suno score sync, and 4K film color grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & CTA Block */}
        <div className="max-w-md mx-auto space-y-4">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-black text-neutral-950">
              ${COURSE_PRICE} <span className="text-base font-semibold text-neutral-600">one-time</span>
            </p>
            <p className="text-xs sm:text-sm font-medium text-neutral-500">
              Instant Lifetime Access • No Subscription
            </p>
          </div>

          {/* CHANGE 4 - CTA button text */}
          <div className="pt-1">
            <CheckoutButton
              label="Get Instant Access for $79"
              className="w-full py-4 text-base sm:text-lg font-extrabold shadow-xl shadow-[#FF5B00]/25 bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl transition-all hover:scale-[1.02]"
            />
          </div>

          {/* CHANGE 5 - Trust line below CTA button */}
          <p className="text-xs text-neutral-500 font-medium">
            One-time payment · Instant access · 14-day refund guarantee
          </p>

          {/* Social Proof Rating & Avatar Cluster */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="/landing/student-reelixbox.jpg" alt="Student ReelixBox" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="/landing/student-stellarcinema.jpg" alt="Student Stellar Cinema" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="/landing/student-sonyhidayat.jpg" alt="Student Sony Hidayat" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="/landing/student-crepelstudio.jpg" alt="Student Crepel Studio" fill className="object-cover" />
              </div>
            </div>
            <div className="text-left text-xs">
              <div className="flex items-center text-amber-500 font-black">
                ★★★★★
              </div>
              <p className="text-neutral-700 font-bold">
                4.9/5 <span className="font-normal text-neutral-500">from 140+ filmmakers</span>
              </p>
            </div>
          </div>
        </div>

        {/* Optional Showreel iframe if provided */}
        {hasVideo && (
          <div className="mt-12 relative mx-auto max-w-4xl rounded-2xl overflow-hidden border border-neutral-300 bg-black shadow-2xl aspect-video">
            <iframe
              src={SHOWREEL_VIDEO_URL}
              title="AI Filmmaking Pro Showreel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}
