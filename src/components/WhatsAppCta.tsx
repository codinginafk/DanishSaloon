import { siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "./Motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export function WhatsAppCta() {
  return (
    <section id="book" className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/20 via-charcoal-900 to-ink-950 p-10 sm:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow">Ready when you are</p>
                <h2 className="heading-lg mt-2">Ready for your next haircut?</h2>
                <p className="mt-3 max-w-xl text-white/70">
                  Skip the queue. Message us on WhatsApp and lock your slot at any of
                  our three Dubai branches. Walk-ins welcome too.
                </p>
                <p className="mt-3 text-sm text-white/55">
                  {siteConfig.hours} · {siteConfig.whatsappDisplay}
                </p>
              </div>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
