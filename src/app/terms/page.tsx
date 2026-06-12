import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: `${siteConfig.url}/terms` }
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-lg mt-2">Terms of Service</h1>
        <p className="mt-3 text-sm text-white/55">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose-invert mt-8 space-y-6 text-white/75">
          <p>
            By visiting {siteConfig.name} ("we", "us", "our") and using our services,
            you agree to the following terms.
          </p>
          <h2 className="text-xl font-bold text-white">Services</h2>
          <p>
            We provide men's grooming services across three Dubai branches. Prices and
            service availability are subject to change. Walk-ins are welcome, but
            appointments via WhatsApp are recommended during busy hours.
          </p>
          <h2 className="text-xl font-bold text-white">Bookings & cancellations</h2>
          <p>
            Please notify us on WhatsApp if you need to cancel or reschedule. We
            appreciate at least 1 hour notice during peak hours.
          </p>
          <h2 className="text-xl font-bold text-white">Liability</h2>
          <p>
            We take care to deliver high-quality services. If you are unsatisfied,
            please tell us before leaving the chair so we can make it right. We are not
            liable for any allergic reactions to products not disclosed at the time of service.
          </p>
          <h2 className="text-xl font-bold text-white">Conduct</h2>
          <p>
            We provide a safe, welcoming environment for all customers. Abusive
            behaviour towards staff or other customers will not be tolerated.
          </p>
          <h2 className="text-xl font-bold text-white">Contact</h2>
          <p>
            Questions? WhatsApp us at {siteConfig.whatsappDisplay} or email {siteConfig.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
