"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "motion/react";
import { useRef, type MouseEvent, type ReactNode, type RefObject } from "react";

type Variant = "ink" | "coral" | "outline" | "ghost" | "gold";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-ivory hover:bg-ink/90",
  coral: "bg-coral text-ivory hover:bg-coral/90",
  outline:
    "border border-ink/15 bg-ivory/40 text-ink backdrop-blur-sm hover:border-ink/40 hover:bg-ivory",
  ghost: "text-ink hover:bg-ink/5",
  gold: "bg-champagne text-ink hover:bg-champagne/90",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "ink",
  className,
  magnetic = true,
  type = "button",
  onClick,
  ariaLabel,
  external,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-[transform,background-color,border-color,color] duration-300 will-change-transform",
    variants[variant],
    className,
  );

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const onMove = (event: MouseEvent) => {
    if (!magnetic || reduced) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      type={type}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
