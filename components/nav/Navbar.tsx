"use client";

import { hasWhatsApp, site, telHref, whatsappHref } from "@/content/site";
import { directionsHref } from "@/lib/maps";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useState } from "react";

const links = [
  { href: "#explore", label: "Explore" },
  { href: "#celebrations", label: "Celebrations" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");
  const reduced = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "explore", "celebrations", "reviews", "visit"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[60] flex justify-center px-4 pt-4 transition-all duration-500",
          scrolled ? "pt-3" : "pt-5",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-[background-color,box-shadow,backdrop-filter] duration-500 md:px-5",
            scrolled
              ? "bg-ivory/80 shadow-[0_12px_40px_-20px_rgba(255,46,138,0.35)] backdrop-blur-xl"
              : "bg-transparent",
          )}
        >
          <a
            href="#hero"
            className="font-display text-[1.15rem] leading-none tracking-tight text-ink md:text-xl"
          >
            Ridhhi
            <span className="ml-1.5 font-sans text-[0.65rem] tracking-[0.18em] text-ink-soft uppercase">
              Party Shop
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-active={active === link.href}
                  className="nav-link text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {hasWhatsApp && whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-11 items-center rounded-full bg-coral px-5 text-sm text-ivory shadow-[0_8px_22px_-10px_rgba(255,46,138,0.85)] transition-transform hover:scale-[1.02] md:inline-flex"
              >
                WhatsApp
              </a>
            ) : null}
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-sm text-ivory transition-transform hover:scale-[1.02] md:inline-flex"
            >
              Get Directions
            </a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 flex-col items-end justify-center gap-1.5 rounded-full px-3 md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={cn(
                  "block h-px w-6 bg-ink transition-transform duration-300",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-4 bg-ink transition-all duration-300",
                  open && "w-6 -translate-y-[3px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: "-8%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: "-6%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[55] flex flex-col justify-end bg-ivory md:hidden"
          >
            <div className="flex flex-1 flex-col justify-end px-7 pb-28 pt-28">
              <p className="mb-8 text-xs tracking-[0.28em] text-ink-soft uppercase">
                {site.locality}, {site.city}
              </p>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={reduced ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * index, duration: 0.45 }}
                      className="font-display block py-2 text-5xl leading-[0.95] tracking-tight"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
              {hasWhatsApp && whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-6 text-ivory"
                >
                  WhatsApp Us
                </a>
              ) : null}
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-ivory",
                  hasWhatsApp ? "mt-4" : "mt-10",
                )}
              >
                Get Directions
              </a>
              {telHref ? (
                <p className="mt-4 text-sm text-ink-soft">
                  <a href={telHref} className="underline decoration-champagne">
                    Call the shop
                  </a>
                </p>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
