import React from "react";
import { ChevronRight, Check } from "lucide-react";
import { ProductCategory, DressStyle, ProductSize } from "@/types/product";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_COLORS,
  PRODUCT_SIZES,
  DRESS_STYLES_LIST,
} from "@/constants/filters";

interface FilterPanelProps {
  category: ProductCategory | "";
  setCategory: (cat: ProductCategory | "") => void;
  dressStyle: DressStyle | "";
  setDressStyle: (style: DressStyle | "") => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  color: string;
  setColor: (color: string) => void;
  size: ProductSize | "";
  setSize: (size: ProductSize | "") => void;
  onApply?: () => void;
  onReset?: () => void;
  showReset?: boolean;
}

export function FilterPanel({
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
  onApply,
  onReset,
  showReset,
}: FilterPanelProps) {
  return (
    <div className="space-y-6 text-black">
      {/* Categories */}
      <div className="space-y-3">
        {PRODUCT_CATEGORIES.map((cat) => {
          const isSelected = category === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(isSelected ? "" : cat)}
              className={`w-full flex items-center justify-between py-1 text-sm ${
                isSelected ? "font-bold text-black" : "text-black/60 hover:text-black"
              } transition-colors cursor-pointer`}
            >
              <span>{cat}</span>
              <ChevronRight size={16} className="text-black/40" />
            </button>
          );
        })}
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
          {PRODUCT_COLORS.map((c) => {
            const isSelected = color === c.name;
            return (
              <button
                key={c.name}
                onClick={() => setColor(isSelected ? "" : c.name)}
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
                    className={
                      c.name === "White" || c.name === "Yellow"
                        ? "text-black"
                        : "text-white"
                    }
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-black/10" />

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-black">Size</h3>
        <div className="flex flex-wrap gap-2">
          {PRODUCT_SIZES.map((s) => {
            const isSelected = size === s;
            return (
              <button
                key={s}
                onClick={() => setSize(isSelected ? "" : s)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-black text-white"
                    : "bg-[#F0F0F0] text-black/60 hover:bg-black/10"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-black/10" />

      {/* Dress Style */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-black">Dress Style</h3>
        {DRESS_STYLES_LIST.map((style) => {
          const isSelected = dressStyle === style;
          return (
            <button
              key={style}
              onClick={() => setDressStyle(isSelected ? "" : style)}
              className={`w-full flex items-center justify-between py-1 text-sm ${
                isSelected ? "font-bold text-black" : "text-black/60 hover:text-black"
              } transition-colors cursor-pointer`}
            >
              <span>{style}</span>
              <ChevronRight size={16} className="text-black/40" />
            </button>
          );
        })}
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
