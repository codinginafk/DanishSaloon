"use client";

import { useState, useMemo } from "react";
import { gallery } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { X } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

const categories = ["all", "haircut", "beard", "shop", "team", "transformation"] as const;
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
            <h1 className="heading-lg mt-2">Haircuts, beards & the shop.</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              A growing collection of our work. Replace these placeholders with your
              own before & after shots and customer transformations.
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
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  filter === c
                    ? "border-emerald-400 bg-emerald-500/15 text-emerald-200"
                    : "border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {items.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/5 bg-charcoal-800/40 text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      {img.category}
                    </p>
                    <p className="text-sm text-white">{img.alt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain"
          />
        </div>
      )}

      <WhatsAppCta />
    </>
  );
}
