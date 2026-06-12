import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` }
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-lg mt-2">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/55">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose-invert mt-8 space-y-6 text-white/75">
          <p>
            {siteConfig.name} ("we", "us", "our") respects your privacy. This page explains
            what information we collect, how we use it, and the choices you have.
          </p>
          <h2 className="text-xl font-bold text-white">Information we collect</h2>
          <p>
            We collect information you provide when contacting us on WhatsApp, email,
            or through our contact form — typically your name, phone number, and the
            details of your booking. We also collect anonymous analytics on website usage.
          </p>
          <h2 className="text-xl font-bold text-white">How we use information</h2>
          <p>
            We use the information to respond to your enquiries, confirm bookings,
            and improve our services. We do not sell your information to third parties.
          </p>
          <h2 className="text-xl font-bold text-white">Cookies & analytics</h2>
          <p>
            We use privacy-friendly analytics to understand which services and pages
            are most popular. You can disable cookies in your browser settings at any time.
          </p>
          <h2 className="text-xl font-bold text-white">Your rights</h2>
          <p>
            You may request a copy of, correction of, or deletion of any personal
            information we hold. Contact us at {siteConfig.email}.
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
