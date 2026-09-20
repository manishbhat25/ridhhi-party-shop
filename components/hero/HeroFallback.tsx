"use client";

import Image from "next/image";

export function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/images/hero-poster.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/50 via-ivory/15 to-ivory/70" />
    </div>
  );
}
