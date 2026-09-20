"use client";

import { categories, type Category } from "@/content/categories";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

function sizeClass(size: Category["size"], id: string) {
  if (id === "school") return "md:col-span-7 md:min-h-[360px]";
  if (id === "supplies") return "md:col-span-5 md:min-h-[360px]";
  switch (size) {
    case "large":
      return "md:col-span-7 md:row-span-2 md:min-h-[540px]";
    case "tall":
      return "md:col-span-5 md:row-span-2 md:min-h-[540px]";
    case "wide":
      return "md:col-span-8 md:min-h-[260px]";
    default:
      return "md:col-span-4 md:min-h-[280px]";
  }
}

function CategoryCard({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <article
      className={cn(
        "group relative isolate min-h-[58vh] min-w-[78vw] overflow-hidden rounded-[2rem] bg-ivory-deep snap-center md:min-h-0 md:min-w-0 md:rounded-[2.25rem]",
        className,
      )}
    >
      <Image
        src={category.image}
        alt={category.alt}
        fill
        sizes="(max-width: 768px) 78vw, 50vw"
        className={cn(
          "object-cover transition-transform duration-[1100ms] ease-out",
          !reduced && "group-hover:scale-[1.06]",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-7 right-7 h-16 w-16 rounded-full bg-champagne/35 blur-sm transition-transform duration-500",
          !reduced && "group-hover:translate-x-2 group-hover:-translate-y-1",
        )}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-xs tracking-[0.22em] text-ivory/70 uppercase">
          {category.kicker}
        </p>
        <h3
          className={cn(
            "font-display mt-2 text-3xl leading-[0.95] text-ivory md:text-4xl",
            !reduced && "transition-transform duration-500 group-hover:-translate-y-1",
          )}
        >
          {category.title}
        </h3>
      </div>
    </article>
  );
}

export function CategoryExperience() {
  return (
    <section id="explore" className="scroll-mt-28 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.28em] text-ink-soft uppercase">
          In the shop
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.04em]">
          Everything a celebration needs
        </h2>
        <p className="mt-5 max-w-lg text-ink-soft">
          Balloons to wrapping, banners to return gifts — walk the aisles in
          Kalyanpur and leave with the party in your hands.
        </p>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="mx-auto mt-14 hidden max-w-6xl grid-cols-12 gap-4 md:grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            className={sizeClass(category.size, category.id)}
          />
        ))}
      </div>
    </section>
  );
}
