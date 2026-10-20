import { COURSE_FINAL_PROJECT } from "@/lib/config";

export default function WhatYoullGet() {
  const bullets = [
    {
      title: "End-to-End Feature Movie Blueprint",
      description:
        "Go beyond disjointed 4-second clips. You will build a structured three-act screenplay, shot lists, character plates, and assemble a complete, watchable 1-hour film.",
      tag: "Feature Production",
    },
    {
      title: "Facial & Visual Continuity System",
      description:
        "The biggest obstacle in AI video solved. Master precise seed locking, reference turnarounds, and prompt weighting to keep your characters consistent across every scene.",
      tag: "Character Consistency",
    },
    {
      title: "Turnkey Templates & Directing Workflows",
      description:
        "Instant access to prompt packs, shot-list spreadsheets, Foley audio stems, and camera motion presets that eliminate guesswork from day one.",
      tag: "Production Toolkit",
    },
  ];

  return (
    <section className="bg-light-bg text-light-text py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-800 mb-2">
            What You Will Get
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4 [text-wrap:balance]">
            Everything Required to Produce {COURSE_FINAL_PROJECT}
          </h2>
          <p className="text-[17px] text-light-muted leading-relaxed">
            A production-proven framework built for creators who want to direct full stories instead of endless test clips.
          </p>
        </div>

        {/* 3 Bullets / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bullets.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-light-muted/20 bg-light-surface p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-amber-800 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                    {item.tag}
                  </span>
                  <span className="text-xs font-semibold text-light-muted">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-light-text mb-3">
                  {item.title}
                </h3>
                <p className="text-[17px] text-light-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
