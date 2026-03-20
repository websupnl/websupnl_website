import type { Metadata } from "next";
import LocalSEOPage from "@/components/shared/LocalSEOPage";

export const metadata: Metadata = {
  title: "Website laten maken Dokkum — Lokale webdesigner",
  description: "Website laten maken in Dokkum? WebsUp is de webdesigner voor ondernemers in Dokkum en omgeving. Persoonlijk en betaalbaar.",
  keywords: "website laten maken Dokkum, webdesign Dokkum",
};

export default function Page() {
  return (
    <LocalSEOPage
      stad="dokkum"
      stadNaam="Dokkum"
      regio="Friesland"
      beschrijving="een historische stad in Noord-Friesland"
    />
  );
}
