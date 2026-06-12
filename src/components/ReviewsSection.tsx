import { reviews } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";
import { Star, Quote } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section bg-paper-50 dark:bg-gradient-to-b dark:from-ink-950 dark:via-charcoal-900/40 dark:to-ink-950">
      <div className="container-x">
        <SectionReveal>
          <div className="text-center">
            <p className="eyebrow">Reviews</p>
            <h2 className="heading-lg mt-2">What our customers say.</h2>
              <p className="mx-auto mt-3 max-w-2xl text-ink-500 dark:text-white/65">
                Here&apos;s what real Dubai guys say about us — no filters, no fake reviews.
                Just consistent cuts and honest pricing.
              </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink-900 dark:text-white">4.9 / 5</span>
              <span className="text-xs text-ink-400 dark:text-white/55">across 500+ reviews</span>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <SectionReveal key={i} delay={(i % 3) * 0.05}>
              <article className="card card-hover relative h-full">
                <Quote className="absolute right-5 top-5 h-7 w-7 text-emerald-500/20" />
                <div className="flex">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-white/85">"{r.text}"</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-900/10 pt-4 dark:border-white/5">
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">{r.name}</p>
                    <p className="text-xs text-ink-400 dark:text-white/50">{r.location}</p>
                  </div>
                  <span className="rounded-full bg-ink-900/5 px-2.5 py-1 text-xs text-ink-500 dark:bg-white/5 dark:text-white/60">
                    Verified
                  </span>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
