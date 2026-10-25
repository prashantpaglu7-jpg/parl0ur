import React, { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GalleryLightbox from "@/components/portfolio/GalleryLightbox";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import { GALLERY, GALLERY_CATEGORIES } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const items = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((item) => item.category === filter)),
    [filter]
  );

  const changeFilter = (id) => {
    setFilter(id);
    setActiveIndex(null);
  };

  return (
    <>
      <PageHeader
        eyebrow="The Vault"
        title={
          <>
            The Bridal Vault — <span className="italic text-champagne">Cinematic Gallery</span>
          </>
        }
        subtitle="Real brides, unretouched light. A curated archive of the looks created inside our studio — traditional heirlooms, reception glamour, haldi mornings and every detail in between."
      />

      <section className="section pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = filter === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => changeFilter(category.id)}
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

          <div key={filter} className="group/grid mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5 [&>*]:mb-4 lg:[&>*]:mb-5">
            {items.map((item, index) => (
              <Reveal key={item.id} delay={Math.min(index, 6) * 60} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative block w-full overflow-hidden border border-white/10 text-left transition-all duration-500 hover:border-champagne/50 hover:!opacity-100 group-hover/grid:opacity-45"
                  data-cursor="View"
                >
                  <div className={cn("relative w-full overflow-hidden", item.tall ? "aspect-[3/4]" : "aspect-square")}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                      fittingType="fill"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-heading text-xl text-alabaster">{item.title}</p>
                      <p className="mt-1 font-label text-[8px] uppercase tracking-[0.2em] text-champagne">
                        {item.description}
                      </p>
                    </div>
                    <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-white/25 bg-midnight/50 text-alabaster/80 opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                      <Expand className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null ? (
        <GalleryLightbox
          items={items}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </>
  );
}