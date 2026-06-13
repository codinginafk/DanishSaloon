import { siteConfig, locations } from "@/lib/siteConfig";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    foundingDate: "2014",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "00:00"
    },
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
    priceRange: "AED 5 – AED 250",
    areaServed: "Dubai, UAE",
    hasMap: "https://maps.google.com/?q=Kopila+Gents+Salon+Dubai",
    sameAs: [
      "https://www.instagram.com/kopilagentssalon/",
      "https://www.facebook.com/kopilagentssalon",
      "https://www.tiktok.com/@kopilagentssalon"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200+",
      bestRating: "5"
    },
    employee: [
      { "@type": "Person", name: "Kopila", jobTitle: "Founder & Master Barber" },
      { "@type": "Person", name: "Rajan", jobTitle: "Fade Specialist" },
      { "@type": "Person", name: "Suresh", jobTitle: "Beard Expert" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
