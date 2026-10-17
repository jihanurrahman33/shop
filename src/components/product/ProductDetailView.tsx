"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Minus,
  Plus,
  Check,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import { Product, REVIEWS, PRODUCTS } from "@/data/products";
import { RatingStars } from "@/components/ui/RatingStars";
import { ProductCard } from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { addToCart } = useCart();

  // State
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || "Olive Green"
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[2] || product.sizes[0] || "Large"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"details" | "reviews" | "faqs">(
    "reviews"
  );
  const [addedToast, setAddedToast] = useState<boolean>(false);

  // Recommendations: exclude current product
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Toast Alert */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
            ✓
          </span>
          <span className="text-sm font-medium">Added to cart successfully!</span>
          <Link
            href="/cart"
            className="underline text-xs text-gray-300 hover:text-white"
          >
            View Cart
          </Link>
        </div>
      )}

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-black/60 mb-6 sm:mb-8">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href="/category" className="hover:text-black transition-colors">
          Shop
        </Link>
        <ChevronRight size={14} />
        <Link
          href={`/category?category=${product.category}`}
          className="hover:text-black transition-colors"
        >
          Men
        </Link>
        <ChevronRight size={14} />
        <span className="text-black font-medium">{product.category}</span>
      </nav>

      {/* Product Hero: Gallery + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-14 border-b border-black/10">
        {/* Left Column: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 justify-center md:justify-start">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-36 bg-[#F0EEED] rounded-[16px] overflow-hidden p-2 transition-all cursor-pointer ${
                  selectedImage === img
                    ? "ring-2 ring-black"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  fill
                  className="object-contain p-1 mix-blend-multiply"
                />
              </button>
            ))}
          </div>

          {/* Main Large Image */}
          <div className="flex-1 relative aspect-square sm:aspect-[4/5] bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-6">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              priority
              className="object-contain p-4 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Column: Product Info & Actions */}
        <div className="space-y-6 text-black">
          <div>
            <h1 className="font-integral text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-3">
              <RatingStars rating={product.rating} scoreSuffix="/5" size={20} />
            </div>

            {/* Price Row */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl sm:text-3xl font-bold text-black">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl sm:text-3xl font-bold text-black/30 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <span className="bg-[#FF3333]/10 text-[#FF3333] text-sm font-medium px-3.5 py-1 rounded-full">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-black/60 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <hr className="border-black/10" />

          {/* Select Colors */}
          <div className="space-y-3">
            <span className="text-sm text-black/60 font-medium">Select Colors</span>
            <div className="flex items-center gap-3">
              {product.colors.map((color) => {
                const isSelected = selectedColor === color.name;
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                      isSelected ? "ring-2 ring-offset-2 ring-black" : ""
                    }`}
                    title={color.name}
                  >
                    {isSelected && (
                      <Check size={16} strokeWidth={3} className="text-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-black/10" />

          {/* Choose Size */}
          <div className="space-y-3">
            <span className="text-sm text-black/60 font-medium">Choose Size</span>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-[#F0F0F0] text-black/60 hover:bg-black/10"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-black/10" />

          {/* Quantity Stepper & Add to Cart */}
          <div className="flex items-center gap-4 pt-2">
            {/* Stepper */}
            <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-5 py-3 w-36 sm:w-40 text-black">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-black hover:text-black/60 transition-colors p-1"
                aria-label="Decrease quantity"
              >
                <Minus size={18} />
              </button>
              <span className="font-bold text-base">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-black hover:text-black/60 transition-colors p-1"
                aria-label="Increase quantity"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-black/80 transition-all shadow-md cursor-pointer text-center"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="py-12">
        {/* Tab Headers */}
        <div className="flex border-b border-black/10 text-center">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex-1 pb-4 text-base sm:text-lg font-medium transition-colors cursor-pointer ${
              activeTab === "details"
                ? "text-black border-b-2 border-black font-bold"
                : "text-black/40 hover:text-black"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex-1 pb-4 text-base sm:text-lg font-medium transition-colors cursor-pointer ${
              activeTab === "reviews"
                ? "text-black border-b-2 border-black font-bold"
                : "text-black/40 hover:text-black"
            }`}
          >
            Rating & Reviews
          </button>
          <button
            onClick={() => setActiveTab("faqs")}
            className={`flex-1 pb-4 text-base sm:text-lg font-medium transition-colors cursor-pointer ${
              activeTab === "faqs"
                ? "text-black border-b-2 border-black font-bold"
                : "text-black/40 hover:text-black"
            }`}
          >
            FAQs
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "reviews" && (
          <div className="pt-8 space-y-8">
            {/* Reviews Sub-Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-xl sm:text-2xl text-black">
                  All Reviews
                </h3>
                <span className="text-black/60 text-sm">
                  ({REVIEWS.length * 75})
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="p-2.5 rounded-full bg-[#F0F0F0] text-black hover:bg-black/10 transition-colors"
                  aria-label="Filter reviews"
                >
                  <SlidersHorizontal size={18} />
                </button>
                <div className="hidden sm:flex items-center gap-2 bg-[#F0F0F0] px-4 py-2.5 rounded-full text-sm font-medium text-black">
                  <span>Latest</span>
                  <ChevronDown size={16} />
                </div>
                <button className="bg-black text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-black/80 transition-colors cursor-pointer">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="border border-black/10 rounded-[20px] p-6 sm:p-8 space-y-3 bg-white"
                >
                  <RatingStars rating={review.rating} showScore={false} size={18} />
                  <div className="flex items-center gap-1.5 font-bold text-base text-black">
                    <span>{review.author}</span>
                    {review.verified && (
                      <span className="w-4 h-4 rounded-full bg-[#01AB31] text-white flex items-center justify-center text-[8px]">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                  <div className="text-xs text-black/40 font-medium pt-2">
                    Posted on {review.date}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button className="border border-black/10 rounded-full px-10 py-3 text-sm font-medium text-black hover:bg-black/5 transition-colors cursor-pointer">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="pt-8 max-w-2xl space-y-4 text-black/80 text-sm leading-relaxed">
            <h3 className="font-bold text-lg text-black">
              Material & Care Instructions
            </h3>
            <p>100% Cotton, machine wash cold with like colors, tumble dry low.</p>
            <h3 className="font-bold text-lg text-black pt-4">Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Soft breathable single jersey knit</li>
              <li>High quality screen printed front graphic</li>
              <li>Reinforced crew neckline with taped shoulder seams</li>
              <li>Pre-shrunk fabric to maintain size and shape over multiple washes</li>
            </ul>
          </div>
        )}

        {activeTab === "faqs" && (
          <div className="pt-8 max-w-2xl space-y-4 text-black/80 text-sm">
            <div className="border border-black/10 rounded-xl p-4">
              <h4 className="font-bold text-black">What is the return policy?</h4>
              <p className="mt-1 text-black/60">
                We offer a 30-day no-questions-asked money back guarantee for all
                unworn items with tags intact.
              </p>
            </div>
            <div className="border border-black/10 rounded-xl p-4">
              <h4 className="font-bold text-black">How long does shipping take?</h4>
              <p className="mt-1 text-black/60">
                Standard shipping typically delivers in 3-5 business days. Express
                shipping takes 1-2 business days.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* YOU MIGHT ALSO LIKE */}
      <section className="pt-12 pb-6">
        <h2 className="font-integral text-2xl sm:text-4xl font-black text-center text-black tracking-tight uppercase mb-10">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {recommendations.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
}
