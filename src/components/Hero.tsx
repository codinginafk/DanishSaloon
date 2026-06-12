"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, MapPin, MessageCircle, Star, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig, social, heroVideo } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Background image / video */}
      <div className="absolute inset-0 -z-20">
        {heroVideo.src ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroVideo.poster}
            className="h-full w-full object-cover"
          >
            <source src={heroVideo.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroVideo.poster}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/75 to-ink-950"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-grid-fade opacity-70"
          aria-hidden
        />
      </div>

      {/* Floating chips */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute right-6 top-32 hidden sm:block"
        >
          <div className="rounded-2xl border border-white/10 bg-ink-900/60 px-3 py-2 backdrop-blur animate-float">
            <div className="flex items-center gap-2 text-xs">
              <Star className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
              <span className="text-white/85">4.9 · 500+ reviews</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute left-6 top-44 hidden md:block"
        >
          <div className="rounded-2xl border border-white/10 bg-ink-900/60 px-3 py-2 backdrop-blur animate-float [animation-delay:0.5s]">
            <div className="flex items-center gap-2 text-xs">
              <Scissors className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-white/85">Cuts from AED 5</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
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
            <span className="block gradient-text">at honest Dubai prices.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg"
          >
            Professional haircuts, beard styling, hair treatments and grooming
            services across three convenient Dubai locations. 15+ expert barbers.
            Walk-ins welcome.
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
              { label: "Open Daily 8AM–12AM", icon: Star },
              { label: "Affordable Prices", icon: Sparkles }
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-2xl border border-white/5 bg-ink-900/50 p-4 backdrop-blur"
              >
                <t.icon className="mx-auto h-5 w-5 text-emerald-300" />
                <p className="mt-2 text-sm font-semibold text-white">{t.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-xs text-white/45"
          >
            Followed by thousands on{" "}
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-emerald-300"
            >
              {social.instagram.handle}
            </a>
          </motion.p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-950" />
    </section>
  );
}
