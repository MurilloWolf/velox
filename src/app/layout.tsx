import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ChatWidget from "@/components/system/Chat/components/ChatWidget";
import { seo } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: seo.metadataBase,
  title: {
    default: "Corridas Bot - Seu companheiro de corridas no Telegram",
    template: "%s | VELOX Corridas",
  },
  description:
    "Velox conecta corredores a provas de rua, treinos, notificações no Telegram e dicas de especialistas em um único lugar.",
  keywords: [
    "corridas de rua",
    "calendário de corridas",
    "telegram bot corridas",
    "treino de corrida",
    "corrida 5k",
    "corrida 10k",
    "meia maratona",
    "maratona",
  ],
  alternates: {
    canonical: seo.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: seo.siteName,
    url: seo.siteUrl,
    title: "Corridas Bot - Seu companheiro de corridas no Telegram",
    description:
      "Descubra e acompanhe corridas, receba alertas no Telegram e organize seus treinos com o Velox.",
    images: [
      {
        url: `${seo.siteUrl}/velox_x.png`,
        width: 1200,
        height: 630,
        alt: "Interface do VELOX Corridas exibindo calendário de provas",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@RunningVelox",
    site: "@RunningVelox",
    title: "Corridas Bot - Seu companheiro de corridas no Telegram",
    description:
      "Receba corridas, treinos e dicas direto no Telegram com o VELOX Corridas.",
    images: [`${seo.siteUrl}/velox_x.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "sports",
  applicationName: "VELOX Corridas",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/velox-low-ql.png",
  },
  authors: [{ name: "VELOX" }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seo.siteName,
    url: seo.siteUrl,
    description:
      "VELOX conecta corredores a eventos, treinos e notificações inteligentes pelo Telegram.",
    logo: `${seo.siteUrl}/velox_x.png`,
    sameAs: [
      "https://www.instagram.com/runningvelox/",
      "https://twitter.com/RunningVelox",
      "https://github.com/MurilloWolf",
    ],
  } as const;

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-to-content" href="#conteudo-principal">
          Pular para o conteúdo principal
        </a>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
