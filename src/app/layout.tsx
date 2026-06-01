import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingFeatures from "@/components/FloatingFeatures";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balaji Entrepreneurs - Leading Solar Energy Solutions in India",
  description: "Transform your energy future with India's most trusted solar solutions provider. Save up to 90% on electricity bills with premium residential, commercial, and industrial solar installations.",
  keywords: "solar energy, solar panels, solar installation, renewable energy, solar power, India solar, residential solar, commercial solar, industrial solar",
  authors: [{ name: "Balaji Entrepreneurs" }],
  openGraph: {
    title: "Balaji Entrepreneurs - Solar Energy Solutions",
    description: "India's leading solar energy provider. 15+ years experience, 5000+ happy customers.",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Entrepreneurs - Solar Energy Solutions",
    description: "Transform your energy future with premium solar installations.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingFeatures />
      </body>
    </html>
  );
}
