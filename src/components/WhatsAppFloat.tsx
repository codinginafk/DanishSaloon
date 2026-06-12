"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-ink-950 shadow-glow sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/40" />
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.63.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-.98 2.45.02 1.45 1.04 2.85 1.18 3.05.14.19 2.05 3.13 4.97 4.39 2.92 1.26 2.92.84 3.45.79.53-.05 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16 4C9.38 4 4 9.38 4 16c0 2.11.55 4.17 1.6 5.99L4 28l6.18-1.62A11.93 11.93 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4zm0 21.82c-1.83 0-3.62-.49-5.19-1.42l-.37-.22-3.66.96.98-3.57-.24-.37A9.86 9.86 0 0 1 6.18 16C6.18 10.6 10.6 6.18 16 6.18S25.82 10.6 25.82 16 21.4 25.82 16 25.82z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink-900/95 px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/10 sm:block">
        Book on WhatsApp
      </span>
    </motion.a>
  );
}
