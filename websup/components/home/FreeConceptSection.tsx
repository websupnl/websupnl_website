import Link from "next/link";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function FreeConceptSection() {
  return (
    <section className="py-24 bg-[#F8F8F6] border-y border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#FFF3E0] text-[#FF8C00] text-sm font-semibold mb-6">
              Gratis en vrijblijvend
            </div>

            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight mb-6">
              Vraag gratis een website concept aan
            </h2>

            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              Nog niet 100 procent zeker wat je wil? Ik maak een gratis concept
              voor jouw website, zonder verplichtingen. Zo zie je precies wat
              mogelijk is voor jouw bedrijf, voordat je ergens voor tekent.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { title: "Gepersonaliseerd concept", text: "Op basis van jouw bedrijf en wensen, niet een generiek template." },
                { title: "Volledig vrijblijvend", text: "Geen verplichting, geen kleine lettertjes, geen druk." },
                { title: "Binnen 48 uur geleverd", text: "Snel resultaat, geen maanden wachten." },
                { title: "Direct bruikbaar advies", text: "Nuttig, ook als je uiteindelijk niet voor WebsUp kiest." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#FF8C00] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#111827] font-semibold text-sm">{item.title}</span>
                    <span className="text-[#6B7280] text-sm"> {item.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/gratis-website-concept"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF8C00] hover:bg-[#E67D00] text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm"
            >
              Ja, ik wil een gratis concept
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <PlaceholderImage
              className="w-full aspect-[4/3] rounded-2xl shadow-lg border border-[#EBEBEB]"
              label="Website concept"
              variant="cool"
            />

            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-xl border border-[#EBEBEB] p-5">
              <p className="text-xs text-[#9CA3AF] font-medium mb-1 uppercase tracking-wide">Klantervaring</p>
              <p className="text-[#111827] text-sm font-medium leading-snug mb-3">
                "Ik had niks te verliezen en heb het aangevraagd. De schets die
                Daan stuurde was al zoveel beter dan wat ik had."
              </p>
              <p className="text-xs text-[#9CA3AF]">Kapsalon eigenaar, Drachten</p>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <p className="text-white text-xs font-bold leading-none">100%</p>
                <p className="text-white/80 text-[9px] leading-none">gratis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
