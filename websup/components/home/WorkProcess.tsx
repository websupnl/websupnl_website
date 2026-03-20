import PlaceholderImage from "@/components/shared/PlaceholderImage";

const steps = [
  {
    number: "01",
    title: "Kennismaken",
    description:
      "We beginnen met een kort, vrijblijvend gesprek via WhatsApp, telefoon of video. Ik stel de juiste vragen om te begrijpen wat jij nodig hebt.",
    duration: "20 tot 30 minuten",
  },
  {
    number: "02",
    title: "Concept en offerte",
    description:
      "Na het gesprek stuur ik je een gratis eerste concept en een heldere offerte. Geen vage teksten, gewoon een duidelijke prijs voor duidelijk resultaat.",
    duration: "1 tot 2 dagen",
  },
  {
    number: "03",
    title: "Bouwen",
    description:
      "Ik ga aan de slag. Je kunt meekijken via een preview-link. Feedback geef je gewoon via WhatsApp, ik verwerk het snel.",
    duration: "2 tot 8 weken",
  },
  {
    number: "04",
    title: "Live en klaar",
    description:
      "Je website gaat live. Ik zorg dat alles werkt: hosting, SSL, analytics en Google Search Console. En daarna ben ik er gewoon voor je.",
    duration: "Doorlopend",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: content */}
          <div>
            <p className="text-sm font-semibold text-[#FF8C00] uppercase tracking-wider mb-4">
              Hoe werkt het?
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold text-[#111827] leading-tight mb-6">
              Van eerste contact tot live website
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-12">
              Een helder proces zonder verrassingen. Zo werkt WebsUp.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#FF8C00] flex items-center justify-center shrink-0">
                      <span className="font-heading text-xs font-bold text-white">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 bg-[#EBEBEB] mt-3 min-h-8" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-heading text-base font-bold text-[#111827]">{step.title}</h3>
                      <span className="text-xs text-[#9CA3AF]">{step.duration}</span>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image stack */}
          <div className="hidden lg:block relative">
            {/* Main image */}
            <PlaceholderImage
              className="w-full aspect-[4/3] rounded-2xl shadow-lg"
              label="Samenwerking"
              variant="warm"
            />

            {/* Secondary image */}
            <div className="absolute -bottom-8 -right-6 w-56 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <PlaceholderImage
                className="w-full aspect-[4/3]"
                label="Werkproces"
                variant="cool"
              />
            </div>

            {/* Timeline card */}
            <div className="absolute top-6 -left-8 bg-white border border-[#EBEBEB] rounded-xl shadow-lg p-4 w-48">
              <p className="text-xs text-[#9CA3AF] font-medium mb-3">Gemiddelde doorlooptijd</p>
              <div className="space-y-1.5">
                {[
                  { label: "Website", time: "2 tot 4 weken" },
                  { label: "Webshop", time: "4 tot 8 weken" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-xs">
                    <span className="text-[#4B5563] font-medium">{item.label}</span>
                    <span className="text-[#FF8C00] font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
