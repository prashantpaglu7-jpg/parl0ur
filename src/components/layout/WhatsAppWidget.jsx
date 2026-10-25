import React from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

const DEFAULT_MESSAGE =
  "Hi Ayushi Beauty Parlour, I found you online and would like to book an appointment. Please share your availability.";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      <a
        href={waLink(DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        aria-label="Chat with Ayushi Beauty Parlour on WhatsApp"
      >
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-champagne/25 bg-midnight/90 px-3 py-2 font-label text-[10px] uppercase tracking-[0.2em] text-alabaster opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 sm:block">
          Chat with us
        </span>
        <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-pulse-ring" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.9)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#25d366]">
          <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
        </span>
      </a>
    </div>
  );
}