// =============================================================
// SITE CONFIG — single source of truth for replaceable content.
// Images stored locally in /public/images/ for fast loading.
// =============================================================

const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
const fallbackUrl = "https://www.kopilagentssalon.com";

export const siteConfig = {
  name: "Kopila Gents Salon",
  shortName: "Kopila",
  tagline: "Dubai's Premium Men's Grooming Destination",
  description:
    "Expert haircuts, beard trimming, facials and hair treatments for men across three Dubai locations. Open daily 8AM–12AM. Walk-ins welcome.",
  url: envUrl || fallbackUrl,
  ogImage: "/images/hero-bg.jpg",
  phone: "+971529058527",
  whatsappDisplay: "+971 52 905 8527",
  whatsappRaw: "971529058527",
  whatsappLink: "https://wa.me/971529058527",
  email: "info@kopilagentssalon.com",
  hours: "Daily 8AM – 12AM",
  founded: 2014,
  bookingNote: "Walk-ins always welcome. WhatsApp for appointments during peak hours.",
  indexnowKey: "7d6e40cb593a8f12",
  gscId: "google.com, pub-0000000000000000"
};

// ----- Social (replaceable) -----
export const social = {
  instagram: {
    handle: "@kopilagentssalon",
    url: "https://www.instagram.com/kopilagentssalon/",
    embed: "https://www.instagram.com/kopilagentssalon/"
  },
  facebook: {
    url: "https://www.facebook.com/kopilagentssalon"
  },
  tiktok: {
    url: "https://www.tiktok.com/@kopilagentssalon"
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
      "https://www.google.com/maps/search/?api=1&query=Kopila+Gents+Salon+Media+City+Dubai",
    embedLink:
      "https://www.google.com/maps?q=Kopila+Gents+Salon+Media+City+Dubai&output=embed",
    phone: "+971529058527",
    hours: "Daily 8AM – 12AM",
    description:
      "Our Media City branch is built for the modern professional. Quick cuts between meetings, precision beard trims after work, and a full menu of grooming services — all within walking distance of Dubai's media hub.",
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
      "https://www.google.com/maps/search/?api=1&query=Kopila+Gents+Salon+Karama+Dubai",
    embedLink:
      "https://www.google.com/maps?q=Kopila+Gents+Salon+Karama+Dubai&output=embed",
    phone: "+971529058527",
    hours: "Daily 8AM – 12AM",
    description:
      "Our flagship Karama branch is where Kopila built its name. Trusted by the community for consistent, quality haircuts, beard work and men's grooming at honest prices — no gimmicks, just good work.",
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
      "https://www.google.com/maps/search/?api=1&query=Kopila+Gents+Salon+Ramee+Royal+Hotel+Dubai",
    embedLink:
      "https://www.google.com/maps?q=Kopila+Gents+Salon+Ramee+Royal+Hotel+Dubai&output=embed",
    phone: "+971529058527",
    hours: "Daily 8AM – 12AM",
    description:
      "Located inside Ramee Royal Hotel, our Bur Dubai branch serves hotel guests, residents and walk-ins alike. Same quality, same team, same honest pricing — in a comfortable, welcoming setting.",
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
    shortDescription: "Classic & modern cuts tailored to your face shape.",
    description:
      "A precision haircut by our experienced barbers. We start with a consultation — face shape, lifestyle, how much time you want to spend styling — then cut accordingly. Fades, tapers, scissor-over-comb, clipper work. Finished with a hot towel and style guidance.",
    duration: "30–45 min",
    startingPrice: "AED 5",
    image: "/images/side-profile-fade.jpg",
    benefits: [
      "Full consultation included",
      "Precision cut — fades, tapers, scissor work",
      "Hot towel finish",
      "Wash & blow-dry",
      "Style tips for home"
    ]
  },
  {
    id: "kids-hair-cut",
    slug: "kids-hair-cut",
    name: "Kids Hair Cut",
    category: "kids",
    shortDescription: "Patient, friendly cuts for boys of all ages.",
    description:
      "We know kids can be nervous. Our barbers are patient, gentle and fast. School cuts, weekend styles, first haircuts — we handle them all with a calm approach and a smile.",
    duration: "20–30 min",
    startingPrice: "AED 25",
    image: "/images/kids-haircut.jpg",
    benefits: ["Patient, kid-friendly barbers", "Calm, welcoming environment", "Quick service", "Walk-ins welcome"]
  },
  {
    id: "beard-trim",
    slug: "beard-trim",
    name: "Beard Trim",
    category: "beard",
    shortDescription: "Clean shaping to keep your beard sharp and tidy.",
    description:
      "A precision beard trim with hot towel prep, crisp line-up and beard oil finish. We shape to your facial structure and growth pattern — whether you're growing it out or keeping it short.",
    duration: "15–20 min",
    startingPrice: "AED 20",
    image: "/images/razor-lineup.jpg",
    benefits: ["Hot towel preparation", "Sharp, clean line-up", "Beard oil finish", "Shape matched to your face"]
  },
  {
    id: "beard-styling",
    slug: "beard-styling",
    name: "Beard Styling",
    category: "beard",
    shortDescription: "Custom beard design and sculpting.",
    description:
      "From corporate sharp to modern sculpted — we design a beard that fits your face and lifestyle. Shaping, trimming, sculpting and product styling for the complete look.",
    duration: "25–35 min",
    startingPrice: "AED 35",
    image: "/images/beard-scissor-trim.jpg",
    benefits: ["Custom design consultation", "Precision sculpting & trimming", "Product application & finish", "Maintenance tips"]
  },
  {
    id: "hair-wash",
    slug: "hair-wash",
    name: "Hair Wash",
    category: "hair",
    shortDescription: "Refreshing wash with scalp massage.",
    description:
      "A thorough hair wash using quality shampoo, paired with a relaxing scalp massage. Clean towel finish. The perfect add-on to any cut or a quick refresh on its own.",
    duration: "15 min",
    startingPrice: "AED 15",
    image: "/images/hair-wash.jpg",
    benefits: ["Quality shampoo & conditioner", "Soothing scalp massage", "Clean towel finish"]
  },
  {
    id: "facial",
    slug: "facial",
    name: "Facial",
    category: "face",
    shortDescription: "Deep cleansing facial designed for men's skin.",
    description:
      "A deep-cleansing men's facial that removes impurities, unclogs pores and refreshes your skin. Steam, exfoliation, mask and moisturizer — tailored to men's thicker skin and common concerns.",
    duration: "30 min",
    startingPrice: "AED 75",
    image: "/images/facial.jpg",
    benefits: ["Deep pore cleansing", "Gentle exfoliation", "Hydrating mask", "Relaxing steam treatment"]
  },
  {
    id: "threading",
    slug: "threading",
    name: "Threading",
    category: "face",
    shortDescription: "Precision threading for clean, sharp lines.",
    description:
      "Quick, precise threading for eyebrows, upper lip and facial hair. Clean lines, sharp definition — done hygienically in minutes.",
    duration: "10–15 min",
    startingPrice: "AED 15",
    image: "/images/threading.jpg",
    benefits: ["Precise shaping", "Quick & hygienic", "Clean results"]
  },
  {
    id: "hair-color",
    slug: "hair-color",
    name: "Hair Color",
    category: "hair",
    shortDescription: "Professional men's hair coloring services.",
    description:
      "Grey blending, full color, highlights and fashion tones — all using premium products. Our color specialists will match the right shade and technique for your look. Discreet, natural results.",
    duration: "60–90 min",
    startingPrice: "AED 100",
    image: "/images/hair-color.jpg",
    benefits: ["Grey blending & coverage", "Full color & highlights", "Premium ammonia-free products", "Expert color matching"]
  },
  {
    id: "protein-treatment",
    slug: "protein-treatment",
    name: "Protein Treatment",
    category: "treatment",
    shortDescription: "Strengthening treatment for healthier hair.",
    description:
      "A reconstructive protein treatment that strengthens damaged hair, reduces breakage and restores natural shine. Ideal after coloring, heat styling or chemical treatments.",
    duration: "45 min",
    startingPrice: "AED 150",
    image: "/images/protein.jpg",
    benefits: ["Strengthens hair structure", "Reduces breakage & split ends", "Restores natural shine", "Recommended after color services"]
  },
  {
    id: "keratin-treatment",
    slug: "keratin-treatment",
    name: "Keratin Treatment",
    category: "treatment",
    shortDescription: "Smooth, frizz-free, healthier-looking hair.",
    description:
      "A smoothing keratin treatment that eliminates frizz, adds brilliant shine and makes hair easier to style. Results last weeks. Perfect for Dubai's humidity.",
    duration: "90–120 min",
    startingPrice: "AED 250",
    image: "/images/keratin.jpg",
    benefits: ["Frizz elimination", "Long-lasting smoothness", "Enhanced shine & softness", "Easier daily styling"]
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
    description: "Modern, sharp — the fade that starts every conversation.",
    illustration: "skin-fade",
    image: "/images/side-profile-fade.jpg"
  },
  {
    id: "taper-fade",
    slug: "taper-fade",
    name: "Taper Fade",
    description: "Professional, timeless. Works with every style.",
    illustration: "taper-fade",
    image: "/images/side-profile-textured-crop.jpg"
  },
  {
    id: "buzz-cut",
    slug: "buzz-cut",
    name: "Buzz Cut",
    description: "Low maintenance, high impact. Clean and effortless.",
    illustration: "buzz-cut",
    image: "/images/hairstyle-buzz-cut.jpg"
  },
  {
    id: "crew-cut",
    slug: "crew-cut",
    name: "Crew Cut",
    description: "The business meeting standard. Polished and sharp.",
    illustration: "crew-cut",
    image: "/images/hairstyle-crew-cut.jpg"
  },
  {
    id: "textured-crop",
    slug: "textured-crop",
    name: "Textured Crop",
    description: "Modern, messy, full of movement. Trending for a reason.",
    illustration: "textured-crop",
    image: "/images/hairstyle-textured-top-fade.jpg"
  },
  {
    id: "beard-styling",
    slug: "beard-styling",
    name: "Beard Styling",
    description: "Custom beard design — shaped, sculpted, perfected.",
    illustration: "beard-styling",
    image: "/images/beard-scissor-trim.jpg"
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
    name: "Rajan",
    specialty: "Fade Specialist",
    image: "/images/team-2.jpg",
    bio: "Skin fades, taper fades, scissor work — precision is his signature."
  },
  {
    name: "Suresh",
    specialty: "Beard Expert",
    image: "/images/team-3.jpg",
    bio: "Beard sculpting, hot-towel shaves and line-up artistry."
  },
  {
    name: "Vikram",
    specialty: "Hair Color Specialist",
    image: "/images/team-4.jpg",
    bio: "Grey blending, balayage and men's color correction — natural results only."
  },
  {
    name: "Deepak",
    specialty: "Senior Stylist",
    image: "/images/team-5.jpg",
    bio: "Classic cuts, scissor-over-comb, family-friendly barbering."
  },
  {
    name: "Arjun",
    specialty: "Kids & Family",
    image: "/images/team-6.jpg",
    bio: "Patient, kid-friendly cuts. First haircuts, school styles and weekends."
  }
];

