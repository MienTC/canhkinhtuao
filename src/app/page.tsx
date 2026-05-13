import { HeroSection } from "@/components/sections/HeroSection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { FactorySection } from "@/components/sections/FactorySection";
import { NewsSection } from "@/components/sections/NewsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <FeaturedProjects />
      <WorkProcess />
      <FactorySection />
      <NewsSection />
      <PartnersSection />
    </div>
  );
}
