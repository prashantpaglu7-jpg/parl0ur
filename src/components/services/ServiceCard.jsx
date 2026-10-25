import React from "react";
import { Clock, MessageCircle } from "lucide-react";
import { SERVICE_CATEGORIES, waLink } from "@/data/site";

export default function ServiceCard({ service }) {
  const categoryLabel =
    SERVICE_CATEGORIES.find((category) => category.id === service.category)?.label || "Signature";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#0d0d0d] p-6 gold-rim sm:p-7">
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-label text-[8.5px] uppercase tracking-[0.24em] text-champagne/70">
          {categoryLabel}
        </span>
        <span className="flex items-center gap-1.5 whitespace-nowrap text-[10px] text-alabaster/40">
          <Clock className="h-3 w-3" strokeWidth={1.6} />
          {service.duration}
        </span>
      </div>

      <h3 className="relative mt-5 font-heading text-[1.6rem] leading-[1.15] text-alabaster">
        {service.name}
      </h3>
      <p className="relative mt-3 flex-1 text-xs leading-relaxed text-alabaster/55">{service.description}</p>

      <div className="relative mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-white/5 pt-5">
        <div>
          <p className="font-label text-[8px] uppercase tracking-[0.24em] text-alabaster/35">Investment</p>
          <p className="mt-1 font-heading text-xl text-champagne">{service.price}</p>
        </div>
        <a
          href={waLink(`Hi Ayushi Beauty Parlour, I want to inquire about the ${service.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-champagne/30 px-4 py-2.5 font-label text-[9px] uppercase tracking-[0.18em] text-alabaster transition-all duration-300 hover:border-champagne hover:bg-champagne/10 hover:text-champagne"
          data-cursor="Book"
        >
          <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.7} />
          Book via WhatsApp
        </a>
      </div>
    </article>
  );
}