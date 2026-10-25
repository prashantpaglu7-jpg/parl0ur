import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import StatsTicker from "@/components/home/StatsTicker";
import BeforeAfter from "@/components/home/BeforeAfter";
import ServicesPreview from "@/components/home/ServicesPreview";
import ClientLove from "@/components/home/ClientLove";
import Reveal from "@/components/Reveal";
import { waLink } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsTicker />
      <BeforeAfter />
      <ServicesPreview />
      <ClientLove />

      <section className="relative overflow-hidden border-t border-champagne/15">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="eyebrow">Your Date, Reserved</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.1] text-balance sm:text-5xl">
              Wedding season books out early.
              <span className="block italic text-champagne">Let's hold your date.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-alabaster/60">
              Share your wedding dates and we'll build a look, a trial and a timeline around them —
              with one dedicated artist from first consultation to the final photograph.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi Ayushi Beauty Parlour, my wedding date is coming up. Please help me reserve a bridal slot.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                Reserve on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline">
                Visit the studio
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}