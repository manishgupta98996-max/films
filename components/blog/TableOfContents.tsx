"use client";

import { useEffect, useState } from "react";
import type { TOCItem } from "@/lib/blog";

interface TableOfContentsProps {
  headings: TOCItem[];
  variant?: "mobile" | "desktop" | "all";
}

function cleanHeadingText(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export default function TableOfContents({
  headings,
  variant = "desktop",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible entries
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for sticky nav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  const showMobile = variant === "mobile" || variant === "all";
  const showDesktop = variant === "desktop" || variant === "all";

  return (
    <>
      {/* Mobile Collapsible TOC */}
      {showMobile && (
        <div className="lg:hidden mb-8 rounded-xl border border-zinc-800 bg-zinc-950 p-4 shadow-lg">
          <button
            type="button"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
            aria-expanded={isOpenMobile}
            aria-controls="mobile-toc-list"
            className="flex w-full items-center justify-between text-left text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents
              <span className="text-xs font-normal text-zinc-400">({headings.length} sections)</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
              {isOpenMobile ? "Hide" : "Show"}
            </span>
          </button>

          {isOpenMobile && (
            <nav id="mobile-toc-list" aria-label="Table of Contents (Mobile)" className="mt-3 pt-3 border-t border-zinc-800">
              <ul className="space-y-1.5 text-sm">
                {headings.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScrollTo(e, item.id)}
                        className={`block py-1.5 px-2 rounded transition-colors ${
                          isActive
                            ? "bg-amber-500/10 text-amber-400 font-bold"
                            : "text-zinc-200 hover:text-white hover:bg-zinc-900 font-medium"
                        }`}
                      >
                        {cleanHeadingText(item.text)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      )}

      {/* Desktop Sticky TOC Navigation */}
      {showDesktop && (
        <nav aria-label="Table of Contents" className="hidden lg:block">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-xl text-white">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800/80">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                On This Page
              </h2>
            </div>
            <ul className="space-y-1 text-sm max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {headings.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollTo(e, item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`group flex items-start gap-2.5 py-1.5 text-xs leading-relaxed rounded-md px-2.5 transition-colors ${
                        isActive
                          ? "bg-amber-500/15 text-amber-400 font-bold"
                          : "text-zinc-200 hover:text-white hover:bg-zinc-900 font-medium"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all ${
                          isActive
                            ? "bg-amber-400 ring-2 ring-amber-400/40 scale-125"
                            : "bg-zinc-600 group-hover:bg-zinc-400"
                        }`}
                      />
                      <span className="line-clamp-2">{cleanHeadingText(item.text)}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
