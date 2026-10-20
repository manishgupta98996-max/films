import { buildMetadata, buildCourseJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import PipelineOverview from "@/components/PipelineOverview";
import Curriculum from "@/components/Curriculum";
import ToolsCovered from "@/components/ToolsCovered";
import AdvancedVFX from "@/components/AdvancedVFX";
import StudentProjectsGrid from "@/components/StudentProjectsGrid";
import StudentReviews from "@/components/StudentReviews";
import Instructor from "@/components/Instructor";
import WhoIsItFor from "@/components/WhoIsItFor";
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
  title: "AI Filmmaking Course: No Camera, No Crew, No Experience Needed",
  description:
    "The AI filmmaking course with real student films to prove it works. Script, visuals, voice, score and edit across a complete pipeline. 10+ hours, $79 one-time payment. 14-day refund.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Course JSON-LD - verified data from config */}
      <JsonLd data={buildCourseJsonLd()} />

      <div className="min-h-screen pb-16 md:pb-0 bg-[#FAF9F6]">
        {/* 1. Hero (Changes 1 to 6) */}
        <Hero />

        {/* 2. CHANGE 8: 2-Part Section AFTER Hero and BEFORE Curriculum (Part A: Pain block, Part B: Dream block) */}
        <PipelineOverview />

        {/* 3. CHANGE 9 & 10: Curriculum (8 modules. The order a real filmmaker follows.) */}
        <Curriculum />

        {/* 4. CHANGE 11: Tools bar below modules */}
        <ToolsCovered />

        {/* 5. Advanced Cinematic & VFX (Single instance, maximum ONE) */}
        <AdvancedVFX />

        {/* 6. CHANGE 13: Student Proof & Real Channels (Films made by people who took this course) */}
        <StudentProjectsGrid />

        {/* 7. Student Reviews */}
        <StudentReviews />

        {/* 8. CHANGE 12: Instructor Section (Your instructor: Dan Kieft) */}
        <Instructor />

        {/* 9. CHANGE 14: Who It's For (This course is for you if you're done making clips) */}
        <WhoIsItFor />

        {/* 10. CHANGE 16: Buy / Pricing Section (Start your film this week) */}
        <Pricing />

        {/* 11. CHANGE 15: FAQ Section (6 exact Q&As) */}
        <FAQ />

        {/* 12. Final CTA banner + lead magnet */}
        <FinalCTA />
      </div>

      {/* Sticky mobile CTA bar */}
      <StickyCTA />
    </>
  );
}
