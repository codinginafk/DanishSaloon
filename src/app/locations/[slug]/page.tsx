import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { MapPin, Clock, Phone, Navigation, MessageCircle, Check } from "lucide-react";

type Params = { slug: string };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) return { title: "Location not found" };
  return {
    title: `${loc.name} — Barber in ${loc.area} | ${siteConfig.name}`,
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
            <nav className="text-sm text-white/50">
              <Link href="/" className="hover:text-emerald-300">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/locations" className="hover:text-emerald-300">Locations</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{loc.name}</span>
            </nav>
            <p className="eyebrow mt-6">{loc.area}</p>
            <h1 className="heading-lg mt-2">{loc.name}</h1>
            <p className="mt-3 text-white/65">{loc.landmark}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 text-sm">
                <Navigation className="h-4 w-4" /> Get directions
              </a>
              <a href={siteConfig.whatsappLink} className="btn-outline !py-2.5 text-sm">
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="overflow-hidden rounded-3xl border border-white/5 bg-charcoal-800/40">
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
              <div className="rounded-3xl border border-white/5 bg-charcoal-800/40 p-6 sm:p-8">
                <h2 className="heading-md">Branch details</h2>
                <p className="mt-4 text-white/75">{loc.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-400" /> {loc.address}</li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-400" /> {loc.hours}</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> {siteConfig.whatsappDisplay}</li>
                </ul>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white/85">Available services</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70">
                  {[
                    "Hair Cut", "Beard Trim", "Beard Styling", "Hair Wash",
                    "Hair Color", "Kids Hair Cut", "Facial", "Threading",
                    "Protein Treatment", "Keratin Treatment"
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> {s}
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
            <h2 className="heading-md">Other branches</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {locations.filter((l) => l.id !== loc.id).map((l) => (
                <Link key={l.id} href={`/locations/${l.slug}`} className="card card-hover">
                  <h3 className="text-lg font-semibold text-white">{l.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{l.area}</p>
                  <p className="mt-3 text-sm text-white/70">{l.hours}</p>
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
