import type { Metadata } from "next";
import LocalSEOPage from "@/components/shared/LocalSEOPage";

export const metadata: Metadata = {
  title: "Website laten maken Burgum — Lokale webdesigner",
  description: "Website laten maken in Burgum? WebsUp helpt ondernemers in Burgum en omgeving aan een professionele online aanwezigheid.",
  keywords: "website laten maken Burgum, webdesign Burgum",
};

export default function Page() {
  return (
    <LocalSEOPage
      stad="burgum"
      stadNaam="Burgum"
      regio="Friesland"
      beschrijving="een groeiende gemeente in Friesland"
    />
  );
}
