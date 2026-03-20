import PlaceholderImage from "@/components/shared/PlaceholderImage";

const reviews = [
  {
    name: "Henk de Boer",
    company: "De Boer Hoveniers",
    location: "Leeuwarden",
    text: "Daan heeft mijn website helemaal opnieuw gebouwd. Binnen een maand stond ik bovenaan in Google voor hovenier Leeuwarden. Mijn agenda zit nu vol.",
    rating: 5,
    initials: "HB",
  },
  {
    name: "Marieke van der Veen",
    company: "Kapsalon Style",
    location: "Drachten",
    text: "Eindelijk een website die echt werkt. Klanten kunnen nu online een afspraak maken en ik krijg automatisch een bevestiging. Scheelt me uren per week.",
    rating: 5,
    initials: "MV",
  },
  {
    name: "Sietse Heemstra",
    company: "Heemstra Fietsen",
    location: "Burgum",
    text: "In zes weken een complete webshop online. Daan heeft alles geregeld, van het design tot de betalingen. Ik doe nu gewoon online verkopen naast de winkel.",
    rating: 5,
    initials: "SH",
  },
  {
    name: "Anke Meijer",
    company: "Studio Lotus",
    location: "Friesland",
    text: "Ik had geen idee wat ik nodig had. Daan luisterde goed, dacht mee en leverde precies wat ik nodig had. Nu melden cursisten zich zelf aan via de website.",
    rating: 5,
    initials: "AM",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-[#F8F8F6] border-y border-[#EBEBEB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
            Wat klanten zeggen
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight mb-4">
            Echte resultaten, echte mensen
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-5 h-5 text-[#FF8C00]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-[#9CA3AF] ml-1.5 font-medium">5.0 gemiddeld</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-[#EBEBEB] rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#FF8C00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#4B5563] text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F3F3F3]">
                <div className="w-8 h-8 rounded-full bg-[#FFF3E0] border border-[#FFE0B2] flex items-center justify-center text-xs font-bold text-[#FF8C00] shrink-0">
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#111827] leading-tight">{review.name}</p>
                  <p className="text-xs text-[#9CA3AF] truncate">{review.company}, {review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
