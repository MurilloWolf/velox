import type { ReactNode } from "react";

export default function CoachLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className="min-h-screen bg-[#121212]">{children}</div>;
}
