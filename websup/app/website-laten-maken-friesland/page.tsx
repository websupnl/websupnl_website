import type { Metadata } from "next";
import LocalSEOPage from "@/components/shared/LocalSEOPage";

export const metadata: Metadata = {
  title: "Website laten maken Friesland — WebsUp",
  description: "Website laten maken in Friesland? WebsUp bouwt professionele websites voor ondernemers door heel Friesland. Lokaal, persoonlijk en betaalbaar.",
  keywords: "website laten maken Friesland, webdesign Friesland, webshop Friesland, webdesigner Friesland",
};

export default function Page() {
  return (
    <LocalSEOPage
      stad="friesland"
      stadNaam="Friesland"
      regio="Friesland"
      beschrijving="werkzaam door heel Friesland"
    />
  );
}
