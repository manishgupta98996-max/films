import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, buildOrganizationJsonLd } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { GA_MEASUREMENT_ID } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "AI Filmmaking Course: No Camera, No Crew, No Experience Needed",
  description:
    "The AI filmmaking course with real student films to prove it works. Script, visuals, voice, score and edit across a complete pipeline. 10+ hours, $79 one-time payment. 14-day refund.",
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

        {/* Global Navbar / Header on every page */}
        <SiteHeader />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer on every page */}
        <SiteFooter />

        {/* Lemon Squeezy overlay script */}
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics (gtag.js) */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
