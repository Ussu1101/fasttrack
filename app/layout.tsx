import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { getSiteUrl } from "@/lib/config/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "FastTrack — Intermittent Fasting Calculator & Planner",
    template: "%s | FastTrack",
  },
  description:
    "Free, private intermittent fasting calculator. Calculate personalized 16:8, 14:10, 18:6, 20:4, OMAD, and 5:2 fasting schedules without an account.",
  keywords: [
    "intermittent fasting calculator",
    "fasting schedule",
    "16:8 fast calculator",
    "omad calculator",
    "circadian fasting",
    "eating window calculator",
    "fasting timer",
    "metabolic health",
  ],
  authors: [{ name: "Muhammad Usama" }],
  creator: "Muhammad Usama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrl(),
    title: "FastTrack — Intermittent Fasting Calculator & Circadian Schedule Builder",
    description:
      "Calculate your personalized fasting and eating windows tailored to your daily routine and circadian rhythm. Private, local-first, zero login.",
    siteName: "FastTrack",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastTrack — Intermittent Fasting Calculator",
    description: "Personalized intermittent fasting calculator and schedule builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FastTrack Intermittent Fasting Calculator",
    "url": getSiteUrl(),
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description":
      "Free interactive intermittent fasting calculator supporting 16:8, 14:10, 18:6, 20:4, OMAD, and 5:2 schedules.",
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface font-sans text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Header />
        <main className="flex-1 w-full pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
