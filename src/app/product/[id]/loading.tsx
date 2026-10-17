import React from "react";

export default function ProductDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      {/* Breadcrumb Skeleton */}
      <div className="h-4 bg-black/10 rounded w-48" />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 sm:w-28 sm:h-28 bg-[#F0EEED] rounded-[16px]"
              />
            ))}
          </div>
          <div className="flex-1 aspect-square bg-[#F0EEED] rounded-[20px]" />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div className="h-10 bg-black/10 rounded-xl w-3/4" />
          <div className="h-5 bg-black/10 rounded w-32" />
          <div className="h-8 bg-black/10 rounded w-40" />
          <div className="space-y-2">
            <div className="h-4 bg-black/10 rounded w-full" />
            <div className="h-4 bg-black/10 rounded w-5/6" />
          </div>
          <div className="h-px bg-black/10" />
          <div className="h-5 bg-black/10 rounded w-24" />
          <div className="flex gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-black/10" />
            ))}
          </div>
          <div className="h-px bg-black/10" />
          <div className="h-5 bg-black/10 rounded w-24" />
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-20 rounded-full bg-black/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
