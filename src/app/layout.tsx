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
    "Engenheiro mecânico UNIFEI — projetos mecânicos, impressão 3D, drones agrícolas e miniaturas em escala.",
  openGraph: {
    title: "Fábio Fonseca | Engenheiro Mecânico",
    description:
      "Projetos mecânicos, impressão 3D e miniaturas com precisão de engenharia.",
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
