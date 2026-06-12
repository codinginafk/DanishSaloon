import type { Metadata } from "next";
import { siteConfig, services } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import { ServicesSection } from "@/components/ServicesSection";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: `Services & Pricing | ${siteConfig.name}`,
  description:
    "Haircuts from AED 5, beard styling, hair color, facials, keratin & protein treatments. Professional men's grooming at honest Dubai prices. View full menu.",
  alternates: { canonical: `${siteConfig.url}/services` }
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="absolute inset-0 -z-10 bg-grid-fade opacity-60"
          aria-hidden
        />
        <div className="container-x">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="eyebrow">Services</p>
              <h1 className="heading-lg mt-2">Full menu of men's grooming services.</h1>
              <p className="mt-4 text-white/70">
                Every service is performed by trained, experienced barbers using
                clean, professional tools. Honest pricing, no hidden fees. Walk-ins
                welcome at all three branches.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ServicesSection />

      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <div className="overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/40 p-6 sm:p-10">
              <h2 className="heading-md">What every service includes</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Consultation before the cut",
                  "Sanitized tools & fresh towel",
                  "Hot towel finish (where applicable)",
                  "Clean neck shave & ear trim",
                  "Style guidance for at home",
                  "Walk-in friendly — no appointment needed"
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <h2 className="heading-md text-center">Quick links</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="chip hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
