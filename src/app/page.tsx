import {
  Header,
  Hero,
  CtaSection,
  DonationSection,
  ContactSection,
  Footer,
  PlatformFeatures,
  BotShowcase,
} from "@/components/system";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <PlatformFeatures />
        <BotShowcase />
        <CtaSection />
        <DonationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
