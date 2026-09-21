"use client";

import { Button } from "@/components/ui/Button";
import {
  displayLocation,
  displayWhatsApp,
  fullLocation,
  hasPhone,
  hasWhatsApp,
  site,
  telHref,
  whatsappHref,
} from "@/content/site";
import { directionsHref, mapsEmbedSrc } from "@/lib/maps";
import Image from "next/image";
import { useState } from "react";

export function StoreLocation() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="visit" className="scroll-mt-24 px-5 py-16 md:scroll-mt-28 md:py-32">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-[0.28em] text-ink-soft uppercase">
              Visit us today
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.92] tracking-[-0.04em]">
              Your celebration store in Kalyanpur
            </h2>
            <p className="mt-6 max-w-md text-ink-soft">
              Walk in with an idea. Walk out ready to celebrate. Ridhhi Party Shop
              is a physical neighbourhood store — come see the shelves in person.
            </p>
          </div>

          <address className="mt-10 not-italic">
            <p className="font-display text-3xl">{site.name}</p>
            {site.streetAddress ? (
              <p className="mt-3 text-ink-soft">{site.streetAddress}</p>
            ) : null}
            <p className="mt-1 text-ink-soft">{fullLocation}</p>
            {site.openingHoursDisplay ? (
              <p className="mt-4 text-sm text-ink-soft">
                {site.openingHoursDisplay}
              </p>
            ) : null}
            {hasPhone ? (
              <p className="mt-4">
                <a href={telHref} className="text-coral underline decoration-coral/40">
                  {site.phone}
                </a>
              </p>
            ) : null}
            {hasWhatsApp && whatsappHref ? (
              <p className="mt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral underline decoration-coral/40"
                >
                  WhatsApp {displayWhatsApp}
                </a>
              </p>
            ) : null}
          </address>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={directionsHref} variant="ink" external>
              Get Directions
            </Button>
            {hasPhone && telHref ? (
              <Button href={telHref} variant="outline">
                Call Store
              </Button>
            ) : null}
            {hasWhatsApp && whatsappHref ? (
              <Button href={whatsappHref} variant="gold" external>
                WhatsApp
              </Button>
            ) : null}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-ivory-deep md:min-h-[560px]">
          {!showMap ? (
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="group relative h-full min-h-[420px] w-full md:min-h-[560px]"
              aria-label={`Load map of ${displayLocation}`}
            >
              <Image
                src="/images/map-kalyanpur.png"
                alt={`Stylised map of ${site.locality}, ${site.city}`}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-6 bottom-6 rounded-full bg-ivory/92 px-5 py-3 text-sm text-ink backdrop-blur-md">
                Tap to load the interactive map
              </span>
            </button>
          ) : (
            <div className="relative h-full min-h-[420px] md:min-h-[560px]">
              <iframe
                title={`${site.name} on Google Maps`}
                src={mapsEmbedSrc}
                className="h-full min-h-[420px] w-full border-0 md:min-h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 bottom-4 rounded-full bg-ivory/95 px-4 py-2 text-sm text-ink"
              >
                Open in Google Maps
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
