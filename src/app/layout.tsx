import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sushilsharda.org"),
  title: {
    default: "Shri Sushil Sharda Foundation | Empowerment Through Education",
    template: "%s | Shri Sushil Sharda Foundation",
  },
  description:
    "Shri Sushil Sharda Foundation provides free ACCA tuition to deserving students who may not be able to afford professional education, helping them pursue global opportunities through education.",
  keywords: [
    "Shri Sushil Sharda Foundation",
    "Free ACCA Education",
    "Free ACCA Tuition India",
    "Amit Dharaniya Global Academy",
    "Empowerment through Education",
    "Chartered Certified Accountant coaching",
    "ACCA scholarship",
    "Dehradun education foundation",
  ],
  authors: [{ name: "Shri Sushil Sharda Foundation" }],
  creator: "Shri Sushil Sharda Foundation",
  publisher: "Shri Sushil Sharda Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Shri Sushil Sharda Foundation | Empowerment Through Education",
    description:
      "Providing free ACCA tuition to deserving students who cannot afford the high cost of professional education.",
    url: "https://sushilsharda.org",
    siteName: "Shri Sushil Sharda Foundation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/foundation-logo.jpeg",
        width: 600,
        height: 600,
        alt: "Shri Sushil Sharda Foundation Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Sushil Sharda Foundation | Empowerment Through Education",
    description:
      "Providing free ACCA tuition to deserving students who cannot afford the high cost of professional education.",
    images: ["/images/foundation-logo.jpeg"],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-stone-900 antialiased selection:bg-[#AA331D] selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
