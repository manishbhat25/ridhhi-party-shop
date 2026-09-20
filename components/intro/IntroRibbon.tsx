import { categories } from "@/content/categories";
import Image from "next/image";

export function IntroRibbon() {
  const items = [...categories, ...categories];

  return (
    <section
      aria-label="Celebration introduction"
      className="relative overflow-hidden border-y border-ink/8 py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display max-w-3xl text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">
          Big birthdays. Tiny surprises.
          <span className="text-ink-soft"> Everything in between.</span>
        </p>
      </div>

      <div className="mt-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-6 pr-6">
          {items.map((item, index) => (
            <figure
              key={`${item.id}-${index}`}
              className="flex items-center gap-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-display text-2xl tracking-tight text-ink/80 md:text-3xl">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
