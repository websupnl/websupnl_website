import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid — WebsUp",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Privacybeleid</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-white">1. Verantwoordelijke</h2>
            <p>WebsUp.nl, gevestigd in Friesland, Nederland. E-mail: info@websup.nl, Telefoon: 06 82 20 21 48.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">2. Welke gegevens verzamelen we?</h2>
            <p>Via het contactformulier: naam, e-mailadres, telefoonnummer (optioneel) en berichtinhoud. Via cookies: Google Analytics (anoniem geanonimiseerd).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">3. Waarvoor gebruiken we je gegevens?</h2>
            <p>Uitsluitend om je te kunnen contacteren naar aanleiding van je bericht of aanvraag. We verkopen of delen je gegevens nooit met derden.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">4. Bewaartermijn</h2>
            <p>We bewaren je gegevens zolang als nodig voor de afhandeling van je vraag, of maximaal 2 jaar.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">5. Jouw rechten</h2>
            <p>Je hebt het recht op inzage, correctie en verwijdering van je gegevens. Stuur hiervoor een e-mail naar info@websup.nl.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white">6. Cookies</h2>
            <p>We gebruiken Google Analytics met geanonimiseerd IP-adres voor websitestatistieken. Je kunt cookies weigeren via je browserinstellingen.</p>
          </section>
          <p className="text-gray-500 text-sm">Laatste update: maart 2026</p>
        </div>
      </div>
    </div>
  );
}
