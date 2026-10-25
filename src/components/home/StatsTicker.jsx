import React, { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";

function Counter({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1700;
    let frame;
    const start = performance.now() + delay;
    const tick = (now) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, delay]);

  return (
    <div ref={ref} className="flex-1 px-6 py-8 text-center sm:px-10 sm:py-10">
      <div className="font-heading text-4xl leading-none text-champagne sm:text-5xl lg:text-6xl">
        {count}
        <span className="text-2xl sm:text-3xl">{suffix}</span>
      </div>
      <p className="mt-3 font-label text-[9px] uppercase tracking-[0.28em] text-alabaster/50 sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}

export default function StatsTicker() {
  return (
    <section className="relative border-y border-champagne/15 bg-[#0e0e0e]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.06),transparent_35%,transparent_65%,rgba(212,175,55,0.06))]" />
      <div className="relative mx-auto flex max-w-6xl flex-col divide-y divide-champagne/10 sm:flex-row sm:divide-x sm:divide-y-0">
        {STATS.map((stat, i) => (
          <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 160} />
        ))}
      </div>
    </section>
  );
}