import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateSEOMetadata({
  title = "Woodland Manor Mobile Home Association",
  description = "Official website for Woodland Manor Mobile Home Association in DeLand, FL. Find community information, board members, events, and important documents.",
  keywords = "Woodland Manor, Mobile Home Association, DeLand FL, HOA, Community, Florida Mobile Home Park, Volusia County, Retirement Community",
  canonicalUrl,
  ogImage = "/images/og-image.png",
  noIndex = false
}: SEOProps): Metadata {
  const baseUrl = "https://woodlandmanorhoa.com"
  const fullTitle = title === "Woodland Manor Mobile Home Association" 
    ? title 
    : `${title} | Woodland Manor Mobile Home Association`
  
  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: "Woodland Manor Mobile Home Association" }],
    creator: "Woodland Manor Mobile Home Association",
    publisher: "Woodland Manor Mobile Home Association",
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    alternates: {
      canonical: canonicalUrl || baseUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || baseUrl,
      siteName: "Woodland Manor Mobile Home Association",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@WoodlandManorHOA",
    },
    verification: {
      google: "your-google-verification-code", // You'll need to add this from Google Search Console
    },
    other: {
      "geo.region": "FL",
      "geo.placename": "DeLand",
      "geo.position": "29.0283;-81.3031",
      "ICBM": "29.0283, -81.3031",
    },
  }
}

export default generateSEOMetadata
