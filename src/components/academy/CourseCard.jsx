import React from "react";
import { Clock3, GraduationCap, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function CourseCard({ course, onEnquire }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0d0d0d] gold-rim">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          fittingType="fill"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
        <span className="absolute left-4 top-4 border border-champagne/40 bg-midnight/70 px-3 py-1.5 font-label text-[8px] uppercase tracking-[0.2em] text-champagne backdrop-blur">
          {course.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-[1.45rem] leading-tight text-alabaster">{course.title}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[10px] text-alabaster/45">
          <span className="flex items-center gap-1.5">
            <Clock3 className="h-3 w-3" strokeWidth={1.6} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.6} />
            {course.level}
          </span>
        </div>

        <ul className="mt-5 flex-1 space-y-2.5">
          {course.includes.map((item) => (
            <li key={item} className="flex gap-2.5 text-[11.5px] leading-relaxed text-alabaster/55">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne/70" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between border-t border-white/5 pt-5">
          <div>
            <p className="font-label text-[8px] uppercase tracking-[0.24em] text-alabaster/35">
              Course Fee
            </p>
            <p className="mt-1 font-heading text-xl text-champagne">{course.fee}</p>
          </div>
          <button
            type="button"
            onClick={() => onEnquire(course.title)}
            className="inline-flex items-center gap-2 font-label text-[9px] uppercase tracking-[0.18em] text-alabaster/70 transition-colors hover:text-champagne"
          >
            Enquire
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}