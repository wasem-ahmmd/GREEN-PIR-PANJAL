import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Pir Panjal R&D — Bio Materials & Food Processing Research",
  description:
    "Green Pir Panjal R&D is a research lab pioneering biodegradable bag materials and next-generation food processing technologies for a sustainable tomorrow.",
  keywords: [
    "Green Pir Panjal",
    "R&D Lab",
    "Bio Bags",
    "Biodegradable Materials",
    "Food Processing",
    "Sustainable Research",
    "Investor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-brand-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
