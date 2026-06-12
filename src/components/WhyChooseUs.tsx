import { whyChooseUs, siteConfig } from "@/lib/siteConfig";
import { SectionReveal, CountUp } from "./Motion";
import { Users, Wallet, MapPin, Clock, Sparkles, Zap } from "lucide-react";

const icons = [Users, Wallet, MapPin, Clock, Sparkles, Zap];

export function WhyChooseUs() {
  return (
    <section id="why" className="section relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-fade opacity-50"
        aria-hidden
      />
      <div className="container-x relative">
        <SectionReveal>
          <div className="text-center">
            <p className="eyebrow">Why choose us</p>
            <h2 className="heading-lg mt-2">Quality grooming. Honest prices.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/65">
              We're not the AED 300 luxury salon. We're the AED 5+ trusted neighborhood
              barber — except with 15+ experts, three locations, and a real focus on men's grooming.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <SectionReveal key={item.title} delay={i * 0.05}>
                <div className="card card-hover h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-white/65">{item.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal>
          <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-white/5 bg-charcoal-900/60 p-8 sm:grid-cols-4 sm:p-10">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp end={15} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Expert Barbers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp end={3} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Dubai Branches</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp end={10} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Grooming Services</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp end={10} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Years in Dubai</p>
            </div>
          </div>
        </SectionReveal>

        <p className="mt-8 text-center text-xs text-white/40">
          Trusted across {siteConfig.tagline.toLowerCase()}.
        </p>
      </div>
    </section>
  );
}
