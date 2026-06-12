import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Check, Clock, ArrowRight } from "lucide-react";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} in Dubai | ${siteConfig.name}`,
    description: `${service.name} — ${service.shortDescription} Starting from ${service.startingPrice}. Available at all three Dubai branches.`,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` }
  };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <nav className="text-sm text-white/50">
              <Link href="/" className="hover:text-emerald-300">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-emerald-300">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service.name}</span>
            </nav>
            <div className="mt-6 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">{service.category}</p>
                <h1 className="heading-lg mt-2">{service.name} in Dubai</h1>
                <p className="mt-4 max-w-2xl text-white/70">{service.description}</p>
              </div>
              <div className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-charcoal-800/60 p-5 lg:items-end">
                <p className="text-sm text-white/55">Starting from</p>
                <p className="text-3xl font-extrabold text-emerald-300">{service.startingPrice}</p>
                <p className="flex items-center gap-1.5 text-xs text-white/55">
                  <Clock className="h-3.5 w-3.5" /> {service.duration}
                </p>
                <a
                  href={siteConfig.whatsappLink}
                  className="btn-primary mt-2 !py-2.5 text-sm"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="rounded-3xl border border-white/5 bg-charcoal-800/40 p-6 sm:p-8">
                <h2 className="heading-md">What's included</h2>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/85">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/5 bg-ink-900/40 p-5">
                    <p className="text-xs uppercase tracking-wider text-white/55">Best for</p>
                    <p className="mt-1 text-sm text-white">{service.shortDescription}</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-ink-900/40 p-5">
                    <p className="text-xs uppercase tracking-wider text-white/55">Walk-ins</p>
                    <p className="mt-1 text-sm text-white">Welcome at all three branches.</p>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:p-8">
                <p className="eyebrow">Available at</p>
                <h3 className="mt-2 text-xl font-bold text-white">All 3 branches</h3>
                <p className="mt-2 text-sm text-white/70">
                  Media City · Karama · Ramee Royal Hotel. Same pricing, same
                  barbers, every day.
                </p>
                <a
                  href={siteConfig.whatsappLink}
                  className="btn-primary mt-5 w-full !py-2.5 text-sm"
                >
                  Book this service
                </a>
                <Link
                  href="/locations"
                  className="btn-outline mt-3 w-full !py-2.5 text-sm"
                >
                  Find a branch
                </Link>
              </aside>
            </div>
          </SectionReveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section pt-0">
          <div className="container-x">
            <SectionReveal>
              <h2 className="heading-md">You might also like</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.id} href={`/services/${r.slug}`} className="card card-hover group">
                    <h3 className="text-lg font-semibold text-white">{r.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{r.shortDescription}</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                      From {r.startingPrice} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </Link>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      <WhatsAppCta />
    </>
  );
}
