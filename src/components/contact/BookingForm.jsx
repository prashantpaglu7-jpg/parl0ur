import React, { useState } from "react";
import { CalendarDays, CheckCircle2, Loader2, MessageCircle, Sparkles } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { SERVICES, TIME_SLOTS, waLink } from "@/data/site";

const EMPTY = {
  full_name: "",
  phone: "",
  service: "",
  preferred_date: "",
  time_slot: "",
  notes: "",
};

const todayString = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;
};

const prettyDate = (value) => {
  if (!value) return "";
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
};

export default function BookingForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.full_name.trim().length < 2) next.full_name = "Please share your full name.";
    const digits = form.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(digits.slice(-10))) next.phone = "Enter a valid 10-digit mobile number.";
    if (!form.service) next.service = "Select the service you'd like.";
    if (!form.preferred_date) next.preferred_date = "Choose a preferred date.";
    if (!form.time_slot) next.time_slot = "Pick a time slot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () =>
    [
      "Hi Ayushi Beauty Parlour, I'd like to confirm an appointment.",
      "",
      `Name: ${form.full_name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      `Preferred date: ${prettyDate(form.preferred_date)}`,
      `Time slot: ${form.time_slot}`,
      form.notes.trim() ? `Note: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("saving");
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");

    try {
      await base44.entities.BookingRequest.create({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        service: form.service,
        preferred_date: form.preferred_date,
        time_slot: form.time_slot,
        notes: form.notes.trim(),
      });
    } catch (error) {
      // WhatsApp still opens with every detail, so the guest is never blocked.
    }
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col justify-center border border-champagne/25 bg-[#0b0b0b]/80 p-7 backdrop-blur sm:p-9">
        <CheckCircle2 className="h-12 w-12 text-champagne" strokeWidth={1.1} />
        <h3 className="mt-6 font-heading text-3xl leading-tight">Your slot is requested</h3>
        <p className="mt-3 text-sm leading-relaxed text-alabaster/60">
          Thank you, {form.full_name.split(" ")[0]}. We've prepared your message — send it on
          WhatsApp and our team will confirm your slot within minutes during studio hours.
        </p>

        <dl className="mt-6 space-y-3 border-y border-white/5 py-5 text-sm">
          <div className="flex justify-between gap-6">
            <dt className="text-alabaster/40">Service</dt>
            <dd className="text-right text-alabaster/85">{form.service}</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-alabaster/40">Date</dt>
            <dd className="text-right text-alabaster/85">{prettyDate(form.preferred_date)}</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-alabaster/40">Time</dt>
            <dd className="text-right text-alabaster/85">{form.time_slot}</dd>
          </div>
        </dl>

        <a
          href={waLink(buildMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-7 w-full"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
          Open WhatsApp to confirm
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setStatus("idle");
          }}
          className="mt-4 font-label text-[9px] uppercase tracking-[0.2em] text-alabaster/40 transition-colors hover:text-champagne"
        >
          Book another slot
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-champagne/20 bg-[#0b0b0b]/70 p-7 backdrop-blur-xl sm:p-9"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Instant Appointment</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight">Book your slot</h2>
        </div>
        <Sparkles className="hidden h-6 w-6 text-champagne/60 sm:block" strokeWidth={1.2} />
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="b_name" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Full name
          </label>
          <input
            id="b_name"
            value={form.full_name}
            onChange={update("full_name")}
            placeholder="Your name"
            className="mt-2 w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/25 transition-colors focus:border-champagne/60 focus:outline-none"
          />
          {errors.full_name ? <p className="mt-1.5 text-[11px] text-blush">{errors.full_name}</p> : null}
        </div>

        <div>
          <label htmlFor="b_phone" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Mobile number
          </label>
          <input
            id="b_phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="10-digit number"
            className="mt-2 w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/25 transition-colors focus:border-champagne/60 focus:outline-none"
          />
          {errors.phone ? <p className="mt-1.5 text-[11px] text-blush">{errors.phone}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="b_service" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Service
          </label>
          <select
            id="b_service"
            value={form.service}
            onChange={update("service")}
            className="mt-2 w-full appearance-none border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster transition-colors focus:border-champagne/60 focus:outline-none"
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name} · {service.price}
              </option>
            ))}
          </select>
          {errors.service ? <p className="mt-1.5 text-[11px] text-blush">{errors.service}</p> : null}
        </div>

        <div>
          <label htmlFor="b_date" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Preferred date
          </label>
          <input
            id="b_date"
            type="date"
            min={todayString()}
            value={form.preferred_date}
            onChange={update("preferred_date")}
            className="mt-2 w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster transition-colors focus:border-champagne/60 focus:outline-none"
          />
          {errors.preferred_date ? (
            <p className="mt-1.5 text-[11px] text-blush">{errors.preferred_date}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="b_time" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Time slot
          </label>
          <select
            id="b_time"
            value={form.time_slot}
            onChange={update("time_slot")}
            className="mt-2 w-full appearance-none border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster transition-colors focus:border-champagne/60 focus:outline-none"
          >
            <option value="">Select a slot</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time_slot ? <p className="mt-1.5 text-[11px] text-blush">{errors.time_slot}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="b_notes" className="font-label text-[9px] uppercase tracking-[0.22em] text-alabaster/50">
            Note <span className="normal-case tracking-normal text-alabaster/30">(optional)</span>
          </label>
          <textarea
            id="b_notes"
            rows={3}
            value={form.notes}
            onChange={update("notes")}
            placeholder="Occasion, guests joining you, outfit colour…"
            className="mt-2 w-full resize-none border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-alabaster placeholder:text-alabaster/25 transition-colors focus:border-champagne/60 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "saving"}
        className="btn-gold mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "saving" ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
        ) : (
          <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
        )}
        {status === "saving" ? "Preparing your message" : "Confirm Booking via WhatsApp"}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] leading-relaxed text-alabaster/30">
        <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.5} />
        Open all 7 days · 9:30 AM to 8:30 PM
      </p>
    </form>
  );
}