import Link from "next/link";
import { siteConfig, social, navItems } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50 dark:border-white/10 dark:bg-charcoal-900/50">
      <div className="container-x py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-ink-900 dark:text-white"
            >
              <span className="text-emerald-600 dark:text-emerald-400">✦</span>{" "}
              {siteConfig.shortName}
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ink-500 dark:text-white/60">
              {siteConfig.tagline}. {siteConfig.hours}.
            </p>
            <div className="flex gap-3">
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 transition-colors hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-ink-400 transition-colors hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400"
                aria-label="Phone"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-700 dark:text-white/70">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-500 transition-colors hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-700 dark:text-white/70">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["Hair Cut", "Beard Trim", "Facial", "Hair Color", "Keratin Treatment"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-ink-500 transition-colors hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-700 dark:text-white/70">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-500 dark:text-white/50">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-100 dark:border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-400 dark:text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
