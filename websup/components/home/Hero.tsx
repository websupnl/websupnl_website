"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

const rotatingWords = ["professioneel", "snel online", "klanten trekt", "converteert"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-16 sm:pt-18 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3E0] text-[#FF8C00] text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00]" />
              Beschikbaar voor nieuwe projecten
            </div>

            <h1 className="font-heading text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] text-[#111827] mb-6">
              Een website die{" "}
              <span
                className="text-[#FF8C00] transition-opacity duration-300"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {rotatingWords[wordIndex]}
              </span>
            </h1>

            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl">
              Ik ben Daan, en bij WebsUp bouw ik websites en webshops voor
              ondernemers in Friesland. Directe samenwerking, geen grote
              bureaustructuur, gewoon resultaat.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="/gratis-website-concept"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#FF8C00] hover:bg-[#E67D00] text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm"
              >
                Gratis concept aanvragen
              </Link>
              <a
                href="https://wa.me/31682202148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#EBEBEB] bg-white hover:bg-[#F8F8F6] text-[#111827] font-medium rounded-lg transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Stuur een berichtje
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B7280]">
              {[
                "Reactie binnen 24 uur",
                "Geen verborgen kosten",
                "Gratis eerste concept",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <PlaceholderImage
              className="w-full aspect-[4/3] rounded-2xl shadow-xl"
              label="Website preview"
              variant="warm"
            />

            {/* Floating result card */}
            <div className="absolute -bottom-5 -left-8 bg-white rounded-xl shadow-lg border border-[#EBEBEB] px-5 py-4 w-52">
              <p className="text-xs text-[#9CA3AF] font-medium mb-1">Resultaat na 3 maanden</p>
              <p className="font-heading text-2xl font-bold text-[#111827]">+180%</p>
              <p className="text-sm text-[#6B7280]">meer aanvragen</p>
            </div>

            {/* Floating review card */}
            <div className="absolute -top-5 -right-6 bg-white rounded-xl shadow-lg border border-[#EBEBEB] px-4 py-3.5 w-48">
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-[#FF8C00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-semibold text-[#111827]">Daan denkt echt mee</p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">Kapsalon Style</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-[#EBEBEB]" />
    </section>
  );
}
