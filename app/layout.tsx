import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EngenhariaHub — Fornecedores para Obras e Projetos",
  description: "Encontre fornecedores qualificados para obras, materiais e equipamentos de engenharia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#ffffff", color: "#111827", colorScheme: "light" }}
      >
        {children}
      </body>
    </html>
  );
}
