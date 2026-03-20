import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website laten maken — Professioneel & betaalbaar",
  description:
    "Een professionele website laten maken? WebsUp bouwt websites voor ondernemers in Friesland. Vanaf €695, inclusief SEO en hosting setup.",
};

export default function WebsiteLatenMakenPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            🌐 Website laten maken
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Een website die{" "}
            <span className="gradient-text">klanten oplevert</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl">
            Geen standaard template, geen bullshit. Een website die past bij
            jouw bedrijf, gevonden wordt in Google en bezoekers omzet naar
            betalende klanten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/gratis-website-concept"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Gratis concept aanvragen
            </Link>
            <a
              href="https://wa.me/31682202148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-base transition-all duration-200 hover:bg-white/5"
            >
              Snel overleggen via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Kies het pakket dat bij je past
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "€695",
                description: "Ideaal voor ZZP'ers en startende ondernemers",
                features: [
                  "Tot 5 pagina's",
                  "Uniek ontwerp",
                  "Mobielvriendelijk",
                  "Contactformulier",
                  "SEO basis setup",
                  "Google Analytics",
                  "SSL-certificaat",
                  "1 maand gratis support",
                ],
                cta: "Starter kiezen",
              },
              {
                name: "Business",
                price: "€995",
                description: "Voor bedrijven die willen groeien online",
                features: [
                  "Alles uit Starter",
                  "Tot 10 pagina's",
                  "Blog / nieuwspagina",
                  "Uitgebreide SEO setup",
                  "Google Search Console",
                  "WhatsApp-knop integratie",
                  "Meerdere contactformats",
                  "3 maanden gratis support",
                ],
                highlighted: true,
                cta: "Business kiezen",
              },
              {
                name: "Premium",
                price: "Op aanvraag",
                description: "Maatwerk voor complexere wensen",
                features: [
                  "Alles uit Business",
                  "Onbeperkt pagina's",
                  "Booking / reserveringen",
                  "Klanten portaal",
                  "Custom functionaliteit",
                  "CRM-koppeling",
                  "Uitgebreide analytics",
                  "6 maanden gratis support",
                ],
                cta: "Offerte aanvragen",
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  pkg.highlighted
                    ? "bg-gradient-to-br from-[#FFA500]/15 to-[#13213C] border-2 border-[#FFA500]/40 relative"
                    : "bg-[#13213C]/40 border border-white/10"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFA500] text-[#09101D] text-xs font-bold rounded-full whitespace-nowrap">
                    Meest gekozen
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{pkg.description}</p>
                  <div className="text-3xl font-bold text-[#FFA500]">{pkg.price}</div>
                  {pkg.price !== "Op aanvraag" && (
                    <p className="text-gray-500 text-xs mt-1">Eenmalig, excl. BTW</p>
                  )}
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#FFA500] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/gratis-website-concept"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    pkg.highlighted
                      ? "bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D]"
                      : "bg-[#09101D] border border-white/10 hover:border-white/30 text-white"
                  }`}
                >
                  {pkg.cta} →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Alle prijzen zijn indicatief. Na een gesprek ontvang je altijd een heldere offerte op maat.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 bg-[#13213C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Waarom een website van WebsUp?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🎨", title: "Uniek ontwerp", text: "Geen templates. Elk ontwerp is specifiek voor jouw bedrijf en doelgroep." },
              { icon: "⚡", title: "Razendsnel", text: "Optimale laadtijden voor betere Google rankings en minder bezoekers die afhaken." },
              { icon: "🔍", title: "SEO-klaar", text: "Technische SEO-basis is altijd op orde: meta tags, sitemap, structured data." },
              { icon: "📱", title: "Mobiel first", text: "Meer dan 60% van je bezoekers gebruikt een telefoon. Daar bouwen we voor." },
              { icon: "🤝", title: "Persoonlijk", text: "Jij werkt direct met mij. Geen tussenpersonen, geen wachtrijen." },
              { icon: "🔄", title: "Onderhoud mogelijk", text: "Na de bouw kun je kiezen voor een maandelijks onderhoudsplan. Geen zorgen meer." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-[#09101D]/60 rounded-xl border border-white/5">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Begin met een gratis concept
          </h2>
          <p className="text-gray-400 mb-8">
            Geen verplichtingen. Ik stuur je binnen 48 uur een eerste schets.
          </p>
          <Link
            href="/gratis-website-concept"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Ja, ik wil een gratis concept →
          </Link>
        </div>
      </section>
    </div>
  );
}
