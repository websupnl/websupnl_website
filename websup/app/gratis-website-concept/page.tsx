import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Gratis website concept aanvragen — Vrijblijvend",
  description:
    "Vraag gratis een gepersonaliseerd website concept aan. Geen verplichtingen. Binnen 48 uur een eerste schets voor jouw bedrijf.",
};

export default function GratisConceptPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/10 via-[#13213C] to-[#09101D]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFA500]/8 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFA500] text-[#09101D] text-sm font-bold mb-6 uppercase tracking-wide">
            🎁 100% gratis — geen verplichtingen
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Zo ziet jouw nieuwe{" "}
            <span className="gradient-text">website eruit</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vul het formulier in en ik maak een gratis eerste concept voor
            jouw website. Vrijblijvend, persoonlijk en binnen 48 uur.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {[
              { step: "1", text: "Jij vult het formulier in" },
              { step: "2", text: "Ik maak een concept (gratis)" },
              { step: "3", text: "Jij ontvangt het binnen 48u" },
              { step: "4", text: "Beslissen doe je zelf" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFA500] text-[#09101D] text-xs font-bold flex items-center justify-center shrink-0">
                  {item.step}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Benefits */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-white font-bold text-xl">
                Wat krijg je precies?
              </h2>
              {[
                {
                  icon: "🎨",
                  title: "Visueel concept",
                  text: "Een eerste ontwerp-richting specifiek voor jouw bedrijf en branche.",
                },
                {
                  icon: "🏗️",
                  title: "Structuurvoorstel",
                  text: "Welke pagina's je nodig hebt en hoe de navigatie eruitziet.",
                },
                {
                  icon: "💡",
                  title: "Advies & aanbevelingen",
                  text: "Eerlijk advies over wat werkt voor jouw type bedrijf.",
                },
                {
                  icon: "💰",
                  title: "Indicatieve prijzen",
                  text: "Geen vage offerte maar een concrete prijsindicatie.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
              <div className="p-5 bg-[#13213C]/50 border border-white/10 rounded-xl">
                <p className="text-gray-400 text-sm italic">
                  "Ik had niks te verliezen en heb het aangevraagd. De schets
                  die Daan stuurde was al zoveel beter dan wat ik had. Zelfde
                  week begonnen."
                </p>
                <p className="text-[#FFA500] text-xs mt-2 font-medium">
                  — Kapsalon eigenaar, Drachten
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#13213C]/30 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-2">
                  Aanvraagformulier
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Vul in wat je kunt. Hoe meer info, hoe beter mijn concept
                  aansluit bij jouw wensen.
                </p>
                <ContactForm subject="Gratis concept aanvragen" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
