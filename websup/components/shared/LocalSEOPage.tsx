import Link from "next/link";
import ContactForm from "./ContactForm";

interface LocalSEOPageProps {
  stad: string;
  stadNaam: string;
  regio: string;
  beschrijving: string;
}

export default function LocalSEOPage({ stad, stadNaam, regio, beschrijving }: LocalSEOPageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFA500]/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            📍 {stadNaam}, {regio}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Website laten maken in{" "}
            <span className="gradient-text">{stadNaam}</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl">
            Ondernemer in {stadNaam}? Ik ben Daan van WebsUp — {beschrijving} —
            en ik bouw websites die klanten opleveren. Persoonlijk, snel en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/gratis-website-concept"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Gratis concept aanvragen
            </Link>
            <a
              href="https://wa.me/31682202148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-base transition-all duration-200 hover:bg-white/5"
            >
              App me even →
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 border-y border-white/5 bg-[#13213C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-[#FFA500]">Lokaal</p>
              <p className="text-gray-400 text-sm">Gebaseerd in {regio}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#FFA500]">&lt; 24u</p>
              <p className="text-gray-400 text-sm">Reactie op jouw bericht</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#FFA500]">Gratis</p>
              <p className="text-gray-400 text-sm">Eerste concept aanvragen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Wat ik doe voor ondernemers in {stadNaam}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🌐", title: "Website laten maken", text: `Een professionele website voor jouw bedrijf in ${stadNaam}. SEO-geoptimaliseerd voor lokale zoekopdrachten.`, price: "Vanaf €695", href: "/website-laten-maken" },
              { icon: "🛒", title: "Webshop laten maken", text: `Online verkopen vanuit ${stadNaam}. Complete webshop op Shopify of WooCommerce.`, price: "Vanaf €1.200", href: "/webshop-laten-maken" },
              { icon: "🛡️", title: "Onderhoud & hosting", text: "Jouw website altijd up-to-date, veilig en snel. Maandelijks geregeld.", price: "€35/mnd", href: "/onderhoud-hosting" },
              { icon: "🔍", title: "Lokale SEO", text: `Gevonden worden door klanten in ${stadNaam} en omgeving via Google.`, price: "Op aanvraag", href: "/contact" },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="group bg-[#13213C]/40 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-[#FFCC66] transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{s.text}</p>
                <span className="text-[#FFA500] font-bold text-sm">{s.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="py-12 bg-[#13213C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Waarom kiezen voor een website van WebsUp in {stadNaam}?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "👤", title: "Persoonlijk contact", text: "Jij praat direct met mij — geen callcenter, altijd bereikbaar." },
              { icon: "📍", title: "Lokaal vertrouwd", text: `Ik ken de ${regio}se markt en begrijp wat lokale ondernemers nodig hebben.` },
              { icon: "💰", title: "Transparante prijzen", text: "Duidelijke prijzen, geen verborgen kosten." },
            ].map((u) => (
              <div key={u.title} className="text-center p-5 bg-[#09101D]/60 rounded-xl border border-white/5">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-white font-semibold mb-1">{u.title}</h3>
                <p className="text-gray-400 text-sm">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              Vraag gratis een concept aan
            </h2>
            <p className="text-gray-400">
              Voor ondernemers in {stadNaam} maak ik gratis een eerste concept.
            </p>
          </div>
          <div className="bg-[#13213C]/30 border border-white/10 rounded-2xl p-8">
            <ContactForm subject={`Website laten maken ${stadNaam}`} />
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "WebsUp",
            description: `Website laten maken in ${stadNaam} — WebsUp`,
            url: `https://websup.nl/website-laten-maken-${stad}`,
            telephone: "+31682202148",
            email: "info@websup.nl",
            address: {
              "@type": "PostalAddress",
              addressRegion: regio,
              addressCountry: "NL",
            },
            areaServed: [stadNaam, regio],
            priceRange: "€695 - €2000",
            openingHours: "Mo-Su 09:00-17:00",
          }),
        }}
      />
    </div>
  );
}