// ----- Reviews -----
export const reviews = [
  {
    name: "Ahmed R.",
    rating: 5,
    text: "Been coming here for two years. Consistent cuts, fair prices, friendly team. My barber actually remembers how I like it.",
    location: "Karama"
  },
  {
    name: "Omar S.",
    rating: 5,
    text: "Walked in on a Friday afternoon, got a clean fade and beard line-up in under 30 minutes. No appointment needed. Exactly what I needed.",
    location: "Media City"
  },
  {
    name: "Khalid M.",
    rating: 5,
    text: "Tried a few barbers in Bur Dubai. This is the one. Professional, hygienic, and they actually listen to what you want.",
    location: "Bur Dubai"
  },
  {
    name: "Faisal A.",
    rating: 5,
    text: "My son got his first haircut here. The barber was so patient with him. Now he asks to go back. That says everything.",
    location: "Karama"
  },
  {
    name: "Zayed H.",
    rating: 5,
    text: "Quick, clean, affordable. The Media City branch is 5 minutes from my office. Been my go-to for over a year.",
    location: "Media City"
  },
  {
    name: "Nasser K.",
    rating: 5,
    text: "Honest prices, real skill, no attitude. This is what a gents salon should be. Highly recommend the keratin treatment — game changer in this humidity.",
    location: "Bur Dubai"
  }
];

