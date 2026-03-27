import type { Metadata } from "next";
import "./globals.css";
import Header from "./componentes/header";

export const metadata: Metadata = {
  title: "Aula WEB - Site Produtos",
  description: "APP Next gerado na aula WEB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
