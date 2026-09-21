"use client";

import { Button } from "@/components/ui/Button";
import { directionsHref } from "@/lib/maps";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-poster.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-shine" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,247,251,0.18)_0%,rgba(255,247,251,0.55)_48%,rgba(255,247,251,0.92)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ivory to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ivory to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-28 pt-28 md:pb-16 md:pt-32">
        <div className="flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/75 px-3 py-1.5 text-xs tracking-[0.18em] text-ink-soft uppercase backdrop-blur-md">
            <span aria-hidden="true" className="text-champagne">
              ★
            </span>
            Loved by local customers
          </p>
        </div>

        <h1 className="font-display mx-auto mt-8 max-w-5xl text-center text-[clamp(2.75rem,8.5vw,7.2rem)] leading-[0.9] tracking-[-0.04em] text-ink">
          Make Every Celebration
          <br />
          Feel Special.
        </h1>

        <div className="flex-1" />

        <p className="mx-auto mt-6 max-w-xl text-center text-base text-ink-soft md:text-lg">
          Party supplies, gifts, decorations and little things that turn ordinary
          moments into celebrations — right here in Kalyanpur.
        </p>

        <div className="pointer-events-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#explore" variant="ink">
            Explore the Shop
          </Button>
          <Button href={directionsHref} variant="outline" external>
            Get Directions
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-ink-soft">
          Your neighbourhood celebration destination in Kalyanpur, Kanpur.
        </p>
      </div>
    </section>
  );
}
