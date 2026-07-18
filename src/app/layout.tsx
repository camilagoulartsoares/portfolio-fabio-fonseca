import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
