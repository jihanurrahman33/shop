import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export default function NotFound() {
  const suggestedProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-black/60 mb-8">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-black font-medium">404 Not Found</span>
      </nav>

      {/* Hero 404 section */}
      <div className="text-center py-12 md:py-20 border border-black/10 rounded-[28px] bg-[#F9F9F9] px-6">
        <span className="font-integral text-7xl sm:text-9xl font-black tracking-tighter text-black/90">
          404
        </span>
        <h1 className="font-integral text-2xl sm:text-4xl font-black text-black uppercase tracking-tight mt-4">
          PAGE NOT FOUND
        </h1>
        <p className="text-black/60 text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed">
          The page you are looking for doesn’t exist or might have been moved.
          Explore our collection of premium fashion garments instead.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors shadow-sm"
          >
            Back to Homepage
          </Link>
          <Link
            href="/category"
            className="border border-black/20 text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/5 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-16 sm:mt-24">
        <h2 className="font-integral text-2xl sm:text-3xl font-black text-center text-black uppercase tracking-tight mb-8">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
