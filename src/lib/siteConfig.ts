// =============================================================
// SITE CONFIG — single source of truth for replaceable content.
// Images stored locally in /public/images/ for fast loading.
// =============================================================

const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
const fallbackUrl = "https://www.danishhanifhairlounge.com";

export const siteConfig = {
  name: "Danish Hanif Hair Lounge",
  shortName: "Danish Hanif",
  tagline: "Dubai's Trusted Men's Grooming Destination",
  description:
    "Professional haircuts, beard styling, hair treatments and grooming services across three convenient Dubai locations. 15+ expert barbers. Open daily 8AM–12AM.",
  url: envUrl || fallbackUrl,
  ogImage: "/images/hero-bg.jpg",
  phone: "+971529058527",
  whatsappDisplay: "+971 52 905 8527",
  whatsappRaw: "971529058527",
  whatsappLink: "https://wa.me/971529058527",
  email: "info@danishhanifhairlounge.com",
  hours: "Daily 8AM – 12AM",
  founded: 2014,
  bookingNote: "Walk-ins welcome. Appointments recommended for evenings & weekends."
};

// ----- Social (replaceable) -----
export const social = {
  instagram: {
    handle: "@danishhanifhairlounge",
    url: "https://www.instagram.com/danishhanifhairlounge/",
    embed: "https://www.instagram.com/danishhanifhairlounge/"
  },
  facebook: {
    url: "https://www.facebook.com/danishhanifhairlounge"
  },
  tiktok: {
    url: "https://www.tiktok.com/@danishhanifhairlounge"
  }
};

// ----- Locations (replaceable map links) -----
export type Location = {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  area: string;
  mapLink: string;
  embedLink: string;
  phone?: string;
  hours: string;
  description: string;
  landmark: string;
};

export const locations: Location[] = [
  {
    id: "media-city",
    slug: "media-city",
    name: "Media City Branch",
    address: "Dubai Media City, Dubai, UAE",
    city: "Dubai",
    area: "Media City",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Danish+Hanif+Hair+Lounge+Media+City+Dubai",
    embedLink:
      "https://www.google.com/maps?q=Danish+Hanif+Hair+Lounge+Media+City+Dubai&output=embed",
    phone: "+971529058527",
    hours: "Daily 8AM – 12AM",
    description:
      "Our Media City branch serves professionals working in Dubai's media and tech hub. Quick cuts between meetings, beard trims after work, and premium grooming for the modern Dubai professional.",
    landmark: "Near Dubai Media City Gate"
  },
  {
    id: "karama",
    slug: "karama",
    name: "Karama Branch",
    address: "Karama, Dubai, UAE",
    city: "Dubai",
    area: "Karama",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Danish+Hanif+Hair+Lounge+Karama+Dubai",
    embedLink:
      "https://www.google.com/maps?q=Danish+Hanif+Hair+Lounge+Karama+Dubai&output=embed",
    phone: "+971529058527",
    hours: "Daily 8AM – 12AM",
    description:
      "Our flagship Karama branch is the home of affordable men's grooming in Dubai. Trusted by residents and visitors for consistent, quality haircuts at honest prices.",
    landmark: "Karama district, central Dubai"
  },
  {
    id: "ramee-royal",
    slug: "ramee-royal-hotel",
    name: "Ramee Royal Hotel Branch",
    address: "Ramee Royal Hotel, Bur Dubai, UAE",
    city: "Dubai",
    area: "Bur Dubai",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Danish+Hanif+Hair+Lounge+Ramee+Royal+Hotel+Dubai",
    embedLink:
      "https://www.google.com/maps?q=Danish+Hanif+Hair+Lounge+Ramee+Royal+Hotel+Dubai&output=embed",
    phone: "+971529058527",
    hours: "Daily 8AM – 12AM",
    description:
      "Conveniently located inside Ramee Royal Hotel, our Bur Dubai branch caters to hotel guests, residents, and walk-ins. Premium grooming in a welcoming environment.",
    landmark: "Ramee Royal Hotel, Bur Dubai"
  }
];

