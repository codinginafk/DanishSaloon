import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function NotFound() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="heading-lg mt-2">Page not found.</h1>
        <p className="mt-3 text-ink-500 dark:text-white/65">
          The page you're looking for doesn't exist. Let's get you back to grooming.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <a href={siteConfig.whatsappLink} className="btn-outline">WhatsApp us</a>
        </div>
      </div>
    </section>
  );
}
