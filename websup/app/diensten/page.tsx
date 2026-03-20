import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten — Websites, webshops en maatwerk",
  description:
    "Ontdek alle diensten van WebsUp: website laten maken, webshop bouwen, onderhoud & hosting en maatwerk oplossingen.",
};

const diensten = [
  {
    icon: "🌐",
    title: "Website laten maken",
    description:
      "Een professionele website die jouw bedrijf goed vertegenwoordigt, gevonden wordt in Google en bezoekers omzet naar klanten.",
    href: "/website-laten-maken",
    price: "Vanaf €695",
    time: "2–4 weken",
    features: [
      "Uniek ontwerp op maat",
      "Mobielvriendelijk (responsive)",
      "SEO-geoptimaliseerd",
      "Contactformulier",
      "Google Analytics",
      "SSL-certificaat",
      "Hosting & domein setup",
    ],
    color: "#3b82f6",
  },
  {
    icon: "🛒",
    title: "Webshop laten maken",
    description:
      "Een complete online winkel om producten of diensten te verkopen. Van productcatalogus tot betaalsysteem — alles geregeld.",
    href: "/webshop-laten-maken",
    price: "Vanaf €1.200",
    time: "4–8 weken",
    features: [
      "Shopify of WooCommerce",
      "Betaalintegratie (iDEAL, creditcard)",
      "Productbeheer",
      "Voorraadtracking",
      "Order e-mails",
      "Koppeling verzendsoftware",
      "SEO voor producten",
    ],
    color: "#FFA500",
    featured: true,
  },
  {
    icon: "🛡️",
    title: "Onderhoud & hosting",
    description:
      "Jouw website in goede handen houden. Updates, backups, security en hosting — ik regel het maandelijks zodat jij er niet naar om hoeft te kijken.",
    href: "/onderhoud-hosting",
    price: "Vanaf €35/mnd",
    time: "Doorlopend",
    features: [
      "Maandelijkse WordPress/plugin updates",
      "Dagelijkse backups",
      "Security monitoring",
      "Uptime monitoring",
      "Hosting inbegrepen",
      "Kleine aanpassingen inbegrepen",
      "WhatsApp support",
    ],
    color: "#22c55e",
  },
  {
    icon: "⚙️",
    title: "Maatwerk & integraties",
    description:
      "Wanneer standaard niet genoeg is. API-koppelingen, automatiseringen, AI-integraties en custom functies voor unieke situaties.",
    href: "/maatwerk",
    price: "Op aanvraag",
    time: "Afhankelijk van scope",
    features: [
      "API-koppelingen (CRM, boekhouding)",
      "Workflow automations (n8n)",
      "AI-integraties",
      "Boekingssystemen",
      "Prijscalculators",
      "Dashboards & portals",
      "Custom plugins",
    ],
    color: "#8b5cf6",
  },
];

export default function DienstenPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            Wat ik voor je doe
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Diensten die jouw bedrijf{" "}
            <span className="gradient-text">online laten groeien</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Van eenvoudige website tot complexe webshop — ik pak het aan zoals
            het past bij jouw bedrijf en budget.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {diensten.map((dienst) => (
            <div
              key={dienst.href}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                dienst.featured
                  ? "border-[#FFA500]/30 bg-gradient-to-br from-[#FFA500]/10 to-[#13213C]/50"
                  : "border-white/10 bg-[#13213C]/30 hover:border-white/20"
              }`}
            >
              {dienst.featured && (
                <div className="bg-[#FFA500] px-6 py-2 flex items-center gap-2">
                  <span className="text-[#09101D] text-xs font-bold uppercase tracking-wide">
                    ⭐ Populairste keuze
                  </span>
                </div>
              )}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{dienst.icon}</span>
                      <h2 className="text-2xl font-bold text-white">{dienst.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{dienst.description}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {dienst.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: dienst.color }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="space-y-3 mb-6">
                      <div className="p-4 bg-[#09101D]/60 rounded-xl border border-white/5">
                        <p className="text-gray-400 text-xs mb-1">Prijs</p>
                        <p className="text-2xl font-bold" style={{ color: dienst.color }}>
                          {dienst.price}
                        </p>
                      </div>
                      <div className="p-4 bg-[#09101D]/60 rounded-xl border border-white/5">
                        <p className="text-gray-400 text-xs mb-1">Doorlooptijd</p>
                        <p className="text-white font-semibold">{dienst.time}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href={dienst.href}
                        className="block w-full text-center px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-xl text-sm transition-all duration-200"
                      >
                        Meer informatie →
                      </Link>
                      <Link
                        href="/gratis-website-concept"
                        className="block w-full text-center px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:bg-white/5"
                      >
                        Gratis concept
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Niet zeker welke dienst jij nodig hebt?
          </h2>
          <p className="text-gray-400 mb-6">
            Geen probleem. Stuur me een berichtje en we kijken samen wat het
            beste bij jouw situatie past.
          </p>
          <a
            href="https://wa.me/31682202148"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-full text-sm transition-all duration-200"
          >
            App me even →
          </a>
        </div>
      </section>
    </div>
  );
}
