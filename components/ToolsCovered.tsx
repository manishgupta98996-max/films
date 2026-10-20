export default function ToolsCovered() {
  const toolsList = [
    "Claude",
    "Higgsfield",
    "LTX Studio",
    "Runway",
    "Kling AI",
    "Seedance",
    "ElevenLabs",
    "Suno",
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
          Tools you&apos;ll use: Claude · Higgsfield · LTX Studio · Runway · Kling AI · Seedance · ElevenLabs · Suno
        </h3>

        {/* Tools badges chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          {toolsList.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-bold shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
              <span>{tool}</span>
            </span>
          ))}
        </div>

        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Everything runs in the cloud. No GPU required. Tool subscriptions are billed separately by each platform, and you can start on free or entry tiers.
        </p>
      </div>
    </section>
  );
}
