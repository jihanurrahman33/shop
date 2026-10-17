"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { useProductFilters } from "@/hooks/useProductFilters";
import { usePagination } from "@/hooks/usePagination";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterPanel } from "@/components/category/FilterPanel";
import { Pagination } from "@/components/category/Pagination";
import { SortOption } from "@/types/filter";

function CategoryContent() {
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    category,
    setCategory,
    dressStyle,
    setDressStyle,
    maxPrice,
    setMaxPrice,
    color,
    setColor,
    size,
    setSize,
    sortBy,
    setSortBy,
    filteredProducts,
    clearFilters,
    hasActiveFilters,
  } = useProductFilters({
    category: searchParams.get("category") || "",
    style: searchParams.get("style") || "Casual",
    search: searchParams.get("search") || "",
    newArrivals: searchParams.get("new") === "true",
    onSale: searchParams.get("sale") === "true",
  });

  const {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
  } = usePagination({ totalItems: filteredProducts.length });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-black/60 mb-6 sm:mb-8">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-black font-medium capitalize">
          {dressStyle || category || "Casual"}
        </span>
      </nav>

      {/* Main Grid: Sidebar + Products */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="border border-black/10 rounded-[20px] p-6 sticky top-28 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl text-black">Filters</h2>
              <SlidersHorizontal size={20} className="text-black/60" />
            </div>
            <FilterPanel
              category={category}
              setCategory={setCategory}
              dressStyle={dressStyle}
              setDressStyle={setDressStyle}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              color={color}
              setColor={setColor}
              size={size}
              setSize={setSize}
              onReset={clearFilters}
              showReset={hasActiveFilters}
            />
          </div>
        </aside>

        {/* Products Column */}
        <main className="lg:col-span-3 space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <h1 className="font-bold text-2xl sm:text-3xl text-black capitalize">
                {dressStyle || category || "Casual"}
              </h1>
              <span className="text-xs sm:text-sm text-black/60">
                Showing {filteredProducts.length} Products
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm text-black/60">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="font-medium text-black bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Mobile Filter Trigger */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-[#F0F0F0] text-black hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Open Filters"
              >
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>

          {/* Product Grid / Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-black/20 rounded-[20px]">
              <p className="text-lg font-medium text-black">
                No products match the selected filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2.5 bg-black text-white text-sm rounded-full font-medium cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <hr className="border-black/10 my-8" />

          {/* Reusable Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            onPrev={prevPage}
            onNext={nextPage}
            canPrev={canGoPrev}
            canNext={canGoNext}
          />
        </main>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />
          <div className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-[30px] p-6 overflow-y-auto shadow-2xl z-50">
            <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-6">
              <h2 className="font-bold text-xl text-black">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 rounded-full text-black/60 hover:text-black cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <FilterPanel
              category={category}
              setCategory={setCategory}
              dressStyle={dressStyle}
              setDressStyle={setDressStyle}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              color={color}
              setColor={setColor}
              size={size}
              setSize={setSize}
              onApply={() => setMobileFiltersOpen(false)}
              onReset={clearFilters}
              showReset={hasActiveFilters}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading catalogue...</div>}>
      <CategoryContent />
    </Suspense>
  );
}
