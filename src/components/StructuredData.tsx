'use client'

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'Event' | 'Article'
  data?: any
}

export default function StructuredData({ type = 'Organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    }

    if (type === 'Organization') {
      return {
        ...baseData,
        name: "Woodland Manor Mobile Home Association",
        alternateName: "Woodland Manor HOA",
        description: "Premier mobile home community association in DeLand, Florida providing quality community living for residents.",
        url: "https://woodlandmanorhoa.com",
        logo: "https://woodlandmanorhoa.com/images/logo.png",
        image: "https://woodlandmanorhoa.com/images/hero-image.png",
        telephone: "+1-802-324-8027",
        email: "woodlandhoa1973@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4119 Woodland Circle",
          addressLocality: "DeLand",
          addressRegion: "Florida",
          postalCode: "32724",
          addressCountry: "US"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "29.0283",
          longitude: "-81.3031"
        },
        areaServed: [
          {
            "@type": "City",
            name: "DeLand",
            "@id": "https://en.wikipedia.org/wiki/DeLand,_Florida"
          },
          {
            "@type": "AdministrativeArea",
            name: "Volusia County"
          },
          {
            "@type": "State",
            name: "Florida"
          }
        ],
        servesCuisine: "Retirement Community Services",
        knowsAbout: [
          "Mobile Home Association Management",
          "Community Living",
          "HOA Services",
          "Retirement Communities",
          "DeLand Florida Living",
          "Volusia County Communities"
        ],
        foundingDate: "1973",
        memberOf: {
          "@type": "Organization",
          name: "Community Associations Institute",
          url: "https://www.caionline.org/"
        },
        sameAs: [
          "https://woodlandmanorhoa.com"
        ],
        ...data
      }
    }

    if (type === 'LocalBusiness') {
      return {
        ...baseData,
        "@type": "RealEstateAgent",
        name: "Woodland Manor Mobile Home Association",
        description: "Mobile home community association providing residential services and community management in DeLand, Florida.",
        url: "https://woodlandmanorhoa.com",
        telephone: "+1-802-324-8027",
        email: "woodlandhoa1973@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4119 Woodland Circle",
          addressLocality: "DeLand",
          addressRegion: "FL",
          postalCode: "32724",
          addressCountry: "US"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "29.0283",
          longitude: "-81.3031"
        },
        openingHours: "Mo-Fr 09:00-17:00",
        priceRange: "$75.00 annual fee",
        ...data
      }
    }

    return { ...baseData, ...data }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
