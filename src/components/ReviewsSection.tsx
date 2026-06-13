"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/siteConfig";

export default function ReviewsSection() {
  return (
    <section className="section bg-ink-50 dark:bg-charcoal-900/50">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Reviews</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-ink-500 dark:text-white/60">
            Real words from the men who sit in our chairs every day.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card card-hover p-6"
            >
              <div className="flex items-center gap-1 text-emerald-500">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-white/70">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="font-semibold text-ink-900 dark:text-white">
                  {review.name}
                </span>
                <span className="text-ink-300 dark:text-white/30">·</span>
                <span className="text-ink-400 dark:text-white/50">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
