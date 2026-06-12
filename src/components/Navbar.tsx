"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";
import { navItems, siteConfig, social } from "@/lib/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="group flex items-center gap-2.5"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-glow">
            <Scissors className="h-4 w-4 -rotate-45 text-ink-950" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              Hair Lounge
            </span>
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">
              Danish Hanif
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
          >
            {social.instagram.handle}
          </a>
          <a href={siteConfig.whatsappLink} className="btn-primary !px-4 !py-2.5 text-sm">
            <span aria-hidden>📲</span> WhatsApp Booking
          </a>
        </div>

        <button
          className="rounded-xl border border-white/10 p-2.5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/5 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.whatsappLink}
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                WhatsApp Booking
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
