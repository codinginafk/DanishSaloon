import { team, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";

export function TeamSection() {
  return (
    <section id="team" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Meet the team</p>
              <h2 className="heading-lg mt-2">15+ barbers. One obsession.</h2>
              <p className="mt-3 max-w-2xl text-ink-500 dark:text-white/65">
                Our team is the reason customers come back. Trained in modern fades,
                classic cuts, beard sculpting and men's color. Patient with kids.
                Friendly to walk-ins.
              </p>
            </div>
            <div className="flex -space-x-3">
              {team.slice(0, 5).map((m, i) => (
                <img
                  key={i}
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full border-2 border-ink-950 object-cover"
                />
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-950 bg-emerald-500 text-xs font-bold text-ink-950">
                +10
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <SectionReveal key={m.name} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-card dark:border-white/5 dark:bg-charcoal-800/40 dark:shadow-none">
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-paper-100 to-paper-50 dark:from-ink-900 dark:to-charcoal-900">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    {m.specialty}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">{m.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{m.bio}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
