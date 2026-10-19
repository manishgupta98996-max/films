import { COURSE_FINAL_PROJECT } from "@/lib/config";

export default function WhatYoullBuild() {
  const milestones = [
    {
      title: "Cohesive 60-Minute Narrative",
      description:
        "Move past short 4-second demo clips. You will construct a complete three-act screenplay, organize multi-scene narrative arcs, and produce a finished, feature-length film ready for screening.",
      tag: "Feature Project",
    },
    {
      title: "Persistent Character Consistency",
      description:
        "The biggest hurdle in AI filmmaking solved. Learn reliable seed locking, character turnarounds, and prompt weighting to keep your protagonist looking identical from Scene 1 to the final credits.",
      tag: "Visual Continuity",
    },
    {
      title: "Cinematic Camera & Lighting Direction",
      description:
        "Direct the camera like a veteran DP. Control panning, tracking, dolly zooms, rack focus, and dramatic golden-hour or neo-noir lighting using text-to-video and image-to-video motion brushes.",
      tag: "Directing",
    },
    {
      title: "Full Orchestral Score & Audio Design",
      description:
        "Films are 50% sound. Generate expressive voiceover dialogue, atmospheric environmental Foley (footsteps, room tone, rain), and customized musical scores that carry the emotional weight of your story.",
      tag: "Sound Design",
    },
  ];

  return (
    <section className="bg-dark-bg text-dark-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-dark-surface/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-3 block">
            The Capstone Project
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            What You Will Build: {COURSE_FINAL_PROJECT}
          </h2>
          <p className="text-base sm:text-lg text-dark-muted leading-relaxed">
            Most creators get trapped generating endless disconnected shots. In AI Filmmaking Pro, every prompt, character plate, and video generation directly serves a single finished 1-hour production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {milestones.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-dark-surface bg-dark-surface/40 p-6 sm:p-8 hover:border-accent/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-dark-muted">0{idx + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Summary Bar */}
        <div className="mt-12 rounded-xl border border-dark-surface bg-dark-surface/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white">
              End-to-End Production Without a Physical Set
            </h4>
            <p className="text-xs sm:text-sm text-dark-muted">
              Zero camera rentals. Zero travel overhead. Zero studio friction. Just pure creative direction.
            </p>
          </div>
          <div className="text-xs font-semibold text-accent uppercase tracking-wider whitespace-nowrap bg-dark-bg px-3 py-1.5 rounded-lg border border-dark-surface">
            From Script to Premiere
          </div>
        </div>
      </div>
    </section>
  );
}
