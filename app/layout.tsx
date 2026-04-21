import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chiara & Nicolò",
  description: "Matrimonio di Chiara e Nicolò",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
