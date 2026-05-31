import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://leadthewaywithai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leo Walker — AI Engineer | Lead The Way with AI",
    template: "%s | Lead The Way with AI",
  },
  description:
    "Leo Walker is an AI engineer building practical AI systems for healthcare — from LLM-powered workflows to production remote patient monitoring platforms.",
  keywords: [
    "AI engineer",
    "healthcare AI",
    "LLM systems",
    "agentic workflows",
    "MCP",
    "data pipelines",
    "Leo Walker",
    "KaiCare.ai",
  ],
  authors: [{ name: "Leo Walker" }],
  openGraph: {
    title: "Leo Walker — AI Engineer | Lead The Way with AI",
    description:
      "Practical AI systems for healthcare and beyond. Engineer by foundation, building AI that moves healthcare forward.",
    url: SITE_URL,
    siteName: "Lead The Way with AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Walker — AI Engineer | Lead The Way with AI",
    description:
      "Practical AI systems for healthcare and beyond. Engineer by foundation, building AI that moves healthcare forward.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
