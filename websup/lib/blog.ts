export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  content?: string;
}

export const categories = [
  "Alle artikelen",
  "Website tips",
  "SEO",
  "Webshop",
  "Onderhoud",
  "Ondernemen",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "wat-kost-een-website-laten-maken-in-2025",
    title: "Wat kost een website laten maken in 2025? Alles wat je moet weten",
    excerpt:
      "Een website laten maken kost in Nederland gemiddeld tussen de €500 en €5.000+. Maar wat bepaalt precies de prijs? En wanneer kies je voor een goedkope of duurdere oplossing?",
    category: "Website tips",
    date: "2025-11-15",
    readTime: 7,
  },
  {
    slug: "webshop-starten-friesland-7-stappen",
    title: "Webshop starten in Friesland: dit zijn de 7 belangrijkste stappen",
    excerpt:
      "Wil je een webshop beginnen vanuit Friesland? Van productfoto's tot betaalsystemen — dit zijn de stappen die niemand je vertelt maar iedereen nodig heeft.",
    category: "Webshop",
    date: "2025-10-22",
    readTime: 9,
  },
  {
    slug: "website-laten-maken-als-starter-of-zzper",
    title: "Website laten maken: dit moet je weten als starter of zzp'er",
    excerpt:
      "Als zzp'er of starter heb je een website nodig, maar geen zin in gedoe. Hier lees je precies wat je nodig hebt, wat het kost en waar je op moet letten.",
    category: "Ondernemen",
    date: "2025-09-10",
    readTime: 6,
  },
  {
    slug: "lokale-seo-friesland-tips",
    title: "Lokale SEO in Friesland: hoe kom je bovenaan in Google?",
    excerpt:
      "Gevonden worden door klanten in jouw buurt is goud waard. In dit artikel leg ik uit hoe lokale SEO werkt en wat jij vandaag kunt doen om hoger te scoren.",
    category: "SEO",
    date: "2025-08-03",
    readTime: 8,
  },
  {
    slug: "website-onderhoud-waarom-het-belangrijk-is",
    title: "Waarom website-onderhoud belangrijker is dan je denkt",
    excerpt:
      "Veel ondernemers zetten een website online en vergeten hem daarna. Dat is een dure vergissing. Hier is waarom onderhoud essentieel is voor je online succes.",
    category: "Onderhoud",
    date: "2025-07-18",
    readTime: 5,
  },
  {
    slug: "shopify-vs-woocommerce-2025",
    title: "Shopify of WooCommerce? De eerlijke vergelijking voor Nederlandse ondernemers",
    excerpt:
      "Shopify of WooCommerce kiezen is een grote beslissing. Ik vergelijk beide platforms eerlijk, zonder bullshit, zodat jij de juiste keuze maakt voor jouw webshop.",
    category: "Webshop",
    date: "2025-06-25",
    readTime: 10,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "Alle artikelen") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
