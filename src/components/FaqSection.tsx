"use client";

import { useState } from "react";
import { faq } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="heading-lg mt-2">Got questions?</h2>
              <p className="mt-3 text-ink-500 dark:text-white/65">
                The things guys ask us most. Missed something? Hit us on WhatsApp
                — we reply fast.
              </p>
            </div>
            <div className="space-y-3">
              {faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen
                        ? "border-emerald-500/40 bg-emerald-50 dark:bg-charcoal-800/70"
                        : "border-ink-900/10 bg-white shadow-card hover:border-ink-900/20 dark:border-white/5 dark:bg-charcoal-800/40 dark:shadow-none dark:hover:border-white/10"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-ink-900 dark:text-white">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-emerald-500 bg-emerald-500 text-ink-950"
                            : "border-ink-900/20 text-ink-500 dark:border-white/15 dark:text-white/70"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm leading-relaxed text-ink-600 dark:text-white/70">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
