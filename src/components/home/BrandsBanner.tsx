import React from "react";
import Image from "next/image";
import { BRAND_LOGOS } from "@/constants/brands";

export function BrandsBanner() {
  return (
    <section id="brands" className="bg-black py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 opacity-90">
          {BRAND_LOGOS.map((brand) => (
            <div
              key={brand.name}
              className="flex-1 flex justify-center min-w-[120px]"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className={brand.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
