import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageCircle, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/services/ServiceCard";
import Reveal from "@/components/Reveal";
import { SERVICES, SERVICE_CATEGORIES, waLink } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Services() {
  const [params, setParams] = useSearchParams();
  const active = params.get("category") || "all";

  const filtered = useMemo(
    () => (active === "all" ? SERVICES : SERVICES.filter((service) => service.category === active)),
    [active]
  );

  const setActive = (id) => {
    if (id === "all") setParams({}, { replace: true });
    else setParams({ category: id }, { replace: true });
  };

  return (
    <>
      <PageHeader
        eyebrow="Services & Investment"
        title={
          <>
            Our Signature Services &amp; <span className="italic text-champagne">Investment Menu</span>
          </>
        }
        subtitle="Every price below is transparent and honest — what you see is what you are quoted. Final pricing is confirmed after a short consultation about hair length, skin prep and your event timeline."
      />

      <section className="section pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = active === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  className={cn(
                    "shrink-0 whitespace-nowrap border px-5 py-3 font-label text-[9.5px] uppercase tracking-[0.2em] transition-all duration-300",
                    isActive
                      ? "border-champagne bg-champagne/[0.12] text-champagne shadow-[0_0_30px_-12px_rgba(212,175,55,0.8)]"
                      : "border-white/10 text-alabaster/55 hover:border-champagne/40 hover:text-alabaster"
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <p className="mt-8 font-label text-[9px] uppercase tracking-[0.24em] text-alabaster/35">
            {filtered.length} {filtered.length === 1 ? "ritual" : "rituals"} in this category
          </p>

          <div key={active} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {filtered.map((service, index) => (
              <Reveal key={service.id} delay={Math.min(index, 5) * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-champagne/20 bg-[#0d0d0d] p-7 sm:flex-row sm:items-center sm:p-9">
            <div className="flex gap-4">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.4} />
              <div>
                <h3 className="font-heading text-2xl">Not sure which service you need?</h3>
                <p className="mt-2 max-w-lg text-xs leading-relaxed text-alabaster/55">
                  Send us your wedding dates and outfit colours on WhatsApp. Our senior artist will
                  recommend the right look and build a package around your budget.
                </p>
              </div>
            </div>
            <a
              href={waLink("Hi Ayushi Beauty Parlour, I'd like help choosing the right service for my wedding.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shrink-0"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
              Ask an artist
            </a>
          </div>

          <p className="mt-8 text-center text-[11px] leading-relaxed text-alabaster/30">
            Prices are indicative ranges in INR and may vary with hair length, product choice and
            location travel. Bridal trials are charged separately.
          </p>
        </div>
      </section>
    </>
  );
}