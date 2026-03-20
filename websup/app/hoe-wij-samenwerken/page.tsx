import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hoe wij samenwerken — Jouw vaste digitale partner",
  description:
    "Ontdek hoe WebsUp werkt als jouw vaste digitale partner. Persoonlijk, direct contact en langetermijn samenwerking.",
};

const phases = [
  {
    phase: "Kennismaking",
    icon: "👋",
    duration: "20–30 min",
    description:
      "We beginnen altijd met een kort, vrijblijvend gesprek — via WhatsApp, telefoon of video. Ik stel de juiste vragen om te begrijpen wat jij écht nodig hebt.",
    details: [
      "Wat doe je en voor wie?",
      "Wat zijn je doelen met de website?",
      "Wat heb je nu en wat mist er?",
      "Wat is je budget en tijdlijn?",
    ],
  },
  {
    phase: "Concept & offerte",
    icon: "📋",
    duration: "1–2 dagen",
    description:
      "Na het gesprek stuur ik je een gratis eerste concept en een heldere offerte. Geen bullshit-teksten, gewoon duidelijk: dit doe ik, dit kost het.",
    details: [
      "Visueel concept (moodboard/schets)",
      "Paginastructuur voorstel",
      "Heldere prijsopgave",
      "Planning en doorlooptijd",
    ],
  },
  {
    phase: "Bouwen",
    icon: "🔨",
    duration: "2–8 weken",
    description:
      "Ik ga aan de slag. Je kunt meekijken via een preview-link. Feedback geef je gewoon via WhatsApp — ik verwerk het snel.",
    details: [
      "Regelmatige updates via WhatsApp",
      "Preview-link zodat jij meekijkt",
      "Feedback ronden inbegrepen",
      "Jij levert teksten & foto's aan (of ik help daarmee)",
    ],
  },
  {
    phase: "Live & lancering",
    icon: "🚀",
    duration: "1 dag",
    description:
      "Je website gaat live. Ik zorg dat alles werkt: hosting, SSL, analytics, Google Search Console. En ik leg je uit hoe je de basis zelf beheert.",
    details: [
      "Hosting & domein geregeld",
      "SSL-certificaat actief",
      "Google Analytics gekoppeld",
      "Uitleg voor jou persoonlijk",
    ],
  },
  {
    phase: "Langetermijn partner",
    icon: "🤝",
    duration: "Doorlopend",
    description:
      "Hier begint het voor mij. Ik blijf betrokken zolang jij wil groeien. Vragen, aanpassingen, nieuwe functies — je belt mij gewoon.",
    details: [
      "Maandelijks onderhoud (optioneel)",
      "Updates & aanpassingen",
      "SEO en groei-advies",
      "Altijd bereikbaar via WhatsApp",
    ],
  },
];

export default function HoeWijSamenwerkenPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFA500]/6 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            Onze aanpak
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hoe wij{" "}
            <span className="gradient-text">samenwerken</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Geen groot traject, geen lange contracten. Gewoon directe
            samenwerking waarbij jij altijd weet waar je aan toe bent.
          </p>
        </div>
      </section>

      {/* The "huisinstallateur" concept */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-gradient-to-br from-[#FFA500]/10 to-[#FFCC66]/5 border border-[#FFA500]/20 rounded-2xl text-center">
            <div className="text-4xl mb-4">🏠⚡</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Denk aan je huisinstallateur
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Goede ondernemers hebben een vaste loodgieter, een vaste boekhouder
              en een vaste monteur. Maar voor hun website? Die zoeken ze elke keer
              opnieuw. Bij WebsUp werk ik als jouw vaste digitale partner —
              iemand die jouw situatie kent, altijd bereikbaar is en
              meedenkt met je groei.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-[#13213C]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#FFA500]/15 border border-[#FFA500]/30 flex items-center justify-center text-2xl">
                        {phase.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-[#FFA500] font-bold text-sm">
                          Stap {index + 1}
                        </span>
                        <h2 className="text-white font-bold text-lg">
                          {phase.phase}
                        </h2>
                        <span className="ml-auto px-3 py-1 bg-[#09101D] border border-white/10 rounded-full text-xs text-gray-400">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {phase.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {phase.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-gray-400">
                            <svg className="w-4 h-4 text-[#FFA500] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
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
            Klinkt dit als wat jij zoekt?
          </h2>
          <p className="text-gray-400 mb-8">
            Begin met een gratis kennismakingsgesprek. Geen verplichtingen,
            geen verkooppraatje.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/gratis-website-concept"
              className="px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200"
            >
              Start gratis →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-sm transition-all duration-200 hover:bg-white/5"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