// ----- Services -----
export type Service = {
  id: string;
  slug: string;
  name: string;
  category: "hair" | "beard" | "face" | "treatment" | "kids";
  shortDescription: string;
  description: string;
  duration: string;
  startingPrice: string;
  benefits: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "hair-cut",
    slug: "hair-cut",
    name: "Hair Cut",
    category: "hair",
    shortDescription: "Classic and modern cuts tailored to your face shape.",
    description:
      "A precision haircut from one of our 15+ expert barbers. We consult on your face shape, lifestyle and preferences before cutting — fades, tapers, scissor cuts, scissor-over-comb, clippers only — whatever fits.",
    duration: "30–45 min",
    startingPrice: "AED 5",
    image: "/images/haircut-1.jpg",
    benefits: [
      "Consultation included",
      "Wash and towel dry",
      "Hot towel finish",
      "Style guidance"
    ]
  },
  {
    id: "kids-hair-cut",
    slug: "kids-hair-cut",
    name: "Kids Hair Cut",
    category: "kids",
    shortDescription: "Quick, friendly service for boys of all ages.",
    description:
      "Patient barbers who know how to keep kids comfortable. Clean, stylish cuts for school, weekends and special occasions. Walk-ins welcome.",
    duration: "20–30 min",
    startingPrice: "AED 25",
    image: "/images/kids-haircut.jpg",
    benefits: ["Patient barbers", "Calm environment", "Walk-ins welcome"]
  },
  {
    id: "beard-trim",
    slug: "beard-trim",
    name: "Beard Trim",
    category: "beard",
    shortDescription: "Clean shaping to keep your beard sharp and tidy.",
    description:
      "Precision beard trim with hot towel prep, sharp line-up and beard oil finish. We shape to your facial structure and growth pattern.",
    duration: "15–20 min",
    startingPrice: "AED 20",
    image: "/images/beard-1.jpg",
    benefits: ["Hot towel prep", "Sharp line-up", "Beard oil finish"]
  },
  {
    id: "beard-styling",
    slug: "beard-styling",
    name: "Beard Styling",
    category: "beard",
    shortDescription: "Custom beard design and sculpting.",
    description:
      "Custom beard design — from corporate sharp to modern sculpted looks. We design a beard that fits your face and lifestyle.",
    duration: "25–35 min",
    startingPrice: "AED 35",
    image: "/images/beard-2.jpg",
    benefits: ["Custom design", "Trim & sculpt", "Product finish"]
  },
  {
    id: "hair-wash",
    slug: "hair-wash",
    name: "Hair Wash",
    category: "hair",
    shortDescription: "Clean, refreshing wash & scalp massage.",
    description:
      "Refreshing wash with quality shampoo, light scalp massage and clean towel finish. Pairs perfectly with any cut.",
    duration: "15 min",
    startingPrice: "AED 15",
    image: "/images/hair-wash.jpg",
    benefits: ["Quality shampoo", "Scalp massage", "Towel finish"]
  },
  {
    id: "facial",
    slug: "facial",
    name: "Facial",
    category: "face",
    shortDescription: "Deep cleansing men's facial.",
    description:
      "Deep cleansing facial designed for men's skin. Removes impurities, unclogs pores, and leaves skin refreshed.",
    duration: "30 min",
    startingPrice: "AED 75",
    image: "/images/facial.jpg",
    benefits: ["Deep cleansing", "Exfoliation", "Hydration"]
  },
  {
    id: "threading",
    slug: "threading",
    name: "Threading",
    category: "face",
    shortDescription: "Precision threading for clean lines.",
    description:
      "Precise threading for eyebrows, facial hair and clean lines. Quick, hygienic and sharp.",
    duration: "10–15 min",
    startingPrice: "AED 15",
    image: "/images/threading.jpg",
    benefits: ["Precise shaping", "Quick service", "Hygienic"]
  },
  {
    id: "hair-color",
    slug: "hair-color",
    name: "Hair Color",
    category: "hair",
    shortDescription: "Professional hair coloring for men.",
    description:
      "Professional men's hair coloring — grey blending, full color, highlights and fashion tones. Premium products, expert application.",
    duration: "60–90 min",
    startingPrice: "AED 100",
    image: "/images/hair-color.jpg",
    benefits: ["Grey blending", "Full color", "Premium products"]
  },
  {
    id: "protein-treatment",
    slug: "protein-treatment",
    name: "Protein Treatment",
    category: "treatment",
    shortDescription: "Strengthening protein treatment for healthier hair.",
    description:
      "Reconstructive protein treatment that strengthens damaged hair, reduces breakage and adds shine. Recommended after color or chemical services.",
    duration: "45 min",
    startingPrice: "AED 150",
    image: "/images/protein.jpg",
    benefits: ["Strengthens hair", "Reduces breakage", "Adds shine"]
  },
  {
    id: "keratin-treatment",
    slug: "keratin-treatment",
    name: "Keratin Treatment",
    category: "treatment",
    shortDescription: "Smooth, frizz-free and healthy hair.",
    description:
      "Smoothing keratin treatment that tames frizz, adds shine and makes hair easier to style. Lasts weeks.",
    duration: "90–120 min",
    startingPrice: "AED 250",
    image: "/images/keratin.jpg",
    benefits: ["Frizz control", "Long-lasting smoothness", "Easier styling"]
  }
];

