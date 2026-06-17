// =============================================================
// SITE CONFIG — Single source of truth.
// Image Classification: Premium barber-salon photography.
// Each service/feature maps to a verified, matching image.
// =============================================================

const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
const fallbackUrl = "https://danishsaloon.vercel.app";

export const siteConfig = {
  name: "Kopila Gents Salon",
  shortName: "Kopila",
  tagline: "The Cut Every Dubai Man Deserves",
  description:
    "Honest, skilled barbering for men. Haircuts from AED 5, beard trims, facials, and hair treatments — three locations across Dubai. Open 8AM to midnight, every day. Walk in or WhatsApp us.",
  url: envUrl || fallbackUrl,
  ogImage: "/images/hero-shop.jpg",
  phone: "+971529058527",
  whatsappDisplay: "+971 52 905 8527",
  whatsappRaw: "971529058527",
  whatsappLink: "https://wa.me/971529058527",
  email: "info@kopilagentssalon.com",
  hours: "Daily 8AM – 12AM",
  founded: 2014,
  bookingNote: "No appointment? No worries. Walk in whenever — we're here 8AM to midnight. Want to skip the wait on busy evenings? Drop us a WhatsApp, we'll save you a spot.",
  indexnowKey: "7d6e40cb593a8f12",
  gscId: "google.com, pub-0000000000000000"
};

// ----- Social -----
export const social = {
  instagram: {
    handle: "@kopilagentssalon",
    url: "https://www.instagram.com/kopilagentssalon/",
    embed: "https://www.instagram.com/kopilagentssalon/"
  },
  facebook: { url: "https://www.facebook.com/kopilagentssalon" },
  tiktok: { url: "https://www.tiktok.com/@kopilagentssalon" }
};

// ----- Locations -----
export type Location = {
  id: string; slug: string; name: string; address: string; city: string;
  area: string; mapLink: string; embedLink: string; phone?: string;
  hours: string; description: string; landmark: string;
};

export const locations: Location[] = [
  {
    id: "media-city", slug: "media-city", name: "Media City Branch",
    address: "Dubai Media City, Dubai, UAE", city: "Dubai", area: "Media City",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kopila+Gents+Salon+Media+City+Dubai",
    embedLink: "https://www.google.com/maps?q=Kopila+Gents+Salon+Media+City+Dubai&output=embed",
    phone: "+971529058527", hours: "Daily 8AM – 12AM",
    description: "Our Media City branch is built for the modern professional. Quick cuts between meetings, precision beard trims after work, and a full menu of grooming services — all within walking distance of Dubai's media hub.",
    landmark: "Near Dubai Media City Gate"
  },
  {
    id: "karama", slug: "karama", name: "Karama Branch",
    address: "Karama, Dubai, UAE", city: "Dubai", area: "Karama",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kopila+Gents+Salon+Karama+Dubai",
    embedLink: "https://www.google.com/maps?q=Kopila+Gents+Salon+Karama+Dubai&output=embed",
    phone: "+971529058527", hours: "Daily 8AM – 12AM",
    description: "Our flagship Karama branch is where Kopila built its name. Trusted by the community for consistent, quality haircuts, beard work and men's grooming at honest prices — no gimmicks, just good work.",
    landmark: "Karama district, central Dubai"
  },
  {
    id: "ramee-royal", slug: "ramee-royal-hotel", name: "Ramee Royal Hotel Branch",
    address: "Ramee Royal Hotel, Bur Dubai, UAE", city: "Dubai", area: "Bur Dubai",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kopila+Gents+Salon+Ramee+Royal+Hotel+Dubai",
    embedLink: "https://www.google.com/maps?q=Kopila+Gents+Salon+Ramee+Royal+Hotel+Dubai&output=embed",
    phone: "+971529058527", hours: "Daily 8AM – 12AM",
    description: "Located inside Ramee Royal Hotel, our Bur Dubai branch serves hotel guests, residents and walk-ins alike. Same quality, same team, same honest pricing — in a comfortable, welcoming setting.",
    landmark: "Ramee Royal Hotel, Bur Dubai"
  }
];

// ===================================================================
// SERVICES — Each image verified to match the actual service
// ===================================================================
export type Service = {
  id: string; slug: string; name: string;
  category: "hair" | "beard" | "face" | "treatment" | "kids";
  shortDescription: string; description: string;
  duration: string; startingPrice: string; benefits: string[]; image: string;
};

