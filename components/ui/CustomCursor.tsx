"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);

    const onMove = (event: PointerEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, [role='button']")));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <span
        className="block rounded-full border border-champagne/80 transition-[width,height,opacity,margin] duration-300"
        style={{
          width: hovering ? 44 : 18,
          height: hovering ? 44 : 18,
          marginLeft: hovering ? -22 : -9,
          marginTop: hovering ? -22 : -9,
          opacity: hovering ? 0.55 : 0.85,
        }}
      />
    </div>
  );
}
