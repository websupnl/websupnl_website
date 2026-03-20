import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webshop laten maken — Shopify & WooCommerce expert",
  description:
    "Webshop laten maken in Friesland? WebsUp bouwt complete webshops op Shopify of WooCommerce. Betaalintegratie, voorraadbeheer en alles klaar.",
};

export default function WebshopLatenMakenPage() {
  return (
    <div className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFA500]/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            🛒 Webshop laten maken
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Online verkopen?{" "}
            <span className="gradient-text">Ik regel het</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl">
            Van productcatalogus tot betaalsysteem — ik bouw een complete
            webshop die van dag één klaar is om te verkopen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/gratis-website-concept"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Gratis offerte aanvragen
            </Link>
            <a
              href="https://wa.me/31682202148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-base transition-all duration-200 hover:bg-white/5"
            >
              Vragen? App me even
            </a>
          </div>
        </div>
      </section>

      {/* Platform comparison */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Shopify of WooCommerce?
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Beide platforms hebben hun sterke punten. Ik adviseer je welke het beste past bij jouw situatie.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Shopify",
                emoji: "🟢",
                description: "Ideaal als je snel wil starten en weinig technische kennis hebt.",
                pros: ["Snelste setup", "Altijd up-to-date", "Ingebouwde beveiliging", "App store met 1000+ uitbreidingen", "Perfecte mobiele app voor beheer"],
                cons: ["Maandelijkse kosten platform", "Minder flexibel qua maatwerk"],
                best: "Startende webshops, < 500 producten",
              },
              {
                name: "WooCommerce",
                emoji: "🔵",
                description: "Flexibeler en geschikter voor complexere shops of als je WordPress al hebt.",
                pros: ["Volledig aanpasbaar", "Eenmalige kosten (geen platform fee)", "Werkt op bestaande WordPress site", "Onbeperkt uitbreidbaar"],
                cons: ["Meer onderhoud nodig", "Technisch iets complexer"],
                best: "Gevestigde bedrijven, bestaande WordPress",
              },
            ].map((platform) => (
              <div key={platform.name} className="bg-[#13213C]/40 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{platform.emoji}</span>
                  <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-5">{platform.description}</p>
                <div className="space-y-2 mb-4">
                  {platform.pros.map((pro) => (
                    <div key={pro} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pro}
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-[#09101D]/60 rounded-lg border border-white/5">
                  <p className="text-gray-500 text-xs mb-1">Best voor</p>
                  <p className="text-gray-300 text-sm">{platform.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-[#13213C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Alles inbegrepen
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Professioneel webshop ontwerp",
              "Product categorieën instellen",
              "iDEAL & creditcard betaling",
              "Molllie of Stripe integratie",
              "Verzendopties & tarieven",
              "Automatische order e-mails",
              "Klant accounts (optioneel)",
              "Vouchers & kortingscodes",
              "SEO voor alle producten",
              "Mobile-first design",
              "Google Analytics koppeling",
              "Handleiding voor jou persoonlijk",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-[#09101D]/60 border border-white/5 rounded-xl">
                <svg className="w-5 h-5 text-[#FFA500] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Kosten</h2>
          <p className="text-gray-400 mb-10">
            Transparant en eerlijk geprijsd.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#13213C]/40 border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#FFA500] font-bold text-lg mb-2">Shopify</h3>
              <p className="text-3xl font-bold text-white mb-1">Vanaf €1.200</p>
              <p className="text-gray-400 text-sm mb-4">eenmalig (excl. BTW)</p>
              <p className="text-gray-400 text-xs">+ €29-79/mnd Shopify platform kosten</p>
            </div>
            <div className="bg-[#13213C]/40 border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#FFA500] font-bold text-lg mb-2">WooCommerce</h3>
              <p className="text-3xl font-bold text-white mb-1">Vanaf €1.500</p>
              <p className="text-gray-400 text-sm mb-4">eenmalig (excl. BTW)</p>
              <p className="text-gray-400 text-xs">+ hosting (€15/mnd bij WebsUp)</p>
            </div>
          </div>
          <Link
            href="/gratis-website-concept"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full transition-all duration-200"
          >
            Gratis offerte aanvragen →
          </Link>
        </div>
      </section>
    </div>
  );
}
