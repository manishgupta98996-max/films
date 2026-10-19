import { STUDENT_CHANNELS } from "@/lib/config";

export default function Showreel() {
  return (
    <section className="bg-dark-bg text-dark-text py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-dark-surface/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Showreel & Student Creations
          </h2>
          <p className="text-sm sm:text-base text-dark-muted">
            Real outputs produced using this workflow. From high-contrast cinematic shots to character-consistent story sequences.
          </p>
        </div>

        {/* Primary Showreel Video Slot */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-dark-surface bg-dark-surface/90 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-3 text-accent">
              <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Official Master Showreel
            </h3>
            <p className="text-xs sm:text-sm text-dark-muted max-w-md mb-4">
              A 3-minute montage showcasing lighting control, character continuity, camera dolly/pan moves, dialogue sync, and score integration.
            </p>
            <div className="inline-block text-[11px] font-mono tracking-wide text-amber-300/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded">
              [OWNER: add 3-5 specific best video links or YouTube embed URL for official showreel]
            </div>
          </div>
        </div>

        {/* Student Showcase Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-dark-surface">
            <div>
              <h3 className="text-lg font-bold text-white">
                Featured Student Creators
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted">
                Channels applying the AI Filmmaking Pro pipeline to publish original films and episodes.
              </p>
            </div>
            <span className="text-[11px] font-mono text-amber-300/80 bg-amber-950/30 border border-amber-800/30 px-2.5 py-1 rounded self-start sm:self-auto">
              [OWNER: confirm student permissions & add specific video embeds]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STUDENT_CHANNELS.map((channel) => (
              <div
                key={channel}
                className="rounded-xl border border-dark-surface bg-dark-surface/50 p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-dark-surface border border-dark-muted/30 flex items-center justify-center font-bold text-accent text-sm">
                    {channel.slice(1, 3).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{channel}</h4>
                    <p className="text-xs text-dark-muted">YouTube Creator Channel</p>
                  </div>
                </div>
                <div className="aspect-video rounded-lg bg-dark-bg/80 border border-dark-surface/80 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-[10px] font-mono text-dark-muted">
                    [OWNER: link best video for {channel}]
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-dark-muted">
            * Showcase channels represent independent creators who have studied these workflows. We only display publicly verifiable channels with active creator permission.
          </p>
        </div>
      </div>
    </section>
  );
}
