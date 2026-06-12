import { siteConfig, social } from "@/lib/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": siteConfig.url,
    name: siteConfig.name,
    alternateName: ["Danish Hanif", "Danish Saloon", "Danish Hair Lounge"],
    image: siteConfig.ogImage,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "AED 5 — AED 300",
    description: siteConfig.description,
    foundingDate: `${siteConfig.founded}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "24:00"
      }
    ],
    sameAs: [
      social.instagram.url,
      social.facebook.url,
      social.tiktok.url
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Dubai Media City",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Karama",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Ramee Royal Hotel, Bur Dubai",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      }
    ],
    areaServed: ["Dubai", "Media City", "Karama", "Bur Dubai", "UAE"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Men's Grooming Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Cut" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beard Trim" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beard Styling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Color" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Wash" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kids Hair Cut" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Threading" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Protein Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keratin Treatment" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
