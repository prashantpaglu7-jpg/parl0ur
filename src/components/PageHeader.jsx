import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, subtitle, image, align = "center" }) {
  return (
    <section className="relative overflow-hidden border-b border-champagne/10">
      {image ? (
        <div className="absolute inset-0">
          <Image src={image} alt="" className="h-full w-full object-cover opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/85 to-midnight" />
        </div>
      ) : (
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),transparent)]" />
      )}

      <div
        className={
          align === "center"
            ? "relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28"
            : "relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12"
        }
      >
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-5 font-heading text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <div className="mx-auto mt-7 hairline w-24" />
        </Reveal>
        {subtitle ? (
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-alabaster/60 sm:text-base">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}