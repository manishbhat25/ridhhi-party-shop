"use client";

import { useReducedMotion, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const chapters = [
  {
    kicker: "01",
    title: "Need it.",
    copy: "A last-minute birthday. A school function tomorrow. A quiet anniversary at home.",
  },
  {
    kicker: "02",
    title: "Find it.",
    copy: "Balloons, wrapping, banners, toys, return gifts — the shelf is already thinking with you.",
  },
  {
    kicker: "03",
    title: "Celebrate it.",
    copy: "Walk out of Kalyanpur ready. The party is no longer a list. It is a bag in your hand.",
  },
];

const reasons = [
  {
    title: "Huge celebration variety",
    copy: "From classroom days to late-night surprises, the mix is wide on purpose.",
  },
  {
    title: "Friendly local service",
    copy: "People come back because someone behind the counter actually helps.",
  },
  {
    title: "Party essentials, one place",
    copy: "Less running around Kanpur. More time for the people you are celebrating.",
  },
  {
    title: "Room for every budget",
    copy: "Small tokens and full décor — you choose the scale, not a catalogue.",
  },
  {
    title: "Convenient Kalyanpur location",
    copy: "A neighbourhood shop, close enough to drop in when the idea appears.",
  },
];

export function WhyVisit() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section className="bg-ink text-ivory">
      <div className="px-5 pt-16 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.28em] text-champagne uppercase">
            Why visit
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.92] tracking-[-0.04em]">
            One shop.
            <br />
            Hundreds of celebration ideas.
          </h2>
        </div>
      </div>

      <div className="mt-12 md:hidden">
        {chapters.map((chapter) => (
          <article
            key={chapter.title}
            className="border-t border-ivory/10 px-5 py-14"
          >
            <p className="text-champagne">{chapter.kicker}</p>
            <h3 className="font-display mt-4 text-5xl tracking-tight text-ivory">
              {chapter.title}
            </h3>
            <p className="mt-4 max-w-md text-ivory/70">{chapter.copy}</p>
          </article>
        ))}
      </div>

      {reduced ? (
        <div className="hidden md:block">
          {chapters.map((chapter) => (
            <article
              key={`desk-${chapter.title}`}
              className="border-t border-ivory/10 px-20 py-20"
            >
              <p className="text-champagne">{chapter.kicker}</p>
              <h3 className="font-display mt-4 text-7xl tracking-tight text-ivory">
                {chapter.title}
              </h3>
              <p className="mt-4 max-w-md text-ivory/70">{chapter.copy}</p>
            </article>
          ))}
        </div>
      ) : (
        <div ref={ref} className="relative hidden h-[280vh] md:block">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex w-[300vw]">
              {chapters.map((chapter) => (
                <article
                  key={chapter.title}
                  className="flex h-screen w-screen items-center px-20"
                >
                  <div className="max-w-3xl">
                    <p className="text-sm tracking-[0.3em] text-champagne uppercase">
                      {chapter.kicker}
                    </p>
                    <h3 className="font-display mt-6 text-[clamp(4rem,10vw,9rem)] leading-[0.85] tracking-[-0.05em] text-ivory">
                      {chapter.title}
                    </h3>
                    <p className="mt-8 max-w-md text-lg text-ivory/70">
                      {chapter.copy}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-px bg-ivory/10 px-5 py-20 md:grid-cols-5 md:px-0">
        {reasons.map((reason, index) => (
          <article
            key={reason.title}
            className="bg-ink px-5 py-8 text-ivory md:px-6"
          >
            <p className="font-display text-4xl text-coral">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-5 text-2xl leading-tight text-ivory">
              {reason.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              {reason.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
