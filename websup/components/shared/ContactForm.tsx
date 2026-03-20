"use client";

import { useState } from "react";

interface ContactFormProps {
  subject?: string;
  dark?: boolean;
}

export default function ContactForm({ subject = "", dark = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: subject,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", message: "", subject });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = `w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500]/50 ${
    dark
      ? "bg-[#09101D] border-white/10 hover:border-white/20"
      : "bg-[#13213C]/50 border-white/10 hover:border-white/20"
  }`;

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#FFA500]/20 border-2 border-[#FFA500]/40 flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h3 className="text-white text-xl font-bold mb-2">Verstuurd!</h3>
        <p className="text-gray-400">
          Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op —
          meestal binnen 24 uur.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Naam <span className="text-[#FFA500]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jouw naam"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            E-mail <span className="text-[#FFA500]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jouw@email.nl"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Telefoon</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="06 xx xx xx xx"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Bedrijfsnaam</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Jouw bedrijf"
            className={fieldClass}
          />
        </div>
      </div>

      {!subject && (
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Onderwerp</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Selecteer een onderwerp</option>
            <option value="Website laten maken">Website laten maken</option>
            <option value="Webshop laten maken">Webshop laten maken</option>
            <option value="Onderhoud & hosting">Onderhoud &amp; hosting</option>
            <option value="Maatwerk">Maatwerk</option>
            <option value="Gratis concept aanvragen">Gratis concept aanvragen</option>
            <option value="Vraag / overig">Vraag / overig</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Bericht <span className="text-[#FFA500]">*</span>
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Vertel me over jouw project of vraag..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Er ging iets mis. Probeer het opnieuw of stuur me een appje.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 px-6 bg-[#FFA500] hover:bg-[#FFCC66] disabled:opacity-60 text-[#09101D] font-bold rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
      >
        {status === "sending" ? "Versturen..." : "Bericht versturen →"}
      </button>

      <p className="text-gray-500 text-xs text-center">
        Je gegevens worden nooit gedeeld met derden. Reactie binnen 24 uur.
      </p>
    </form>
  );
}
