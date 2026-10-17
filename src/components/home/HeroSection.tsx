import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StatItem {
  value: string;
  label: string;
}

const STATS: readonly StatItem[] = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
] as const;

export function HeroSection() {
  return (
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

          {/* Stats Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-between sm:justify-start gap-6 sm:gap-10 border-t border-black/10 sm:border-t-0">
            {STATS.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="h-12 w-px bg-black/10 hidden sm:block" />}
                <div>
                  <span className="block font-integral text-2xl sm:text-4xl font-bold text-black">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-black/60">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visuals */}
        <div className="w-full lg:w-1/2 relative flex items-end justify-center self-end">
          <div className="absolute top-12 right-4 sm:right-10 z-20 animate-pulse">
            <Image
              src="/icons/star-big.svg"
              alt="Star decorative"
              width={70}
              height={70}
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
          </div>
          <div className="absolute top-44 left-4 sm:left-8 z-20 animate-pulse">
            <Image
              src="/icons/star-small.svg"
              alt="Star decorative"
              width={44}
              height={44}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>

          <div className="relative w-full max-w-[580px] aspect-[4/5] sm:aspect-[5/6] flex items-end">
            <Image
              src="/images/hero-models.png"
              alt="Stylish models showcasing SHOP.CO apparel"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
