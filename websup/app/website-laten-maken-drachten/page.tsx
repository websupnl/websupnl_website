import type { Metadata } from "next";
import LocalSEOPage from "@/components/shared/LocalSEOPage";

export const metadata: Metadata = {
  title: "Website laten maken Drachten — Lokale webdesigner",
  description: "Website laten maken in Drachten? WebsUp is jouw lokale webdesign partner in Friesland. Betaalbaar, snel en persoonlijk.",
  keywords: "website laten maken Drachten, webdesign Drachten, webshop Drachten",
};

export default function Page() {
  return (
    <LocalSEOPage
      stad="drachten"
      stadNaam="Drachten"
      regio="Friesland"
      beschrijving="een van de grootste steden van Friesland"
    />
  );
}
