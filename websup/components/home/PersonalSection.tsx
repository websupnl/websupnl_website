import Link from "next/link";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function PersonalSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            {/* Main portrait */}
            <PlaceholderImage
              className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl shadow-lg"
              label="Daan Koolhaas"
              variant="warm"
            />

            {/* Small accent image */}
            <div className="absolute -bottom-8 -right-4 lg:right-0 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <PlaceholderImage className="w-full h-full" label="Werkplek" variant="neutral" />
            </div>

            {/* Location badge */}
            <div className="absolute top-6 -right-4 lg:right-0 bg-white border border-[#EBEBEB] rounded-lg px-4 py-2.5 shadow-md hidden sm:block">
              <p className="text-xs text-[#9CA3AF]">Gebaseerd in</p>
              <p className="text-sm font-semibold text-[#111827]">Friesland, NL</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
              Wie staat er achter WebsUp?
            </p>

            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight mb-6">
              Geen groot bureau, gewoon Daan
            </h2>

            <div className="space-y-4 text-[#4B5563] leading-relaxed mb-8">
              <p>
                Als ondernemer wil je dat je website werkt. Dat hij er goed
                uitziet, gevonden wordt in Google en je klanten oplevert.
                Geen gedoe, geen wachttijden bij een helpdesk.
              </p>
              <p>
                Ik werk als jouw vaste digitale partner. Vergelijkbaar met een
                vaste installateur voor je elektra, maar dan voor alles wat
                digitaal is. Je belt mij direct, ik denk met je mee en ik
                regel het.
              </p>
              <p>
                Ik ben gebaseerd in Friesland en werk voor lokale ondernemers
                die behoefte hebben aan een betrouwbare, betaalbare oplossing.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Websites", "Webshops", "SEO", "Hosting", "Maatwerk"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#F8F8F6] border border-[#EBEBEB] text-sm text-[#4B5563] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/over-ons"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#111827] hover:bg-[#1F2937] text-white font-medium rounded-lg text-sm transition-all duration-200"
              >
                Meer over mij
              </Link>
              <Link
                href="/hoe-wij-samenwerken"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#EBEBEB] hover:border-[#D1D1D1] text-[#111827] font-medium rounded-lg text-sm transition-all duration-200 hover:bg-[#F8F8F6]"
              >
                Hoe wij samenwerken
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
