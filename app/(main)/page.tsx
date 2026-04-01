import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedSuppliers } from "@/components/home/FeaturedSuppliers";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MaterialsBanner } from "@/components/home/MaterialsBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSuppliers />
      <HowItWorks />
      <MaterialsBanner />
    </>
  );
}
