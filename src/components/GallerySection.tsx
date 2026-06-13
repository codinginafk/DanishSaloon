"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { gallery } from "@/lib/siteConfig";

export default function GallerySection() {
  const items = gallery.slice(0, 8);

  return (
    <section className="section bg-white dark:bg-charcoal-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Gallery</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            A glimpse inside Kopila — the cuts, the shop, the team.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className={`img-raised group cursor-pointer overflow-hidden ${
                i === 0 || i === 7 ? "row-span-2" : ""
              }`}
            >
              <div className="relative h-full w-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      i === 0 || i === 7 ? "" : "aspect-square"
                    }`}
                  />
                  {item.credits && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-[10px] text-white/80">{item.credits}</p>
                    </div>
                  )}
                </div>
              </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link href="/gallery" className="btn-ghost">
            View Full Gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
