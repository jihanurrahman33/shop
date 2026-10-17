import React from "react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-[#F2F0F1] rounded-[28px] h-96 sm:h-[480px] w-full flex items-center justify-between p-8 sm:p-14">
        <div className="w-full sm:w-1/2 space-y-4">
          <div className="h-10 sm:h-14 bg-black/10 rounded-xl w-4/5" />
          <div className="h-4 bg-black/10 rounded w-full" />
          <div className="h-4 bg-black/10 rounded w-2/3" />
          <div className="h-12 bg-black/20 rounded-full w-40 pt-4" />
        </div>
        <div className="hidden sm:block w-1/3 aspect-[4/5] bg-black/5 rounded-2xl" />
      </div>

      {/* Product Cards Row Skeleton */}
      <div className="space-y-6">
        <div className="h-8 bg-black/10 rounded-xl w-48 mx-auto" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-square bg-[#F0EEED] rounded-[20px]" />
              <div className="h-4 bg-black/10 rounded w-3/4" />
              <div className="h-3 bg-black/10 rounded w-1/2" />
              <div className="h-5 bg-black/10 rounded w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
