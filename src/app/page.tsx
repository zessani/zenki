import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AboutSection } from "@/components/home/AboutSection";
import { DivisionsSection } from "@/components/home/WhyChooseUs";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DivisionsSection />
      <FeaturedProducts />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
