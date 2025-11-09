import type { Metadata } from "next";

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
  return children;
}
