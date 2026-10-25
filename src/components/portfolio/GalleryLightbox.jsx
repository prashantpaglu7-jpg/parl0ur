import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { waLink } from "@/data/site";

export default function GalleryLightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex animate-in flex-col bg-midnight/95 backdrop-blur-xl fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-4 sm:px-8">
        <p className="font-label text-[9px] uppercase tracking-[0.26em] text-champagne">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center border border-white/15 text-alabaster/70 transition-colors hover:border-champagne hover:text-champagne"
          aria-label="Close gallery"
        >
          <X className="h-4 w-4" strokeWidth={1.6} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-3 py-6 sm:px-10">
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + items.length) % items.length)}
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-midnight/60 text-alabaster/70 backdrop-blur transition-colors hover:border-champagne hover:text-champagne sm:left-6"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <figure className="flex max-h-full flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-500">
          <Image
            key={item.id}
            src={item.src}
            alt={item.title}
            className="max-h-[62vh] w-auto max-w-full border border-champagne/20 object-contain shadow-[0_40px_140px_-60px_rgba(212,175,55,0.7)] sm:max-h-[68vh]"
            fittingType="fit"
          />
          <figcaption className="max-w-lg text-center">
            <p className="font-heading text-2xl text-alabaster sm:text-3xl">{item.title}</p>
            <p className="mt-2 inline-block border border-champagne/25 bg-champagne/[0.06] px-4 py-2 font-label text-[9px] uppercase tracking-[0.2em] text-champagne">
              {item.description}
            </p>
            <div className="mt-5 flex justify-center">
              <a
                href={waLink(
                  `Hi Ayushi Beauty Parlour, I loved the "${item.title}" look (${item.description}) from your gallery. I'd like something similar.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-3 !text-[9px]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                Share to WhatsApp
              </a>
            </div>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={() => onNavigate((index + 1) % items.length)}
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-midnight/60 text-alabaster/70 backdrop-blur transition-colors hover:border-champagne hover:text-champagne sm:right-6"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}