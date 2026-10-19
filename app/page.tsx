import { buildMetadata, buildCourseJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import WhatYoullBuild from "@/components/WhatYoullBuild";
import Curriculum from "@/components/Curriculum";
import ToolsCovered from "@/components/ToolsCovered";
import WhoIsItFor from "@/components/WhoIsItFor";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StickyCTA from "@/components/StickyCTA";

/**
 * Metadata per CLAUDE.md §6 exact requirements:
 * Title: AI Filmmaking Course: Make a 1-Hour AI Movie
 * Meta: AI Filmmaking Pro is a 10+ hour AI filmmaking course. Learn Claude, Runway, Kling, Seedance, ElevenLabs & more, and finish a full 1-hour AI movie.
 */
export const metadata = buildMetadata({
  title: "AI Filmmaking Course: Make a 1-Hour AI Movie",
  description:
    "AI Filmmaking Pro is a 10+ hour AI filmmaking course. Learn Claude, Runway, Kling, Seedance, ElevenLabs & more, and finish a full 1-hour AI movie.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Course JSON-LD — uses only verified data from config */}
      <JsonLd data={buildCourseJsonLd()} />

      <main className="min-h-screen pb-16 md:pb-0">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Showreel + student showcase */}
        <Showreel />

        {/* 3. What you'll build (the 1-hour AI movie) */}
        <WhatYoullBuild />

        {/* 4. Curriculum (8 modules, one-line outcomes, accordion) */}
        <Curriculum />

        {/* 5. Tools covered + minimum stack */}
        <ToolsCovered />

        {/* 6. Who it's for / not for */}
        <WhoIsItFor />

        {/* 7. Instructor */}
        <Instructor />

        {/* 8. Pricing (tiers, bonuses, refund guarantee) */}
        <Pricing />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Final CTA + email capture */}
        <FinalCTA />
      </main>

      {/* Sticky mobile CTA bar */}
      <StickyCTA />
    </>
  );
}
