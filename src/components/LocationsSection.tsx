import Link from "next/link";
import { locations, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function LocationsSection() {
  return (
    <section id="locations" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="text-center">
            <p className="eyebrow">Locations</p>
            <h2 className="heading-lg mt-2">Three branches across Dubai.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/65">
              Same pricing, same barbers, same quality — wherever you are in Dubai.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {locations.map((l, i) => (
            <SectionReveal key={l.id} delay={i * 0.07}>
              <article className="card card-hover flex h-full flex-col">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{l.name}</h3>
                    <p className="text-sm text-white/55">{l.landmark}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">{l.description}</p>

                <div className="mt-5 space-y-2 text-sm text-white/75">
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-400" /> {l.hours}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-400" /> {siteConfig.whatsappDisplay}
                  </p>
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href={l.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 !py-2.5 text-sm"
                  >
                    <Navigation className="h-4 w-4" /> Get directions
                  </a>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="btn-outline !px-4 !py-2.5 text-sm"
                  >
                    View
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
