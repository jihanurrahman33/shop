import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { RatingStars } from "./RatingStars";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block transition-transform duration-200 hover:-translate-y-1"
    >
      {/* Product Image Box */}
      <div className="relative w-full aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-bold text-base md:text-lg text-black uppercase tracking-tight truncate">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="py-0.5">
          <RatingStars rating={product.rating} />
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2.5 pt-1">
          <span className="text-xl md:text-2xl font-bold text-black">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xl md:text-2xl font-bold text-black/40 line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discountPercentage && (
            <span className="bg-[#FF3333]/10 text-[#FF3333] text-xs font-medium px-3 py-1 rounded-full">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
