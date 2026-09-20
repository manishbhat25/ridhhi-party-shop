"use client";

import { celebrations, type Celebration } from "@/content/celebrations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function Scene({ celebration }: { celebration: Celebration }) {
  return (
    <div className="relative h-[min(68vh,560px)] overflow-hidden rounded-[2rem] bg-ink md:h-[680px] md:rounded-[2.5rem]">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${celebration.from} 0%, ${celebration.to} 100%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-[-8%] left-[-4%] h-[78%] w-[58%] overflow-hidden rounded-[1.6rem] shadow-2xl md:left-[6%]">
          <Image
            src={celebration.images[0]}
            alt=""
            width={900}
            height={1100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-[12%] right-[6%] h-[42%] w-[36%] rotate-3 overflow-hidden rounded-[1.4rem] shadow-2xl">
          <Image
            src={celebration.images[1]}
            alt=""
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute right-[18%] bottom-[18%] h-[32%] w-[28%] -rotate-6 overflow-hidden rounded-[1.2rem] shadow-xl">
          <Image
            src={celebration.images[2]}
            alt=""
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
        <p className="text-xs tracking-[0.24em] text-ivory/70 uppercase">
          {celebration.scene}
        </p>
        <p className="font-display mt-3 max-w-xl text-3xl leading-[1.05] text-ivory md:text-5xl">
          {celebration.line}
        </p>
      </div>
    </div>
  );
}

export function CelebrationBuilder() {
  const [active, setActive] = useState<Celebration>(celebrations[0]);
  const reduced = useReducedMotion();

  return (
    <section id="celebrations" className="scroll-mt-28 px-5 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.28em] text-ink-soft uppercase">
          Build your celebration
        </p>
        <h2 className="font-display mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.04em]">
          What are we celebrating?
        </h2>

        <div
          role="tablist"
          aria-label="Celebration type"
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
        >
          {celebrations.map((item) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(item)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full px-4 text-sm transition-colors",
                  selected
                    ? "bg-ink text-ivory"
                    : "border border-ink/10 bg-paper text-ink-soft hover:border-ink/30",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Scene celebration={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <p className="font-display max-w-xl text-2xl leading-snug md:text-3xl">
            Find everything for your celebration at Ridhhi Party Shop.
          </p>
          <Button href="#visit" variant="coral">
            Visit the Store
          </Button>
        </div>
      </div>
    </section>
  );
}