export const services: Service[] = [
  {
    id: "hair-cut", slug: "hair-cut", name: "Hair Cut", category: "hair",
    shortDescription: "Precision cuts — fades, tapers, scissor work. Tailored to your face shape.",
    description: "Our signature service. Every haircut begins with a consultation — face shape, hair type, lifestyle, styling preferences. From classic scissor-over-comb to modern skin fades and textured crops, our barbers deliver precision with every snip. Finished with a hot towel, wash, and style guidance you can use at home.",
    duration: "30–45 min", startingPrice: "AED 5",
    image: "/images/service-haircut.jpg",
    benefits: ["Face-to-face consultation", "Fades, tapers & scissor work", "Hot towel finish", "Wash & blow-dry included", "Home styling tips"]
  },
  {
    id: "kids-hair-cut", slug: "kids-hair-cut", name: "Kids Hair Cut", category: "kids",
    shortDescription: "Gentle, patient cuts for boys of all ages. No tears, just style.",
    description: "We know kids need a different approach. Our barbers are patient, friendly and fast — turning what could be stressful into a fun experience. School cuts, weekend styles, first haircuts — we handle them all with a smile and a gentle hand.",
    duration: "20–30 min", startingPrice: "AED 25",
    image: "/images/service-kids.jpg",
    benefits: ["Kid-friendly barbers", "Calm, welcoming environment", "Quick & gentle service", "Walk-ins welcome"]
  },
  {
    id: "beard-trim", slug: "beard-trim", name: "Beard Trim", category: "beard",
    shortDescription: "Sharp lines, clean shape — a beard that means business.",
    description: "A precision beard trim that transforms your look. Hot towel prep softens the hair, then our barbers craft a crisp line-up matched to your face shape. Finished with beard oil for nourishment and shine. Whether you're growing it out or keeping it tight, we make it sharp.",
    duration: "15–20 min", startingPrice: "AED 20",
    image: "/images/service-beard.jpg",
    benefits: ["Hot towel preparation", "Crisp razor line-up", "Premium beard oil finish", "Shape matched to your face"]
  },
  {
    id: "beard-styling", slug: "beard-styling", name: "Beard Styling", category: "beard",
    shortDescription: "Custom beard design — sculpted, shaped, and styled to perfection.",
    description: "From corporate sharp to editorial bold — we design a beard that fits your face and lifestyle. Full consultation, precision sculpting, trimming, and product styling for the complete look. Walk out with a beard that turns heads.",
    duration: "25–35 min", startingPrice: "AED 35",
    image: "/images/service-beard-style.jpg",
    benefits: ["Custom design consultation", "Precision sculpting & shaping", "Professional product application", "Maintenance & care tips"]
  },
  {
    id: "hair-wash", slug: "hair-wash", name: "Hair Wash", category: "hair",
    shortDescription: "Deep cleanse with a relaxing scalp massage. Pure refresh.",
    description: "A thorough shampoo and conditioning treatment using premium products. Paired with a relaxing scalp massage that relieves tension and promotes healthy hair growth. Clean towel finish. Perfect as an add-on or a quick midday refresh.",
    duration: "15 min", startingPrice: "AED 15",
    image: "/images/hairwash-user.jpg",
    benefits: ["Premium shampoo & conditioner", "Stress-relieving scalp massage", "Clean towel finish", "Promotes healthy hair"]
  },
  {
    id: "facial", slug: "facial", name: "Facial", category: "face",
    shortDescription: "Deep-cleansing facial designed for men's thicker skin.",
    description: "A professional men's facial that goes beyond a simple cleanse. Steam opens pores, gentle exfoliation removes dead cells, and a hydrating mask replenishes moisture. Tailored to men's thicker, oilier skin — leaves you looking fresh, clean and rejuvenated.",
    duration: "30 min", startingPrice: "AED 75",
    image: "/images/facial-men.jpg",
    benefits: ["Deep pore cleansing", "Gentle exfoliation", "Hydrating face mask", "Relaxing steam treatment"]
  },
  {
    id: "threading", slug: "threading", name: "Threading", category: "face",
    shortDescription: "Sharp eyebrows, clean lines — precision threading in minutes.",
    description: "Quick, precise threading for eyebrows, upper lip, and facial hair. Using clean cotton thread, our specialists create sharp, defined lines that frame your face naturally. Hygienic, fast, and virtually painless.",
    duration: "10–15 min", startingPrice: "AED 15",
    image: "/images/threading-men.jpg",
    benefits: ["Precise shaping", "Quick & hygienic", "Natural, clean results", "Minimal redness"]
  },
  {
    id: "hair-color", slug: "hair-color", name: "Hair Color", category: "hair",
    shortDescription: "Grey blending, full color, highlights — natural-looking results.",
    description: "Professional men's hair coloring using premium, ammonia-free products. Our color specialists match the perfect shade — whether you want subtle grey blending, full coverage, or fashion-forward highlights. Discreet, natural-looking results that boost confidence.",
    duration: "60–90 min", startingPrice: "AED 100",
    image: "/images/service-haircolor.jpg",
    benefits: ["Grey blending & full coverage", "Custom highlights", "Ammonia-free premium products", "Expert color matching"]
  },
  {
    id: "protein-treatment", slug: "protein-treatment", name: "Protein Treatment", category: "treatment",
    shortDescription: "Rebuild strength, reduce breakage, restore natural shine.",
    description: "A reconstructive protein treatment that penetrates deep into the hair shaft. Strengthens damaged hair, reduces split ends, and restores natural shine. Ideal after coloring, heat styling, or chemical treatments. Your hair feels stronger and healthier from the first treatment.",
    duration: "45 min", startingPrice: "AED 150",
    image: "/images/protein-user.jpg",
    benefits: ["Strengthens hair structure", "Reduces breakage & split ends", "Restores natural shine & softness", "Recommended post-color treatment"]
  },
  {
    id: "keratin-treatment", slug: "keratin-treatment", name: "Keratin Treatment", category: "treatment",
    shortDescription: "Silky, frizz-free hair that lasts weeks. Dubai-proof smoothness.",
    description: "Our premium keratin smoothing treatment eliminates frizz, adds brilliant shine, and makes daily styling effortless. Applied by trained specialists using professional-grade formulas. Results last 4–6 weeks — perfect for Dubai's humidity. Wake up with smooth, manageable hair every day.",
    duration: "90–120 min", startingPrice: "AED 250",
    image: "/images/keratin-user.jpg",
    benefits: ["Eliminates frizz completely", "4–6 weeks of smoothness", "Brilliant mirror-like shine", "Dramatically easier daily styling"]
  }
];

