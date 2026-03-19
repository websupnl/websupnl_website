# WebsUp.nl — Huidige website data (gescrapet maart 2026)

> Gegenereerd als basis voor de nieuwe Next.js website.
> Bron: live scrape van websup.nl via sitemap + pagina-analyse.

---

## Bedrijfsgegevens

| Veld | Waarde |
|---|---|
| Bedrijfsnaam | WebsUp.nl |
| Website | https://websup.nl |
| E-mail | info@websup.nl |
| Telefoon | 0682202148 |
| Openingstijden | Maandag t/m zondag 09:00–17:00 |
| Startprijs | Vanaf €499 |
| Regio | Friesland (Leeuwarden, Burgum, Drachten, Dokkum) |
| Type bedrijf | Eenmanszaak / ZZP |

---

## Huidige tech stack (oud)

- **CMS:** WordPress
- **Page builder:** Elementor
- **SEO plugin:** Rank Math
- **Formulieren:** Fluent Forms
- **Hosting:** onbekend

### Nieuwe stack (doel)
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Sanity CMS
- Brevo (contactformulier, via env)
- Cloudflare Pages (deployment + env)

---

## Huisstijl & Design

### Kleurenpalet

| Naam | HEX |
|---|---|
| Primair oranje | `#FFA500` |
| Donker navy (bg) | `#09101D` |
| Donker navy (bg 2) | `#13213C` |
| Donker navy (bg 3) | `#0A0D31` |
| Donkergrijs (hover) | `#242627` |
| Accent goud | `#FFCC66` |
| Accent blauw | `#010ED0` |
| Wit | `#FFFFFF` |

### Typografie
- **Headlines:** Inter Tight — 600–700 weight
- **Body:** Open Sans — 400 weight, 16px
- Fonts zijn responsief geschaald

### Logo
- Zwart WebsUp.nl logo
- Afmetingen origineel: 1250×555px
- Stijl: tekstlogo

### Algemene stijl
- Dark theme (donkerblauwe achtergrond)
- Oranje als primaire accentkleur
- Radiale gradiënten (donkerblauw → goud)
- Modern, minimalistisch
- Dashed border dividers in portfolio

---

## Navigatie (huidig)

Vanuit gratis-voorbeeld-ontwerp pagina zichtbaar:
- Home
- Services
- About
- Portfolio
- Contact
- CTA knop (oranje)

---

## Pagina-overzicht (uit sitemap)

### Hoofdpagina's
1. `/` — Home
2. `/over-mij/` — Over mij
3. `/projecten/` — Projecten / Portfolio
4. `/diensten/website-laten-maken/` — Dienst: website laten maken
5. `/blog/` — Blog
6. `/contact/` — Contact
7. `/gratis-voorbeeld-ontwerp/` — Gratis voorbeeld ontwerp (leadgen)
8. `/gratis-voorbeeld-ontwerp-bedankt/` — Bedankpagina

### Juridische pagina's
- `/privacybeleid/`
- `/cookiebeleid-eu/`
- `/algemene-voorwaarden/`

### Lokale SEO-pagina's
- `/website-laten-maken-leeuwarden/`
- `/website-laten-maken-burgum/`
- `/website-laten-maken-drachten/`
- `/website-laten-maken-dokkum/`
- `/website-laten-maken-friesland/`

### Blog posts
1. `/wat-kost-een-website-laten-maken-in-2025-alles-wat-je-moet-weten/`
2. `/webshop-starten-in-friesland-dit-zijn-de-7-belangrijkste-stappen/`
3. `/website-laten-maken-dit-moet-je-weten-als-starter-of-zzper/`
4. `/strengere-controle-op-zzp-inhuur-vanaf-2025/`

---

## Homepagina — Content

### Hero sectie
- **Badge:** "JOUW ONLINE WINKEL BOUWEN"
- **H1:** "Website laten maken? Betaalbaar en professioneel voor zzp'ers"
  - *(bevat animated/rotating tekst)*
- **Beschrijving:** "Bij WebsUp.nl krijg je een professionele website tegen betaalbare tarieven, speciaal ontworpen voor zelfstandigen."
- **CTA primair:** "Aan de slag" *(oranje knop)*
- **CTA secundair:** "Bekijk portfolio" *(transparant, witte tekst)*
- **Vertrouwensbadge:** ✓ ondersteuningsbadge (witte tekst)

### Diensten sectie
- **H2:** "Wat kunnen we voor jou doen?"
- Grid met 6 service cards *(exacte titels niet leesbaar via scrape — Elementor JS-rendered)*
- Beschrijvingstekst per card: "Voor online ondernemers"

### Waarom WebsUp sectie
- **H2:** "Waarom kiezen ondernemers voor WebsUp?"
- **Voordelen (6 stuks):**
  1. Professioneel ontwerp
  2. Betaalbare prijzen
  3. Snelle implementatie
  4. SEO-geoptimaliseerd
  5. Mobiel responsive
  6. Volledige ondersteuning

### Portfolio sectie
- **H2:** "Recente projecten"
- Grid met project showcases *(exacte projectnamen niet leesbaar via scrape)*
- **CTA:** "Ontdek meer projecten"

