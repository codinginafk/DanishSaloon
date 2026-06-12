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
            <nav className="text-sm text-ink-400 dark:text-white/50">
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-300">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-emerald-600 dark:hover:text-emerald-300">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900 dark:text-white">{service.name}</span>
            </nav>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
              <div className="flex gap-6">
                <div className="hidden aspect-square w-32 flex-none overflow-hidden rounded-2xl sm:block">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="eyebrow">{service.category.replace("_", " & ")}</p>
                  <h1 className="heading-lg mt-2">{service.name} in Dubai</h1>
                  <p className="mt-4 max-w-2xl text-ink-500 dark:text-white/70">{service.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 rounded-2xl border border-ink-900/10 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-card dark:border-white/10 dark:bg-charcoal-800/60 dark:shadow-none lg:items-end">
                <p className="text-sm text-ink-400 dark:text-white/55">Starting from</p>
                <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-300">{service.startingPrice}</p>
                <p className="flex items-center gap-1.5 text-xs text-ink-400 dark:text-white/55">
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
              <div className="rounded-3xl border border-ink-900/10 bg-white p-6 shadow-card sm:p-8 dark:border-white/5 dark:bg-charcoal-800/40 dark:shadow-none">
                <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-2xl">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                </div>
                <h2 className="heading-md">What&apos;s included</h2>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink-700 dark:text-white/85">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-ink-900/10 bg-paper-50 p-5 dark:border-white/5 dark:bg-ink-900/40">
                    <p className="text-xs uppercase tracking-wider text-ink-400 dark:text-white/55">Best for</p>
                    <p className="mt-1 text-sm text-ink-900 dark:text-white">{service.shortDescription}</p>
                  </div>
                  <div className="rounded-2xl border border-ink-900/10 bg-paper-50 p-5 dark:border-white/5 dark:bg-ink-900/40">
                    <p className="text-xs uppercase tracking-wider text-ink-400 dark:text-white/55">Walk-ins</p>
                    <p className="mt-1 text-sm text-ink-900 dark:text-white">Welcome at all three branches.</p>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-card sm:p-8 dark:border-emerald-500/20 dark:from-emerald-500/10 dark:to-transparent dark:shadow-none">
                <p className="eyebrow">Available at</p>
                <h3 className="mt-2 text-xl font-bold text-ink-900 dark:text-white">All 3 branches</h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-white/70">
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
                  <Link key={r.id} href={`/services/${r.slug}`} className="card card-hover group overflow-hidden">
                    <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] overflow-hidden">
                      <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{r.name}</h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-white/60">{r.shortDescription}</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
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
