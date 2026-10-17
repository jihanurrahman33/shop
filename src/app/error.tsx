"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-xl mx-auto text-center border border-black/10 rounded-[28px] bg-[#F9F9F9] p-8 sm:p-12 space-y-5">
        <div className="w-16 h-16 rounded-full bg-red-50 text-[#FF3333] flex items-center justify-center mx-auto">
          <AlertCircle size={32} />
        </div>

        <h1 className="font-integral text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
          SOMETHING WENT WRONG
        </h1>

        <p className="text-black/60 text-sm sm:text-base leading-relaxed">
          An unexpected error occurred while loading this page. Please try again or return to the store homepage.
        </p>

        {error?.message && (
          <div className="bg-black/5 rounded-xl p-3 text-xs text-black/70 font-mono text-left overflow-x-auto max-h-32">
            {error.message}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors shadow-sm cursor-pointer"
          >
            <RotateCcw size={16} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="border border-black/20 text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/5 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
