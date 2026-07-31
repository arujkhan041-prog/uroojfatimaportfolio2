import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urooj Fatima | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer from Pakistan — Building fast, modern, SEO-friendly websites for startups & businesses across the USA, UK, Canada, Australia & UAE.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "WordPress Developer",
    "Next.js Developer",
    "Urooj Fatima",
    "Freelance Web Developer",
    "eCommerce Developer",
  ],
  authors: [{ name: "Urooj Fatima" }],
  creator: "Urooj Fatima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uroojportfolio.vercel.app",
    title: "Urooj Fatima | Full-Stack Web Developer",
    description:
      "Building fast, modern, SEO-friendly websites for startups & businesses worldwide.",
    siteName: "Urooj Fatima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urooj Fatima | Full-Stack Web Developer",
    description:
      "Building fast, modern, SEO-friendly websites for startups & businesses worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