// ----- Featured Haircuts (illustrations) -----
export type Haircut = {
  id: string;
  slug: string;
  name: string;
  description: string;
  illustration: "skin-fade" | "taper-fade" | "buzz-cut" | "crew-cut" | "textured-crop" | "beard-styling";
  image: string;
};

export const featuredHaircuts: Haircut[] = [
  {
    id: "skin-fade",
    slug: "skin-fade",
    name: "Skin Fade",
    description: "Modern clean fade haircut, sharp and modern.",
    illustration: "skin-fade",
    image: "/images/haircut-1.jpg"
  },
  {
    id: "taper-fade",
    slug: "taper-fade",
    name: "Taper Fade",
    description: "Professional everyday style that never goes out of fashion.",
    illustration: "taper-fade",
    image: "/images/haircut-4.jpg"
  },
  {
    id: "buzz-cut",
    slug: "buzz-cut",
    name: "Buzz Cut",
    description: "Low-maintenance classic — clean, sharp, effortless.",
    illustration: "buzz-cut",
    image: "/images/haircut-2.jpg"
  },
  {
    id: "crew-cut",
    slug: "crew-cut",
    name: "Crew Cut",
    description: "Sharp business look. Polished, professional, ready to go.",
    illustration: "crew-cut",
    image: "/images/haircut-3.jpg"
  },
  {
    id: "textured-crop",
    slug: "textured-crop",
    name: "Textured Crop",
    description: "Modern trending cut with movement and texture.",
    illustration: "textured-crop",
    image: "/images/beard-1.jpg"
  },
  {
    id: "beard-styling",
    slug: "beard-styling",
    name: "Beard Styling",
    description: "Custom beard design and shaping for a clean look.",
    illustration: "beard-styling",
    image: "/images/beard-2.jpg"
  }
];

// ----- Team -----
export type TeamMember = {
  name: string;
  specialty: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Danish Hanif",
    specialty: "Founder & Master Barber",
    image: "/images/team-1.jpg",
    bio: "Founder of Danish Hanif Hair Lounge. 15+ years of men's grooming expertise."
  },
  {
    name: "Adeel Khan",
    specialty: "Fade Specialist",
    image: "/images/team-2.jpg",
    bio: "Expert in skin fades, taper fades and modern scissor work."
  },
  {
    name: "Bilal Ahmed",
    specialty: "Beard Expert",
    image: "/images/team-3.jpg",
    bio: "Beard design, sculpting and hot-towel specialist."
  },
  {
    name: "Hamza Ali",
    specialty: "Hair Color Specialist",
    image: "/images/team-4.jpg",
    bio: "Grey blending, balayage and men's color correction."
  },
  {
    name: "Imran Hussain",
    specialty: "Senior Stylist",
    image: "/images/team-5.jpg",
    bio: "Classic cuts, scissor work and family-friendly barbering."
  },
  {
    name: "Junaid Iqbal",
    specialty: "Kids & Family",
    image: "/images/team-6.jpg",
    bio: "Patient, kid-friendly cuts. School & weekend specialist."
  }
];

