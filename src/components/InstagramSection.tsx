import { social, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";
import { Instagram, ArrowRight } from "lucide-react";

export function InstagramSection() {
  return (
    <section id="instagram" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-charcoal-800/60 via-ink-950 to-charcoal-900/60 p-8 sm:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-amber-400 text-white shadow-glow">
                <Instagram className="h-6 w-6" />
              </div>
              <h2 className="heading-lg mt-5">Follow our latest transformations.</h2>
              <p className="mt-3 max-w-2xl text-white/65">
                New cuts, beard designs, hair color and behind-the-chair moments
                — updated daily on our Instagram.
              </p>
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                {social.instagram.handle} <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-white/50">
                Bookings: {siteConfig.whatsappDisplay} · {siteConfig.hours}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  href={social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-charcoal-800"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1599351431202-1e0f0137899a",
                        "1622286342621-4bd786c2447c",
                        "1503951914875-452162b0f3f1",
                        "1521590832167-7bcbfaa6381f",
                        "1605497788044-5a32c7078486",
                        "1585747860019-8e9c3e2c0e09"
                      ][i]
                    }?auto=format&fit=crop&w=400&q=80`}
                    alt={`Instagram post ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                  <Instagram className="absolute bottom-3 right-3 h-4 w-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
