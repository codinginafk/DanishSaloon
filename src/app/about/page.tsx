import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, team, whyChooseUs } from "@/lib/siteConfig";
import { SectionReveal, CountUp } from "@/components/Motion";
import WhatsAppCta from "@/components/WhatsAppCta";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Founded in ${siteConfig.founded}, ${siteConfig.name} has grown to 15+ barbers across three Dubai locations. Quality men's grooming at honest Dubai prices.`,
  alternates: { canonical: `${siteConfig.url}/about` }
};

const values = [
  {
    title: "Craft",
    description: "Every cut is a craft. We train, we practice, we deliver consistent quality.",
    path: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
  },
  {
    title: "Honesty",
    description: "No upsells. No hidden fees. AED 5 cuts, AED 250 keratin — priced honestly.",
    path: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  },
  {
    title: "Welcome",
    description: "Walk-ins welcome. Kids, regulars, hotel guests — everyone feels at home here.",
    path: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">About us</p>
                <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">
                  Built by barbers, for Dubai.
                </h1>
                <p className="mt-5 text-ink-600 dark:text-white/75">
                  Founded in {siteConfig.founded}, {siteConfig.name} started as a single
                  chair in Karama. Today we have 15+ barbers across three branches —
                  Media City, Karama and Ramee Royal Hotel — and we still answer WhatsApp
                  ourselves.
                </p>
                <p className="mt-3 text-ink-600 dark:text-white/75">
                  We don&apos;t try to be the AED 300 luxury salon. We try to be the AED 5+
                  trusted neighborhood barber with real expertise, hygienic shops, and
                  the kind of consistent cuts that keep you coming back.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Link href="/services" className="btn-primary !py-2.5 text-sm">View services</Link>
                  <Link href="/locations" className="btn-outline !py-2.5 text-sm">Find a branch</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-ink-900/10 dark:ring-white/10">
                  <Image src="/images/shop-1.jpg" alt="Barber shop interior" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-ink-900/10 dark:ring-white/10">
                  <Image src="/images/haircut-4.jpg" alt="Precision fade haircut" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <div className="card overflow-hidden p-6 sm:p-10">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { value: 15, suffix: "+", label: "Barbers" },
                  { value: 3, suffix: "", label: "Branches" },
                  { value: 10, suffix: "+", label: "Years in Dubai" },
                  { value: 500, suffix: "+", label: "5★ Reviews" }
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="stat-num text-ink-900 dark:text-white">
                      <CountUp end={s.value} suffix={s.suffix} />
                    </p>
                    <p className="stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="card card-hover p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.path} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-ink-900 dark:text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-white/70">{v.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <h2 className="heading-md text-ink-900 dark:text-white">Why choose us</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((w) => (
                <div key={w.title} className="card card-hover flex items-start gap-3 p-5">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900 dark:text-white">{w.title}</p>
                    <p className="mt-1 text-sm text-ink-500 dark:text-white/65">{w.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <h2 className="heading-md text-ink-900 dark:text-white">Meet the barbers</h2>
            <p className="mt-3 max-w-2xl text-ink-500 dark:text-white/65">
              A handful of the 15+ barbers who keep the chairs full.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {team.map((m) => (
                <div key={m.name} className="text-center">
                  <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-xl ring-1 ring-ink-900/10 dark:ring-white/10 bg-ink-100 dark:bg-charcoal-800">
                    <Image src={m.image} alt={m.name} fill sizes="(max-width: 640px) 33vw, 16vw" className="object-cover object-[50%_20%]" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink-900 dark:text-white">{m.name}</p>
                  <p className="text-xs text-ink-400 dark:text-white/55">{m.specialty}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
