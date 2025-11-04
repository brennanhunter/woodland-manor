import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import Announcements from "@/components/Announcements";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Woodland Manor Mobile Home Association - Premier Community in DeLand, FL",
  description: "Welcome to Woodland Manor Mobile Home Association in DeLand, Florida. A premier retirement community where neighbors become family. Annual fees $75.00. Contact us at (802) 324-8027.",
  keywords: "Woodland Manor, Mobile Home Association, DeLand FL, HOA, Florida retirement community, 55+ community, mobile home park, Volusia County, affordable housing",
  alternates: {
    canonical: "https://woodlandmanorhoa.com",
  },
  openGraph: {
    title: "Woodland Manor Mobile Home Association - Premier Community in DeLand, FL",
    description: "Welcome to Woodland Manor Mobile Home Association in DeLand, Florida. A premier retirement community where neighbors become family.",
    url: "https://woodlandmanorhoa.com",
    images: ["/images/hero-image.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickLinks />
      <Announcements />
    </div>
  );
}
