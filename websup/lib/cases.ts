export interface Case {
  id: string;
  title: string;
  client: string;
  type: string;
  description: string;
  tags: string[];
  result: string;
  url?: string;
  color: string;
}

export const cases: Case[] = [
  {
    id: "hoveniersbedrijf-de-boer",
    title: "Hoveniersbedrijf De Boer",
    client: "De Boer Hoveniers",
    type: "Website",
    description:
      "Professionele website voor een hovenier in Friesland. Inclusief contactformulier, portfolio met projectfoto's en lokale SEO voor Leeuwarden.",
    tags: ["Website", "SEO", "Friesland"],
    result: "+180% meer aanvragen in 3 maanden",
    color: "#22c55e",
  },
  {
    id: "kapsalon-style",
    title: "Kapsalon Style",
    client: "Kapsalon Style Drachten",
    type: "Website + Booking",
    description:
      "Moderne website met online reserveringssysteem. Klanten kunnen nu 24/7 een afspraak inplannen zonder te bellen.",
    tags: ["Website", "Booking", "Drachten"],
    result: "60% minder telefoontjes, vol geboekt",
    color: "#f59e0b",
  },
  {
    id: "fietsenwinkel-online",
    title: "Fietsenwinkel Heemstra",
    client: "Heemstra Fietsen",
    type: "Webshop",
    description:
      "Complete webshop met +200 producten, betaalsysteem en voorraadbeheer. Van nul naar online verkoop in 6 weken.",
    tags: ["Webshop", "E-commerce", "Friesland"],
    result: "€15.000 omzet eerste kwartaal online",
    color: "#FFA500",
  },
  {
    id: "installatiebedrijf-vd-berg",
    title: "Installatiebedrijf Van den Berg",
    client: "Van den Berg Installaties",
    type: "Website",
    description:
      "Strak zakelijk website voor een installatietechnisch bedrijf. Focus op vertrouwen, referenties en snelle offerte-aanvragen.",
    tags: ["Website", "B2B", "Maatwerk"],
    result: "Top 3 Google voor lokale zoektermen",
    color: "#3b82f6",
  },
  {
    id: "yoga-studio-lotus",
    title: "Yoga Studio Lotus",
    client: "Studio Lotus Burgum",
    type: "Website + Rooster",
    description:
      "Website met live lesrooster en online aanmeldformulieren per les. Klanten kunnen zichzelf inschrijven.",
    tags: ["Website", "Automation", "Burgum"],
    result: "Lessen altijd volgeboekt via website",
    color: "#8b5cf6",
  },
  {
    id: "schoonmaakbedrijf-sparkle",
    title: "Schoonmaakbedrijf Sparkle",
    client: "Sparkle Cleaning",
    type: "Website + Lead systeem",
    description:
      "Snelle leadgen site met directe prijscalculator. Potentiële klanten krijgen binnen 5 minuten een prijsindicatie.",
    tags: ["Website", "Leadgen", "Calculator"],
    result: "3x hogere conversie vergeleken met oud",
    color: "#06b6d4",
  },
];
