import { TOOLS } from "@/lib/config";

export default function ToolsCovered() {
  const categories = [
    {
      category: "Writing & Pacing",
      tools: ["Claude"],
      role: "Screenwriting, shot lists, dialogue crafting, and scene descriptions.",
    },
    {
      category: "Cinematic Video Generation",
      tools: ["Runway", "Kling AI", "Seedance", "LTX Studio", "Higgsfield", "Meliés"],
      role: "Camera direction, text-to-video, image-to-video, and motion brushes.",
    },
    {
      category: "Voices & Audio Design",
      tools: ["ElevenLabs", "Suno"],
      role: "AI voice cloning, realistic character dialogue, Foley, and orchestral scores.",
    },
  ];

  return (
    <section className="bg-light-bg text-light-text py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-700 mb-2 block">
            Software Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-4">
            9 Production Tools Covered
          </h2>
          <p className="text-base text-light-muted">
            Master the specialized tools used by leading AI video creators. No complex installation or local GPU required—all generation happens in the cloud.
          </p>
        </div>

        {/* Text tool list by role (no logos per CLAUDE.md) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-light-muted/25 bg-light-surface p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2 my-3">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-light-bg text-light-text border border-light-muted/20"
                    >
                      {tool}
                      {tool === "Meliés" && (
                        <span className="ml-1 text-[10px] text-amber-600 font-normal">
                          *
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-light-muted leading-relaxed mt-2">
                  {cat.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimum Stack & Subscription Notice (Compliance rule) */}
        <div className="rounded-2xl border-2 border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-700 font-bold flex items-center justify-center text-sm">
              ℹ
            </span>
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-light-text">
                The &ldquo;Minimum Stack&rdquo; &amp; Tool Subscriptions Notice
              </h3>
              <p className="text-sm text-light-muted leading-relaxed">
                <strong className="text-light-text">Separate tool subscriptions:</strong> AI video generators, voice synthesizers, and language models (e.g., Runway, ElevenLabs, Claude) are independent third-party services. Generation credits and subscriptions are billed separately by those respective platforms and are not included in this course fee.
              </p>
              <p className="text-sm text-light-muted leading-relaxed">
                <strong className="text-light-text">Lean minimum stack:</strong> You do not need expensive top-tier enterprise plans. You can begin practicing with free tiers or entry-level credit bundles across just 2–3 core tools (e.g. Claude + Runway or Kling + ElevenLabs) and scale up your tool budget only as your production volume expands.
              </p>
              <div className="pt-2 text-xs text-light-muted font-mono">
                * Note on tool list: &ldquo;Meliés&rdquo; spelling to be confirmed by owner. Full tool list in config: {TOOLS.join(", ")}.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
