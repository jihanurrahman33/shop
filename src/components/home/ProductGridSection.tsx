import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/ui/ProductCard";

interface ProductGridSectionProps {
  title: string;
  products: readonly Product[];
  viewAllHref: string;
  showDivider?: boolean;
}

export function ProductGridSection({
  title,
  products,
  viewAllHref,
  showDivider = false,
}: ProductGridSectionProps) {
  return (
    <>
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-integral text-3xl sm:text-4xl md:text-5xl font-black text-center text-black tracking-tight uppercase mb-10 sm:mb-14">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href={viewAllHref}
            className="inline-block px-14 py-3.5 border border-black/10 rounded-full text-sm sm:text-base font-medium text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            View All
          </Link>
        </div>
      </section>

      {showDivider && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-black/10" />
        </div>
      )}
    </>
  );
}
