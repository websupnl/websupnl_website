import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — WebsUp",
  robots: { index: false },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="pt-20 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Algemene Voorwaarden</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-white">1. Toepasselijkheid</h2>
            <p>Deze voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten van WebsUp.nl (eenmanszaak, Daan Koolhaas, Friesland).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">2. Offertes en prijzen</h2>
            <p>Alle offertes zijn vrijblijvend en 30 dagen geldig. Prijzen zijn exclusief BTW tenzij anders vermeld.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">3. Uitvoering</h2>
            <p>WebsUp levert diensten naar beste kunnen. Doorlooptijden zijn indicatief, tenzij uitdrukkelijk een leverdatum is overeengekomen.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">4. Betaling</h2>
            <p>Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan. Bij grotere projecten geldt een aanbetaling van 50%.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">5. Intellectueel eigendom</h2>
            <p>Na volledige betaling gaan de rechten op het geleverde werk over aan de opdrachtgever. WebsUp behoudt het recht om het werk te vermelden als referentie.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">6. Aansprakelijkheid</h2>
            <p>WebsUp is niet aansprakelijk voor gevolgschade. De aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">7. Klachten</h2>
            <p>Klachten dienen binnen 14 dagen na levering schriftelijk te worden gemeld via info@websup.nl.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">8. Toepasselijk recht</h2>
            <p>Nederlands recht is van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Friesland.</p>
          </section>
          <p className="text-gray-500 text-sm">Laatste update: maart 2026 | WebsUp.nl — Daan Koolhaas</p>
        </div>
      </div>
    </div>
  );
}
