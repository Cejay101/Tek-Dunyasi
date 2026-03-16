import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tek Dünyası | Modern Web Development Agency",
    template: "%s | Tek Dünyası",
  },
  description:
    "Tek Dünyası is a modern web development agency that builds fast, responsive, and SEO-friendly websites for businesses. Let us help your business grow online.",
  keywords: [
    "web development",
    "website design",
    "business website",
    "modern websites",
    "SEO",
    "responsive design",
    "Tek Dünyası",
  ],
  openGraph: {
    title: "Tek Dünyası | Modern Web Development Agency",
    description:
      "We build fast, modern, and professional websites that help businesses grow online.",
    url: "https://tekdunyasi.com",
    siteName: "Tek Dünyası",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tek Dünyası | Modern Web Development Agency",
    description:
      "We build fast, modern, and professional websites that help businesses grow online.",
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
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
