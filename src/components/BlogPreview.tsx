"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "./Motion";
import { blogCategories } from "@/lib/blogData";
import type { BlogPost } from "@/lib/blogData";

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="section">
      <div className="container-x">
        <SectionReveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">From the Blog</p>
              <h2 className="heading-lg mt-2 text-ink-900 dark:text-white">Grooming Tips From Our Barbers</h2>
              <p className="mt-3 max-w-xl text-ink-500 dark:text-white/70">
                Real advice from guys who cut hair every day — no sponsors, no gimmicks.
              </p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
              View all articles
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <SectionReveal key={post.slug} delay={i * 0.1}>
              <article className="card card-hover group overflow-hidden flex flex-col h-full">
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
                    <h3 className="text-lg font-bold leading-snug text-ink-900 transition-colors group-hover/link:text-emerald-600 dark:text-white dark:group-hover/link:text-emerald-400">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-white/60 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="mt-3 text-xs text-ink-400 dark:text-white/45">
                    {post.publishedDate} · {post.readTime}
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="btn-outline">View All Articles</Link>
        </div>
      </div>
    </section>
  );
}
