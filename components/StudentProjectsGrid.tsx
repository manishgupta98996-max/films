"use client";

import { useState } from "react";
import Image from "next/image";
import { studentDemos } from "@/lib/config";

export default function StudentProjectsGrid() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Helper to get embed url with YouTube ID
  const getEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1` : url;
  };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <section id="showcase" className="bg-[#FAF9F6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        {/* CHANGE 13 - Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Films made by people who took this course.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3">
            These aren&apos;t demos we made. These are channels run by students who followed the same pipeline you&apos;re about to learn.
          </p>
        </div>

        {/* 6 Real Student Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {studentDemos.map((project) => {
            const ytId = getYouTubeId(project.videoUrl);
            const thumbUrl = project.thumbnail || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "");

            return (
              <div
                key={project.id || project.videoUrl}
                className="rounded-3xl border border-neutral-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Video / Thumbnail Player Area */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {thumbUrl && (
                    <Image
                      src={thumbUrl}
                      alt={project.title || project.studentName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:via-transparent transition-colors" />

                  {/* Play Button Overlay (opens modal) */}
                  <button
                    type="button"
                    onClick={() => setActiveVideoId(project.videoUrl)}
                    className="absolute inset-0 flex items-center justify-center focus:outline-hidden"
                    aria-label={`Play film ${project.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FF5B00] hover:bg-[#E04E00] text-white flex items-center justify-center shadow-xl shadow-[#FF5B00]/40 transform group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>

                  {/* Top Duration / Category Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[#FF8533] border border-white/10">
                      {project.category || "AI Film"}
                    </span>
                    {project.duration && (
                      <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md font-mono text-[11px] text-neutral-200">
                        {project.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Channel & Author Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      {project.channelUrl ? (
                        <a
                          href={project.channelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D64700] hover:text-[#FF5B00] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-red-600" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          <span>{project.studentName}</span>
                          <span className="text-neutral-600 font-normal">({project.channelHandle})</span>
                        </a>
                      ) : (
                        <span className="text-xs font-bold text-[#D64700]">
                          {project.studentName} ({project.channelHandle})
                        </span>
                      )}
                    </div>

                    {/* Film Title */}
                    <h3 className="text-base sm:text-lg font-black text-neutral-950 leading-snug line-clamp-2 mb-2">
                      {project.title}
                    </h3>

                    {/* Film Description */}
                    {project.description && (
                      <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Tools & Links Footer */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    {/* Tool Badges */}
                    <div className="flex flex-wrap gap-1">
                      {project.tools?.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF9F6] border border-neutral-200 text-neutral-700 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Watch Action Button */}
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(project.videoUrl)}
                      className="text-xs font-extrabold text-[#D64700] hover:text-[#FF5B00] whitespace-nowrap flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch Film</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CHANGE 13 - Text below student channel grid */}
        <p className="text-center text-sm sm:text-base font-semibold text-neutral-700 max-w-2xl mx-auto pt-2">
          Every film you see here was made without a camera, without a crew, and without any prior filmmaking experience.
        </p>

        {/* Video Player Modal */}
        {activeVideoId && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideoId(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-4xl bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-neutral-800 text-white">
                <span className="text-sm font-bold">Featured Student Film</span>
                <button
                  type="button"
                  onClick={() => setActiveVideoId(null)}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors text-sm"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={getEmbedUrl(activeVideoId)}
                  title="Student Film Player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
