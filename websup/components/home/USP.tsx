import Link from "next/link";

const usps = [
  {
    title: "Één vast aanspreekpunt",
    description:
      "Jij praat altijd met mij, Daan. Geen callcenter, geen doorverwijzing naar een collega. Directe communicatie van begin tot eind.",
  },
  {
    title: "Reactie binnen 24 uur",
    description:
      "Ik reageer snel op berichten en e-mails. Urgente zaken pak ik dezelfde dag nog op.",
  },
  {
    title: "Ik denk met je mee",
    description:
      "Ik stel de juiste vragen en adviseer eerlijk over wat werkt voor jouw situatie, ook als dat betekent dat je minder bij mij uitgeeft.",
  },
  {
    title: "Lokaal en persoonlijk",
    description:
      "Ik ken de Friese markt en begrijp wat lokale ondernemers nodig hebben. Geen generiek advies, maar een aanpak die past bij jouw regio.",
  },
  {
    title: "Transparante prijzen",
    description:
      "Wat je ziet, is wat je betaalt. Geen verborgen kosten, geen verrassingen achteraf.",
  },
  {
    title: "Langetermijn partner",
    description:
      "Ik ben er niet alleen voor de bouw van je website. Ik blijf betrokken zolang jij wil groeien.",
  },
];

export default function USP() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
              Waarom kiezen voor WebsUp?
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight">
              Niet zomaar een webbureau
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
              Het verschil zit in de samenwerking. Ik werk als jouw vaste
              digitale partner, niet als een leverancier die je na de
              oplevering nooit meer terugziet.
            </p>
            <Link
              href="/hoe-wij-samenwerken"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#FF8C00] hover:text-[#E67D00] transition-colors self-start"
            >
              Hoe wij samenwerken
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* USP grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, i) => (
            <div key={usp.title} className="group">
              <div className="w-10 h-10 rounded-lg bg-[#FFF3E0] flex items-center justify-center mb-4">
                <span className="font-heading text-sm font-bold text-[#FF8C00]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111827] mb-3">
                {usp.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-20 pt-12 border-t border-[#EBEBEB]">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-heading text-xl sm:text-2xl font-semibold text-[#111827] leading-relaxed mb-4">
              "Denk aan een vaste installateur voor je elektra, maar dan voor
              alles wat digitaal is."
            </p>
            <footer>
              <p className="text-sm text-[#9CA3AF]">Daan Koolhaas, oprichter WebsUp</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
