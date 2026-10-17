import { useState, useMemo } from "react";
import { ProductCategory, DressStyle, ProductSize } from "@/types/product";
import { ProductFilterState, SortOption } from "@/types/filter";
import { productService } from "@/services/productService";

interface InitialFilters {
  category?: string;
  style?: string;
  search?: string;
  newArrivals?: boolean;
  onSale?: boolean;
}

export function useProductFilters(initial: InitialFilters = {}) {
  const [category, setCategory] = useState<ProductCategory | "">(
    (initial.category as ProductCategory) || ""
  );
  const [dressStyle, setDressStyle] = useState<DressStyle | "">(
    (initial.style as DressStyle) || "Casual"
  );
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<ProductSize | "">("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const filterState: ProductFilterState = useMemo(
    () => ({
      category,
      dressStyle,
      maxPrice,
      color,
      size,
      searchQuery: initial.search,
      onlyNewArrivals: initial.newArrivals,
      onlyOnSale: initial.onSale,
      sortBy,
    }),
    [
      category,
      dressStyle,
      maxPrice,
      color,
      size,
      initial.search,
      initial.newArrivals,
      initial.onSale,
      sortBy,
    ]
  );

  const filteredProducts = useMemo(() => {
    return productService.search(filterState);
  }, [filterState]);

  const clearFilters = () => {
    setCategory("");
    setDressStyle("");
    setMaxPrice(300);
    setColor("");
    setSize("");
  };

  const hasActiveFilters = Boolean(
    category ||
    (dressStyle && dressStyle !== "Casual") ||
    color ||
    size ||
    maxPrice < 200
  );

  return {
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
  };
}
