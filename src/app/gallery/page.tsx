"use client";

import { useState, useMemo } from "react";
import { gallery, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import WhatsAppCta from "@/components/WhatsAppCta";

const categories = ["all", "haircut", "beard", "shop", "transformation"] as const;
type Cat = (typeof categories)[number];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <p className="eyebrow">Gallery</p>
            <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">
              Haircuts, beards & the shop.
            </h1>
            <p className="mt-4 max-w-2xl text-ink-500 dark:text-white/70">
              A collection of cuts and styles from all three Kopila branches.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  filter === c
                    ? "border-emerald-400 bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-500/15 dark:text-emerald-200"
                    : "border-ink-200 text-ink-500 hover:border-ink-400 hover:text-ink-700 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
            {items.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="group mb-3 w-full overflow-hidden rounded-xl ring-1 ring-ink-900/10 transition-shadow hover:shadow-md dark:ring-white/10 dark:hover:shadow-glow"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "200px" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">{img.category}</p>
                  <p className="text-xs text-white/90">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {items.length === 0 && (
            <p className="py-20 text-center text-sm text-ink-400 dark:text-white/50">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex max-h-[90vh] max-w-[90vw] items-center justify-center">
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[88vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            {items[lightbox].alt}
          </div>
        </div>
      )}

      <WhatsAppCta />
    </>
  );
}
