"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "@/lib/siteConfig";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-ink-50 dark:bg-charcoal-900/50">
      <div className="container-x max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Quick Answers
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            Everything you need to know before your first visit.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="card cursor-pointer overflow-hidden transition-colors hover:border-emerald-300 dark:hover:border-emerald-500/30"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-ink-900 dark:text-white sm:text-base">
                  {item.q}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 dark:text-white/50 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-ink-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-ink-500 dark:border-white/10 dark:text-white/60">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
