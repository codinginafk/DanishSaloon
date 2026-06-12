import type { Metadata } from "next";
import { siteConfig, featuredHaircuts } from "@/lib/siteConfig";
import { haircutIllustrations } from "@/components/illustrations/HaircutIllustrations";
import { SectionReveal } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Haircuts Gallery & Styles | ${siteConfig.name}`,
  description:
    "Browse men's haircuts available at Danish Hanif Hair Lounge: skin fade, taper fade, buzz cut, crew cut, textured crop and beard styling. Three Dubai branches.",
  alternates: { canonical: `${siteConfig.url}/haircuts` }
};

export default function HaircutsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <p className="eyebrow">Haircuts</p>
            <h1 className="heading-lg mt-2">The cuts we're known for.</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Modern fades, classic scissor cuts, trending textured crops —
              ask your barber, or message us on WhatsApp for a recommendation.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHaircuts.map((cut, i) => {
              const Illustration = haircutIllustrations[cut.illustration];
              return (
                <SectionReveal key={cut.id} delay={i * 0.05}>
                  <article
                    id={cut.slug}
                    className="group relative overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/40 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-glow"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink-900 via-charcoal-800 to-ink-950">
                      <div className="absolute inset-0 bg-grid-fade" />
                      <Illustration className="absolute inset-0 h-full w-full p-10 transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h2 className="text-2xl font-bold text-white">{cut.name}</h2>
                      <p className="mt-1 text-sm text-white/70">{cut.description}</p>
                      <a
                        href={siteConfig.whatsappLink}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-emerald-400"
                      >
                        Book this cut <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 sm:p-10">
              <h2 className="heading-md">Not sure which cut fits you?</h2>
              <p className="mt-3 max-w-2xl text-white/70">
                WhatsApp us a selfie and we'll recommend the right cut for your face
                shape, hair type and lifestyle — in under 10 minutes.
              </p>
              <a href={siteConfig.whatsappLink} className="btn-primary mt-6">
                Get a recommendation
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
