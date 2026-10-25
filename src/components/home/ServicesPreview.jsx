import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";
import { SERVICE_PREVIEW } from "@/data/site";

export default function ServicesPreview() {
  return (
    <section className="section relative border-y border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow">The Signature Set</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.08] sm:text-5xl">
              Four rituals that define <span className="italic text-champagne">Ayushi.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.24em] text-alabaster/70 transition-colors hover:text-champagne"
            >
              View the full menu
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {SERVICE_PREVIEW.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <Link
                to={`/services?category=${service.category}`}
                className="group relative block overflow-hidden border border-champagne/15 gold-rim"
                data-cursor="Explore"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    fittingType="fill"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-heading text-2xl leading-tight text-alabaster">{service.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-alabaster/60 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                      {service.copy}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-label text-[9px] uppercase tracking-[0.24em] text-champagne">
                      Discover
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}