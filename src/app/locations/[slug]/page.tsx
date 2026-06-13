import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import WhatsAppCta from "@/components/WhatsAppCta";

type Params = { slug: string };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) return { title: "Location not found" };
  return {
    title: `${loc.name} — Barber in ${loc.area} | ${siteConfig.shortName}`,
    description: `${loc.name} — ${loc.description} Open daily 8AM–12AM. Walk-ins welcome.`,
    alternates: { canonical: `${siteConfig.url}/locations/${loc.slug}` }
  };
}

export default function LocationDetailPage({ params }: { params: Params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  return (
    <>
      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-12">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <nav className="text-sm text-ink-400 dark:text-white/50">
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-300">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/locations" className="hover:text-emerald-600 dark:hover:text-emerald-300">Locations</Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900 dark:text-white">{loc.name}</span>
            </nav>
            <p className="eyebrow mt-6">{loc.area}</p>
            <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">{loc.name}</h1>
            <p className="mt-3 text-ink-400 dark:text-white/65">{loc.landmark}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 text-sm">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                Get directions
              </a>
              <a href={siteConfig.whatsappLink} className="btn-outline !py-2.5 text-sm">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="card overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={loc.embedLink}
                    title={`${loc.name} map`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="card p-6 sm:p-8">
                <h2 className="heading-md text-ink-900 dark:text-white">Branch details</h2>
                <p className="mt-4 text-ink-600 dark:text-white/75">{loc.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink-500 dark:text-white/80">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {loc.address}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {loc.hours}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {siteConfig.whatsappDisplay}
                  </li>
                </ul>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-white/85">Available services</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink-600 dark:text-white/70">
                  {[
                    "Hair Cut", "Beard Trim", "Beard Styling", "Hair Wash",
                    "Hair Color", "Kids Hair Cut", "Facial", "Threading",
                    "Protein Treatment", "Keratin Treatment"
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <h2 className="heading-md text-ink-900 dark:text-white">Other branches</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {locations.filter((l) => l.id !== loc.id).map((l) => (
                <Link key={l.id} href={`/locations/${l.slug}`} className="card card-hover p-5">
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{l.name}</h3>
                  <p className="mt-1 text-sm text-ink-400 dark:text-white/60">{l.area}</p>
                  <p className="mt-3 text-sm text-ink-500 dark:text-white/70">{l.hours}</p>
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
