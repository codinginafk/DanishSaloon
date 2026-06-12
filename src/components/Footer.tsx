import Link from "next/link";
import { Instagram, Facebook, MessageCircle, MapPin, Clock, Phone, Scissors } from "lucide-react";
import { siteConfig, social, locations, services } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-ink-950 to-black">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-glow">
                <Scissors className="h-4 w-4 -rotate-45 text-ink-950" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                  Hair Lounge
                </span>
                <span className="text-lg font-bold text-white">Danish Hanif</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-white/60">
              Premium men's grooming at honest Dubai prices. Three locations, 15+ expert barbers, open daily 8AM to midnight.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/10 p-2.5 text-white/80 transition hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-white/10 p-2.5 text-white/80 transition hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.whatsappLink}
                aria-label="WhatsApp"
                className="rounded-full border border-white/10 p-2.5 text-white/80 transition hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-emerald-300">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-emerald-400 hover:text-emerald-300">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Locations</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {locations.map((l) => (
                <li key={l.id} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                  <Link href={`/locations/${l.slug}`} className="hover:text-emerald-300">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-emerald-300">
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                <a href={siteConfig.whatsappLink} className="hover:text-emerald-300">
                  WhatsApp Booking
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
            <a
              href={siteConfig.whatsappLink}
              className="btn-primary mt-6 w-full !py-2.5 text-sm"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
