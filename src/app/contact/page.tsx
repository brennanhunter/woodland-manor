import Contact from "@/components/Contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Woodland Manor Mobile Home Association - DeLand, FL 32724",
  description: "Contact Woodland Manor Mobile Home Association at 4119 Woodland Circle, DeLand, FL 32724. Call President Lisa Cummings at (802) 324-8027. Serving Volusia County residents since 1973.",
  keywords: "contact Woodland Manor, 4119 Woodland Circle DeLand, DeLand FL 32724, Volusia County HOA contact, mobile home association DeLand phone, Lisa Cummings president, woodlandhoa1973@gmail.com",
  alternates: {
    canonical: "https://woodlandmanorhoa.com/contact",
  },
  openGraph: {
    title: "Contact Woodland Manor Mobile Home Association - DeLand, FL",
    description: "Contact us at 4119 Woodland Circle, DeLand, FL 32724. Call (802) 324-8027 or email woodlandhoa1973@gmail.com",
    url: "https://woodlandmanorhoa.com/contact",
    images: ["/images/WoodlandManorClubhouse.png"],
  },
  other: {
    "geo.region": "FL-US",
    "geo.placename": "DeLand, Florida",
    "geo.position": "29.0283;-81.3031",
    "ICBM": "29.0283, -81.3031",
    "location": "4119 Woodland Circle, DeLand, FL 32724",
    "contact": "(802) 324-8027",
    "email": "woodlandhoa1973@gmail.com",
  },
};

const Page = () => {
  return (
    <>
      <main>
        <Contact />
      </main>
      {/* Local Business Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Woodland Manor Mobile Home Association",
            "description": "Contact information for Woodland Manor Mobile Home Association in DeLand, Florida",
            "url": "https://woodlandmanorhoa.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Woodland Manor Mobile Home Association",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4119 Woodland Circle",
                "addressLocality": "DeLand",
                "addressRegion": "Florida",
                "postalCode": "32724",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.0283,
                "longitude": -81.3031
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-802-324-8027",
                  "contactType": "President",
                  "name": "Lisa Cummings",
                  "email": "woodlandhoa1973@gmail.com",
                  "areaServed": ["DeLand", "Volusia County", "Florida"],
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint", 
                  "telephone": "+1-401-465-0528",
                  "contactType": "Vice President",
                  "name": "Joanne Pinheiro",
                  "areaServed": ["DeLand", "Volusia County", "Florida"],
                  "availableLanguage": "English"
                }
              ]
            }
          })
        }}
      />
    </>
  );
};

export default Page;