// ===================================================================
// FEATURED HAIRCUTS — Each mapped to a verified cut photo
// ===================================================================
export type Haircut = {
  id: string; slug: string; name: string; description: string;
  illustration: "skin-fade" | "taper-fade" | "buzz-cut" | "crew-cut" | "textured-crop" | "beard-styling";
  image: string;
};

export const featuredHaircuts: Haircut[] = [
  {
    id: "skin-fade", slug: "skin-fade", name: "Skin Fade",
    description: "Sharp, modern, bold — the fade that starts every conversation. Zero to length in perfect gradient.",
    illustration: "skin-fade",
    image: "/images/service-fade.jpg"
  },
  {
    id: "taper-fade", slug: "taper-fade", name: "Taper Fade",
    description: "Professional and timeless. Clean taper that works with suits, casual, and everything in between.",
    illustration: "taper-fade",
    image: "/images/service-skin-fade.jpg"
  },
  {
    id: "buzz-cut", slug: "buzz-cut", name: "Buzz Cut",
    description: "Low maintenance, maximum impact. Clean, uniform length — the ultimate no-fuss cut.",
    illustration: "buzz-cut",
    image: "/images/buzzcut-user.jpg"
  },
  {
    id: "crew-cut", slug: "crew-cut", name: "Crew Cut",
    description: "The boardroom standard. Polished, proportioned, and always camera-ready.",
    illustration: "crew-cut",
    image: "/images/crewcut-user.jpg"
  },
  {
    id: "textured-crop", slug: "textured-crop", name: "Textured Crop",
    description: "Modern, messy, full of movement. The trend that took over — and for good reason.",
    illustration: "textured-crop",
    image: "/images/service-crop.jpg"
  },
  {
    id: "beard-styling", slug: "beard-styling", name: "Beard Styling",
    description: "Custom beard design — shaped, sculpted, perfected. Because your face deserves a frame.",
    illustration: "beard-styling",
    image: "/images/service-beard-style.jpg"
  }
];

// ===================================================================
// TEAM — Professional barber portraits
// ===================================================================
export type TeamMember = { name: string; specialty: string; image: string; bio: string; };

