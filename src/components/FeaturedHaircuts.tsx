import Link from "next/link";
import { featuredHaircuts } from "@/lib/siteConfig";
import { haircutIllustrations } from "@/components/illustrations/HaircutIllustrations";
import { SectionReveal } from "./Motion";
import { ArrowRight } from "lucide-react";

export function FeaturedHaircuts() {
  return (
    <section id="haircuts" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Featured Haircuts</p>
              <h2 className="heading-lg mt-2">Styles that travel well.</h2>
              <p className="mt-3 max-w-2xl text-white/65">
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
                  className="group relative block overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/60 p-6 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-glow"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 via-charcoal-800 to-ink-950">
                    <div className="absolute inset-0 bg-grid-fade" />
                    <Illustration className="absolute inset-0 h-full w-full p-6 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{cut.name}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{cut.description}</p>
                </Link>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
