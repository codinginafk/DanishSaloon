"use client";

import { motion } from "framer-motion";
import { locations, siteConfig } from "@/lib/siteConfig";

export default function LocationsSection() {
  return (
    <section className="section bg-ink-50 dark:bg-charcoal-900/50">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Locations</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Find Us in Dubai
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            Three branches across the city. Same quality, same team, same prices.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="card card-hover p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{loc.name}</h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-white/60">{loc.description}</p>
                <p className="mt-3 text-sm text-ink-400 dark:text-white/50">{loc.hours}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 px-4 py-2 text-xs"
                  >
                    View on Maps
                  </a>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 px-4 py-2 text-xs"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
