import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://zenki-eta.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Zenki | Manufacturing, Distribution and Trading",
    template: "%s | Zenki",
  },
  description:
    "Zenki is a Pakistani manufacturing, distribution and trading group operating across aerosol production, auto care, truck parts and mirrors, and import sourcing. Based in Karachi.",
  keywords: [
    "aerosol manufacturing Pakistan",
    "contract filling Pakistan",
    "truck parts Karachi",
    "mirror manufacturing Pakistan",
    "Zenki",
    "industrial group Pakistan",
  ],
  openGraph: {
    siteName: "Zenki",
    locale: "en_PK",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
