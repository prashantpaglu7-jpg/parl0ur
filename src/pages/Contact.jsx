import React from "react";
import { MapPin, Phone, Clock, MessageCircle, ArrowUpRight, Navigation } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/contact/BookingForm";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import {
  BRAND,
  STUDIO_IMAGE,
  waLink,
  mapEmbedSrc,
  mapDirectionsLink,
} from "@/data/site";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & Booking"
        title={
          <>
            Visit Our Beauty Parlour &amp; <span className="italic text-champagne">Book Your Slot</span>
          </>
        }
        subtitle="Walk in for a consultation or reserve your date in advance. Our team is on the floor seven days a week."
      />

      <section className="section pt-12 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <Reveal>
            <div className="relative overflow-hidden border border-champagne/20">
              <Image
                src={STUDIO_IMAGE}
                alt="Ayushi Beauty Parlour reception with gold mirrors and velvet seating"
                className="aspect-[4/3] w-full object-cover"
                fittingType="fill"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-label text-[8px] uppercase tracking-[0.24em] text-champagne">
                    The Parlour
                  </p>
                  <p className="mt-1 font-heading text-2xl text-alabaster">Club Road, Muzaffarpur</p>
                </div>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/25 text-alabaster/70 backdrop-blur transition-colors hover:border-champagne hover:text-champagne"
                  aria-label="Ayushi Beauty Parlour on Instagram"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </a>
              </div>
            </div>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-champagne/30 text-champagne">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-label text-[9px] uppercase tracking-[0.24em] text-alabaster/40">
                    Address
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-alabaster/80">
                    {BRAND.addressLine1}
                    <br />
                    {BRAND.addressLine2}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-champagne/30 text-champagne">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-label text-[9px] uppercase tracking-[0.24em] text-alabaster/40">
                    Call or WhatsApp
                  </p>
                  <div className="mt-2 flex flex-col gap-1 text-sm">
                    <a
                      href={`tel:${BRAND.phonePrimary.replace(/\s/g, "")}`}
                      className="text-alabaster/80 transition-colors hover:text-champagne"
                    >
                      {BRAND.phonePrimary}
                    </a>
                    <a
                      href={`tel:${BRAND.phoneSecondary.replace(/\s/g, "")}`}
                      className="text-alabaster/80 transition-colors hover:text-champagne"
                    >
                      {BRAND.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-champagne/30 text-champagne">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-label text-[9px] uppercase tracking-[0.24em] text-alabaster/40">
                    Opening hours
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-alabaster/80">
                    {BRAND.hours}
                    <br />
                    <span className="text-champagne/80">{BRAND.hoursNote}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${BRAND.phonePrimary.replace(/\s/g, "")}`} className="btn-outline">
                <Phone className="h-4 w-4" strokeWidth={1.6} />
                Call the parlour
              </a>
              <a
                href={waLink("Hi Ayushi Beauty Parlour, I'd like to book a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                WhatsApp us
              </a>
            </div>

            <p className="mt-6 text-[11px] leading-relaxed text-alabaster/30">
              Bridal parties of three or more are requested to book at least 48 hours in advance.
              Parking is available outside the studio.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Find Us</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
                Right on Club Road, <span className="italic text-champagne">Mithanpura.</span>
              </h2>
            </div>
            <a
              href={mapDirectionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0"
            >
              <Navigation className="h-4 w-4" strokeWidth={1.6} />
              Get directions
            </a>
          </div>

          <div className="relative mt-8 overflow-hidden border border-champagne/20">
            <iframe
              title="Ayushi Beauty Parlour location map"
              src={mapEmbedSrc}
              className="h-[320px] w-full sm:h-[420px]"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.65) brightness(0.95)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 border border-white/5" />
          </div>
        </div>
      </section>
    </>
  );
}