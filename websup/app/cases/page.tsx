import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases & portfolio — Resultaten die voor zichzelf spreken",
  description:
    "Bekijk cases en portfolio van WebsUp. Websites en webshops die écht werken voor ondernemers in Friesland.",
};

export default function CasesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cases &{" "}
            <span className="gradient-text">resultaten</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Geen lege beloftes — gewoon echte projecten voor echte
            ondernemers, met meetbare resultaten.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div
                key={c.id}
                className="group bg-[#13213C]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Image area */}
                <div
                  className="h-52 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${c.color}15, ${c.color}05)`, borderBottom: `1px solid ${c.color}20` }}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 text-3xl"
                      style={{ background: `${c.color}20`, border: `1px solid ${c.color}30` }}>
                      {c.type.includes("Webshop") ? "🛒" : c.type.includes("Booking") ? "📅" : "🌐"}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${c.color}20`, color: c.color }}>
                      {c.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {c.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[#09101D] border border-white/10 text-gray-400 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{c.description}</p>

                  <div className="p-3 rounded-xl bg-[#09101D] border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Resultaat</p>
                    <p className="text-sm font-bold" style={{ color: c.color }}>{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Jouw bedrijf als volgende case?
          </h2>
          <p className="text-gray-400 mb-8">
            Vraag gratis een concept aan en ontdek wat WebsUp voor jou kan doen.
          </p>
          <Link href="/gratis-website-concept" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full transition-all duration-200">
            Gratis concept aanvragen →
          </Link>
        </div>
      </section>
    </div>
  );
}
