import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export function Pagination({
  currentPage,
  onPageChange,
  onPrev,
  onNext,
  canPrev,
  canNext,
}: PaginationProps) {
  const pages = [1, 2, 3, "...", 8, 9, 10];

  return (
    <div className="flex items-center justify-between pt-2">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-black/10 rounded-lg text-xs sm:text-sm font-medium text-black hover:bg-black/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <ArrowLeft size={16} />
        <span>Previous</span>
      </button>

      <div className="flex items-center gap-1 sm:gap-2">
        {pages.map((item, idx) => (
          <button
            key={idx}
            onClick={() => typeof item === "number" && onPageChange(item)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center transition-colors cursor-pointer ${
              item === currentPage
                ? "bg-black/10 text-black font-bold"
                : "text-black/60 hover:bg-black/5"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-black/10 rounded-lg text-xs sm:text-sm font-medium text-black hover:bg-black/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <span>Next</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