### Eind-CTA sectie
- **H2:** "Klaar voor jouw nieuwe website?"
- **Beschrijving:** "Laat ons helpen je online aanwezigheid uit te breiden"
- **Knop 1:** "Start nu" *(blauw)*
- **Knop 2:** "Neem contact op via WhatsApp" *(groen, met icoon)*

---

## Over mij pagina

- **Paginatitel:** "Over mij | Persoonlijk webdesign door WebsUp"
- **Type:** AboutPage (Schema.org)
- **Gepubliceerd:** 9 maart 2023
- **Laatst gewijzigd:** 2 januari 2026
- **Kernpropositie:** "Persoonlijk webdesign"
- **Visuele elementen:** team/samenwerking foto's, workspace, professionele headshots
- *(Exacte bodytekst niet leesbaar via scrape — Elementor JS-rendered)*

---

## Diensten pagina — Website laten maken

- **Paginatitel:** "Website laten maken voor ondernemers | Snel online – WebsUp"
- **Structuur:**
  - Hero met hoofdpropositie
  - Case study / portfolio secties
  - FAQ accordion
  - CTA knoppen met pulse-animatie
- **Startprijs:** €499
- *(Exacte pakketnames en features niet leesbaar via scrape)*

---

## Gratis voorbeeld ontwerp pagina (leadgen)

- **Paginatitel:** "Gratis website voorbeeld ontwerp - WebsUp.nl"
- **Badge:** "PREMIUM WEBSITE TEMPLATE"
- **H1:** "Maak jouw digitale toekomst waar"
- **Doel:** Leadgeneratie — bezoeker vraagt gratis voorbeeldontwerp aan
- **Formulier:** aanvraagformulier (Fluent Forms)
- **4 USP-blokken** *(exact niet leesbaar)*

---

## Contactpagina

- **Paginatitel:** "Contact opnemen met WebsUp | Webdesign & websites"
- **Formulier:** Fluent Forms contactformulier
  - Invoervelden (tekst + textarea)
  - Verzendknop (oranje)
- **Contactinfo:**
  - E-mail: info@websup.nl
  - Telefoon: 0682202148
  - Openingstijden: ma–zo 09:00–17:00

---

## Blog posts (titels)

1. **"Wat kost een website laten maken in 2025? Alles wat je moet weten"**
   - URL: `/wat-kost-een-website-laten-maken-in-2025-alles-wat-je-moet-weten/`
   - Startprijs vermeld: €499

2. **"Webshop starten in Friesland: dit zijn de 7 belangrijkste stappen"**
   - URL: `/webshop-starten-in-friesland-dit-zijn-de-7-belangrijkste-stappen/`

3. **"Website laten maken: dit moet je weten als starter of zzp'er"**
   - URL: `/website-laten-maken-dit-moet-je-weten-als-starter-of-zzper/`

4. **"Strengere controle op zzp-inhuur vanaf 2025"**
   - URL: `/strengere-controle-op-zzp-inhuur-vanaf-2025/`

---

## Lokale SEO strategie (huidig)

Aparte landingspagina's per locatie in Friesland:
- Leeuwarden
- Burgum
- Drachten
- Dokkum
- Friesland (algemeen)

---

## Schema.org / SEO metadata

- **Type:** LocalBusiness + Organization
- **priceRange:** Vanaf €499
- **openingHours:** Ma–Zo 09:00–17:00
- **SEO plugin:** Rank Math
- **Canonical:** https://websup.nl

---

## Footer (huidig)

- Bedrijfsnaam: WebsUp.nl
- Logo (zwart)
- Social media iconen (rond, 30px)
- Meerdere kolommen met links
- Diensten vermeld: Web development, veiligheid, mobiele apps, beheerde hosting, consulting, cloud
- Copyright / disclaimer

---

## Foto's & afbeeldingen (te verwerken in nieuwe site)

> ⚠️ Exacte afbeeldings-URLs zijn niet leesbaar via scrape (Elementor lazy-load).
> Onderstaande types zijn aanwezig op de site — originelen opvragen bij eigenaar:

- [ ] Logo (zwart + wit/licht variant) — 1250×555px origineel
- [ ] Profielfoto / headshot eigenaar
- [ ] Team/samenwerkingsfoto's (over-mij pagina)
- [ ] Workspace / kantooromgeving foto's
- [ ] Portfolio screenshots per project
- [ ] Hero achtergrond afbeeldingen

---

## Notities nieuwe site (richting eigenaar)

- **Positionering verschuift:** van alleen simpele sites voor ZZP → ook maatwerk, Shopify, WooCommerce, webapps
- **Contactformulier:** via Brevo (API key via env variable)
- **Deployment:** Cloudflare Pages + Cloudflare environment variables
- **CMS:** Sanity (voor blog, projecten, diensten)
- **Doelgroepen:** ZZP/MKB (eenvoudige sites) + grotere ondernemers/ecom (maatwerk)
- **Lokale SEO:** Friesland-pagina's overnemen in nieuwe structuur
