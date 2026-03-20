import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website laten maken",
    description:
      "Een professionele website die jouw bedrijf goed vertegenwoordigt, gevonden wordt in Google en bezoekers omzet naar klanten.",
    price: "Vanaf €695",
    href: "/website-laten-maken",
    features: ["Uniek ontwerp", "SEO-setup", "Contactformulier", "SSL en hosting"],
  },
  {
    number: "02",
    title: "Webshop laten maken",
    description:
      "Een complete online winkel om producten of diensten te verkopen. Van productcatalogus tot betaalsysteem.",
    price: "Vanaf €1.200",
    href: "/webshop-laten-maken",
    features: ["Shopify of WooCommerce", "iDEAL betaling", "Productbeheer", "Order notificaties"],
    highlighted: true,
  },
  {
    number: "03",
    title: "Onderhoud en hosting",
    description:
      "Jouw website in goede handen. Updates, backups, beveiliging en hosting, maandelijks geregeld.",
    price: "Vanaf €35 per maand",
    href: "/onderhoud-hosting",
    features: ["Maandelijkse updates", "Dagelijkse backups", "Security monitoring", "WhatsApp support"],
  },
  {
    number: "04",
    title: "Maatwerk en integraties",
    description:
      "Koppelingen, automatiseringen en custom functionaliteit voor wanneer standaard niet genoeg is.",
    price: "Op aanvraag",
    href: "/maatwerk",
    features: ["API-koppelingen", "Automatiseringen", "Boekingssystemen", "Prijscalculators"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#F8F8F6] border-y border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
            Wat ik voor je doe
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight mb-4">
            Diensten die jouw bedrijf online laten groeien
          </h2>
          <p className="text-[#6B7280] text-lg">
            Van een simpele website tot een volledige webshop. Ik pak het aan
            zoals het past bij jouw bedrijf en budget.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group block rounded-xl border transition-all duration-200 hover:shadow-md ${
                service.highlighted
                  ? "bg-[#FF8C00] border-[#E67D00]"
                  : "bg-white border-[#EBEBEB] hover:border-[#D1D1D1]"
              }`}
            >
              <div className="p-7 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Number */}
                  <span
                    className={`font-heading text-sm font-bold tracking-widest shrink-0 ${
                      service.highlighted ? "text-white/60" : "text-[#D1D5DB]"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Title and desc */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3
                        className={`font-heading text-xl font-bold ${
                          service.highlighted ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      {service.highlighted && (
                        <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full">
                          Meest gekozen
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm leading-relaxed mb-4 max-w-xl ${
                        service.highlighted ? "text-orange-100" : "text-[#6B7280]"
                      }`}
                    >
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className={`text-xs ${
                            service.highlighted ? "text-orange-200" : "text-[#9CA3AF]"
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and arrow */}
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                    <span
                      className={`font-heading font-bold text-lg ${
                        service.highlighted ? "text-white" : "text-[#111827]"
                      }`}
                    >
                      {service.price}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 ${
                        service.highlighted ? "text-white" : "text-[#9CA3AF]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FF8C00] hover:text-[#E67D00] transition-colors"
          >
            Alle diensten bekijken
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
