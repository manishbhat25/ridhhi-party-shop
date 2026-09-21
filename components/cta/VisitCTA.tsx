"use client";

import { Button } from "@/components/ui/Button";
import { hasPhone, hasWhatsApp, site, telHref, whatsappHref } from "@/content/site";
import { directionsHref } from "@/lib/maps";
import { useReducedMotion } from "motion/react";

export function VisitCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ivory-deep px-5 py-28 md:py-36">
      <svg
        className="pointer-events-none absolute inset-x-0 top-10 h-40 w-full text-coral"
        viewBox="0 0 1200 160"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 90 C 180 10, 320 150, 520 70 S 860 20, 1220 100"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className={reduced ? "" : "origin-center"}
          style={
            reduced
              ? undefined
              : {
                  strokeDasharray: 420,
                  animation: "ribbon-draw 2.8s ease forwards",
                }
          }
        />
      </svg>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs tracking-[0.28em] text-ink-soft uppercase">
          Planning something special?
        </p>
        <h2 className="font-display mt-5 text-[clamp(2.8rem,8vw,7rem)] leading-[0.88] tracking-[-0.05em]">
          Let’s make it a celebration.
        </h2>
        <p className="mt-8 text-lg text-ink-soft">
          Visit {site.name}
          <br />
          in {site.locality}, {site.city}.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={directionsHref} variant="ink" external>
            Get Directions
          </Button>
          {hasWhatsApp && whatsappHref ? (
            <Button href={whatsappHref} variant="coral" external>
              WhatsApp Us
            </Button>
          ) : hasPhone && telHref ? (
            <Button href={telHref} variant="coral">
              Call the Shop
            </Button>
          ) : (
            <Button href="#visit" variant="outline">
              Visit the Store
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
