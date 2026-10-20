import Image from "next/image";

export default function ProductionPaths() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#D64700] mb-2">
            Versatile Filmmaking Skills
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            One studio. Two practical paths.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3">
            Whether your goal is directing a full-length indie movie or building a high-growth commercial video business, this pipeline gives you the complete blueprint.
          </p>
        </div>

        {/* Path 1: Long-Form Narrative Systems */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 pb-16 border-b border-neutral-200/80">
          {/* Dual Visual Mockups */}
          <div className="md:col-span-5 flex items-center justify-center gap-3 sm:gap-4">
            <div className="relative w-[140px] sm:w-[160px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-neutral-900 bg-black shadow-xl group">
              <Image
                src="/landing/path-craft.jpg"
                alt="Hands crafting camera gear plate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-[11px] font-bold">Scene 42: Workshop</p>
                <p className="text-[9px] text-neutral-400">LTX Studio Plate</p>
              </div>
            </div>

            <div className="relative w-[140px] sm:w-[160px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-neutral-900 bg-black shadow-xl group">
              <Image
                src="/landing/path-portrait.jpg"
                alt="Consistent character in warm lighting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-[11px] font-bold">Consistent Protagonist</p>
                <p className="text-[9px] text-neutral-400">Runway Gen-3 Lock</p>
              </div>
            </div>
          </div>

          {/* Copy & Features */}
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D64700]">
              Path 01 · Feature Film &amp; Cinema
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              Build repeatable long-form narrative systems
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Move beyond random short clips. Learn how to write 3-act screenplays with Claude, generate matching character turnarounds, maintain consistent location lighting, and export a complete 1-hour indie feature film.
            </p>

            <div className="space-y-2.5 pt-2 text-sm sm:text-base text-neutral-800 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF5B00] font-black">›</span>
                <span>Lock actors and wardrobe across 50+ scenes without facial distortion</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF5B00] font-black">›</span>
                <span>Full scene-by-scene shot-list and camera focal length architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF5B00] font-black">›</span>
                <span>Multi-track ElevenLabs voice acting, ambient Foley, and Suno film score</span>
              </div>
            </div>
          </div>
        </div>

        {/* Path 2: Short-Form & Commercial Variations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy & Features (Order 2 on mobile, Order 1 on desktop) */}
          <div className="md:col-span-7 space-y-4 order-2 md:order-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D64700]">
              Path 02 · Commercials &amp; Social Video
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              Produce viral short-form &amp; commercial variations
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              High-converting video is all about fast iteration. Learn how top creators and agencies produce luxury product spots, faceless YouTube channels, and high-impact social reels in a fraction of traditional production time.
            </p>

            <div className="space-y-2.5 pt-2 text-sm sm:text-base text-neutral-800 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF5B00] font-black">›</span>
                <span>Commercial-grade 3D product simulations and macro lighting setups</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF5B00] font-black">›</span>
                <span>Automated faceless narrative series that scale on YouTube and TikTok</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF5B00] font-black">›</span>
                <span>High-CTR thumbnail strategies and YouTube monetization guidelines</span>
              </div>
            </div>
          </div>

          {/* Visual Card (Graphic Title / Preview Card) */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl p-6 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-[#FF5B00]/20 text-[#FF8533] text-xs font-bold">
                  Batch Workflow
                </span>
                <span className="text-neutral-500 font-mono text-xs">A/B Creative Stacks</span>
              </div>

              <div className="my-auto text-center py-4">
                <p className="text-2xl sm:text-3xl font-black text-[#FACC15] tracking-widest uppercase">
                  CREATIVE VARIATIONS
                </p>
                <p className="text-xs text-neutral-400 mt-1">Multi-Hook Cinematic Video Testing</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                <span>10+ Variations in Minutes</span>
                <span className="text-emerald-400 font-bold">High Engagement Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
