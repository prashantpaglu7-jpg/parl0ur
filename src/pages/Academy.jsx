import React, { useRef, useState } from "react";
import { Sparkles, BadgeCheck, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/academy/CourseCard";
import InquiryForm from "@/components/academy/InquiryForm";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import { ACADEMY_IMAGE, BRAND, COURSES, waLink } from "@/data/site";

const HIGHLIGHTS = [
  {
    icon: BadgeCheck,
    title: "Government-recognised certification",
    copy: "Every graduate leaves with a printed certificate and a portfolio of their own live work.",
  },
  {
    icon: Users,
    title: "Six students per batch",
    copy: "Small groups mean the instructor corrects your hand, not just the demo head.",
  },
  {
    icon: Sparkles,
    title: "Real bridal floor experience",
    copy: "Final-month students assist on live bridal bookings under supervision.",
  },
];

export default function Academy() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const formRef = useRef(null);

  const handleEnquire = (courseTitle) => {
    setSelectedCourse(courseTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHeader
        eyebrow={BRAND.academyName}
        title={
          <>
            Master the Art of Beauty —{" "}
            <span className="italic text-champagne">{BRAND.academyName}</span>
          </>
        }
        subtitle="Professional certificate courses in makeup, cosmetology and hair styling for aspiring artists across Muzaffarpur and North Bihar."
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <Reveal>
            <div className="relative overflow-hidden border border-champagne/20">
              <Image
                src={ACADEMY_IMAGE}
                alt={`Professional makeup workstation inside the ${BRAND.academyName}`}
                className="aspect-[4/3] w-full object-cover"
                fittingType="fill"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 border border-champagne/30 bg-midnight/70 px-4 py-2.5 backdrop-blur">
                <p className="font-label text-[8px] uppercase tracking-[0.24em] text-champagne">
                  Est. 2015 · Muzaffarpur
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">The Programme</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.1] sm:text-[2.9rem]">
              Learn the craft behind the <span className="italic text-champagne">Ayushi look.</span>
            </h2>
            <div className="mt-6 hairline w-24" />
            <p className="mt-7 text-sm leading-relaxed text-alabaster/60">
              {BRAND.academyName} trains artists the way a parlour actually works — on real skin, under
              real lighting, with real deadlines. You will learn preparation, colour theory, product
              knowledge and client handling, then practise on models until the technique becomes
              instinct.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-alabaster/60">
              Our courses suit complete beginners, working salon staff who want to add bridal
              expertise, and brides-to-be who want to master their own everyday glamour.
            </p>

            <div className="mt-9 space-y-5">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-champagne/30 text-champagne">
                    <item.icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm text-alabaster">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-alabaster/50">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink(`Hi ${BRAND.academyName}, I'd like the full course brochure and batch dates.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-9"
            >
              Request the brochure
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a0a0a] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Certified Courses</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.1] sm:text-5xl">
              Three paths into the <span className="italic text-champagne">industry.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, index) => (
              <Reveal key={course.id} delay={index * 90}>
                <CourseCard course={course} onEnquire={handleEnquire} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section ref={formRef} className="section scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
          <Reveal>
            <p className="eyebrow">Next Batch</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.1] sm:text-[2.9rem]">
              Your seat on the <span className="italic text-champagne">studio floor.</span>
            </h2>
            <div className="mt-6 hairline w-24" />
            <p className="mt-7 text-sm leading-relaxed text-alabaster/60">
              New batches begin on the first Monday of every month. Share your details and our academy
              counsellor will call you with the schedule, fee plan and kit list.
            </p>
            <dl className="mt-9 space-y-4 border-t border-white/5 pt-7 text-sm">
              <div className="flex justify-between gap-6">
                <dt className="text-alabaster/45">Batch size</dt>
                <dd className="text-alabaster/80">6 students maximum</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-alabaster/45">Class timings</dt>
                <dd className="text-alabaster/80">11 AM – 2 PM · Mon to Fri</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-alabaster/45">Certification</dt>
                <dd className="text-alabaster/80">{BRAND.academyName} certified</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-alabaster/45">Studio</dt>
                <dd className="text-alabaster/80">Club Road, Muzaffarpur</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <InquiryForm selectedCourse={selectedCourse} />
          </Reveal>
        </div>
      </section>
    </>
  );
}