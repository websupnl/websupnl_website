import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maatwerk & integraties — Als standaard niet genoeg is",
  description:
    "Maatwerk weboplossingen van WebsUp: API-koppelingen, automatiseringen, boekingssystemen en custom functionaliteit voor jouw bedrijf.",
};

export default function MaatwerkPage() {
  return (
    <div className="pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            ⚙️ Maatwerk & integraties
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Als standaard{" "}
            <span className="gradient-text">niet genoeg is</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Soms heb je iets wat nergens kant-en-klaar bestaat. Dat is precies
            waar ik goed in ben: custom oplossingen bouwen die perfect aansluiten
            bij jouw bedrijfsproces.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔗", title: "API-koppelingen", text: "Jouw website praat met je boekhoudpakket, CRM, voorraadbeheer of andere tools." },
              { icon: "🤖", title: "Automatiseringen", text: "Repetitieve taken automatisch afhandelen: e-mails, notificaties, data-verwerking." },
              { icon: "🧠", title: "AI-integraties", text: "ChatGPT of andere AI-tools integreren in je website of werkproces." },
              { icon: "📅", title: "Boekingssystemen", text: "Online afsprakenbeheer, lesrooster, verhuur — klanten plannen zichzelf in." },
              { icon: "🧮", title: "Prijscalculators", text: "Bezoekers berekenen zelf een prijsindicatie. Kwalitatieve leads die al weten wat het kost." },
              { icon: "👤", title: "Klantportalen", text: "Een beveiligde omgeving waar klanten documenten, facturen of voortgang kunnen inzien." },
            ].map((item) => (
              <div key={item.title} className="bg-[#13213C]/40 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#13213C]/40 border border-white/10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Heb je iets specifieks nodig?
            </h2>
            <p className="text-gray-400 mb-6">
              Vertel me wat je nodig hebt. Ik kijk of en hoe ik het kan bouwen,
              en geef je een eerlijke inschatting van de kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200">
                Bespreek jouw wensen →
              </Link>
              <a href="https://wa.me/31682202148" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-sm transition-all duration-200 hover:bg-white/5">
                Snel overleggen via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
