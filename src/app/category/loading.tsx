import React from "react";

export default function CategoryLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="h-4 bg-black/10 rounded w-36 mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Skeleton */}
        <div className="hidden lg:block border border-black/10 rounded-[20px] p-6 space-y-6">
          <div className="h-6 bg-black/10 rounded w-24" />
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-black/10 rounded w-full" />
            ))}
          </div>
          <div className="h-px bg-black/10" />
          <div className="h-6 bg-black/10 rounded w-20" />
          <div className="h-3 bg-black/10 rounded w-full" />
          <div className="h-px bg-black/10" />
          <div className="h-6 bg-black/10 rounded w-20" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-black/10" />
            ))}
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-black/10 rounded w-36" />
            <div className="h-4 bg-black/10 rounded w-48" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
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
    </div>
  );
}
