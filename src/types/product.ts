export type ProductCategory = "T-shirts" | "Shorts" | "Shirts" | "Hoodie" | "Jeans";

export type DressStyle = "Casual" | "Formal" | "Party" | "Gym";

export type ProductSize =
  | "XX-Small"
  | "X-Small"
  | "Small"
  | "Medium"
  | "Large"
  | "X-Large"
  | "XX-Large"
  | "3X-Large"
  | "4X-Large";

export interface ProductColor {
  name: string;
  hex: string;
  border?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  ratingCount: number;
  description: string;
  category: ProductCategory;
  dressStyle: DressStyle;
  colors: ProductColor[];
  sizes: ProductSize[];
  images: string[];
  isNewArrival?: boolean;
  isTopSelling?: boolean;
}
