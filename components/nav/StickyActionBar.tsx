"use client";

import { cn } from "@/lib/cn";
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
    <>
      <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <div className="mx-auto flex max-w-md overflow-hidden rounded-full border border-ink/10 bg-ink/92 text-ivory shadow-[0_-12px_40px_-18px_rgba(28,25,23,0.55)] backdrop-blur-xl">
          {items.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "flex min-h-12 flex-1 items-center justify-center text-sm tracking-wide",
                index > 0 && "border-l border-ivory/15",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {hasWhatsApp && whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-5 bottom-6 z-[60] hidden min-h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-medium text-white shadow-[0_12px_32px_-12px_rgba(37,211,102,0.9)] transition-transform hover:scale-[1.03] md:inline-flex"
          aria-label="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 fill-current"
          >
            <path d="M12.04 2C6.5 2 2.03 6.45 2.03 12c0 1.75.46 3.45 1.32 4.95L2 22l5.2-1.32A10.02 10.02 0 0 0 12.04 22C17.57 22 22 17.55 22 12S17.57 2 12.04 2zm.01 18.13c-1.5 0-2.96-.4-4.24-1.15l-.3-.18-3.08.78.82-3-.2-.31A8.1 8.1 0 0 1 3.9 12c0-4.47 3.66-8.1 8.15-8.1 4.48 0 8.12 3.63 8.12 8.1 0 4.47-3.64 8.13-8.12 8.13zm4.46-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.61.57.24 1.02.39 1.37.5.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
          </svg>
          WhatsApp
        </a>
      ) : null}
    </>
  );
}
