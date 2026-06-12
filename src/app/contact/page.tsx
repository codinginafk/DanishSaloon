"use client";

import { useState } from "react";
import { siteConfig, locations } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/Motion";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { MapPin, Phone, Mail, MessageCircle, Clock, Check } from "lucide-react";

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
            <h1 className="heading-lg mt-2">Get in touch.</h1>
            <p className="mt-4 max-w-2xl text-white/70">
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
                className="rounded-3xl border border-white/5 bg-charcoal-800/40 p-6 sm:p-8"
              >
                <h2 className="heading-md">Book via WhatsApp</h2>
                <p className="mt-2 text-sm text-white/60">
                  Fill this in and we'll open WhatsApp with your message pre-filled.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/55">
                      Your name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-white/55">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                      placeholder="+971 5x xxx xxxx"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/55">
                    Branch
                  </label>
                  <select
                    value={form.branch}
                    onChange={(e) => setForm({ ...form, branch: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                  >
                    {locations.map((l) => (
                      <option key={l.id} value={l.name} className="bg-ink-900">
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/55">
                    What would you like?
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                    placeholder="Haircut + beard trim, Friday afternoon if possible…"
                  />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                </button>
                {sent && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
                    <Check className="h-4 w-4" /> WhatsApp opened — finish sending there.
                  </p>
                )}
              </form>
            </SectionReveal>

            <SectionReveal>
              <div className="space-y-4">
                <div className="card card-hover">
                  <h3 className="text-lg font-semibold text-white">Direct contact</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/80">
                    <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> {siteConfig.whatsappDisplay}</li>
                    <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp: {siteConfig.phone}</li>
                    <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> {siteConfig.email}</li>
                    <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-400" /> {siteConfig.hours}</li>
                  </ul>
                </div>

                <div className="card card-hover">
                  <h3 className="text-lg font-semibold text-white">Branches</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/80">
                    {locations.map((l) => (
                      <li key={l.id} className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                        <a href={l.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
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
