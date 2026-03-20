import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onderhoud & hosting — Zorgeloos online",
  description:
    "Website onderhoud en hosting via WebsUp. Maandelijkse updates, backups, security en hosting vanaf €35 per maand. Altijd bereikbaar.",
};

export default function OnderhoudHostingPage() {
  return (
    <div className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            🛡️ Onderhoud & hosting
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Zorgeloos online blijven —{" "}
            <span className="gradient-text">ik regel het</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Een website is nooit echt klaar. Updates, beveiliging, backups —
            allemaal dingen die jij niet hoeft bij te houden. Dat doe ik.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "€15",
                period: "/maand",
                description: "Hosting zonder gedoe",
                features: [
                  "Managed hosting",
                  "SSL-certificaat",
                  "Dagelijkse backups",
                  "Uptime monitoring",
                  "E-mail support",
                ],
              },
              {
                name: "Comfort",
                price: "€35",
                period: "/maand",
                description: "Alles geregeld",
                features: [
                  "Alles uit Basic",
                  "Maandelijkse updates",
                  "Security scans",
                  "Kleine aanpassingen (1u/mnd)",
                  "WhatsApp support",
                  "Prioriteit reactie",
                ],
                highlighted: true,
              },
              {
                name: "Premium",
                price: "€75",
                period: "/maand",
                description: "Voor drukke ondernemers",
                features: [
                  "Alles uit Comfort",
                  "Wekelijkse updates",
                  "Aanpassingen (3u/mnd)",
                  "SEO monitoring",
                  "Maandelijks rapport",
                  "Directe lijn (bellen mag)",
                ],
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFA500] text-[#09101D] text-xs font-bold rounded-full">
                    Populairste keuze
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#FFA500]">{pkg.price}</span>
                    <span className="text-gray-400 text-sm">{pkg.period}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">excl. BTW</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#22c55e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    pkg.highlighted
                      ? "bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D]"
                      : "bg-[#09101D] border border-white/10 hover:border-white/30 text-white"
                  }`}
                >
                  {pkg.name} kiezen →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why maintenance */}
      <section className="py-16 bg-[#13213C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Waarom is onderhoud zo belangrijk?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🔒", title: "Veiligheid", text: "Verouderde plugins zijn de #1 oorzaak van gehackte websites. Regelmatige updates zijn geen luxe, maar noodzaak." },
              { icon: "⚡", title: "Prestaties", text: "Een trage website verliest bezoekers. Updates en optimalisaties houden je site snel." },
              { icon: "💾", title: "Backups", text: "Als er iets misgaat (en dat kan altijd) heb je een recente backup. Zonder backup ben je alles kwijt." },
              { icon: "📈", title: "SEO", text: "Google houdt van up-to-date, snelle en veilige websites. Goed onderhoud = betere rankings." },
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
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">Klaar voor zorgeloos online zijn?</h2>
          <p className="text-gray-400 mb-8">
            Neem contact op en ik kijk welk pakket het beste bij jou past.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full transition-all duration-200">
            Pakket aanvragen →
          </Link>
        </div>
      </section>
    </div>
  );
}
