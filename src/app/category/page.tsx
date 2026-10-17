"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronRight,
  SlidersHorizontal,
  X,
  Check,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

const CATEGORIES = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const COLORS = [
  { name: "Green", hex: "#00C12B" },
  { name: "Red", hex: "#F50606" },
  { name: "Yellow", hex: "#F5DD06" },
  { name: "Orange", hex: "#F57906" },
  { name: "Cyan", hex: "#06CAF5" },
  { name: "Blue", hex: "#063AF5" },
  { name: "Purple", hex: "#7D06F5" },
  { name: "Pink", hex: "#F506A4" },
  { name: "White", hex: "#FFFFFF", border: true },
  { name: "Black", hex: "#000000" },
];

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
] as const;

const DRESS_STYLES_LIST = ["Casual", "Formal", "Party", "Gym"];

interface FilterPanelProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  onApply?: () => void;
  onReset?: () => void;
  showReset?: boolean;
}

function FilterPanel({
  selectedCategory,
  setSelectedCategory,
  selectedStyle,
  setSelectedStyle,
  maxPrice,
  setMaxPrice,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  onApply,
  onReset,
  showReset,
}: FilterPanelProps) {
  return (
    <div className="space-y-6 text-black">
      {/* Categories */}
      <div className="space-y-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
            className={`w-full flex items-center justify-between py-1 text-sm ${
              selectedCategory === cat ? "font-bold text-black" : "text-black/60 hover:text-black"
            } transition-colors cursor-pointer`}
          >
            <span>{cat}</span>
            <ChevronRight size={16} className="text-black/40" />
          </button>
        ))}
      </div>

      <hr className="border-black/10" />

      {/* Price Slider */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-black">Price</h3>
        <div>
          <input
            type="range"
            min="50"
            max="300"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
          <div className="flex items-center justify-between text-sm font-medium text-black mt-1">
            <span>$50</span>
            <span className="font-bold text-base">${maxPrice}</span>
          </div>
        </div>
      </div>

      <hr className="border-black/10" />

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-black">Colors</h3>
        <div className="grid grid-cols-5 gap-3">
          {COLORS.map((c) => {
            const isSelected = selectedColor === c.name;
            return (
              <button
                key={c.name}
                onClick={() => setSelectedColor(isSelected ? "" : c.name)}
                style={{ backgroundColor: c.hex }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                  c.border ? "border border-black/20" : ""
                } ${isSelected ? "ring-2 ring-offset-2 ring-black" : ""}`}
                title={c.name}
              >
                {isSelected && (
                  <Check
                    size={16}
                    strokeWidth={3}
                    className={c.name === "White" || c.name === "Yellow" ? "text-black" : "text-white"}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-black/10" />

      {/* Size */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-black">Size</h3>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                onClick={() => setSelectedSize(isSelected ? "" : size)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-black text-white"
                    : "bg-[#F0F0F0] text-black/60 hover:bg-black/10"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-black/10" />

      {/* Dress Style */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-black">Dress Style</h3>
        {DRESS_STYLES_LIST.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(selectedStyle === style ? "" : style)}
            className={`w-full flex items-center justify-between py-1 text-sm ${
              selectedStyle === style ? "font-bold text-black" : "text-black/60 hover:text-black"
            } transition-colors cursor-pointer`}
          >
            <span>{style}</span>
            <ChevronRight size={16} className="text-black/40" />
          </button>
        ))}
      </div>

      <hr className="border-black/10" />

      <div className="space-y-2 pt-2">
        {onApply && (
          <button
            onClick={onApply}
            className="w-full bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors cursor-pointer"
          >
            Apply Filter
          </button>
        )}
        {showReset && onReset && (
          <button
            onClick={onReset}
            className="w-full bg-transparent text-black/60 hover:text-black py-2 text-xs font-medium cursor-pointer"
          >
            Reset All Filters
          </button>
        )}
      </div>
    </div>
  );
}

function CategoryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialStyle = searchParams.get("style") || "Casual";
  const initialSearch = searchParams.get("search") || "";
  const initialNew = searchParams.get("new") === "true";
  const initialSale = searchParams.get("sale") === "true";

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle);
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (initialSearch) {
        const query = initialSearch.toLowerCase();
        if (
          !product.name.toLowerCase().includes(query) &&
          !product.category.toLowerCase().includes(query)
        ) {
          return false;
        }
      }
      if (initialNew && !product.isNewArrival) return false;
      if (initialSale && !product.discountPercentage) return false;
      if (selectedCategory && product.category !== selectedCategory) return false;
      if (selectedStyle && product.dressStyle !== selectedStyle) return false;
      if (product.price > maxPrice) return false;
      if (selectedSize && !product.sizes.includes(selectedSize as (typeof SIZES)[number])) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // default popular
    });
  }, [
    initialSearch,
    initialNew,
    initialSale,
    selectedCategory,
    selectedStyle,
    maxPrice,
    selectedSize,
    sortBy,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedStyle("");
    setMaxPrice(300);
    setSelectedColor("");
    setSelectedSize("");
  };

  const hasActiveFilters = Boolean(
    selectedCategory ||
    selectedStyle !== "Casual" ||
    selectedColor ||
    selectedSize ||
    maxPrice < 200
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-black/60 mb-6 sm:mb-8">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-black font-medium capitalize">
          {selectedStyle || selectedCategory || "Casual"}
        </span>
      </nav>

      {/* Main Grid: Filters Sidebar + Products */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar (1 Col) */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="border border-black/10 rounded-[20px] p-6 sticky top-28 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl text-black">Filters</h2>
              <SlidersHorizontal size={20} className="text-black/60" />
            </div>
            <FilterPanel
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              onApply={() => {}}
              onReset={clearAllFilters}
              showReset={hasActiveFilters}
            />
          </div>
        </div>

        {/* Products Column (3 Cols) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <h1 className="font-bold text-2xl sm:text-3xl text-black capitalize">
                {selectedStyle || selectedCategory || "Casual"}
              </h1>
              <span className="text-xs sm:text-sm text-black/60">
                Showing 1-{filteredProducts.length} of {PRODUCTS.length} Products
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm text-black/60">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-medium text-black bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Mobile Filter Toggle Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-[#F0F0F0] text-black hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Open Filters"
              >
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-black/20 rounded-[20px]">
              <p className="text-lg font-medium text-black">No products found matching your filters.</p>
              <button
                onClick={clearAllFilters}
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

          {/* Divider */}
          <hr className="border-black/10 my-8" />

          {/* Pagination Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-black/10 rounded-lg text-xs sm:text-sm font-medium text-black hover:bg-black/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1 sm:gap-2">
              {[1, 2, 3, "...", 8, 9, 10].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof item === "number" && setCurrentPage(item)}
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
              onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-black/10 rounded-lg text-xs sm:text-sm font-medium text-black hover:bg-black/5 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer / Modal (Figma 38:679) */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Sheet */}
          <div className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-[30px] p-6 overflow-y-auto shadow-2xl z-50">
            <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-6">
              <h2 className="font-bold text-xl text-black">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 rounded-full text-black/60 hover:text-black cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <FilterPanel
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              onApply={() => setMobileFiltersOpen(false)}
              onReset={clearAllFilters}
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
