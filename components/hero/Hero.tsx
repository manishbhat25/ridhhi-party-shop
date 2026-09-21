"use client";

import { Button } from "@/components/ui/Button";
import { hasWhatsApp, whatsappHref } from "@/content/site";
import { directionsHref } from "@/lib/maps";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0 hidden md:block">
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

      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          background:
            "radial-gradient(800px 420px at 10% -10%, rgba(255,46,138,0.14), transparent 50%), radial-gradient(700px 380px at 100% 0%, rgba(244,196,48,0.18), transparent 46%), var(--ivory)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-28 pt-24 md:pb-16 md:pt-32">
        <div className="flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ivory/80 px-3 py-1.5 text-[0.65rem] tracking-[0.18em] text-ink-soft uppercase backdrop-blur-md md:text-xs">
            <span aria-hidden="true" className="text-champagne">
              ★
            </span>
            Loved by local customers
          </p>
        </div>

        <h1 className="font-display mx-auto mt-6 max-w-5xl text-center text-[clamp(2.35rem,11vw,7.2rem)] leading-[0.92] tracking-[-0.04em] text-ink md:mt-8">
          Make Every Celebration
          <br />
          Feel Special.
        </h1>

        <div className="hidden md:block md:flex-1" />

        <p className="mx-auto mt-5 max-w-xl text-center text-[0.95rem] leading-relaxed text-ink-soft md:mt-6 md:text-lg">
          Party supplies, gifts, decorations and little things that turn ordinary
          moments into celebrations — right here in Kalyanpur.
        </p>

        <div className="pointer-events-auto mx-auto mt-7 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center md:mt-8">
          <Button href="#explore" variant="ink" className="w-full sm:w-auto">
            Explore the Shop
          </Button>
          {hasWhatsApp && whatsappHref ? (
            <Button
              href={whatsappHref}
              variant="coral"
              external
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
          ) : null}
          <Button
            href={directionsHref}
            variant="outline"
            external
            className="w-full max-md:hidden md:w-auto"
          >
            Get Directions
          </Button>
        </div>

        <p className="mt-4 hidden text-center text-sm text-ink-soft md:mt-5 md:block">
          Your neighbourhood celebration destination in Kalyanpur, Kanpur.
        </p>

        <div className="relative mt-8 mb-2 h-40 overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_-24px_rgba(26,8,40,0.35)] md:hidden">
          <Image
            src="/images/hero-poster.png"
            alt="Wrapped celebration gifts in magenta, gold, teal and purple"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 100vw"
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
