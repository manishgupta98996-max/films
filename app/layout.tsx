import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, buildOrganizationJsonLd } from "@/lib/seo";
import { DISCLAIMER } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "AI Filmmaking Course: Make a 1-Hour AI Movie",
  description:
    "AI Filmmaking Pro is a 10+ hour AI filmmaking course. Learn Claude, Runway, Kling, Seedance, ElevenLabs & more, and finish a full 1-hour AI movie.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* Organization JSON-LD (site-wide) */}
        <JsonLd data={buildOrganizationJsonLd()} />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-dark-bg border-t border-dark-surface py-8 text-center text-sm text-dark-muted">
          <p>{DISCLAIMER}</p>
        </footer>

        {/* Lemon Squeezy overlay script */}
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
