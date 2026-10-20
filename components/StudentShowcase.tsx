"use client";

import { useState } from "react";
import { studentDemos } from "@/lib/config";

export default function StudentShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

  // Filter approved entries only (permission: true)
  const approvedDemos = studentDemos.filter(
    (demo) => demo.permission === true && Boolean(demo.videoUrl)
  );

  // Render nothing in production if no approved entries
  if (approvedDemos.length === 0 && !showPlaceholders) {
    return null;
  }

  // Helper to extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <section className="bg-dark-bg text-dark-text py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-dark-surface/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent mb-2">
            Student Demos
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white [text-wrap:balance]">
            Original Films Built by Students
          </h2>
          <p className="text-[17px] text-dark-muted max-w-xl mx-auto mt-2">
            Click any demo to watch real scenes, character consistency, and storytelling generated with this pipeline.
          </p>
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedDemos.map((demo) => {
            const ytId = getYouTubeId(demo.videoUrl);
            const thumbUrl =
              demo.thumbnail ||
              (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "");

            return (
              <div
                key={demo.videoUrl}
                className="rounded-2xl border border-dark-surface bg-dark-surface/60 overflow-hidden hover:border-accent/40 transition-all flex flex-col group"
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(demo.videoUrl)}
                  className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`Play demo by ${demo.studentName}`}
                >
                  {thumbUrl && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${thumbUrl})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-dark-bg/20 transition-colors" />
                  <div className="relative z-10 w-12 h-12 rounded-full bg-accent/90 text-dark-bg flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {demo.title || `Film by ${demo.studentName}`}
                    </h3>
                    <p className="text-xs text-accent font-medium">
                      {demo.studentName} ({demo.channelHandle})
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Player */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-dark-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close video"
              >
                ✕
              </button>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`}
                title="Student Film Demo"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
