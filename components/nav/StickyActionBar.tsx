"use client";

import { hasPhone, hasWhatsApp, telHref, whatsappHref } from "@/content/site";
import { directionsHref } from "@/lib/maps";

export function StickyActionBar() {
  const items = [
    hasPhone && telHref
      ? { href: telHref, label: "Call", external: false }
      : null,
    hasWhatsApp && whatsappHref
      ? { href: whatsappHref, label: "WhatsApp", external: true }
      : null,
    {
      href: directionsHref,
      label: "Directions",
      external: true,
    },
  ].filter(Boolean) as { href: string; label: string; external: boolean }[];

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-md overflow-hidden rounded-full border border-ink/10 bg-ink/92 text-ivory shadow-[0_-12px_40px_-18px_rgba(28,25,23,0.55)] backdrop-blur-xl">
        {items.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="flex min-h-12 flex-1 items-center justify-center text-sm tracking-wide"
            style={{
              borderLeft: index === 0 ? undefined : "1px solid rgba(246,241,232,0.12)",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
