import Link from "next/link";
import { featuredHaircuts } from "@/lib/siteConfig";
import { haircutIllustrations } from "@/components/illustrations/HaircutIllustrations";
import { SectionReveal } from "./Motion";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "./SmartImage";

export function FeaturedHaircuts() {
  return (
    <section id="haircuts" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Featured Haircuts</p>
              <h2 className="heading-lg mt-2">Styles that travel well.</h2>
              <p className="mt-3 max-w-2xl text-ink-600 dark:text-white/65">
                The cuts our barbers are best known for — classic, modern, and trending.
                Tell us your face shape; we'll tell you which works.
              </p>
            </div>
            <Link href="/haircuts" className="btn-outline whitespace-nowrap">
              Browse all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredHaircuts.map((cut, i) => {
            const Illustration = haircutIllustrations[cut.illustration];
            return (
              <SectionReveal key={cut.id} delay={i * 0.05}>
                <Link
                  href={`/haircuts#${cut.slug}`}
                  className="group relative block overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-soft dark:border-white/10 dark:bg-charcoal-800/40 dark:shadow-none dark:hover:shadow-glow"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-paper-100 via-paper-50 to-paper dark:from-ink-900 dark:via-charcoal-800 dark:to-ink-950">
                    <div className="absolute inset-0 bg-grid-fade opacity-40 dark:opacity-50" />
                    <SmartImage
                      src={cut.image}
                      alt={cut.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        {cut.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ink-900 dark:text-white">{cut.name}</h3>
                    <p className="mt-1.5 text-sm text-ink-500 dark:text-white/60">{cut.description}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      Book on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