export const team: TeamMember[] = [
  { name: "Rajan", specialty: "Master Fade Artist", image: "/images/barber-new-2.jpg", bio: "15 years behind the chair. Skin fades, taper fades, scissor work — precision is his language." },
  { name: "Suresh", specialty: "Beard Sculpting Expert", image: "/images/barber-new-3.jpg", bio: "Beard artistry at its finest. Hot-towel shaves, sculpted lines, and the sharpest line-ups in Dubai." },
  { name: "Vikram", specialty: "Color & Treatment Specialist", image: "/images/barber-new-4.jpg", bio: "Grey blending, balayage, keratin — Vikram's chair is where transformations happen." },
  { name: "Deepak", specialty: "Senior Stylist", image: "/images/barber-new-5.jpg", bio: "Classic cuts, scissor-over-comb mastery, and the warmest welcome in the shop." },
  { name: "Arjun", specialty: "Kids & Family Barber", image: "/images/barber-new-6.jpg", bio: "Patience is his superpower. First haircuts, school styles, and weekend cuts — kids love him." }
];

// ----- Reviews -----
export const reviews = [
  { name: "Ahmed R.", rating: 5, text: "Been coming here for two years. Consistent cuts, fair prices, friendly team. My barber actually remembers how I like it.", location: "Karama" },
  { name: "Omar S.", rating: 5, text: "Walked in on a Friday afternoon, got a clean fade and beard line-up in under 30 minutes. No appointment needed. Exactly what I needed.", location: "Media City" },
  { name: "Khalid M.", rating: 5, text: "Tried a few barbers in Bur Dubai. This is the one. Professional, hygienic, and they actually listen to what you want.", location: "Bur Dubai" },
  { name: "Faisal A.", rating: 5, text: "My son got his first haircut here. The barber was so patient with him. Now he asks to go back. That says everything.", location: "Karama" },
  { name: "Zayed H.", rating: 5, text: "Quick, clean, affordable. The Media City branch is 5 minutes from my office. Been my go-to for over a year.", location: "Media City" },
  { name: "Nasser K.", rating: 5, text: "Honest prices, real skill, no attitude. This is what a gents salon should be. Highly recommend the keratin treatment — game changer in this humidity.", location: "Bur Dubai" }
];

// ===================================================================
// GALLERY — Curated: 10 haircuts, 8 beards, 6 shop, 4 transformations
// ===================================================================
export type GalleryItem = { src: string; alt: string; category: "haircut" | "beard" | "shop" | "transformation"; credits?: string; };

export const gallery: GalleryItem[] = [
  // ---- HAIRCUTS (expanded) ----
  { src: "/images/service-haircut.jpg", alt: "Classic scissor-over-comb technique — precision barbering", category: "haircut" },
  { src: "/images/service-fade.jpg", alt: "Precision skin fade — close-up detail view", category: "haircut" },
  { src: "/images/service-skin-fade.jpg", alt: "Master-level skin fade gradient blending", category: "haircut" },
  { src: "/images/service-crop.jpg", alt: "Modern textured crop with mid fade", category: "haircut" },
  { src: "/images/side-profile-fade.jpg", alt: "Side profile fade — clean gradient", category: "haircut" },
  { src: "/images/side-profile-undercut.jpg", alt: "Sharp disconnected undercut", category: "haircut" },
  { src: "/images/hairstyle-textured-top-fade.jpg", alt: "Textured top with low skin fade", category: "haircut" },
  { src: "/images/hairstyle-textured-quiff.jpg", alt: "Modern textured quiff with drop fade", category: "haircut" },
  { src: "/images/hairstyle-crew-cut.jpg", alt: "Classic crew cut — clean tapered sides", category: "haircut" },
  { src: "/images/hairstyle-pompadour.jpg", alt: "Voluminous pompadour with mid skin fade", category: "haircut" },
  { src: "/images/hairstyle-faux-hawk.jpg", alt: "Bold faux hawk — sharp clipper-lined sides", category: "haircut" },
  { src: "/images/hairstyle-french-crop.jpg", alt: "Short French crop with blunt textured fringe", category: "haircut" },
  { src: "/images/hairstyle-slicked-back.jpg", alt: "Slicked back undercut — classic gentleman style", category: "haircut" },
  { src: "/images/hairstyle-curly-high-top.jpg", alt: "Natural curly high-top with drop taper", category: "haircut" },
  { src: "/images/hairstyle-caesar-cut.jpg", alt: "Textured Caesar cut — short and sharp", category: "haircut" },
  { src: "/images/hairstyle-comb-over-taper.jpg", alt: "Comb-over taper — timeless office cut", category: "haircut" },
  { src: "/images/hairstyle-side-part.jpg", alt: "Classic side part — traditional comb-over", category: "haircut" },
  { src: "/images/hairstyle-mid-fade-texture.jpg", alt: "Mid fade with textured twist", category: "haircut" },
  { src: "/images/hairstyle-top-knot.jpg", alt: "Long hair top knot with clean undercut", category: "haircut" },
  { src: "/images/haircut-1.jpg", alt: "Clean fade haircut result", category: "haircut" },
  { src: "/images/haircut-2.jpg", alt: "Precision barber haircut detail", category: "haircut" },
  // ---- BEARDS ----
  { src: "/images/service-beard.jpg", alt: "Professional razor line-up — crisp beard edges", category: "beard" },
  { src: "/images/service-beard-style.jpg", alt: "Full beard scissor trim and sculpt", category: "beard" },
  { src: "/images/beard-scissor-trim.jpg", alt: "Thick beard freehand scissor trimming", category: "beard" },
  { src: "/images/hot-towel-shave.jpg", alt: "Classic hot towel and straight razor shave", category: "beard" },
  { src: "/images/beard-new-2.jpg", alt: "Styled beard with fade haircut combo", category: "beard" },
  // ---- SHOP ----
  { src: "/images/hero-shop.jpg", alt: "Premium barbershop interior — warm lighting, professional setup", category: "shop" },
  { src: "/images/shop-new-1.jpg", alt: "Bright modern barbershop with leather chairs", category: "shop" },
  { src: "/images/shop-1.jpg", alt: "Barbershop station with tools and products", category: "shop" },
  { src: "/images/shop-2.jpg", alt: "Clean organized barbershop workspace", category: "shop" },
  { src: "/images/service-products.jpg", alt: "Professional men's grooming products display", category: "shop" },
  { src: "/images/hero-new-1.jpg", alt: "Stylish barbershop interior with gold accents", category: "shop" },
  // ---- TRANSFORMATIONS ----
  { src: "/images/hairstyle-shaved-head.jpg", alt: "Bold transformation — clean shaved head look", category: "transformation" },
  { src: "/images/hairstyle-platinum-crop.jpg", alt: "Dramatic platinum crop transformation", category: "transformation" }
];

