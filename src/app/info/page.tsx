import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { getRequestLocaleInfo } from "@/i18n/getRequestLocaleInfo";
import { getInfoMetadataContent } from "@/i18n/metadata/info";
import InfoPageClient from "./InfoPageClient";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getRequestLocaleInfo();
  return buildMetadata(getInfoMetadataContent(locale));
}

export default function InfoPage() {
  return <InfoPageClient />;
}
