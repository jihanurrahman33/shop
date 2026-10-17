import { ProductCategory, DressStyle, ProductSize, ProductColor } from "@/types/product";

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  "T-shirts",
  "Shorts",
  "Shirts",
  "Hoodie",
  "Jeans",
] as const;

export const PRODUCT_COLORS: readonly ProductColor[] = [
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
] as const;

export const PRODUCT_SIZES: readonly ProductSize[] = [
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

export const DRESS_STYLES_LIST: readonly DressStyle[] = [
  "Casual",
  "Formal",
  "Party",
  "Gym",
] as const;

export const DRESS_STYLE_CARDS = [
  { name: "Casual" as DressStyle, image: "/images/style-casual.png", href: "/category?style=Casual", span: "md:col-span-4" },
  { name: "Formal" as DressStyle, image: "/images/style-formal.png", href: "/category?style=Formal", span: "md:col-span-8" },
  { name: "Party" as DressStyle, image: "/images/style-party.png", href: "/category?style=Party", span: "md:col-span-8" },
  { name: "Gym" as DressStyle, image: "/images/style-gym.png", href: "/category?style=Gym", span: "md:col-span-4" },
] as const;
