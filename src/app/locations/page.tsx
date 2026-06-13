import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, locations } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import WhatsAppCta from "@/components/WhatsAppCta";

export const metadata: Metadata = {
  title: `Locations in Dubai | ${siteConfig.name}`,
  description: `Three branches across Dubai: Media City, Karama and Ramee Royal Hotel (Bur Dubai). Open daily 8AM to 12AM. Walk-ins welcome. WhatsApp booking available.`,
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
            <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">
              Three branches across Dubai.
            </h1>
            <p className="mt-4 max-w-2xl text-ink-500 dark:text-white/70">
              Same barbers, same pricing, same quality — wherever you are in Dubai.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x space-y-8">
          {locations.map((l, i) => (
            <SectionReveal key={l.id} delay={i * 0.05}>
              <article className="card grid overflow-hidden lg:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="eyebrow">{l.area}</p>
                    <h2 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">{l.name}</h2>
                    <p className="mt-2 text-sm text-ink-400 dark:text-white/50">{l.landmark}</p>
                    <p className="mt-5 text-ink-600 dark:text-white/75">{l.description}</p>
                    <div className="mt-6 space-y-2.5 text-sm text-ink-500 dark:text-white/80">
                      <p className="flex items-center gap-2">
                        <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {l.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {l.hours}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {siteConfig.whatsappDisplay}
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
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      Get directions
                    </a>
                    <a href={siteConfig.whatsappLink} className="btn-outline !py-2.5 text-sm">
                      Book this branch
                    </a>
                    <Link href={`/locations/${l.slug}`} className="btn-ghost !py-2.5 text-sm">
                      Branch details
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[280px] bg-ink-50 dark:bg-charcoal-900 lg:min-h-[420px]">
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
