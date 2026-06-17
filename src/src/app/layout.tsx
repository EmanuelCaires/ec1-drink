import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "EC1 | One Drink. Better Day.",
  description:
    "EC1 ONE is a premium daily wellness and performance drink. Zero added sugar, natural caffeine, hydration electrolytes, and complete vitamin support — all in one clean, refreshing can.",
  keywords: [
    "EC1",
    "wellness drink",
    "performance drink",
    "natural caffeine",
    "electrolytes",
    "daily wellness",
    "sugar free energy drink",
  ],
  metadataBase: new URL("https://ec1drink.com"),
  openGraph: {
    title: "EC1 | One Drink. Better Day.",
    description:
      "Hydration. Focus. Nutrition. Immunity. All in one clean drink designed to help you start better and perform better — every day.",
    url: "https://ec1drink.com",
    siteName: "EC1 Drink",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EC1 ONE Daily Wellness & Performance Drink",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EC1 | One Drink. Better Day.",
    description:
      "Premium daily wellness and performance drink. Zero sugar, natural caffeine, electrolytes, vitamins.",
    images: ["/og-image.jpg"],
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
  return (
    <html lang="en" className="grain">
      <body className="bg-[#040d1a] text-[#e8edf4] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
