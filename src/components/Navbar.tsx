"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Scissors, Sun, Moon } from "lucide-react";
import { navItems, siteConfig, social } from "@/lib/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

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
          ? "border-b border-ink-900/5 bg-paper/85 backdrop-blur-xl dark:border-white/5 dark:bg-ink-900/85"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label={siteConfig.name} className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white shadow-soft dark:bg-gradient-to-br dark:from-emerald-400 dark:to-emerald-600 dark:text-ink-950 dark:shadow-glow">
            <Scissors className="h-4 w-4 -rotate-45" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-500 dark:text-white/50">
              Hair Lounge
            </span>
            <span className="text-base font-bold tracking-tight text-ink-900 dark:text-white sm:text-lg">
              Danish Hanif
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-emerald-400/40 dark:hover:text-emerald-300"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-900/10 px-3 py-2 text-xs font-medium text-ink-700 transition-colors hover:border-ink-900/25 hover:text-ink-900 dark:border-white/10 dark:text-white/70 dark:hover:border-emerald-400/40 dark:hover:text-emerald-300"
          >
            {social.instagram.handle}
          </a>
          <a href={siteConfig.whatsappLink} className="btn-primary !px-4 !py-2.5 text-sm">
            <span aria-hidden>📲</span> WhatsApp Booking
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-xl border border-ink-900/10 p-2.5 text-ink-700 dark:border-white/10 dark:text-white"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="rounded-xl border border-ink-900/10 p-2.5 text-ink-900 dark:border-white/10 dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-ink-900/5 bg-paper/95 backdrop-blur-xl dark:border-white/5 dark:bg-ink-900/95 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-paper-100 dark:text-white/85 dark:hover:bg-white/5"
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
