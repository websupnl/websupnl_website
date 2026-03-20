const stats = [
  { number: "5+", label: "Tevreden klanten" },
  { number: "100%", label: "Persoonlijk contact" },
  { number: "24u", label: "Gemiddelde reactietijd" },
  { number: "2+", label: "Jaar ervaring" },
];

const features = [
  "SSL en beveiliging inbegrepen",
  "Altijd mobiel-vriendelijk",
  "SEO-geoptimaliseerd",
  "Vaste contactpersoon",
  "Lokaal in Friesland",
  "Transparante prijzen",
];

export default function Trust() {
  return (
    <section className="bg-[#F8F8F6] py-16 border-b border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-[#111827] mb-1">{stat.number}</p>
              <p className="text-sm text-[#6B7280]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-10">
          <div className="h-px flex-1 bg-[#EBEBEB]" />
          <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-widest whitespace-nowrap">
            Altijd inbegrepen
          </p>
          <div className="h-px flex-1 bg-[#EBEBEB]" />
        </div>

        {/* Feature list */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {features.map((f) => (
            <span key={f} className="flex items-center gap-2 text-sm text-[#4B5563]">
              <svg className="w-4 h-4 text-[#FF8C00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
