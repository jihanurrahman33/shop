"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Testimonial } from "@/types/review";
import { TESTIMONIALS } from "@/data/products";
import { RatingStars } from "@/components/ui/RatingStars";

interface TestimonialsSectionProps {
  testimonials?: readonly Testimonial[];
}

export function TestimonialsSection({
  testimonials = TESTIMONIALS,
}: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <h2 className="font-integral text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 sm:p-3 rounded-full hover:bg-black/5 text-black border border-black/10 transition-colors cursor-pointer"
            aria-label="Previous customer review"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 sm:p-3 rounded-full hover:bg-black/5 text-black border border-black/10 transition-colors cursor-pointer"
            aria-label="Next customer review"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, idx) => {
          const isVisibleOnMobile = idx === activeIdx;
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
  );
}
