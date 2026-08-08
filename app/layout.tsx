import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OurHub Services",
  description:
    "Book verified professionals for home services, religious services, astrology, automobile services, event management and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white">
        {children}

        {/* Global Footer */}
        <Footer />

        {/* Razorpay Checkout Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}