import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Laten we kennis maken",
  description:
    "Neem contact op met WebsUp. Reactie binnen 24 uur. Bel, app of mail — ik ben er voor je.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#FFA500]/8 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            Laten we kennismaken
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Neem contact op
          </h1>
          <p className="text-gray-300 text-lg">
            Heb je een vraag, wil je een offerte of gewoon even overleggen? Ik
            reageer altijd binnen 24 uur — meestal een stuk sneller.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-white font-bold text-xl mb-6">Direct contact</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📱",
                      label: "WhatsApp (snelst)",
                      value: "06 82 20 21 48",
                      href: "https://wa.me/31682202148",
                    },
                    {
                      icon: "☎️",
                      label: "Bellen",
                      value: "06 82 20 21 48",
                      href: "tel:0682202148",
                    },
                    {
                      icon: "✉️",
                      label: "E-mail",
                      value: "info@websup.nl",
                      href: "mailto:info@websup.nl",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-[#13213C]/50 border border-white/10 rounded-xl hover:border-[#FFA500]/30 transition-all duration-200 group"
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-[#FFA500] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#13213C]/50 border border-white/10 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Openingstijden</h3>
                <p className="text-gray-400 text-sm">
                  Maandag t/m zondag: 09:00 – 17:00
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Ook buiten kantooruren reageer ik snel via WhatsApp.
                </p>
              </div>

              <div className="p-5 bg-[#FFA500]/10 border border-[#FFA500]/20 rounded-xl">
                <p className="text-[#FFCC66] font-medium text-sm mb-1">
                  💡 Tip
                </p>
                <p className="text-gray-300 text-sm">
                  Liever eerst vrijblijvend een gratis concept ontvangen? Vraag
                  het aan — ik stuur je binnen 48 uur een eerste schets.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#13213C]/30 border border-white/10 rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-6">
                  Stuur een bericht
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
