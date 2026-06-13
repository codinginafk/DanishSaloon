"use client";

import { useState } from "react";
import { siteConfig, locations } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import WhatsAppCta from "@/components/WhatsAppCta";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", branch: locations[0].name, message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi! I'd like to book at ${form.branch}.\nName: ${form.name}\nPhone: ${form.phone}\nNote: ${form.message || "—"}`;
    window.open(`${siteConfig.whatsappLink}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <SectionReveal>
            <p className="eyebrow">Contact</p>
            <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">Get in touch.</h1>
            <p className="mt-4 max-w-2xl text-ink-500 dark:text-white/70">
              The fastest way to reach us is WhatsApp — we usually reply in under 10
              minutes during opening hours. Walk-ins are also welcome at all three branches.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <SectionReveal>
              <form
                onSubmit={handleSubmit}
                className="card p-6 sm:p-8"
              >
                <h2 className="heading-md text-ink-900 dark:text-white">Book via WhatsApp</h2>
                <p className="mt-2 text-sm text-ink-500 dark:text-white/60">
                  Fill this in and we&apos;ll open WhatsApp with your message pre-filled.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-white/55">
                      Your name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-white/55">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                      placeholder="+971 5x xxx xxxx"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-white/55">
                    Branch
                  </label>
                  <select
                    value={form.branch}
                    onChange={(e) => setForm({ ...form, branch: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                  >
                    {locations.map((l) => (
                      <option key={l.id} value={l.name} className="bg-white dark:bg-ink-900">
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-white/55">
                    What would you like?
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                    placeholder="Haircut + beard trim, Friday afternoon if possible…"
                  />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>
                  Send via WhatsApp
                </button>
                {sent && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-300">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    WhatsApp opened — finish sending there.
                  </p>
                )}
              </form>
            </SectionReveal>

            <SectionReveal>
              <div className="space-y-4">
                <div className="card card-hover p-6">
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-white">Direct contact</h3>
                  <ul className="mt-4 space-y-3 text-sm text-ink-600 dark:text-white/80">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      {siteConfig.whatsappDisplay}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {siteConfig.email}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {siteConfig.hours}
                    </li>
                  </ul>
                </div>

                <div className="card card-hover p-6">
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-white">Branches</h3>
                  <ul className="mt-4 space-y-3 text-sm text-ink-600 dark:text-white/80">
                    {locations.map((l) => (
                      <li key={l.id} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <a href={l.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-300">
                          {l.name} — {l.area}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
