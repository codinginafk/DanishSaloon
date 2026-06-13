import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Hero from "@/components/Hero";
import FeaturedHaircuts from "@/components/FeaturedHaircuts";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";
import LocationsSection from "@/components/LocationsSection";
import InstagramSection from "@/components/InstagramSection";
import WhatsAppCta from "@/components/WhatsAppCta";
import FaqSection from "@/components/FaqSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import AEO from "@/components/AEO";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Premium Men's Grooming Across Dubai`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url }
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <AEO />
      <Hero />
      <FeaturedHaircuts />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <ReviewsSection />
      <TeamSection />
      <LocationsSection />
      <InstagramSection />
      <WhatsAppCta />
      <FaqSection />
    </>
  );
}
