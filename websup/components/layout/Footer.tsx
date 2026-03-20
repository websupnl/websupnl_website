import Link from "next/link";

const diensten = [
  { label: "Website laten maken", href: "/website-laten-maken" },
  { label: "Webshop laten maken", href: "/webshop-laten-maken" },
  { label: "Onderhoud en hosting", href: "/onderhoud-hosting" },
  { label: "Maatwerk en integraties", href: "/maatwerk" },
];

const bedrijf = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Cases", href: "/cases" },
  { label: "Hoe wij samenwerken", href: "/hoe-wij-samenwerken" },
  { label: "Kennisbank", href: "/kennisbank" },
  { label: "Contact", href: "/contact" },
];

const regio = [
  { label: "Leeuwarden", href: "/website-laten-maken-leeuwarden" },
  { label: "Drachten", href: "/website-laten-maken-drachten" },
  { label: "Burgum", href: "/website-laten-maken-burgum" },
  { label: "Dokkum", href: "/website-laten-maken-dokkum" },
  { label: "Friesland", href: "/website-laten-maken-friesland" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F6] border-t border-[#EBEBEB]">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="font-heading text-lg font-bold text-[#111827]">
                Webs<span className="text-[#FF8C00]">Up</span><span className="text-[#FF8C00]">.</span>nl
              </span>
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              Jouw vaste digitale partner. Professionele websites en webshops
              voor ondernemers in Friesland.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: "mail", label: "info@websup.nl", href: "mailto:info@websup.nl" },
                { icon: "phone", label: "06 82 20 21 48", href: "tel:0682202148" },
                { icon: "location", label: "Friesland, Nederland", href: null },
              ].map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2.5 text-sm text-[#6B7280] hover:text-[#111827] transition-colors group"
                  >
                    <ContactIcon type={item.icon} />
                    {item.label}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                    <ContactIcon type={item.icon} />
                    {item.label}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-4">
              Diensten
            </h4>
            <ul className="space-y-3">
              {diensten.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-4">
              Bedrijf
            </h4>
            <ul className="space-y-3">
              {bedrijf.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regio */}
          <div>
            <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-4">
              Regio
            </h4>
            <ul className="space-y-3">
              {regio.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                    Website laten maken {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-[#EBEBEB] bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            Benieuwd wat wij voor jou kunnen doen?
          </p>
          <Link
            href="/gratis-website-concept"
            className="px-5 py-2.5 bg-[#FF8C00] hover:bg-[#E67D00] text-white font-semibold rounded-lg text-sm transition-all duration-200 whitespace-nowrap shadow-sm"
          >
            Gratis concept aanvragen
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EBEBEB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} WebsUp.nl. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacybeleid" className="hover:text-[#6B7280] transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-[#6B7280] transition-colors">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactIcon({ type }: { type: string }) {
  const cls = "w-4 h-4 text-[#FF8C00] shrink-0";
  if (type === "mail") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
  if (type === "phone") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
