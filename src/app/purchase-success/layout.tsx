import type { Metadata } from "next";
import { Header, Footer } from "@/components/system";

export const metadata: Metadata = {
  title: "Compra Realizada - Velox",
  description: "Sua compra foi processada com sucesso",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PurchaseSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