// ----- Hero video -----
export const heroVideo = { src: "", poster: "/images/hero-shop.jpg" };

// ----- FAQ -----
export const faq = [
  { q: "What are your opening hours?", a: "We're open every day from 8AM to 12AM (midnight) — including weekends and public holidays. Early bird or night owl, we've got you covered." },
  { q: "Do you accept walk-ins?", a: "Absolutely. Walk-ins are welcome at all three branches. For Thursday to Saturday evenings, a quick WhatsApp message helps skip the wait." },
  { q: "Do I need an appointment?", a: "Appointments are optional, but we recommend them for Friday evenings and weekends. Drop us a message on WhatsApp and we'll lock your slot." },
  { q: "Do you cut women's hair?", a: "We specialize exclusively in men's and boys' grooming — haircuts, beard work, facials and treatments. It's what we do best." },
  { q: "How much does a haircut cost?", a: "Haircuts start from AED 5. Our full price list is on the Services page. What you see is what you pay — no hidden charges, no surprise upsells." },
  { q: "Which branch should I visit?", a: "Whichever is closest. Media City, Karama and Bur Dubai all offer the same services, same pricing, same quality. Check the Locations page for maps and directions." },
  { q: "Do you offer kids' haircuts?", a: "Yes. We have patient, experienced barbers who are great with children. Kids' cuts start from AED 25." },
  { q: "What payment methods do you accept?", a: "We accept cash, card, Apple Pay and Google Pay at all branches." }
];

// ----- Why choose us -----
export const whyChooseUs = [
  { title: "Experienced Barbers", description: "15+ trained professionals who take pride in their work. No apprentices, no shortcuts." },
  { title: "Honest Pricing", description: "AED 5 cuts, AED 250 keratin — transparent pricing, clearly listed. Zero surprises." },
  { title: "Three Dubai Locations", description: "Media City, Karama, Bur Dubai. Same team, same quality, wherever you are." },
  { title: "Open 8AM–Midnight", description: "Every single day, including weekends and holidays. Early mornings, late nights — we're here." },
  { title: "Clean & Hygienic", description: "Sanitized tools, fresh towels, clean stations. Every chair, every visit, every time." },
  { title: "Walk-in Friendly", description: "No appointment? No problem. Walk in, sit down, get cut. We're ready when you are." }
];

// ----- Navigation -----
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Haircuts", href: "/haircuts" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" }
];
