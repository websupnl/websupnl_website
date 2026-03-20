import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WebsUp — Professionele websites voor ondernemers in Friesland",
    template: "%s | WebsUp",
  },
  description:
    "WebsUp bouwt professionele websites en webshops voor ondernemers in Friesland. Persoonlijk contact, scherpe prijzen, blijvende resultaten.",
  keywords: [
    "website laten maken",
    "webshop laten maken",
    "webdesign Friesland",
    "website laten maken Leeuwarden",
    "website laten maken Friesland",
    "WebsUp",
  ],
  authors: [{ name: "Daan Koolhaas", url: "https://websup.nl" }],
  creator: "WebsUp",
  metadataBase: new URL("https://websup.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://websup.nl",
    siteName: "WebsUp",
    title: "WebsUp — Professionele websites voor ondernemers in Friesland",
    description:
      "Professionele websites en webshops voor ondernemers in Friesland. Persoonlijk contact, scherpe prijzen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${interTight.variable}`}>
      <body className="bg-white text-[#111827] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
