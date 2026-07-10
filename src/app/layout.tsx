import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fábio Fonseca | Engenheiro Mecânico",
  description:
    "Portfólio profissional de Fábio Fonseca — engenharia mecânica, projetos CAD, prototipagem e soluções sob medida.",
  openGraph: {
    title: "Fábio Fonseca | Engenheiro Mecânico",
    description:
      "Transformando desafios de engenharia em soluções inteligentes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
