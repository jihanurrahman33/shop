import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DRESS_STYLE_CARDS } from "@/constants/filters";

export function DressStyleSection() {
  return (
    <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F0F0F0] rounded-[30px] sm:rounded-[40px] p-6 sm:p-12 md:p-16">
        <h2 className="font-integral text-2xl sm:text-4xl md:text-5xl font-black text-center text-black uppercase tracking-tight mb-8 sm:mb-14">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {DRESS_STYLE_CARDS.map((style) => (
            <Link
              key={style.name}
              href={style.href}
              className={`${style.span} relative h-48 sm:h-64 md:h-72 bg-white rounded-[20px] overflow-hidden group shadow-sm hover:shadow-md transition-all block`}
            >
              <span className="absolute top-6 left-6 z-10 font-bold text-2xl sm:text-3xl text-black">
                {style.name}
              </span>

              <Image
                src={style.image}
                alt={`${style.name} style`}
                fill
                className="object-cover object-right group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
