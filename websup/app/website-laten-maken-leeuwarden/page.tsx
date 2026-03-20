import type { Metadata } from "next";
import LocalSEOPage from "@/components/shared/LocalSEOPage";

export const metadata: Metadata = {
  title: "Website laten maken Leeuwarden — Lokale webdesigner",
  description: "Website laten maken in Leeuwarden? WebsUp is jouw lokale webdesign partner. Professioneel, persoonlijk en betaalbaar. Vraag gratis een concept aan.",
  keywords: "website laten maken Leeuwarden, webdesign Leeuwarden, webshop Leeuwarden",
};

export default function Page() {
  return (
    <LocalSEOPage
      stad="leeuwarden"
      stadNaam="Leeuwarden"
      regio="Friesland"
      beschrijving="de hoofdstad van Friesland"
    />
  );
}
