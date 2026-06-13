"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredHaircuts } from "@/lib/siteConfig";

export default function FeaturedHaircuts() {
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
          <span className="eyebrow">Signature Styles</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Our Most Requested Cuts
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            From skin fades to textured crops — these are the styles our clients ask for most.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredHaircuts.map((cut, i) => (
            <motion.div
              key={cut.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                href="/haircuts"
                className="card card-hover group block overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={cut.image}
                    alt={cut.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
                </div>
                <div className="relative -mt-14 p-5">
                  <h3 className="text-lg font-bold text-white">{cut.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {cut.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
