import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

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
  title: {
    default: "Woodland Manor Mobile Home Association",
    template: "%s | Woodland Manor Mobile Home Association"
  },
  description: "Official website for Woodland Manor Mobile Home Association in DeLand, FL. Find community information, board members, events, and important documents for our premier retirement community.",
  keywords: "Woodland Manor, Mobile Home Association, DeLand FL, HOA, Community, Florida Mobile Home Park, Volusia County, Retirement Community, 55+ Community, Mobile Home Living, DeLand Florida, manufactured home community, senior living DeLand, affordable housing Volusia County",
  authors: [{ name: "Woodland Manor Mobile Home Association" }],
  creator: "Woodland Manor Mobile Home Association",
  publisher: "Woodland Manor Mobile Home Association",
  robots: "index,follow",
  alternates: {
    canonical: "https://woodlandmanorhoa.com",
  },
  openGraph: {
    title: "Woodland Manor Mobile Home Association",
    description: "Official website for Woodland Manor Mobile Home Association in DeLand, FL. Premier retirement community where neighbors become family.",
    url: "https://woodlandmanorhoa.com",
    siteName: "Woodland Manor Mobile Home Association",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Woodland Manor Mobile Home Association",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woodland Manor Mobile Home Association",
    description: "Official website for Woodland Manor Mobile Home Association in DeLand, FL.",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  other: {
    "geo.region": "FL-US",
    "geo.placename": "DeLand, Florida",
    "geo.position": "29.0283;-81.3031",
    "ICBM": "29.0283, -81.3031",
    "DC.title": "Woodland Manor Mobile Home Association - DeLand, FL",
    "DC.subject": "Mobile Home Association, HOA, DeLand Florida, Volusia County",
    "DC.description": "Premier mobile home community in DeLand, Florida serving Volusia County residents",
    "DC.coverage": "DeLand, Florida, United States",
    "location": "DeLand, Florida, Volusia County",
    "distribution": "DeLand, FL, Volusia County, Central Florida",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
      </head>
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
