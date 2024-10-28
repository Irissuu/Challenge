import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaApex",
  description: "Desenvolvido por equipe desenvolvedora responsável por NovaApex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
