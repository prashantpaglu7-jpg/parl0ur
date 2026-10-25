import React from "react";
import { Quote } from "lucide-react";
import { REVIEWS } from "@/data/site";

export default function ClientLove() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="eyebrow">Client Love</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl leading-[1.1] sm:text-5xl">
          Words from our <span className="italic text-champagne">Muzaffarpur brides.</span>
        </h2>
      </div>

      <div className="group relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-midnight to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-midnight to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] sm:gap-6">
          {loop.map((review, index) => (
            <figure
              key={`${review.name}-${index}`}
              className="w-[280px] shrink-0 border border-champagne/15 bg-white/[0.04] p-6 transition-colors duration-500 hover:border-champagne/40 sm:w-[360px] sm:p-8"
            >
              <Quote className="h-6 w-6 text-champagne/60" strokeWidth={1.2} />
              <blockquote className="mt-4 text-sm leading-relaxed text-alabaster/70">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/30 font-heading text-sm text-champagne">
                  {review.name.charAt(0)}
                </span>
                <div className="text-left">
                  <p className="text-sm text-alabaster">{review.name}</p>
                  <p className="font-label text-[9px] uppercase tracking-[0.18em] text-alabaster/40">
                    {review.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}