// ----- Reviews -----
export const reviews = [
  {
    name: "Ahmed R.",
    rating: 5,
    text: "Excellent haircut and beard trim. Professional staff and great prices. I have been coming here for over a year and never had a bad cut.",
    location: "Karama"
  },
  {
    name: "Mohammed S.",
    rating: 5,
    text: "Best barber experience in Dubai. Friendly team and quick service. The Karama branch is my go-to spot.",
    location: "Media City"
  },
  {
    name: "Faisal K.",
    rating: 5,
    text: "Walked in on a Friday afternoon and was seated immediately. Clean fade, perfect beard line-up. AED well spent.",
    location: "Bur Dubai"
  },
  {
    name: "Omar D.",
    rating: 5,
    text: "15 minutes from my office, always consistent. The Media City branch is a lifesaver between meetings.",
    location: "Media City"
  },
  {
    name: "Khalid M.",
    rating: 5,
    text: "Honest prices, professional service, hygienic shop. What more do you want from a Dubai barber?",
    location: "Karama"
  },
  {
    name: "Saeed A.",
    rating: 5,
    text: "Took my son for a kids cut. Barbers were patient, quick, and the result was great. We are regulars now.",
    location: "Bur Dubai"
  }
];

// ----- Gallery (verified-stable Unsplash IDs) -----
export type GalleryItem = {
  src: string;
  alt: string;
  category: "haircut" | "beard" | "shop" | "team" | "transformation";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Skin fade haircut at Danish Hanif Hair Lounge",
    category: "haircut"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Beard trim and styling",
    category: "beard"
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Barber shop interior Dubai",
    category: "shop"
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Taper fade haircut",
    category: "haircut"
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Classic men's haircut",
    category: "haircut"
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Modern men's haircut",
    category: "haircut"
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Beard shaping and line-up",
    category: "beard"
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Hair wash service",
    category: "shop"
  },
  {
    src: "/images/gallery-9.jpg",
    alt: "Premium barber tools",
    category: "shop"
  },
  {
    src: "/images/gallery-10.jpg",
    alt: "Stylish men's haircut transformation",
    category: "transformation"
  },
  {
    src: "/images/gallery-11.jpg",
    alt: "Beard sculpting close-up",
    category: "beard"
  },
  {
    src: "/images/gallery-12.jpg",
    alt: "Crew cut styling",
    category: "haircut"
  }
];

// ----- Hero / featured video (replaceable) -----
export const heroVideo = {
  src: "",
  poster: "/images/hero-bg.jpg"
};

// ----- FAQ -----
export const faq = [
  {
    q: "What are your opening hours?",
    a: "We are open daily from 8AM to 12AM (midnight) — including weekends and most public holidays."
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes. Walk-ins are welcome at all three Dubai branches. For evenings and weekends, an appointment keeps waiting time to a minimum."
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are optional but recommended during busy hours (Thu–Sat evenings). Message us on WhatsApp to lock your slot."
  },
  {
    q: "Do you cut women's hair?",
    a: "No. We specialize exclusively in men's and boys' grooming services — it's what we do best."
  },
  {
    q: "How much does a haircut cost?",
    a: "Haircuts start from AED 5 depending on the service. Beard, color and treatment pricing is on the Services page. We keep our prices honest and accessible."
  },
  {
    q: "Which branch should I visit?",
    a: "Choose the location most convenient to you — Media City, Karama, or Ramee Royal Hotel (Bur Dubai). All three offer the same pricing, services and barbers."
  },
  {
    q: "Do you offer kids' haircuts?",
    a: "Yes. We have patient, kid-friendly barbers at every branch. Kids' cuts start from AED 25."
  },
  {
    q: "Do you offer home service?",
    a: "We focus on in-shop grooming for hygiene, quality and tool control. Message us on WhatsApp for group bookings or special arrangements."
  }
];

// ----- Why choose us -----
export const whyChooseUs = [
  {
    title: "Experienced Team",
    description: "15+ professional barbers trained in modern and classic men's grooming."
  },
  {
    title: "Affordable Pricing",
    description: "Quality grooming without the AED 300+ salon markup. Honest Dubai prices."
  },
  {
    title: "Three Dubai Branches",
    description: "Media City, Karama and Bur Dubai — easy access wherever you are."
  },
  {
    title: "Open Daily",
    description: "8AM until midnight, 7 days a week. Early or late, we're here."
  },
  {
    title: "Clean Environment",
    description: "Sanitized tools, fresh towels and hygienic workstations — every visit."
  },
  {
    title: "Fast Service",
    description: "Walk in, get cut, get out. Minimal waiting, maximum craft."
  }
];

// ----- Navigation -----
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Haircuts", href: "/haircuts" },
  { label: "Gallery", href: "/gallery" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" }
];
