import Link from "next/link";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import { cases } from "@/lib/cases";

export default function Cases() {
  const featured = cases.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight">
              Resultaten die voor zichzelf spreken
            </h2>
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FF8C00] hover:text-[#E67D00] transition-colors whitespace-nowrap self-start sm:self-end"
          >
            Alle cases
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((c, i) => (
            <article
              key={c.id}
              className="group bg-white border border-[#EBEBEB] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative">
                <PlaceholderImage
                  className="w-full aspect-[16/10]"
                  label={c.title}
                  variant={i === 0 ? "warm" : i === 1 ? "cool" : "neutral"}
                />
                {/* Type badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white text-[#111827] text-xs font-semibold rounded-md shadow-sm">
                  {c.type}
                </span>
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#9CA3AF] bg-[#F8F8F6] px-2.5 py-0.5 rounded-full border border-[#EBEBEB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading text-base font-bold text-[#111827] mb-2 group-hover:text-[#FF8C00] transition-colors">
                  {c.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5 line-clamp-2">
                  {c.description}
                </p>

                {/* Result */}
                <div className="pt-4 border-t border-[#EBEBEB]">
                  <p className="text-xs text-[#9CA3AF] font-medium mb-0.5">Resultaat</p>
                  <p className="text-sm font-bold text-[#FF8C00]">{c.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
