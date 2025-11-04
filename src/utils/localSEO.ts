// Local SEO utilities for Woodland Manor Mobile Home Association

export const localSEOData = {
  // Primary Location
  location: {
    name: "DeLand",
    state: "Florida",
    county: "Volusia County",
    zipCode: "32724",
    coordinates: {
      latitude: 29.0283,
      longitude: -81.3031
    }
  },
  
  // Service Areas
  serviceAreas: [
    "DeLand, FL",
    "Volusia County, FL",
    "Orange City, FL",
    "Deltona, FL",
    "DeBary, FL",
    "Lake Helen, FL",
    "Cassadaga, FL",
    "Enterprise, FL"
  ],
  
  // Local Keywords
  localKeywords: [
    "mobile home association DeLand FL",
    "HOA Volusia County",
    "retirement community DeLand Florida",
    "55+ community DeLand",
    "mobile home park DeLand",
    "affordable housing DeLand FL",
    "community living Volusia County",
    "DeLand mobile home community",
    "Florida retirement living",
    "Woodland Circle DeLand",
    "manufactured home community Florida",
    "senior community DeLand FL"
  ],
  
  // Nearby Landmarks & Attractions
  nearbyLandmarks: [
    "Stetson University",
    "Blue Spring State Park",
    "DeLand Municipal Airport",
    "West Volusia Hospital",
    "DeLand Museum of Art",
    "Central Florida Zoo",
    "St. Johns River",
    "Hontoon Island State Park",
    "DeLand Naval Air Station Museum"
  ],
  
  // Local Business Categories
  businessCategories: [
    "Mobile Home Association",
    "Homeowners Association",
    "Community Association",
    "Retirement Community",
    "Residential Community",
    "Property Management"
  ]
}

// Generate location-specific meta description
export function generateLocalMetaDescription(pageType: string): string {
  const base = "Woodland Manor Mobile Home Association in DeLand, Florida"
  
  const descriptions = {
    home: `${base} - Premier retirement community in Volusia County. Affordable $75 annual fees. Contact (802) 324-8027.`,
    about: `Learn about ${base}. Established community serving residents in DeLand and surrounding Volusia County areas.`,
    board: `Meet the board members of ${base}. Community leadership serving DeLand, FL residents since 1973.`,
    contact: `Contact ${base} at 4119 Woodland Circle, DeLand, FL 32724. Serving Volusia County residents. Call (802) 324-8027.`,
    faq: `Frequently asked questions about ${base}. Information for current and prospective DeLand, FL residents.`,
    downloads: `Important documents for ${base} residents. Community rules, bylaws, and forms for DeLand, FL community.`,
    calendar: `Community events and meetings for ${base}. Stay informed about activities in your DeLand, FL neighborhood.`,
    map: `Location and directions to ${base} at 4119 Woodland Circle, DeLand, FL 32724 in Volusia County.`
  }
  
  return descriptions[pageType as keyof typeof descriptions] || descriptions.home
}

// Generate location-specific keywords
export function generateLocalKeywords(pageType: string): string {
  const baseKeywords = localSEOData.localKeywords.slice(0, 6).join(', ')
  
  const pageSpecificKeywords = {
    home: 'DeLand mobile home community, Volusia County HOA, Florida retirement',
    about: 'DeLand community history, Volusia County mobile home association',
    board: 'DeLand HOA board, community leadership Volusia County',
    contact: '4119 Woodland Circle DeLand, Volusia County contact, DeLand FL 32724',
    faq: 'DeLand community questions, Volusia County HOA information',
    downloads: 'DeLand community documents, Volusia County HOA forms',
    calendar: 'DeLand community events, Volusia County activities',
    map: 'DeLand location map, Volusia County directions, 4119 Woodland Circle'
  }
  
  const specific = pageSpecificKeywords[pageType as keyof typeof pageSpecificKeywords] || ''
  return `${baseKeywords}, ${specific}`
}

// Generate JSON-LD for local business
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://woodlandmanorhoa.com",
    "name": "Woodland Manor Mobile Home Association",
    "image": "https://woodlandmanorhoa.com/images/hero-image.png",
    "description": "Premier mobile home community association in DeLand, Florida providing quality community living for residents in Volusia County.",
    "url": "https://woodlandmanorhoa.com",
    "telephone": "+18023248027",
    "email": "woodlandhoa1973@gmail.com",
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
    "areaServed": localSEOData.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "knowsAbout": localSEOData.localKeywords,
    "hasMap": "https://woodlandmanorhoa.com/map",
    "paymentAccepted": "Check, Cash",
    "priceRange": "$75.00 annual fee",
    "openingHours": "Mo-Fr 09:00-17:00",
    "foundingDate": "1973",
    "slogan": "Where neighbors become family"
  }
}
