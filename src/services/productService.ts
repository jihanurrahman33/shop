import { Product } from "@/types/product";
import { ProductFilterState } from "@/types/filter";
import { PRODUCTS } from "@/data/products";

export interface IProductRepository {
  getAll(): readonly Product[];
  getById(id: string): Product | undefined;
  getNewArrivals(): Product[];
  getTopSelling(): Product[];
  getRelated(productId: string, limit?: number): Product[];
  search(filter: ProductFilterState): Product[];
}

export class ProductService implements IProductRepository {
  constructor(private readonly products: readonly Product[] = PRODUCTS) {}

  getAll(): readonly Product[] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getNewArrivals(): Product[] {
    return this.products.filter((p) => p.isNewArrival);
  }

  getTopSelling(): Product[] {
    return this.products.filter((p) => p.isTopSelling);
  }

  getRelated(productId: string, limit = 4): Product[] {
    return this.products.filter((p) => p.id !== productId).slice(0, limit);
  }

  search(filter: ProductFilterState): Product[] {
    const {
      category,
      dressStyle,
      maxPrice,
      color,
      size,
      searchQuery,
      onlyNewArrivals,
      onlyOnSale,
      sortBy,
    } = filter;

    const filtered = this.products.filter((product) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory) return false;
      }

      if (onlyNewArrivals && !product.isNewArrival) return false;
      if (onlyOnSale && !product.discountPercentage) return false;
      if (category && product.category !== category) return false;
      if (dressStyle && product.dressStyle !== dressStyle) return false;
      if (product.price > maxPrice) return false;
      if (color && !product.colors.some((c) => c.name.toLowerCase() === color.toLowerCase())) {
        return false;
      }
      if (size && !product.sizes.includes(size)) {
        return false;
      }

      return true;
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "popular":
        default:
          return b.ratingCount - a.ratingCount;
      }
    });
  }
}

export const productService = new ProductService();
