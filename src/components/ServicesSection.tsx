"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/siteConfig";

export default function ServicesSection() {
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
          <span className="eyebrow">What We Do</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Men&apos;s Grooming, Done Right
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            Every service starts with a conversation. We listen, then we work.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="card card-hover group block overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100 dark:bg-charcoal-800">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                      {service.name}
                    </h3>
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {service.startingPrice}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                    {service.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <span>{service.duration}</span>
                    <span>·</span>
                    <span>Learn more →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
