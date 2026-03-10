import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Умные капсулы | Инновационные технологии микрокапсулирования",
  description: "Создаем микрокапсулы на основе белково-полисахаридных комплексов для защиты активов и контролируемого высвобождения. B2B решения.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
