import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="bg-[#FAF9F6] py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        {/* Dark Editorial Card */}
        <div className="rounded-3xl bg-[#0D121D] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-neutral-800 relative overflow-hidden">
          {/* Subtle warm glow behind */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-[#FF5B00]/10 blur-[120px] rounded-full"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Studio Filmmaker Photo & Caption */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-xl group">
                <Image
                  src="/landing/studio-filmmaker.jpg"
                  alt="Dan Kieft directing generative scene workflow"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-neutral-200 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                    Studio Production Suite
                  </span>
                  <span className="text-neutral-400 font-mono text-[11px]">4K ProRes Master</span>
                </div>
              </div>

              {/* Verified Author Badge */}
              <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF5B00]/20 border border-[#FF5B00]/40 flex items-center justify-center text-[#FF5B00] font-black text-sm">
                  DK
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Dan Kieft</p>
                  <p className="text-xs text-neutral-400">Lead AI Filmmaker &amp; Producer</p>
                </div>
              </div>
            </div>

            {/* Right: The Core Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF5B00]/20 text-[#FF8533] text-xs font-bold uppercase tracking-wider">
                Directing vs. Prompting
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
                Not another course about{" "}
                <span className="text-[#FF5B00]">one-click AI tricks.</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Most AI video courses teach you shiny 4-second prompts that break the moment a model updates. We teach the timeless craft of cinema adapted for the generative era: three-act pacing, camera focal lengths, character consistency, Foley sound design, and full-length editing.
              </p>

              <div className="space-y-3 pt-2 text-sm sm:text-base text-neutral-300">
                <div className="flex items-start gap-3">
                  <span className="text-[#FF5B00] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">Repeatable consistency:</strong> Multi-angle character sheets and lighting plates that lock your actors across 50+ scenes without drifting.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FF5B00] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">No prompt roulette:</strong> Structured scene direction, shot-lists, and motion brush controls that generate what you envision on the first take.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FF5B00] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>
                    <strong className="text-white">Hollywood post-production:</strong> ElevenLabs dialogue sync, Suno orchestral scores, Foley layers, and DaVinci Resolve color grading.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
