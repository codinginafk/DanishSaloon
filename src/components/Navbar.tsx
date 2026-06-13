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

  const isHome = pathname === "/";
  const showScrolled = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        showScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-charcoal-900/80 dark:shadow-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2 text-lg font-bold tracking-tight transition-colors ${
            showScrolled ? "text-ink-900 dark:text-white" : "text-white"
          }`}
        >
          <span className="text-emerald-500">✦</span>
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? showScrolled
                    ? "bg-ink-100 text-ink-900 dark:bg-white/10 dark:text-white"
                    : "bg-white/20 text-white"
                  : showScrolled
                    ? "text-ink-600 hover:text-ink-900 dark:text-white/70 dark:hover:text-white"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`relative z-50 flex h-9 w-9 items-center justify-center rounded-full border transition-colors md:hidden ${
            showScrolled
              ? "border-ink-200 bg-white dark:border-white/20 dark:bg-charcoal-800"
              : "border-white/30 bg-white/10"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-4 transition-all duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1"
            } ${showScrolled ? "bg-ink-700 dark:bg-white" : "bg-white"}`}
          />
          <span
            className={`block h-px w-4 transition-all duration-300 ${
              open ? "opacity-0" : ""
            } ${showScrolled ? "bg-ink-700 dark:bg-white" : "bg-white"}`}
          />
          <span
            className={`block h-px w-4 transition-all duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1"
            } ${showScrolled ? "bg-ink-700 dark:bg-white" : "bg-white"}`}
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
