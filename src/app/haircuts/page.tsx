import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, featuredHaircuts } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import WhatsAppCta from "@/components/WhatsAppCta";

export const metadata: Metadata = {
  title: `Haircuts Gallery & Styles | ${siteConfig.name}`,
  description: `Browse men's haircuts at ${siteConfig.shortName}: skin fade, taper fade, buzz cut, crew cut, textured crop and beard styling. Three Dubai branches.`,
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
            <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">The cuts we&apos;re known for.</h1>
            <p className="mt-4 max-w-2xl text-ink-500 dark:text-white/70">
              Modern fades, classic scissor cuts, trending textured crops — ask your
              barber, or message us on WhatsApp for a recommendation.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHaircuts.map((cut, i) => (
              <SectionReveal key={cut.id} delay={i * 0.05}>
                <article className="card card-hover group overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={cut.image}
                      alt={cut.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
                  </div>
                  <div className="relative -mt-14 p-5">
                    <h2 className="text-xl font-bold text-white">{cut.name}</h2>
                    <p className="mt-1 text-sm text-white/70">{cut.description}</p>
                    <a
                      href={siteConfig.whatsappLink}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-emerald-400"
                    >
                      Book this cut
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <div className="card bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-10 dark:from-emerald-500/10 dark:to-transparent">
              <h2 className="heading-md text-ink-900 dark:text-white">Not sure which cut fits you?</h2>
              <p className="mt-3 max-w-2xl text-ink-500 dark:text-white/70">
                WhatsApp us a selfie and we&apos;ll recommend the right cut for your face
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