// ----- Gallery -----
export type GalleryItem = {
  src: string;
  alt: string;
  category: "haircut" | "beard" | "shop" | "team" | "transformation";
  credits?: string;
};

export const gallery: GalleryItem[] = [
  // SIDE PROFILE SPECIFICS
  { src: "/images/side-profile-fade.jpg", alt: "Side profile skin fade precision", category: "haircut", credits: "Photo by Gabriel Teixeira on Unsplash" },
  { src: "/images/side-profile-textured-crop.jpg", alt: "Side profile textured crop high drop fade", category: "haircut", credits: "Photo by Allef Vinicius on Unsplash" },
  { src: "/images/side-profile-lineup.jpg", alt: "Side profile crisp lineup and temple taper", category: "haircut", credits: "Photo from Pexels" },
  { src: "/images/side-profile-undercut.jpg", alt: "Side profile sharp disconnected undercut", category: "haircut", credits: "Photo by Thgusstavo Santana from Pexels" },
  { src: "/images/side-profile-pompadour.jpg", alt: "Side profile classic pompadour shadow fade", category: "haircut", credits: "Photo by Jonathan Cooper on Unsplash" },
  // BEARD CUTS & SHAPING
  { src: "/images/razor-lineup.jpg", alt: "Close-up straight razor cheek alignment line-up", category: "beard", credits: "Photo by Mostafa Meraji on Unsplash" },
  { src: "/images/beard-scissor-trim.jpg", alt: "Full thick beard freehand scissor trim and sculpt", category: "beard", credits: "Photo by Ashraful Pranto from Pexels" },
  { src: "/images/goatee-lineup.jpg", alt: "Sharp goatee detail and short boxed beard line-up", category: "beard", credits: "Photo from Pexels" },
  { src: "/images/hot-towel-shave.jpg", alt: "Classic hot towel prep and straight razor clean neck shave", category: "beard", credits: "Photo by Cottonbro Studio from Pexels" },
  { src: "/images/mustache-styling.jpg", alt: "Detailed mustache styling and stubble beard alignment", category: "beard", credits: "Photo by Christopher Campbell on Unsplash" },
  // HAIRSTYLE TYPES
  { src: "/images/hairstyle-crew-cut.jpg", alt: "Classic Crew Cut with clean tapered sides", category: "haircut", credits: "Photo by Michael Dam on Unsplash" },
  { src: "/images/hairstyle-high-tight.jpg", alt: "High and Tight military style clipper crop", category: "haircut", credits: "Photo by Yaroslav Shuraev from Pexels" },
  { src: "/images/hairstyle-textured-top-fade.jpg", alt: "Messy Textured Top with low skin fade", category: "haircut", credits: "Photo by Mohammad Farque on Unsplash" },
  { src: "/images/hairstyle-textured-quiff.jpg", alt: "Modern Textured Quiff with drop fade", category: "haircut", credits: "Photo by Craig Adderley from Pexels" },
  { src: "/images/hairstyle-slicked-back.jpg", alt: "Slicked Back Undercut classic style", category: "haircut", credits: "Photo by Joseph Gonzales on Unsplash" },
  { src: "/images/hairstyle-buzz-cut.jpg", alt: "Modern Buzz Cut uniform length with sharp lineup", category: "haircut", credits: "Photo by Bence Boros from Pexels" },
  { src: "/images/hairstyle-pompadour.jpg", alt: "Voluminous Pompadour with mid skin fade", category: "haircut", credits: "Photo by Ema Estudio on Unsplash" },
  { src: "/images/hairstyle-side-part.jpg", alt: "Classic Side Part traditional office comb-over", category: "haircut", credits: "Photo by Andrea Piacquadio from Pexels" },
  { src: "/images/hairstyle-curly-high-top.jpg", alt: "Natural Curly High-Top drop taper fade", category: "haircut", credits: "Photo by Jake Nackos on Unsplash" },
  { src: "/images/hairstyle-long-textured-waves.jpg", alt: "Long Textured Waves natural finish brushback", category: "haircut", credits: "Photo by Stefan Stefanovic from Pexels" },
  { src: "/images/hairstyle-faux-hawk.jpg", alt: "Modern Faux Hawk with sharp clipper lined sides", category: "haircut", credits: "Photo by ASMR Barber Source on Unsplash" },
  { src: "/images/hairstyle-french-crop.jpg", alt: "Short French Crop with blunt textured fringe", category: "haircut", credits: "Photo by Spenser Sembrat from Pexels" },
  { src: "/images/hairstyle-comb-over-taper.jpg", alt: "Comb-Over Taper classic gentlemen cut", category: "haircut", credits: "Photo by Amy Hirschi on Unsplash" },
  { src: "/images/hairstyle-mid-fade-texture.jpg", alt: "Mid Fade with short operational twist texture", category: "haircut", credits: "Photo by Gidyon Thompson from Pexels" },
  { src: "/images/hairstyle-shaved-head.jpg", alt: "Shaved Head bald razor finish look", category: "haircut", credits: "Photo by Albert Dera on Unsplash" },
  { src: "/images/hairstyle-top-knot.jpg", alt: "Long Hair Top Knot with cleanly shaved undercut sides", category: "haircut", credits: "Photo by Pixabay from Pexels" },
  { src: "/images/hairstyle-platinum-crop.jpg", alt: "Bleached Platinum Crop with high skin drop fade", category: "haircut", credits: "Photo from Pexels" },
  { src: "/images/hairstyle-afro-taper-fade.jpg", alt: "Natural Afro Taper Fade crisp geometric perimeter", category: "haircut", credits: "Photo by Jurian Kersten from Pexels" },
  { src: "/images/hairstyle-caesar-cut.jpg", alt: "Textured Caesar cut with short framing lengths", category: "haircut", credits: "Photo by LinkedIn Sales Solutions on Unsplash" },
  { src: "/images/hairstyle-edgar-cut.jpg", alt: "Modern Edgar Cut with high contrast straight fringe", category: "haircut", credits: "Photo by Mykhailo Volkov from Pexels" }
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
    a: "We're open every day from 8AM to 12AM (midnight) — including weekends and public holidays. Early bird or night owl, we've got you covered."
  },
  {
    q: "Do you accept walk-ins?",
    a: "Absolutely. Walk-ins are welcome at all three branches. For Thursday to Saturday evenings, a quick WhatsApp message helps skip the wait."
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are optional, but we recommend them for Friday evenings and weekends. Drop us a message on WhatsApp and we'll lock your slot."
  },
  {
    q: "Do you cut women's hair?",
    a: "We specialize exclusively in men's and boys' grooming — haircuts, beard work, facials and treatments. It's what we do best."
  },
  {
    q: "How much does a haircut cost?",
    a: "Haircuts start from AED 5. Our full price list is on the Services page. What you see is what you pay — no hidden charges, no surprise upsells."
  },
  {
    q: "Which branch should I visit?",
    a: "Whichever is closest. Media City, Karama and Bur Dubai all offer the same services, same pricing, same quality. Check the Locations page for maps and directions."
  },
  {
    q: "Do you offer kids' haircuts?",
    a: "Yes. We have patient, experienced barbers who are great with children. Kids' cuts start from AED 25."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, card, Apple Pay and Google Pay at all branches."
  }
];

// ----- Why choose us -----
export const whyChooseUs = [
  {
    title: "Experienced Barbers",
    description: "15+ trained professionals who take pride in their work. No apprentices cutting corners."
  },
  {
    title: "Honest Prices",
    description: "AED 5 cuts, AED 250 keratin — fair pricing, clearly listed. No surprises."
  },
  {
    title: "Three Dubai Branches",
    description: "Media City, Karama, Bur Dubai. Same team, same quality, wherever you are."
  },
  {
    title: "Open Long Hours",
    description: "8AM to midnight, every single day. Early mornings, late nights — we're here."
  },
  {
    title: "Clean & Hygienic",
    description: "Sanitized tools, fresh towels, clean chairs. Every station, every visit."
  },
  {
    title: "Walk-in Friendly",
    description: "No appointment? No problem. Walk in, sit down, get cut."
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
