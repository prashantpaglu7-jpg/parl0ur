import React, { useEffect, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { COURSES, waLink } from "@/data/site";

const EMPTY = { full_name: "", phone: "", course: "", message: "" };

export default function InquiryForm({ selectedCourse }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (selectedCourse) {
      setForm((prev) => ({ ...prev, course: selectedCourse }));
      setErrors((prev) => ({ ...prev, course: undefined }));
    }
  }, [selectedCourse]);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.full_name.trim().length < 2) next.full_name = "Please share your full name.";
    const digits = form.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(digits.slice(-10))) next.phone = "Enter a valid 10-digit mobile number.";
    if (!form.course) next.course = "Choose the course you're interested in.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("saving");
    setSubmitError("");
    try {
      await base44.entities.AcademyInquiry.create({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        course: form.course,
        message: form.message.trim(),
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setSubmitError("We couldn't send your enquiry just now. Please try WhatsApp instead.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center border border-champagne/25 bg-[#0d0d0d] p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-champagne" strokeWidth={1.1} />
        <h3 className="mt-6 font-heading text-3xl">Enquiry received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-alabaster/60">
          Thank you, {form.full_name.split(" ")[0]}. Our academy counsellor will call you on{" "}
          {form.phone} within 24 hours with the batch schedule and fee plan.
        </p>
        <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
          <a
            href={waLink(
              `Hi Ayushi Pro Academy, I've just enquired about the ${form.course}. My name is ${form.full_name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setForm(EMPTY);
              setStatus("idle");
            }}
            className="font-label text-[9px] uppercase tracking-[0.2em] text-alabaster/40 transition-colors hover:text-champagne"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"
      noValidate
    >
      <p className="eyebrow">Admission Enquiry</p>
      <h3 className="mt-4 font-heading text-3xl leading-tight">Request a callback</h3>
      <p className="mt-3 text-xs leading-relaxed text-alabaster/50">
        Tell us which course interests you. Seats are limited to six students per batch so every
        artist gets hands-on time.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="full_name" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Full name
          </label>
          <input
            id="full_name"
            value={form.full_name}
            onChange={update("full_name")}
            placeholder="Your name"
            className="mt-2 w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/25 transition-colors focus:border-champagne/60 focus:outline-none"
          />
          {errors.full_name ? <p className="mt-1.5 text-[11px] text-blush">{errors.full_name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Mobile number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="10-digit number"
            className="mt-2 w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/25 transition-colors focus:border-champagne/60 focus:outline-none"
          />
          {errors.phone ? <p className="mt-1.5 text-[11px] text-blush">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="course" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Selected course
          </label>
          <select
            id="course"
            value={form.course}
            onChange={update("course")}
            className="mt-2 w-full appearance-none border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster transition-colors focus:border-champagne/60 focus:outline-none"
          >
            <option value="">Choose a course</option>
            {COURSES.map((course) => (
              <option key={course.id} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.course ? <p className="mt-1.5 text-[11px] text-blush">{errors.course}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Anything else? <span className="normal-case tracking-normal text-alabaster/30">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={update("message")}
            placeholder="Your experience level, preferred batch timing…"
            className="mt-2 w-full resize-none border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/25 transition-colors focus:border-champagne/60 focus:outline-none"
          />
        </div>
      </div>

      {submitError ? <p className="mt-4 text-[11px] text-blush">{submitError}</p> : null}

      <button
        type="submit"
        disabled={status === "saving"}
        className="btn-gold mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "saving" ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
        ) : (
          <Send className="h-4 w-4" strokeWidth={1.8} />
        )}
        {status === "saving" ? "Sending" : "Submit enquiry"}
      </button>
      <p className="mt-4 text-center text-[10px] leading-relaxed text-alabaster/30">
        We only use your number to discuss admissions. No marketing calls.
      </p>
    </form>
  );
}