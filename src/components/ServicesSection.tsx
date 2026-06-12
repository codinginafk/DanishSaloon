import Link from "next/link";
import { services } from "@/lib/siteConfig";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "./Motion";

const categoryMeta: Record<string, { title: string; subtitle: string; tone: string }> = {
  hair: { title: "Hair Services", subtitle: "Cuts, color, wash & care", tone: "from-emerald-500/10" },
  beard: { title: "Beard Services", subtitle: "Trim, sculpt, style", tone: "from-emerald-500/10" },
  face: { title: "Face & Grooming", subtitle: "Facial & threading", tone: "from-emerald-500/10" },
  treatment: { title: "Treatments", subtitle: "Protein & keratin", tone: "from-emerald-500/10" }
};

const categoryOrder: Array<"hair" | "beard" | "face" | "treatment"> = [
  "hair",
  "beard",
  "face",
  "treatment"
];

const categoryServices: Record<string, typeof services> = {
  hair: services.filter((s) => s.category === "hair"),
  beard: services.filter((s) => s.category === "beard"),
  face: services.filter((s) => s.category === "face"),
  treatment: services.filter((s) => s.category === "treatment")
};

export function ServicesSection() {
  return (
    <section id="services" className="section relative">
      <div className="container-x">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="heading-lg mt-2">Everything your hair needs.</h2>
              <p className="mt-3 max-w-2xl text-ink-600 dark:text-white/65">
                From a quick AED 5 cut to full keratin treatments — every service
                is delivered by trained, experienced barbers using clean, professional tools.
              </p>
            </div>
            <Link href="/services" className="btn-outline whitespace-nowrap">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-12 space-y-12">
          {categoryOrder.map((cat) => {
            const items = categoryServices[cat];
            if (!items?.length) return null;
            const meta = categoryMeta[cat];
            return (
              <SectionReveal key={cat}>
                <div className={`rounded-3xl border border-ink-900/10 bg-gradient-to-br ${meta.tone} to-transparent p-6 shadow-card sm:p-8 dark:border-white/10 dark:shadow-none`}>
                  <div className="mb-6 flex items-end justify-between">
                    <div>
                      <h3 className="heading-md">{meta.title}</h3>
                      <p className="text-sm text-ink-500 dark:text-white/55">{meta.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="card card-hover group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-lg font-semibold text-ink-900 dark:text-white">{s.name}</h4>
                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                            {s.startingPrice}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-ink-500 dark:text-white/60">{s.shortDescription}</p>
                        <p className="mt-4 text-xs text-ink-400 dark:text-white/45">{s.duration}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
