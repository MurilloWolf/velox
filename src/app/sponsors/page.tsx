import type { Metadata } from "next";

import { Header, Footer } from "@/components/system";
import { buildMetadata } from "@/lib/seo";
import { getRequestLocaleInfo } from "@/i18n/getRequestLocaleInfo";
import { getSponsorsMetadataContent } from "@/i18n/metadata/sponsors";
import SponsorsPageClient from "./SponsorsPageClient";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getRequestLocaleInfo();
  return buildMetadata(getSponsorsMetadataContent(locale));
}

export default async function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050807] to-black text-white">
      <Header />
      <SponsorsPageClient />
      <Footer />
    </div>
  );
}
