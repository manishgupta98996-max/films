import Link from "next/link";

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

        {/* Contextual Deep Dive Link Injection */}
        <p className="text-xs sm:text-sm font-semibold text-neutral-500 pt-2">
          Want deep-dive comparisons? Explore our in-depth{" "}
          <Link
            href="/guide/ai-filmmaking-tools"
            className="text-[#D64700] hover:text-[#FF5B00] font-bold underline transition-colors"
          >
            AI Filmmaking Tools Guide
          </Link>{" "}
          and{" "}
          <Link
            href="/guide/curious-refuge-ai-filmmaking-course-review"
            className="text-[#D64700] hover:text-[#FF5B00] font-bold underline transition-colors"
          >
            Curious Refuge Course Review
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
