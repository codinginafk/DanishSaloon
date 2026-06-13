"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, locations } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90dvh] items-center justify-center overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950" />
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />

      <div className="container-x relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow text-emerald-400">{siteConfig.tagline}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="heading-xl mt-5 text-white"
        >
          Where Every Man
          <br />
          <span className="gradient-text">Leaves Looking Better</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="btn-primary rounded-full bg-emerald-500 text-ink-950 hover:bg-emerald-400 shadow-emerald-500/30"
          >
            View Services
          </Link>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost border-white/20 text-white hover:bg-white/10"
          >
            Book on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm text-white/50"
        >
          <span>✧ {locations.length} Dubai branches</span>
          <span className="hidden sm:inline">✦ {siteConfig.hours}</span>
          <span>✧ Walk-ins welcome</span>
        </motion.div>
      </div>
    </section>
  );
}
