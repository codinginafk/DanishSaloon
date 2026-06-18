"use client";

import { useEffect, useState, useCallback } from "react";

export default function TableOfContents({ content }: { content: { type: string; heading?: string }[] }) {
  const [activeId, setActiveId] = useState<string>("");

  const headings = content
    .filter((b) => b.type === "h2")
    .map((b) => ({
      id: b.heading!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      text: b.heading!
    }));

  const handleScroll = useCallback(() => {
    const offsets = headings.map((h) => {
      const el = document.getElementById(h.id);
      return el ? el.getBoundingClientRect().top : Infinity;
    });
    const idx = offsets.findLastIndex((o) => o < 120);
    if (idx >= 0) setActiveId(headings[idx].id);
  }, [headings]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (headings.length < 3) return null;

  return (
    <nav className="mb-10 rounded-2xl border border-ink-100 bg-ink-50/50 p-5 dark:border-white/10 dark:bg-charcoal-900/50">
      <p className="text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-white/55 mb-4">On this page</p>
      <ul className="space-y-2">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-2 text-sm transition-colors ${
                activeId === h.id
                  ? "font-semibold text-emerald-600 dark:text-emerald-400"
                  : "text-ink-500 hover:text-ink-700 dark:text-white/60 dark:hover:text-white"
              }`}
            >
              <span className={`h-1 w-1 rounded-full shrink-0 ${activeId === h.id ? "bg-emerald-500" : "bg-ink-300 dark:bg-white/30"}`} />
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
