import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, team, whyChooseUs } from "@/lib/siteConfig";
import { SectionReveal, CountUp } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Check, Sparkles, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    `Founded in ${siteConfig.founded}, ${siteConfig.name} has grown to 15+ barbers across three Dubai locations. Quality men's grooming at honest Dubai prices.`,
  alternates: { canonical: `${siteConfig.url}/about` }
};

const values = [
  {
    title: "Craft",
    description: "Every cut is a craft. We train, we practice, we deliver consistent quality.",
    icon: Award
  },
  {
    title: "Honesty",
    description: "No upsells. No hidden fees. AED 5 cuts, AED 300 keratin — priced honestly.",
    icon: Heart
  },
  {
    title: "Welcome",
    description: "Walk-ins welcome. Kids, regulars, hotel guests — everyone's at home here.",
    icon: Sparkles
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
                <h1 className="heading-lg mt-2">
                  Built by barbers, for Dubai.
                </h1>
                <p className="mt-5 text-white/75">
                  Founded in {siteConfig.founded}, {siteConfig.name} started as a single
                  chair in Karama. Today we have 15+ barbers across three branches —
                  Media City, Karama and Ramee Royal Hotel — and we still answer WhatsApp
                  ourselves.
                </p>
                <p className="mt-3 text-white/75">
                  We don't try to be the AED 300 luxury salon. We try to be the AED 5+
                  trusted neighborhood barber with real expertise, hygienic shops, and
                  the kind of consistent cuts that keep you coming back.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Link href="/services" className="btn-primary !py-2.5 text-sm">View services</Link>
                  <Link href="/locations" className="btn-outline !py-2.5 text-sm">Find a branch</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
                  alt="Barber shop interior"
                  className="aspect-[3/4] w-full rounded-3xl object-cover"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80"
                  alt="Skin fade haircut"
                  className="mt-12 aspect-[3/4] w-full rounded-3xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <div className="rounded-3xl border border-white/5 bg-charcoal-800/40 p-6 sm:p-10">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { value: 15, suffix: "+", label: "Barbers" },
                  { value: 3, suffix: "", label: "Branches" },
                  { value: 10, suffix: "+", label: "Years in Dubai" },
                  { value: 500, suffix: "+", label: "5★ Reviews" }
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-extrabold text-white sm:text-4xl">
                      <CountUp end={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{s.label}</p>
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
              {values.map((v, i) => (
                <div key={v.title} className="card card-hover h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{v.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionReveal>
            <h2 className="heading-md">Why choose us</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((w) => (
                <div key={w.title} className="card card-hover flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{w.title}</p>
                    <p className="mt-1 text-sm text-white/65">{w.description}</p>
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
            <h2 className="heading-md">Meet the barbers</h2>
            <p className="mt-3 max-w-2xl text-white/65">
              A handful of the 15+ barbers who keep the chairs full.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {team.map((m) => (
                <div key={m.name} className="text-center">
                  <div className="mx-auto aspect-square w-full overflow-hidden rounded-2xl border border-white/5">
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">{m.name}</p>
                  <p className="text-xs text-white/55">{m.specialty}</p>
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
