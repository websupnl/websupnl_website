interface PageHeroProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  light?: boolean;
}

export default function PageHero({ label, title, titleAccent, description, light = false }: PageHeroProps) {
  return (
    <section className={`pt-16 ${light ? "bg-white border-b border-[#EBEBEB]" : "bg-[#F8F8F6] border-b border-[#EBEBEB]"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl">
          {label && (
            <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
              {label}
            </p>
          )}
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.25rem)] font-bold text-[#111827] leading-tight mb-4">
            {title}{" "}
            {titleAccent && <span className="text-[#FF8C00]">{titleAccent}</span>}
          </h1>
          {description && (
            <p className="text-lg text-[#6B7280] leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
