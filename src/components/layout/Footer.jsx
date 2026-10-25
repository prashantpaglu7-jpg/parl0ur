import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle, Instagram, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS, waLink, mapDirectionsLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-champagne/15 bg-[#080808]">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/50">
                <span className="font-heading text-lg leading-none text-champagne">A</span>
              </span>
              <span className="font-heading text-lg uppercase tracking-[0.24em] text-alabaster">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-alabaster/55">
              A bridal beauty parlour, advanced hair lounge and professional makeup academy in the
              heart of Muzaffarpur.
            </p>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.24em] text-alabaster/60 transition-colors hover:text-champagne"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.6} />
              Follow the studio
            </a>
          </div>

          <div>
            <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-champagne">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-alabaster/60 transition-colors hover:text-alabaster"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-champagne">Visit</h3>
            <ul className="mt-5 space-y-4 text-sm text-alabaster/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne/70" strokeWidth={1.5} />
                <span>
                  {BRAND.addressLine1}
                  <br />
                  {BRAND.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-champagne/70" strokeWidth={1.5} />
                <span>
                  {BRAND.hours}
                  <br />
                  {BRAND.hoursNote}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-champagne">Reserve</h3>
            <ul className="mt-5 space-y-4 text-sm text-alabaster/60">
              <li>
                <a
                  href={`tel:${BRAND.phonePrimary.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-alabaster"
                >
                  <Phone className="h-4 w-4 text-champagne/70" strokeWidth={1.5} />
                  {BRAND.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi Ayushi Beauty Parlour, I'd like to enquire about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-alabaster"
                >
                  <MessageCircle className="h-4 w-4 text-champagne/70" strokeWidth={1.5} />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={mapDirectionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-alabaster"
                >
                  <MapPin className="h-4 w-4 text-champagne/70" strokeWidth={1.5} />
                  Get directions
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 hairline" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[11px] text-alabaster/35 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.</p>
          <p className="font-label uppercase tracking-[0.22em]">Crafted in Muzaffarpur</p>
        </div>
      </div>
    </footer>
  );
}