import { CartItem, OrderPricing } from "@/types/cart";

/**
 * Strategy pattern for pricing and discount calculations (Open/Closed Principle).
 * New discount or delivery rules can be plugged in without mutating consumer code.
 */
export interface IDiscountStrategy {
  calculateDiscount(subtotal: number, promoCode?: string): number;
}

export class DefaultPercentageDiscountStrategy implements IDiscountStrategy {
  private readonly defaultDiscountRate: number;

  constructor(defaultDiscountRate = 0.2) {
    this.defaultDiscountRate = defaultDiscountRate;
  }

  calculateDiscount(subtotal: number, promoCode?: string): number {
    if (subtotal <= 0) return 0;
    // By default 20% discount as designed in Figma, or custom promo
    if (promoCode && promoCode.trim().toUpperCase() === "NONE") return 0;
    return Math.round(subtotal * this.defaultDiscountRate);
  }
}

export class PricingService {
  constructor(
    private readonly discountStrategy: IDiscountStrategy = new DefaultPercentageDiscountStrategy(),
    private readonly standardDeliveryFee = 15
  ) {}

  public calculate(items: readonly CartItem[], promoCode?: string): OrderPricing {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = this.discountStrategy.calculateDiscount(subtotal, promoCode);
    const deliveryFee = subtotal > 0 ? this.standardDeliveryFee : 0;
    const total = Math.max(0, subtotal - discount + deliveryFee);

    return {
      subtotal,
      discount,
      deliveryFee,
      total,
    };
  }
}

export const defaultPricingService = new PricingService();
