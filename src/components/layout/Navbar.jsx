import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { NAV_LINKS, BRAND, waLink } from "@/data/site";
import { cn } from "@/lib/utils";

const BOOKING_MESSAGE =
  "Hi Ayushi Beauty Parlour, I'd like to book an appointment. Could you share your availability?";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-strong border-b border-champagne/15 py-2.5"
            : "border-b border-transparent py-4 sm:py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-champagne/50 transition-colors duration-500 group-hover:border-champagne">
              <span className="font-heading text-lg leading-none text-champagne">A</span>
              <span className="absolute inset-0 rounded-full shadow-[0_0_24px_-6px_rgba(212,175,55,0.8)]" />
            </span>
            <span className="leading-none">
              <span className="block font-heading text-base uppercase tracking-[0.24em] text-alabaster sm:text-lg">
                {BRAND.name}
              </span>
              <span className="mt-1 block font-label text-[8px] uppercase tracking-[0.24em] text-champagne/70 sm:text-[9px]">
                {BRAND.descriptor}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-9">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "gold-underline font-label text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 lg:text-[11px] lg:tracking-[0.24em]",
                    isActive
                      ? "text-champagne after:w-full"
                      : "text-alabaster/70 hover:text-alabaster"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on WhatsApp"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#1faa53] text-white transition-colors hover:bg-[#25d366] md:inline-flex lg:hidden"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
            </a>
            <a
              href={waLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden !py-3 !text-[10px] lg:inline-flex"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
              Book on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center border border-champagne/25 text-alabaster transition-colors hover:border-champagne/70 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] transition-all duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-midnight/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "relative flex h-full flex-col px-6 pb-10 pt-6 transition-transform duration-500",
            open ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-base uppercase tracking-[0.24em] text-alabaster">
              {BRAND.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-champagne/25 text-alabaster"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mt-16 flex flex-1 flex-col gap-1">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "border-b border-white/5 py-4 font-heading text-3xl transition-colors",
                    isActive ? "text-champagne" : "text-alabaster/80"
                  )
                }
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <a
              href={waLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
              Book on WhatsApp
            </a>
            <a href={`tel:${BRAND.phonePrimary.replace(/\s/g, "")}`} className="btn-outline w-full">
              <Phone className="h-4 w-4" strokeWidth={1.6} />
              {BRAND.phonePrimary}
            </a>
            <p className="pt-2 text-center font-label text-[10px] uppercase tracking-[0.24em] text-alabaster/40">
              {BRAND.hours} · {BRAND.hoursNote}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}