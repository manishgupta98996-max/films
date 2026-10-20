export default function PipelineOverview() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* PART A - Pain block */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            You&apos;ve been making clips. Not films.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed pt-2">
            <p>
              Most AI video tutorials teach you to generate a 4-second shot and call it a day. You end up with a folder full of disconnected clips that never become anything.
            </p>
            <p>
              The tools exist to make a real film. What&apos;s missing is the pipeline: how to go from an idea to a script, to consistent characters, to a scored and edited feature you can actually publish.
            </p>
            <p className="font-bold text-neutral-900">
              That&apos;s the gap this course fills.
            </p>
          </div>
        </div>

        {/* PART B - Dream block (3 columns) */}
        <div className="pt-8 border-t border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
              Everything you need to finish a film, in order.
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
              Not tips. Not tricks. A production system you follow start to finish and come out with a complete 1-hour movie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Column 1 */}
            <div className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 flex items-center justify-center font-black text-sm mb-5">
                  01
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-3">
                  End-to-End Blueprint
                </h4>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Build a three-act screenplay, shot list, and character plates from scratch. You&apos;ll know exactly what to make before you generate a single frame.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 flex items-center justify-center font-black text-sm mb-5">
                  02
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-3">
                  Characters That Stay Consistent
                </h4>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Lock your characters&apos; faces, outfits, and locations across 50+ scenes using seeds, reference images, and prompt weighting, with zero drift and zero mismatches.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 flex items-center justify-center font-black text-sm mb-5">
                  03
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-3">
                  A Film You Can Publish
                </h4>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Color graded, scored, voiced, and edited. The final project is a complete 1-hour movie ready for YouTube, not a demo reel of random clips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
