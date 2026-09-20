"use client";

import { featuredReview, reviews } from "@/content/reviews";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";

function Stars() {
  const reduced = useReducedMotion();
  return (
    <p className="flex gap-1 text-champagne" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.span
          key={index}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, duration: 0.35 }}
        >
          ★
        </motion.span>
      ))}
    </p>
  );
}

export function Reviews() {
  const supporting = reviews.filter((review) => review.id !== featuredReview.id);

  return (
    <section id="reviews" className="relative scroll-mt-28 overflow-hidden px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.28em] text-ink-soft uppercase">
          From the neighbourhood
        </p>
        <h2 className="font-display mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.04em]">
          Celebrations made happier
        </h2>
        <p className="mt-4 text-ink-soft">Words from people who visited us.</p>
      </div>

      <div className="relative mx-auto mt-16 min-h-[34rem] max-w-6xl md:min-h-[42rem]">
        <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
          {supporting.map((review, index) => (
            <article
              key={review.id}
              className={cn(
                "paper-card font-review absolute w-56 rounded-sm p-5 text-sm text-ink-soft",
                index === 0 && "top-0 left-0 rotate-[-8deg]",
                index === 1 && "top-8 right-0 rotate-[7deg]",
                index === 2 && "bottom-4 left-8 rotate-[5deg]",
                index === 3 && "right-16 bottom-0 rotate-[-4deg]",
                index === 4 && "top-1/3 left-[8%] rotate-[3deg]",
              )}
            >
              <p className="text-champagne">★★★★★</p>
              <p className="mt-3 leading-relaxed">{review.quote}</p>
              <p className="mt-4 text-xs tracking-wide text-ink uppercase">
                {review.name}
              </p>
            </article>
          ))}
        </div>

        <article className="paper-card relative z-10 mx-auto max-w-2xl rounded-md px-8 py-12 md:px-14 md:py-16">
          <Stars />
          <blockquote className="font-review mt-8 text-2xl leading-snug text-ink md:text-4xl">
            “{featuredReview.quote}”
          </blockquote>
          <p className="mt-8 text-sm tracking-[0.18em] text-ink-soft uppercase">
            {featuredReview.name}
          </p>
        </article>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl gap-4 overflow-x-auto pb-4 md:hidden">
        {supporting.map((review) => (
          <article
            key={review.id}
            className="paper-card font-review min-w-[78vw] rounded-sm p-6"
          >
            <p className="text-champagne">★★★★★</p>
            <p className="mt-4 text-lg leading-relaxed">{review.quote}</p>
            <p className="mt-5 text-xs tracking-wide uppercase">{review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
