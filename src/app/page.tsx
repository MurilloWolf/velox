import type { Metadata } from "next";

import {
  Header,
  Hero,
  CtaSection,
  ContactSection,
  Footer,
  PlatformFeatures,
  BotShowcase,
  PageTracker,
  TrainingSheets,
} from "@/components/system";
import { buildMetadata } from "@/lib/seo";
import { getRequestLocaleInfo } from "@/i18n/getRequestLocaleInfo";
import { getHomeMetadataContent } from "@/i18n/metadata/home";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getRequestLocaleInfo();
  const content = getHomeMetadataContent(locale);
  return buildMetadata(content);
}

export default function Home() {
  return (
    <>
      <PageTracker pagePath="/" />
      <Header />
      <main className="min-h-screen" id="conteudo-principal">
        <Hero />
        <BotShowcase />
        <PlatformFeatures />
        <TrainingSheets />
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
