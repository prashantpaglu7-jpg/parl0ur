import React, { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";
import { BEFORE_AFTER } from "@/data/site";

export default function BeforeAfter() {
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef(null);
  const rafRef = useRef(0);

  const updateFromClientX = useCallback((clientX) => {
    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = 0;
      const node = frameRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.min(Math.max(next, 2), 98));
    });
  }, []);

  const handlePointerDown = (event) => {
    setDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => setDragging(false);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(2, p - 4));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(98, p + 4));
    }
  };

  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 bg-[radial-gradient(closest-side,rgba(247,202,201,0.10),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <Reveal>
          <p className="eyebrow">The Transformation</p>
          <h2 className="mt-5 font-heading text-4xl leading-[1.08] sm:text-5xl">
            Raw beauty, then the <span className="italic text-champagne">Ayushi finish.</span>
          </h2>
          <div className="mt-6 hairline w-24" />
          <p className="mt-7 max-w-md text-sm leading-relaxed text-alabaster/60 sm:text-base">
            No filters, no heavy layering. Just skin that reads luminous on camera, features mapped to
            your bone structure and a finish that lasts fourteen hours — through the baraat, the
            pheras and the last photograph of the night.
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="font-label text-[9px] uppercase tracking-[0.26em] text-champagne/80">
                Application
              </dt>
              <dd className="mt-2 text-alabaster/70">Weightless airbrush &amp; HD base</dd>
            </div>
            <div>
              <dt className="font-label text-[9px] uppercase tracking-[0.26em] text-champagne/80">
                Wear Time
              </dt>
              <dd className="mt-2 text-alabaster/70">14+ hours, photograph tested</dd>
            </div>
          </dl>

          <p className="mt-9 flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.22em] text-alabaster/40">
            <MoveHorizontal className="h-4 w-4 text-champagne" strokeWidth={1.6} />
            Drag the slider to reveal
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={frameRef}
            className="group relative mx-auto w-full max-w-md touch-none select-none overflow-hidden border border-champagne/20 shadow-[0_40px_120px_-60px_rgba(212,175,55,0.6)]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onPointerLeave={stopDragging}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={BEFORE_AFTER.after}
                alt="Bride with finished airbrush bridal makeup"
                className="absolute inset-0 h-full w-full object-cover"
                fittingType="fill"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <Image
                  src={BEFORE_AFTER.before}
                  alt="Natural bare-faced look before bridal makeup"
                  className="h-full w-full object-cover grayscale-[0.15]"
                  fittingType="fill"
                  loading="lazy"
                />
              </div>

              <span className="pointer-events-none absolute bottom-4 left-4 border border-white/20 bg-midnight/70 px-3 py-1.5 font-label text-[9px] uppercase tracking-[0.24em] text-alabaster/80 backdrop-blur">
                Before
              </span>
              <span className="pointer-events-none absolute bottom-4 right-4 border border-champagne/40 bg-midnight/70 px-3 py-1.5 font-label text-[9px] uppercase tracking-[0.24em] text-champagne backdrop-blur">
                After
              </span>

              <div
                className="pointer-events-none absolute inset-y-0 w-px bg-champagne/80 shadow-[0_0_18px_rgba(212,175,55,0.9)]"
                style={{ left: `${position}%` }}
              />
              <button
                type="button"
                role="slider"
                aria-label="Before and after comparison"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-champagne/70 bg-midnight/85 text-champagne backdrop-blur transition-transform duration-300 hover:scale-105"
                style={{ left: `${position}%` }}
              >
                <MoveHorizontal className="h-4 w-4" strokeWidth={1.7} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}