import Link from "next/link";
import { gallery } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "./SmartImage";

const FALLBACK = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80";

export function GallerySection() {
  return (
    <section id="gallery" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="heading-lg mt-2">A glimpse of our work.</h2>
              <p className="mt-3 max-w-2xl text-ink-600 dark:text-white/65">
                Real cuts, real beards, real customers. Replace these placeholders with
                your own before & after shots and transformations.
              </p>
            </div>
            <Link href="/gallery" className="btn-outline whitespace-nowrap">
              See full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {gallery.slice(0, 12).map((img, i) => (
            <SectionReveal key={i} delay={(i % 4) * 0.05}>
              <div className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-ink-900/10 bg-paper-100 shadow-card dark:border-white/10 dark:bg-charcoal-800/40 dark:shadow-none">
                <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    fallbackSrc={FALLBACK}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                      {img.category}
                    </p>
                    <p className="text-sm text-white">{img.alt}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
