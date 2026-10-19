export default function Instructor() {
  return (
    <section className="bg-light-bg text-light-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Meet Your Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4">
            Your Instructor &amp; Course Director
          </h2>
          <p className="text-base text-light-muted">
            Learn from a dedicated creator who has navigated the evolving generative AI tools from day one.
          </p>
        </div>

        {/* Instructor Card with Owner Placeholder */}
        <div className="rounded-2xl border border-light-muted/25 bg-light-surface p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-amber-500/10 border-2 border-dashed border-amber-500/30 flex flex-col items-center justify-center text-center p-3 text-light-muted">
            <svg className="w-10 h-10 text-amber-700/60 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-mono text-amber-800 font-semibold">
              [OWNER: add photo]
            </span>
          </div>

          {/* Bio text block */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block text-xs font-mono tracking-wide text-amber-800 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">
              [OWNER: add instructor name, background, photo and credentials]
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-light-text">
              Lead AI Filmmaker &amp; Producer
            </h3>

            <p className="text-sm text-light-muted leading-relaxed">
              Specializing in generative cinematic video pipelines, prompt architecture, and AI audio synchronization. Passionate about empowering independent storytellers to realize full-length films without traditional industry gatekeepers.
            </p>

            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold text-light-text/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                10+ Hours of Tested Curriculum
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                Direct Real-World Tool Walkthroughs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
