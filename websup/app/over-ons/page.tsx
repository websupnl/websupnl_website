import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons — Daan Koolhaas, WebsUp",
  description:
    "Leer Daan Koolhaas kennen — de persoon achter WebsUp. Persoonlijk webdesign voor ondernemers in Friesland.",
};

export default function OverOnsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FFA500]/5 rounded-full blur-[100px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
                Wie staat er achter WebsUp?
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Hoi, ik ben Daan —{" "}
                <span className="gradient-text">geen bureau, gewoon ik</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Als je contact opneemt met WebsUp, kom je bij mij uit — Daan
                Koolhaas. Gebaseerd in Friesland, technisch onderlegd, en
                gepassioneerd door alles wat digitaal is.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/gratis-website-concept"
                  className="px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200"
                >
                  Gratis concept aanvragen
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-sm transition-all duration-200 hover:bg-white/5"
                >
                  Kennismaken →
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#13213C] to-[#0A0D31] border border-white/10 aspect-square max-w-sm mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-[#FFA500]/20 border-2 border-[#FFA500]/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl">👨‍💻</span>
                  </div>
                  <p className="text-white font-bold">Daan Koolhaas</p>
                  <p className="text-[#FFA500] text-sm">Oprichter WebsUp.nl</p>
                  <p className="text-gray-400 text-xs mt-1">📍 Friesland, Nederland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Waarom WebsUp?</h2>
              <p>
                Ik ben technisch geschoold in de installatiesector en werk
                deeltijd bij een installatiebedrijf in Friesland. Maar mijn
                passie ligt bij technologie en ondernemen. WebsUp is
                ontstaan omdat ik zag dat veel lokale ondernemers niks hebben
                aan dure bureaus die je een website verkopen en daarna nooit
                meer van je horen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Hoe ik anders werk</h2>
              <p>
                Ik werk als jouw vaste digitale partner — denk aan een
                huisinstallateur, maar dan voor je website. Je belt mij direct,
                ik reageer snel, ik denk met je mee en ik regel het. Geen
                ticket systemen, geen weken wachten op een reactie.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Wat ik bouw</h2>
              <p>
                Websites die echt werken: die gevonden worden in Google,
                eruitzien als een premium product en klanten opleveren. Ik
                gebruik moderne technologie (Next.js, React, Shopify) maar
                vertel jou gewoon wat het resultaat is — niet hoe het onder
                de motorkap werkt.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {[
              {
                category: "Webdesign & development",
                skills: ["Next.js / React", "WordPress", "Shopify", "Elementor", "Tailwind CSS"],
              },
              {
                category: "Marketing & SEO",
                skills: ["Lokale SEO", "Google Analytics", "On-page SEO", "Copywriting (NL)", "Conversie-optimalisatie"],
              },
              {
                category: "Hosting & infra",
                skills: ["Cloudflare Pages", "VPS / Docker", "SSL / Security", "Backups", "Performance"],
              },
              {
                category: "Integraties",
                skills: ["Brevo (e-mail)", "WhatsApp Business", "n8n Automations", "API koppelingen", "Google Maps"],
              },
            ].map((group) => (
              <div key={group.category} className="bg-[#13213C]/40 border border-white/10 rounded-2xl p-5">
                <h3 className="text-[#FFA500] font-semibold text-sm mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-[#09101D] border border-white/10 rounded-full text-xs text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#FFA500]/10 to-transparent border border-[#FFA500]/20 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Mijn waarden</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "🤝", title: "Eerlijkheid", text: "Ik adviseer wat écht goed is voor jouw situatie, ook als dat minder bij mij oplevert." },
                { icon: "⚡", title: "Daadkracht", text: "Plannen zijn mooi, maar resultaten zijn beter. Ik lever op tijd en doe wat ik beloof." },
                { icon: "🎯", title: "Langetermijn", text: "Ik wil klanten hebben die jarenlang tevreden zijn, niet een eenmalige deal." },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Zullen we kennismaken?
          </h2>
          <p className="text-gray-400 mb-8">
            Even bellen, appen of mailen — wat jij fijn vindt. Ik reageer
            altijd snel en zonder verkooppraatje.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200"
            >
              Neem contact op
            </Link>
            <a
              href="https://wa.me/31682202148"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-full text-sm transition-all duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
