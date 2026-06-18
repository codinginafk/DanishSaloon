import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { blogPosts, blogCategories } from "@/lib/blogData";
import { SectionReveal } from "@/components/Motion";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import WhatsAppCta from "@/components/WhatsAppCta";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author]
    }
  };
}

function renderContent(post: typeof blogPosts[0]) {
  return post.content.map((block, i) => {
    switch (block.type) {
      case "intro":
        return (
          <p key={i} className="text-lg leading-relaxed text-ink-600 dark:text-white/75 mb-8">
            {block.text}
          </p>
        );
      case "h2":
        return (
          <div key={i} id={block.heading!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="mt-12 mb-4 scroll-mt-24">
            <h2 className="heading-md text-ink-900 dark:text-white">{block.heading}</h2>
            {block.text && <p className="mt-3 text-ink-600 dark:text-white/75 leading-relaxed">{block.text}</p>}
          </div>
        );
      case "h3":
        return (
          <div key={i} className="mt-8 mb-3">
            <h3 className="text-xl font-bold text-ink-800 dark:text-white/90">{block.heading}</h3>
            {block.text && <p className="mt-2 text-ink-600 dark:text-white/75 leading-relaxed">{block.text}</p>}
          </div>
        );
      case "paragraph":
        return (
          <p key={i} className="mb-5 text-ink-600 dark:text-white/75 leading-relaxed">{block.text}</p>
        );
      case "list":
        return (
          <div key={i} className="mb-6">
            {block.heading && <p className="mb-2 font-semibold text-ink-800 dark:text-white/85">{block.heading}</p>}
            <ul className="space-y-2">
              {block.items?.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-ink-600 dark:text-white/75 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "step":
        return (
          <div key={i} className="card mb-8 overflow-hidden border-emerald-200 dark:border-emerald-500/20">
            <div className="bg-emerald-50 px-6 py-4 dark:bg-emerald-500/10">
              <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">{block.heading}</h3>
            </div>
            <div className="p-6">
              <ol className="space-y-4">
                {block.items?.map((step, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">{j + 1}</span>
                    <span className="text-ink-700 dark:text-white/80 leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );
      case "faq":
        return (
          <details key={i} className="card group mb-3 overflow-hidden cursor-pointer hover:border-emerald-300 dark:hover:border-emerald-500/30" open>
            <summary className="flex items-center justify-between p-4 font-semibold text-ink-800 dark:text-white/90 list-none">
              {block.question}
              <svg className="h-4 w-4 shrink-0 text-emerald-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="border-t border-emerald-100 px-4 pb-4 pt-2 dark:border-emerald-500/10">
              <p className="text-ink-600 dark:text-white/70 leading-relaxed">{block.answer}</p>
            </div>
          </details>
        );
      case "image":
        return (
          <figure key={i} className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-ink-100 dark:bg-charcoal-800">
              <Image src={block.image!} alt={block.imageAlt!} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-center text-xs text-ink-400 dark:text-white/45">{block.imageAlt}</figcaption>
          </figure>
        );
      case "tip":
        return (
          <div key={i} className="card mb-8 border-l-4 border-l-emerald-500 bg-emerald-50/50 p-5 dark:bg-emerald-500/5 dark:border-l-emerald-400">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">{block.heading}</p>
            <p className="text-ink-700 dark:text-white/80 leading-relaxed">{block.text}</p>
          </div>
        );
      case "cta":
        return (
          <div key={i} className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-center text-white dark:from-emerald-500 dark:to-emerald-700">
            <p className="text-lg leading-relaxed">{block.text}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                Book on WhatsApp
              </a>
              <Link href="/locations" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20">
                Find a Branch
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const cat = blogCategories.find(c => c.slug === post.category);
  const relatedPosts = blogPosts.filter(p => post.relatedPosts.includes(p.slug));

  // Build structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.content
      .filter(b => b.type === "faq")
      .map(b => ({
        "@type": "Question",
        name: b.question,
        acceptedAnswer: { "@type": "Answer", text: b.answer }
      }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title }
    ]
  };

  return (
    <>
      <ReadingProgress />
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-grid-fade opacity-50" aria-hidden />
        <div className="container-x max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-400 dark:text-white/50">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-300">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-600 dark:text-white/70">{cat?.name || post.category}</span>
          </nav>

          {/* Header */}
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                {cat?.name || post.category}
              </span>
              <span className="text-xs text-ink-400 dark:text-white/45">{post.readTime}</span>
            </div>
            <h1 className="heading-lg text-ink-900 dark:text-white">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-500 dark:text-white/60">{post.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400 dark:text-white/45">
              <span>Written: {post.publishedDate}</span>
              <span>Updated: {post.updatedDate}</span>
              <span>By {post.author}</span>
              <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">Recently Updated</span>
            </div>
          </SectionReveal>

          {/* Featured Image */}
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100 dark:bg-charcoal-800">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="768px" className="object-cover" />
          </div>

          {/* Table of Contents */}
          <div className="mt-8">
            <TableOfContents content={post.content} />
          </div>

          {/* Article Body */}
          <div className="mt-6">
            {renderContent(post)}
          </div>

          {/* Share Buttons */}
          <ShareButtons title={post.title} slug={post.slug} />

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-8 dark:border-white/10">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-ink-100 px-3 py-1 text-xs text-ink-500 dark:bg-white/5 dark:text-white/50">{tag}</span>
            ))}
          </div>

          {/* Related Services */}
          {post.relatedServices.length > 0 && (
            <div className="mt-8 rounded-2xl border border-ink-100 bg-ink-50 p-6 dark:border-white/10 dark:bg-charcoal-900/50">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-white/60 mb-4">Services Mentioned in This Article</h3>
              <div className="flex flex-wrap gap-2">
                {post.relatedServices.map((slug) => (
                  <Link key={slug} href={`/services/${slug}`} className="chip hover:border-emerald-400/40 hover:text-emerald-600 dark:hover:text-emerald-300">
                    {slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="heading-md text-ink-900 dark:text-white mb-6">You Might Also Like</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="card card-hover group overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink-100 dark:bg-charcoal-800">
                      <Image src={rp.image} alt={rp.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-emerald-600 dark:text-emerald-400">{rp.readTime}</span>
                      <h3 className="mt-1 font-semibold text-ink-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{rp.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <WhatsAppCta />
    </>
  );
}
