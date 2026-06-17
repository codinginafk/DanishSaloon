import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navItems } from "@/lib/siteConfig";
import { blogPosts, blogCategories } from "@/lib/blogData";

export const metadata: Metadata = {
  title: `Men's Grooming Blog — Hair Care, Styles & Tips | ${siteConfig.name}`,
  description: `Expert advice for men in Dubai: hair care, hairstyle guides, beard grooming, and treatment tips. Written by the barbers at ${siteConfig.name} — Dubai's trusted men's salon.`,
  alternates: { canonical: `${siteConfig.url}/blog` }
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x">
          <p className="eyebrow">Blog</p>
          <h1 className="heading-lg mt-2 text-ink-900 dark:text-white">Men's Grooming Advice That Actually Helps</h1>
          <p className="mt-4 max-w-2xl text-ink-500 dark:text-white/70">
            Real advice from real barbers. No sponsored products, no AI fluff — just honest tips from the guys who cut hair in Dubai every day.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          {/* Categories */}
          <div className="mb-10 flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className="chip hover:border-emerald-400/40 hover:text-emerald-600 dark:hover:text-emerald-300"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card card-hover group overflow-hidden flex flex-col">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-ink-100 dark:bg-charcoal-800">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                      {blogCategories.find(c => c.slug === post.category)?.name || post.category}
                    </span>
                    <span className="text-ink-400 dark:text-white/45">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="group/link">
                    <h2 className="text-lg font-bold leading-snug text-ink-900 transition-colors group-hover/link:text-emerald-600 dark:text-white dark:group-hover/link:text-emerald-400">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-ink-400 dark:text-white/45">
                    <span>{post.publishedDate}</span>
                    <span>·</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Services */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="card bg-gradient-to-br from-emerald-50 to-white p-8 text-center sm:p-10 dark:from-emerald-500/10 dark:to-transparent">
            <h2 className="heading-md text-ink-900 dark:text-white">Looking for a service instead?</h2>
            <p className="mt-3 max-w-xl mx-auto text-ink-500 dark:text-white/70">
              Browse our full menu — haircuts from AED 5, beard trims, facials, keratin and protein treatments at three Dubai locations.
            </p>
            <Link href="/services" className="btn-primary mt-6">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Locations CTA */}
      <section className="section pt-0 pb-20">
        <div className="container-x text-center">
          <p className="text-sm text-ink-400 dark:text-white/50">
            Visit us at <Link href="/locations/karama" className="text-emerald-600 hover:underline dark:text-emerald-400">Karama</Link>,{" "}
            <Link href="/locations/media-city" className="text-emerald-600 hover:underline dark:text-emerald-400">Media City</Link>, or{" "}
            <Link href="/locations/ramee-royal-hotel" className="text-emerald-600 hover:underline dark:text-emerald-400">Bur Dubai</Link>{" "}
            — open daily 8AM to midnight.
          </p>
        </div>
      </section>
    </>
  );
}
