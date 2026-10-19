export default function WhoIsItFor() {
  const forWho = [
    {
      title: "Solo Filmmakers & Visionaries",
      desc: "Creators who have cinematic stories in mind but lack access to Hollywood film crews, soundstages, or six-figure equipment budgets.",
    },
    {
      title: "Screenwriters & Authors",
      desc: "Writers who want to transform scripts, novels, or treatments into full audio-visual films rather than waiting years for greenlights.",
    },
    {
      title: "YouTubers & Video Creators",
      desc: "Channel owners looking to transition from short talking-head clips into high-retention cinematic narrative films and episodic series.",
    },
    {
      title: "Digital Artists & Animators",
      desc: "Creative professionals wanting to integrate modern generative video models, consistent character sheets, and AI scoring into their workflows.",
    },
  ];

  const notForWho = [
    {
      title: "Get-Rich-Quick Seekers",
      desc: "This is not a push-button automation scheme or low-effort content farm tactic. Filmmaking requires deliberate vision, editing, and story structure.",
    },
    {
      title: "Those Who Refuse to Edit",
      desc: "AI produces raw video clips and stems. You must assemble, time, color grade, and sound-mix the clips in an NLE to build a watchable film.",
    },
    {
      title: "Expectations of Zero-Effort Output",
      desc: "AI is your digital camera crew and orchestra. You are the director. You must still make aesthetic choices, curate takes, and iterate.",
    },
  ];

  return (
    <section className="bg-light-bg text-light-text py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Audience Fit
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4">
            Who This Course Is For — And Who It Is Not For
          </h2>
          <p className="text-base text-light-muted">
            We value your time. AI filmmaking requires genuine creative curiosity and willingness to practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who It's For */}
          <div className="rounded-2xl border border-emerald-500/30 bg-light-surface p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-light-muted/15">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-700 font-bold flex items-center justify-center text-sm">
                ✓
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-light-text">
                This Course Is For You If:
              </h3>
            </div>
            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <div>
                    <h4 className="text-sm font-bold text-light-text">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-light-muted mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It's Not For */}
          <div className="rounded-2xl border border-rose-500/30 bg-light-surface p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-light-muted/15">
              <span className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-700 font-bold flex items-center justify-center text-sm">
                ✕
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-light-text">
                This Course Is NOT For You If:
              </h3>
            </div>
            <ul className="space-y-4">
              {notForWho.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold mt-0.5">•</span>
                  <div>
                    <h4 className="text-sm font-bold text-light-text">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-light-muted mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
