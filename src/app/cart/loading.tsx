import React from "react";

export default function CartLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      <div className="h-4 bg-black/10 rounded w-24" />
      <div className="h-10 bg-black/10 rounded-xl w-48" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 border border-black/10 rounded-[20px] p-6 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="w-24 h-24 bg-[#F0EEED] rounded-[16px]" />
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-black/10 rounded w-1/2" />
                <div className="h-3 bg-black/10 rounded w-1/4" />
                <div className="h-5 bg-black/10 rounded w-20" />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 border border-black/10 rounded-[20px] p-6 space-y-4">
          <div className="h-6 bg-black/10 rounded w-36" />
          <div className="space-y-3 pt-2">
            <div className="h-4 bg-black/10 rounded w-full" />
            <div className="h-4 bg-black/10 rounded w-full" />
            <div className="h-4 bg-black/10 rounded w-full" />
          </div>
          <div className="h-12 bg-black/20 rounded-full w-full mt-4" />
        </div>
      </div>
    </div>
  );
}
