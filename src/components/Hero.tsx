"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, MapPin, MessageCircle, Star, Sparkles, ArrowRight, Check } from "lucide-react";
import { siteConfig, social, heroVideo } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper pt-28 dark:bg-ink-900 sm:pt-32 lg:pt-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroVideo.poster}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.06] dark:opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper dark:from-ink-900/90 dark:via-ink-900/85 dark:to-ink-900"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-grid-fade opacity-60 dark:opacity-70"
          aria-hidden
        />
      </div>

      {/* Decorative SVG accent (light only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:hidden"
      />

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 dark:border-emerald-500/30 dark:bg-emerald-500/10"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-200">
              {siteConfig.hours} · 3 Dubai Locations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 heading-xl"
          >
            {siteConfig.tagline}
            <span className="block gradient-text">starting from AED 5.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-ink-600 sm:text-lg dark:text-white/75"
          >
            Walk in for a AED 5 haircut or book a full keratin treatment — same
            quality, same smile, across three Dubai branches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/locations" className="btn-ghost w-full sm:w-auto">
              <MapPin className="h-4 w-4" /> Find a branch
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { label: "15+ Expert Barbers", icon: Scissors },
              { label: "3 Dubai Locations", icon: MapPin },
              { label: "4.9★ from 500+", icon: Star },
              { label: "From AED 5", icon: Sparkles }
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-2xl border border-ink-900/8 bg-white p-4 shadow-card dark:border-white/5 dark:bg-white/5 dark:shadow-none"
              >
                <t.icon className="mx-auto h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-2 text-sm font-semibold text-ink-900 dark:text-white">{t.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Inline value props for snippet/AI search */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500 dark:text-white/45"
          >
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Walk-ins welcome, no appointment needed</li>
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Open daily 8AM–12AM</li>
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> 15+ barbers, trained & friendly</li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Follow{" "}
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-700 hover:text-emerald-700 dark:text-white/70 dark:hover:text-emerald-300"
              >
                {social.instagram.handle}
              </a>
              {" "}for daily cuts
            </li>
          </motion.ul>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-paper dark:to-ink-900" />
    </section>
  );
}
