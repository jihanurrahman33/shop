import React from "react";
import { productService } from "@/services/productService";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandsBanner } from "@/components/home/BrandsBanner";
import { ProductGridSection } from "@/components/home/ProductGridSection";
import { DressStyleSection } from "@/components/home/DressStyleSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  const newArrivals = productService.getNewArrivals();
  const topSelling = productService.getTopSelling();

  return (
    <div className="w-full">
      <HeroSection />
      <BrandsBanner />
      <ProductGridSection
        title="NEW ARRIVALS"
        products={newArrivals}
        viewAllHref="/category?new=true"
        showDivider
      />
      <ProductGridSection
        title="TOP SELLING"
        products={topSelling}
        viewAllHref="/category"
      />
      <DressStyleSection />
      <TestimonialsSection />
    </div>
  );
}
