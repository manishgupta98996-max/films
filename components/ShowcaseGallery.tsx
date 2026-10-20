"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { COURSE_PRICE, type StudentDemo } from "@/lib/config";

interface ShowcaseGalleryProps {
  demos: readonly StudentDemo[];
}

type FilterCategory = "All" | "Sci-Fi & Space" | "Fantasy & Adventure" | "Survival & Action";

// Genre & Mastery data enhancement for the showcase page
const PROJECT_METADATA: Record<
  string,
  {
    genre: "Sci-Fi & Space" | "Fantasy & Adventure" | "Survival & Action";
    masteryBadge: string;
    logline: string;
  }
> = {
  "demo-reelixbox": {
    genre: "Fantasy & Adventure",
    masteryBadge: "Multi-Angle Character Consistency",
    logline: "High-fantasy AI short with consistent dragon sequences, palace environments, and custom orchestral scoring.",
  },
  "demo-stellarcinema": {
    genre: "Sci-Fi & Space",
    masteryBadge: "42-Min Sci-Fi Narrative Worldbuilding",
    logline: "Full-length 4K cinematic sci-fi feature film depicting humanity's journey to Kepler-452b with deep-space VFX.",
  },
  "demo-sonyhidayat": {
    genre: "Fantasy & Adventure",
    masteryBadge: "Stylized Combat & Lighting Match",
    logline: "Epic fantasy adventure adapting game lore with consistent character classes, stylized combat, and Asian fantasy settings.",
  },
  "demo-karmafilms": {
    genre: "Survival & Action",
    masteryBadge: "Foley Audio & Ocean Simulation",
    logline: "Gripping wilderness survival film emphasizing facial micro-expressions, storm simulations, and spatial Foley audio.",
  },
  "demo-crepelstudio": {
    genre: "Sci-Fi & Space",
    masteryBadge: "2.39:1 Anamorphic Color Grading",
    logline: "High-tension dystopian journey through toxic wastelands with realistic vehicle physics and sandstorm visuals.",
  },
  "demo-whencrownsbleed": {
    genre: "Fantasy & Adventure",
    masteryBadge: "Grimdark Mood & Voice Sync",
    logline: "Dark fantasy medieval grimdark thriller with candlelit royal chambers, assassin stealth, and chilling voice acting.",
  },
};

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function ShowcaseGallery({ demos }: ShowcaseGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [activeModalVideo, setActiveModalVideo] = useState<{
    url: string;
    title: string;
    creator: string;
  } | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalVideo(null);
      }
    };

    if (activeModalVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalVideo]);

  // Featured Premiere (Stellar Cinema's 42-minute Kepler film)
  const featuredProject = demos.find((d) => d.id === "demo-stellarcinema") || demos[0];
  const featuredYtId = featuredProject ? getYouTubeId(featuredProject.videoUrl) : null;
  const featuredThumb =
    featuredProject?.thumbnail ||
    (featuredYtId ? `https://img.youtube.com/vi/${featuredYtId}/maxresdefault.jpg` : "/landing/hero-phone-1.jpg");

  // Filtered projects
  const filteredProjects = demos.filter((demo) => {
    if (activeFilter === "All") return true;
    const meta = PROJECT_METADATA[demo.id || ""];
    return meta ? meta.genre === activeFilter : true;
  });

  return (
    <div className="bg-[#FAF9F6] text-neutral-900 min-h-screen selection:bg-[#FF5B00] selection:text-white relative overflow-hidden">
      {/* Top subtle warm atmospheric glow matching homepage */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-[#FFF5EC] via-[#FAF9F6]/40 to-transparent opacity-80"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* ================================================================= */}
        {/* 1. HERO HEADER: The Marquee (Matches Homepage Clean Style)        */}
        {/* ================================================================= */}
        <header className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FF5B00]/30 shadow-xs mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#D64700] tracking-wide">
              Creator Gallery &amp; Official Student Films
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight mb-5 leading-[1.12] [text-wrap:balance]">
            Student Showcase &amp; Films
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            Original movies, episode pilots, and scene tests produced by creators using the AI Filmmaking Pro pipeline.
          </p>
        </header>

        {/* ================================================================= */}
        {/* 2. FEATURED PREMIERE SPOTLIGHT: Flagship Student Film             */}
        {/* ================================================================= */}
        {featuredProject && (
          <section className="mb-16">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-xl shadow-neutral-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                {/* Visual / Video Trigger Area */}
                <div className="lg:col-span-7 relative aspect-video bg-black overflow-hidden group">
                  <Image
                    src={featuredThumb}
                    alt={featuredProject.title || "Featured AI Film"}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:via-transparent transition-colors" />

                  {/* Play Button Trigger */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveModalVideo({
                        url: featuredProject.videoUrl,
                        title: featuredProject.title || "Featured Film",
                        creator: featuredProject.studentName,
                      })
                    }
                    className="absolute inset-0 flex items-center justify-center focus:outline-hidden cursor-pointer"
                    aria-label={`Watch featured film: ${featuredProject.title}`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF5B00] hover:bg-[#E04E00] text-white flex items-center justify-center shadow-2xl shadow-[#FF5B00]/50 transform group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                      ★ Featured Premiere
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md font-mono text-xs text-neutral-200">
                      {featuredProject.duration || "42:15"}
                    </span>
                  </div>
                </div>

                {/* Film Description & Creator Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FFF0E6] text-[#D64700] border border-[#FF5B00]/30 text-xs font-bold">
                        Sci-Fi Feature Movie
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">• Full 4K Cut</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 leading-tight mb-3">
                      {featuredProject.title}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-5">
                      {featuredProject.description}
                    </p>

                    {/* Director / Creator Profile */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFF0E6] border border-[#FF5B00]/25 text-[#FF5B00] flex items-center justify-center font-black text-sm">
                          SC
                        </div>
                        <div>
                          <p className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                            <span>{featuredProject.studentName}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-neutral-100 text-neutral-600 font-medium">
                              Creator
                            </span>
                          </p>
                          <p className="text-xs text-neutral-500">{featuredProject.channelHandle}</p>
                        </div>
                      </div>

                      {featuredProject.channelUrl && (
                        <a
                          href={featuredProject.channelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D64700] hover:text-[#FF5B00] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-red-600" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span>Visit Channel ↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Actions & Tools */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {featuredProject.tools?.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-neutral-200 text-neutral-700 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalVideo({
                          url: featuredProject.videoUrl,
                          title: featuredProject.title || "Featured Film",
                          creator: featuredProject.studentName,
                        })
                      }
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FF5B00] hover:bg-[#E04E00] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF5B00]/25 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>Watch Full Feature (42m)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 3. INTERACTIVE CATEGORY FILTER BAR                               */}
        {/* ================================================================= */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-950">Film Catalog</h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Showing {filteredProjects.length} of {demos.length} verified student films
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Genre filters">
              {(["All", "Sci-Fi & Space", "Fantasy & Adventure", "Survival & Action"] as FilterCategory[]).map(
                (filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeFilter === filter
                        ? "bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/25"
                        : "bg-white text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 border border-neutral-200/90 shadow-2xs"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. THE 6 CINEMATIC STUDENT FILM CARDS GRID (Matches Homepage)      */}
        {/* ================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => {
            const ytId = getYouTubeId(project.videoUrl);
            const thumbUrl =
              project.thumbnail ||
              (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "/landing/hero-phone-1.jpg");
            const meta = PROJECT_METADATA[project.id || ""] || {
              genre: "Fantasy & Adventure",
              masteryBadge: "Full AI Pipeline",
              logline: project.description || "Original film produced with AI Filmmaking Pro pipeline.",
            };

            return (
              <div
                key={project.id || project.videoUrl}
                className="rounded-3xl border border-neutral-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Poster / Play Trigger */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <Image
                    src={thumbUrl}
                    alt={project.title || project.studentName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:via-transparent transition-colors" />

                  {/* Play Button Overlay (opens modal) */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveModalVideo({
                        url: project.videoUrl,
                        title: project.title || "Student Film",
                        creator: project.studentName,
                      })
                    }
                    className="absolute inset-0 flex items-center justify-center focus:outline-hidden cursor-pointer"
                    aria-label={`Play film ${project.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FF5B00] hover:bg-[#E04E00] text-white flex items-center justify-center shadow-xl shadow-[#FF5B00]/40 transform group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>

                  {/* Top Genre & Duration Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[#FF8533] border border-white/10">
                      {meta.genre}
                    </span>
                    {project.duration && (
                      <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md font-mono text-[11px] text-neutral-200">
                        {project.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Creator Channel Link */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      {project.channelUrl ? (
                        <a
                          href={project.channelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D64700] hover:text-[#FF5B00] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-red-600" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span>{project.studentName}</span>
                          <span className="text-neutral-500 font-normal">({project.channelHandle})</span>
                        </a>
                      ) : (
                        <span className="text-xs font-bold text-[#D64700]">
                          {project.studentName} ({project.channelHandle})
                        </span>
                      )}
                    </div>

                    {/* Film Title */}
                    <h3 className="text-base sm:text-lg font-black text-neutral-950 leading-snug line-clamp-2 mb-2">
                      {project.title || `Capstone Project by ${project.studentName}`}
                    </h3>

                    {/* Synopsis */}
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Pipeline Mastery Badge */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FFF0E6] border border-[#FF5B00]/25 text-[11px] font-semibold text-[#D64700]">
                      <span>✓</span>
                      <span>{meta.masteryBadge}</span>
                    </div>
                  </div>

                  {/* Footer Tools & Watch CTA */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tools?.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF9F6] border border-neutral-200 text-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalVideo({
                          url: project.videoUrl,
                          title: project.title || "Student Film",
                          creator: project.studentName,
                        })
                      }
                      className="text-xs font-extrabold text-[#D64700] hover:text-[#FF5B00] whitespace-nowrap flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ================================================================= */}
        {/* 5. PRODUCTION PROOF: Why These Films Succeeded                     */}
        {/* ================================================================= */}
        <section className="mb-20 rounded-3xl border border-neutral-200/90 bg-white p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D64700] block mb-1">
              The Production Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
              How They Built Real Films Instead of 4-Second Clips
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 flex items-center justify-center font-black text-sm mb-4">
                01
              </div>
              <h4 className="text-lg font-bold text-neutral-950 mb-2">Three-Act Script Blueprints</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Students structure beat sheets, dialogue, and camera angles with Claude before spending any generation credits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 flex items-center justify-center font-black text-sm mb-4">
                02
              </div>
              <h4 className="text-lg font-bold text-neutral-950 mb-2">Locked Character Consistency</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Fixed seeds, reference angle plates, and prompt weighting lock actors across 50+ scenes with zero face drifting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] text-[#FF5B00] border border-[#FF5B00]/20 flex items-center justify-center font-black text-sm mb-4">
                03
              </div>
              <h4 className="text-lg font-bold text-neutral-950 mb-2">Full Foley &amp; Score Mastering</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                ElevenLabs voice pacing, Suno orchestral themes, and DaVinci Resolve color grading create authentic theater texture.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. HIGH-CONVERTING COURSE CALL TO ACTION                           */}
        {/* ================================================================= */}
        <section className="rounded-3xl border border-neutral-200/90 bg-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-xl shadow-neutral-200/40 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[#FFF5EC] to-transparent rounded-full"
            aria-hidden="true"
          />

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-4 tracking-tight relative z-10 [text-wrap:balance]">
            Want to See Your Film Featured Here?
          </h2>

          <p className="text-sm sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-8 relative z-10 leading-relaxed">
            Enroll in AI Filmmaking Pro, master the 8-module production pipeline, and finish a full 1-hour movie ready for YouTube release and showcase inclusion.
          </p>

          <div className="max-w-md mx-auto space-y-4 relative z-10">
            <CheckoutButton
              label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
              className="w-full py-4 text-base sm:text-lg font-black bg-[#FF5B00] hover:bg-[#E04E00] text-white rounded-xl shadow-xl shadow-[#FF5B00]/25 transition-all hover:scale-[1.02]"
            />

            <div className="flex items-center justify-center gap-4 pt-1">
              <Link
                href="/#curriculum"
                className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-950 underline font-semibold transition-colors"
              >
                Explore Course Syllabus →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 font-medium pt-2">
              One-time payment of ${COURSE_PRICE} · Instant lifetime access · 14-day refund guarantee
            </p>
          </div>
        </section>
      </div>

      {/* =================================================================== */}
      {/* 7. CINEMATIC LIGHTBOX VIDEO MODAL PLAYER                            */}
      {/* =================================================================== */}
      {activeModalVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalVideo.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity"
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl bg-[#0A0E1A] border border-neutral-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="px-5 py-3.5 bg-[#070A12] border-b border-neutral-800 flex items-center justify-between gap-4">
              <div className="truncate">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {activeModalVideo.title}
                </h4>
                <p className="text-xs text-[#FF8533] font-medium">
                  Produced by {activeModalVideo.creator}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalVideo(null)}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>

            {/* 16:9 Video Player */}
            <div className="relative aspect-video bg-black">
              {getYouTubeId(activeModalVideo.url) ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(activeModalVideo.url)}?autoplay=1&rel=0`}
                  title={activeModalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-neutral-400">
                  Video URL not available
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
