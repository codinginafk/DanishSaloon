"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/siteConfig";

export default function TeamSection() {
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
          <span className="eyebrow">Our Team</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            The Hands Behind the Work
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            Every barber at Kopila is handpicked for skill, attitude and consistency.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card card-hover group overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink-100 dark:bg-charcoal-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {member.specialty}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
