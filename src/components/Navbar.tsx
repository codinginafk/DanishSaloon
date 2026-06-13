"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-charcoal-900/80 dark:shadow-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink-900 dark:text-white"
        >
          <span className="text-emerald-600 dark:text-emerald-400">✦</span>
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${
                pathname === item.href
                  ? "!bg-ink-100 !text-ink-900 dark:!bg-white/10 dark:!text-white"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white md:hidden dark:border-white/20 dark:bg-charcoal-800"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-4 bg-ink-700 transition-all duration-300 dark:bg-white ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-px w-4 bg-ink-700 transition-all duration-300 dark:bg-white ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-4 bg-ink-700 transition-all duration-300 dark:bg-white ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-0 border-b border-ink-100 bg-white/95 backdrop-blur-lg pt-20 dark:border-white/10 dark:bg-charcoal-900/95"
          >
            <div className="container-x space-y-1 pb-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "text-ink-700 hover:bg-ink-50 dark:text-white/70 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
