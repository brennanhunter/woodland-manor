import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Woodland Manor Mobile Home Association",
  description: "Official website for Woodland Manor Mobile Home Association in DeLand, FL. Find community information, board members, events, and important documents.",
  keywords: "Woodland Manor, Mobile Home Association, DeLand FL, HOA, Community",
  authors: [{ name: "Woodland Manor Mobile Home Association" }],
  creator: "Woodland Manor Mobile Home Association",
  publisher: "Woodland Manor Mobile Home Association",
  openGraph: {
    title: "Woodland Manor Mobile Home Association",
    description: "Official website for Woodland Manor Mobile Home Association in DeLand, FL.",
    url: "https://woodlandmanorhoa.com",
    siteName: "Woodland Manor Mobile Home Association",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-woodland-cream text-gray-900`}
        style={{ 
          backgroundColor: '#fde74c',
          color: '#2a2419',
          colorScheme: 'light'
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
