import type { Metadata } from "next";
import { siteConfig, locations } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import Link from "next/link";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: `Locations in Dubai | ${siteConfig.name}`,
  description:
    "Three branches across Dubai: Media City, Karama and Ramee Royal Hotel (Bur Dubai). Open daily 8AM to 12AM. Walk-ins welcome. WhatsApp booking available.",
  alternates: { canonical: `${siteConfig.url}/locations` }
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <p className="eyebrow">Locations</p>
            <h1 className="heading-lg mt-2">Three branches across Dubai.</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Same barbers, same pricing, same quality — wherever you are in Dubai.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x space-y-8">
          {locations.map((l, i) => (
            <SectionReveal key={l.id} delay={i * 0.05}>
              <article className="grid gap-6 overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/40 lg:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="eyebrow">{l.area}</p>
                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{l.name}</h2>
                    <p className="mt-2 text-sm text-white/60">{l.landmark}</p>
                    <p className="mt-5 text-white/75">{l.description}</p>
                    <div className="mt-6 space-y-2.5 text-sm text-white/80">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-emerald-400" /> {l.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-emerald-400" /> {l.hours}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-400" /> {siteConfig.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <a
                      href={l.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2.5 text-sm"
                    >
                      <Navigation className="h-4 w-4" /> Get directions
                    </a>
                    <a
                      href={siteConfig.whatsappLink}
                      className="btn-outline !py-2.5 text-sm"
                    >
                      Book this branch
                    </a>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="btn-ghost !py-2.5 text-sm"
                    >
                      Branch details
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[280px] bg-charcoal-900 lg:min-h-[420px]">
                  <iframe
                    src={l.embedLink}
                    title={`${l.name} map`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
