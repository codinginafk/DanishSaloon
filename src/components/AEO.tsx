import { siteConfig } from "@/lib/siteConfig";

export default function AEO() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are Kopila Gents Salon opening hours?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We are open daily from 8 AM to 12 AM (midnight), including weekends and public holidays."
              }
            },
            {
              "@type": "Question",
              name: "Do you accept walk-ins at Kopila Gents Salon?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, walk-ins are welcome at all locations. For busy evenings, we recommend sending a message on WhatsApp."
              }
            },
            {
              "@type": "Question",
              name: "How much does a haircut cost at Kopila Gents Salon?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Haircuts start from AED 5. Our full price list is available on our website with transparent pricing — no hidden charges."
              }
            },
            {
              "@type": "Question",
              name: "Where is Kopila Gents Salon located in Dubai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We have three branches in Dubai: Media City, Karama, and inside Ramee Royal Hotel in Bur Dubai."
              }
            },
            {
              "@type": "Question",
              name: "Do you offer kids haircuts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer kids haircuts starting from AED 25. Our barbers are patient and great with children."
              }
            }
          ]
        })
      }}
    />
  );
}
