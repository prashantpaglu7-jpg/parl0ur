import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { Image } from "@/components/ui/image";
import { HERO_SLIDES, waLink } from "@/data/site";
import { cn } from "@/lib/utils";

const BOOKING_MESSAGE =
  "Hi Ayushi Beauty Parlour, I'd like to check availability for a bridal appointment. Could you share your packages?";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100svh_-_5rem)] items-center overflow-hidden">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1600ms] ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              className={cn("h-full w-full object-cover", i === index && "md:animate-kenburns")}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,transparent_0%,rgba(11,11,11,0.55)_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-champagne/70" />
            <p className="eyebrow">Muzaffarpur · Bridal Beauty Parlour &amp; Hair Lounge</p>
          </div>

          <h1 className="mt-7 font-heading text-[2.9rem] leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl lg:text-[4.6rem]">
            Redefining{" "}
            <span className="gold-gradient-text italic">Elegance</span>
            <br className="hidden sm:block" /> for Your Special Day.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-relaxed text-alabaster/70 sm:text-base">
            Muzaffarpur's premier bridal beauty parlour &amp; advanced hair lounge — where airbrush
            artistry, couture styling and quiet luxury meet.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/services" className="btn-gold w-full sm:w-auto" data-cursor="View">
              Explore Bridal Packages
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
            <a
              href={waLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
              Instant WhatsApp Booking
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-alabaster/50">
            <span className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3 fill-champagne text-champagne" strokeWidth={0} />
              ))}
              <span className="ml-1 font-label uppercase tracking-[0.18em] text-alabaster/70">
                Rated by 500+ brides
              </span>
            </span>
            <span className="hidden h-3 w-px bg-alabaster/20 sm:block" />
            <span className="font-label uppercase tracking-[0.18em]">Open 7 days · 9:30 AM – 8:30 PM</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-0 right-0">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={cn(
                    "h-px transition-all duration-500",
                    i === index ? "w-10 bg-champagne" : "w-5 bg-alabaster/25 group-hover:bg-alabaster/50"
                  )}
                />
                <span
                  className={cn(
                    "font-label text-[9px] tracking-[0.2em] transition-colors",
                    i === index ? "text-champagne" : "text-alabaster/35"
                  )}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden flex-col items-center gap-2 md:flex">
            <span className="font-label text-[9px] uppercase tracking-[0.3em] text-alabaster/40">Scroll</span>
            <span className="relative h-14 w-px overflow-hidden bg-alabaster/15">
              <span className="absolute inset-x-0 top-0 h-6 animate-float-soft bg-gradient-to-b from-champagne to-transparent" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}