"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Wat kost een website bij WebsUp?",
    a: "Een standaard website begint bij €695. De uiteindelijke prijs hangt af van het aantal pagina's, speciale functionaliteiten en eventueel maatwerk. Je ontvangt altijd een heldere offerte vooraf, zonder verrassingen achteraf.",
  },
  {
    q: "Hoe lang duurt het bouwen van een website?",
    a: "Gemiddeld twee tot vier weken voor een standaard website. Een webshop duurt iets langer: vier tot acht weken. De doorlooptijd hangt ook af van hoe snel jij content aanlevert. Ik help je daarmee als dat nodig is.",
  },
  {
    q: "Kan ik mijn website zelf aanpassen?",
    a: "Ja. Ik bouw websites zo dat jij kleine aanpassingen zelf kunt doen. Wil je dat ik het doe? Dan regel ik het binnen het onderhoudsplan. We bespreken vooraf wat het handigst werkt voor jou.",
  },
  {
    q: "Wat is inbegrepen in het onderhoudspakket?",
    a: "Het Comfort pakket (€35 per maand) bevat maandelijkse updates van WordPress en plugins, dagelijkse backups, security monitoring en hosting. Bij technische problemen pak ik het dezelfde dag op.",
  },
  {
    q: "Bouw je ook webshops?",
    a: "Ja. Ik bouw webshops op Shopify of WooCommerce, afhankelijk van jouw situatie en wensen. Vanaf €1.200 heb je een complete webshop met betaalsysteem, voorraadbeheer en alle basisfunctionaliteit.",
  },
  {
    q: "Werk je alleen in Friesland?",
    a: "Ik ben gebaseerd in Friesland maar werk voor ondernemers door heel Nederland. Voor de meeste trajecten is videobellen prima. Lokale klanten kunnen ook altijd langskomen.",
  },
  {
    q: "Wat is het gratis website concept precies?",
    a: "Je vult een kort formulier in met informatie over je bedrijf. Ik maak een eerste concept: een visuele richting voor hoe jouw website eruit kan zien. Volledig gratis, zonder verplichtingen. Zo kun je zien wat ik doe voordat je een beslissing neemt.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F8F8F6] border-t border-[#EBEBEB]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
            Veelgestelde vragen
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight">
            Alles wat je wil weten
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#EBEBEB] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FAFAFA] transition-colors"
              >
                <span className="font-heading text-sm font-semibold text-[#111827] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-[#EBEBEB] flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-[#FF8C00] border-[#FF8C00] rotate-45" : "bg-white"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-colors duration-300 ${open === i ? "text-white" : "text-[#9CA3AF]"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-[#F3F3F3] mb-4" />
                  <p className="text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 p-6 bg-white border border-[#EBEBEB] rounded-xl text-center">
          <p className="font-heading text-sm font-semibold text-[#111827] mb-1">
            Staat je vraag er niet bij?
          </p>
          <p className="text-[#6B7280] text-sm mb-4">
            Stuur me een berichtje, ik antwoord altijd.
          </p>
          <a
            href="https://wa.me/31682202148"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-lg text-sm transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Stel je vraag via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
