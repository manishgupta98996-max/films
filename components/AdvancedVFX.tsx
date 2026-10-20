import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import { COURSE_PRICE } from "@/lib/config";

export default function AdvancedVFX() {
  return (
    <section className="bg-[#090D16] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-[#FF5B00]/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Checklist & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FF8533]">
              Director-Level Cinematography &amp; VFX
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
              Advanced Cinematic &amp; VFX for AI Creators &amp; Filmmakers
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Eliminate the rubbery, plastic &ldquo;AI look.&rdquo; We teach you how Hollywood DPs and VFX artists control lighting, focal lengths, camera weight, and DaVinci color grades to achieve authentic cinematic texture.
            </p>

            <div className="space-y-3 pt-2 text-sm sm:text-base text-neutral-200">
              <div className="flex items-start gap-3">
                <span className="text-[#FF5B00] font-black text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong className="text-white">Multi-angle coverage:</strong> Direct wide, medium, close-up, and reverse shots of the same character without face drifting.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#FF5B00] font-black text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong className="text-white">Camera physics:</strong> Master motion brushes, speed ramps, rack-focus shifts, and authentic handheld camera rumble.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#FF5B00] font-black text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong className="text-white">Audio &amp; Foley mixing:</strong> Mix character dialogue with ambient soundscapes and room tone so scenes feel grounded in reality.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#FF5B00] font-black text-lg leading-none mt-0.5">✓</span>
                <span>
                  <strong className="text-white">Film emulation:</strong> Apply 35mm grain, halation, and Kodak 2383 print film LUTs for genuine theater-grade texture.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <CheckoutButton
                label={`Enroll Today: $${COURSE_PRICE} →`}
                className="w-full sm:w-auto px-8 py-4 text-base font-extrabold bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl shadow-lg shadow-[#FF5B00]/30 transition-all hover:scale-[1.02]"
              />
              <p className="text-xs text-neutral-400 mt-2">
                Instant lifetime access • 10+ hours of video lessons • Free updates
              </p>
            </div>
          </div>

          {/* Right Column: Two Cinematic Widescreen Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Cinematic Frame 1 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl group">
              <Image
                src="/landing/vfx-cinematic-1.png"
                alt="Cinematic wide establishing plate with sci-fi megacity and protagonist"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
                Scene 04 · Wide Establishing Plate
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div>
                  <p className="font-bold text-sm">World-Building &amp; Atmospheric Depth</p>
                  <p className="text-neutral-400">Volumetric Cloud Simulation &amp; Multi-Planet System</p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-neutral-900/80 border border-neutral-700 font-mono text-[11px]">
                  4K 24fps
                </span>
              </div>
            </div>

            {/* Cinematic Frame 2 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl group">
              <Image
                src="/landing/vfx-cinematic-2.png"
                alt="Reverse angle medium close-up showing locked character consistency"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Scene 05 · Reverse Medium Close-Up
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div>
                  <p className="font-bold text-sm">Zero-Drift Character Consistency</p>
                  <p className="text-neutral-400">Matched Lighting Plate &amp; Texture Continuity</p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-neutral-900/80 border border-neutral-700 font-mono text-[11px]">
                  Kling 1.5 + Seedance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
