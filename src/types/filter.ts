import { ProductCategory, DressStyle, ProductSize } from "./product";

export type SortOption = "popular" | "price-low" | "price-high" | "rating";

export interface ProductFilterState {
  category?: ProductCategory | "";
  dressStyle?: DressStyle | "";
  maxPrice: number;
  color?: string;
  size?: ProductSize | "";
  searchQuery?: string;
  onlyNewArrivals?: boolean;
  onlyOnSale?: boolean;
  sortBy: SortOption;
}
