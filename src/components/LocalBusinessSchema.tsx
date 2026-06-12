import { siteConfig, social, locations, services, reviews } from "@/lib/siteConfig";

export function LocalBusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "HealthAndBeautyBusiness"],
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    alternateName: [
      "Danish Hanif",
      "Danish Saloon",
      "Danish Hair Lounge",
      "Danish Hanif Salon",
      "Danish Hanif Barber"
    ],
    image: siteConfig.ogImage,
    logo: `${siteConfig.url}/favicon.svg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "AED 5 — AED 300",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Card, Apple Pay, Google Pay",
    description: siteConfig.description,
    foundingDate: `${siteConfig.founded}`,
    slogan: siteConfig.tagline,
    knowsLanguage: ["en", "hi", "ur", "ar"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday"
        ],
        opens: "08:00",
        closes: "23:59"
      }
    ],
    sameAs: [social.instagram.url, social.facebook.url, social.tiktok.url],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Place", name: "Media City" },
      { "@type": "Place", name: "Karama" },
      { "@type": "Place", name: "Bur Dubai" },
      { "@type": "AdministrativeArea", name: "Dubai, United Arab Emirates" }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "524",
      bestRating: "5",
      worstRating: "1"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Men's Grooming Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDescription,
          provider: { "@id": `${siteConfig.url}#business` }
        },
        price: s.startingPrice.replace(/[^\d]/g, ""),
        priceCurrency: "AED"
      }))
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5"
      },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      itemReviewed: { "@id": `${siteConfig.url}#business` }
    }))
  };

  const locationsSchema = locations.map((l) => ({
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/locations/${l.slug}#location`,
    name: `${siteConfig.name} — ${l.name}`,
    parentOrganization: { "@id": `${siteConfig.url}#business` },
    image: siteConfig.ogImage,
    url: `${siteConfig.url}/locations/${l.slug}`,
    telephone: l.phone || siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: l.address,
      addressLocality: l.city,
      addressRegion: l.area,
      addressCountry: "AE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: l.area === "Media City" ? 25.0951 : l.area === "Karama" ? 25.2456 : 25.2632,
      longitude: l.area === "Media City" ? 55.1393 : l.area === "Karama" ? 55.3017 : 55.2972
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "08:00",
        closes: "23:59"
      }
    ],
    hasMap: l.mapLink
  }));

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "en-AE",
    publisher: { "@id": `${siteConfig.url}#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {locationsSchema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
