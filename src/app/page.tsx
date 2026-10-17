"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PRODUCTS, TESTIMONIALS, DRESS_STYLES } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { RatingStars } from "@/components/ui/RatingStars";

export default function HomePage() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);
  const topSelling = PRODUCTS.filter((p) => p.isTopSelling);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F2F0F1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 lg:pt-24 pb-0 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column: Copy & Stats */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 z-10 pb-12 lg:pb-28">
            <h1 className="font-integral text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tight uppercase">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black/60 text-sm sm:text-base max-w-lg leading-relaxed">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <div>
              <Link
                href="/category"
                className="inline-block w-full sm:w-auto text-center bg-black text-white px-14 py-4 rounded-full text-base font-medium hover:bg-black/80 transition-all shadow-md cursor-pointer"
              >
                Shop Now
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-4 flex flex-wrap items-center justify-between sm:justify-start gap-6 sm:gap-10 border-t border-black/10 sm:border-t-0">
              <div>
                <span className="block font-integral text-2xl sm:text-4xl font-bold text-black">
                  200+
                </span>
                <span className="text-xs sm:text-sm text-black/60">
                  International Brands
                </span>
              </div>
              <div className="h-12 w-px bg-black/10 hidden sm:block" />
              <div>
                <span className="block font-integral text-2xl sm:text-4xl font-bold text-black">
                  2,000+
                </span>
                <span className="text-xs sm:text-sm text-black/60">
                  High-Quality Products
                </span>
              </div>
              <div className="h-12 w-px bg-black/10 hidden sm:block" />
              <div>
                <span className="block font-integral text-2xl sm:text-4xl font-bold text-black">
                  30,000+
                </span>
                <span className="text-xs sm:text-sm text-black/60">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Sparkles */}
          <div className="w-full lg:w-1/2 relative flex items-end justify-center self-end">
            {/* Sparkle Big Star */}
            <div className="absolute top-12 right-4 sm:right-10 z-20 animate-pulse">
              <Image
                src="/icons/star-big.svg"
                alt="Star"
                width={70}
                height={70}
                className="w-14 h-14 sm:w-20 sm:h-20"
              />
            </div>
            {/* Sparkle Small Star */}
            <div className="absolute top-44 left-4 sm:left-8 z-20 animate-pulse">
              <Image
                src="/icons/star-small.svg"
                alt="Star"
                width={44}
                height={44}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>

            {/* Models Image */}
            <div className="relative w-full max-w-[580px] aspect-[4/5] sm:aspect-[5/6] flex items-end">
              <Image
                src="/images/hero-models.png"
                alt="Stylish Models"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS BAR */}
      <section id="brands" className="bg-black py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 opacity-90">
            <div className="flex-1 flex justify-center min-w-[120px]">
              <Image
                src="/icons/versace.svg"
                alt="Versace"
                width={160}
                height={35}
                className="h-7 sm:h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="flex-1 flex justify-center min-w-[100px]">
              <Image
                src="/icons/zara.svg"
                alt="Zara"
                width={100}
                height={38}
                className="h-7 sm:h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="flex-1 flex justify-center min-w-[140px]">
              <Image
                src="/icons/gucci.svg"
                alt="Gucci"
                width={150}
                height={36}
                className="h-7 sm:h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="flex-1 flex justify-center min-w-[140px]">
              <Image
                src="/icons/prada.svg"
                alt="Prada"
                width={150}
                height={32}
                className="h-6 sm:h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="flex-1 flex justify-center min-w-[160px]">
              <Image
                src="/icons/calvin-klein.svg"
                alt="Calvin Klein"
                width={170}
                height={33}
                className="h-6 sm:h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW ARRIVALS */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-integral text-3xl sm:text-4xl md:text-5xl font-black text-center text-black tracking-tight uppercase mb-10 sm:mb-14">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/category?new=true"
            className="inline-block px-14 py-3.5 border border-black/10 rounded-full text-sm sm:text-base font-medium text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            View All
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-black/10" />
      </div>

      {/* 4. TOP SELLING */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-integral text-3xl sm:text-4xl md:text-5xl font-black text-center text-black tracking-tight uppercase mb-10 sm:mb-14">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {topSelling.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/category"
            className="inline-block px-14 py-3.5 border border-black/10 rounded-full text-sm sm:text-base font-medium text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            View All
          </Link>
        </div>
      </section>

      {/* 5. BROWSE BY DRESS STYLE */}
      <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0F0F0] rounded-[30px] sm:rounded-[40px] p-6 sm:p-12 md:p-16">
          <h2 className="font-integral text-2xl sm:text-4xl md:text-5xl font-black text-center text-black uppercase tracking-tight mb-8 sm:mb-14">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            {DRESS_STYLES.map((style) => (
              <Link
                key={style.name}
                href={style.href}
                className={`${style.span} relative h-48 sm:h-64 md:h-72 bg-white rounded-[20px] overflow-hidden group shadow-sm hover:shadow-md transition-all block`}
              >
                {/* Style label */}
                <span className="absolute top-6 left-6 z-10 font-bold text-2xl sm:text-3xl text-black">
                  {style.name}
                </span>

                {/* Style Image */}
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR HAPPY CUSTOMERS (Testimonials Carousel) */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-integral text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevTestimonial}
              className="p-2 sm:p-3 rounded-full hover:bg-black/5 text-black border border-black/10 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="p-2 sm:p-3 rounded-full hover:bg-black/5 text-black border border-black/10 transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, idx) => {
            const isVisibleOnMobile = idx === activeTestimonialIdx;
            return (
              <div
                key={t.id}
                className={`${
                  isVisibleOnMobile ? "block" : "hidden md:block"
                } border border-black/10 rounded-[20px] p-6 sm:p-8 space-y-3 bg-white`}
              >
                <div className="pb-1">
                  <RatingStars rating={t.rating} showScore={false} size={20} />
                </div>
                <div className="flex items-center gap-1.5 font-bold text-lg text-black">
                  <span>{t.author}</span>
                  {t.verified && (
                    <span className="w-5 h-5 rounded-full bg-[#01AB31] text-white flex items-center justify-center text-[10px]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  )}
                </div>
                <p className="text-black/60 text-sm sm:text-base leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
