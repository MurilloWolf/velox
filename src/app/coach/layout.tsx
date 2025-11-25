import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildMetadata } from "@/lib/seo";
import { getRequestLocaleInfo } from "@/i18n/getRequestLocaleInfo";
import { getCoachMetadataContent } from "@/i18n/metadata/coach";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getRequestLocaleInfo();
  return buildMetadata(getCoachMetadataContent(locale));
}

export default function CoachLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
