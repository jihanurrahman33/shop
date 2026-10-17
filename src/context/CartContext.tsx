"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types/product";
import { CartItem, OrderPricing } from "@/types/cart";
import { appStorage } from "@/lib/storage";
import { defaultPricingService, PricingService } from "@/services/pricingService";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  pricing: OrderPricing;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}

const CART_STORAGE_KEY = "shop_cart";

const INITIAL_CART: CartItem[] = [
  {
    id: "11-Large-White",
    productId: "11",
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    image: "/images/product-gradient-tshirt.png",
    quantity: 1,
  },
  {
    id: "3-Medium-Red",
    productId: "3",
    name: "CHECKERED SHIRT",
    price: 180,
    size: "Medium",
    color: "Red",
    image: "/images/product-checkered-shirt.png",
    quantity: 1,
  },
  {
    id: "2-Large-Blue",
    productId: "2",
    name: "SKINNY FIT JEANS",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/images/product-skinny-jeans.png",
    quantity: 1,
  },
];

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
  pricingService?: PricingService;
}

export function CartProvider({
  children,
  pricingService = defaultPricingService,
}: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>(() =>
    appStorage.getItem(CART_STORAGE_KEY, INITIAL_CART)
  );
  const [promoCode, setPromoCode] = useState<string>("");

  useEffect(() => {
    appStorage.setItem(CART_STORAGE_KEY, cart);
  }, [cart]);

  const addToCart = (
    product: Product,
    size: string,
    color: string,
    quantity: number
  ) => {
    const cartItemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          size,
          color,
          image: product.images[0],
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string) => {
    setPromoCode(code);
    return true;
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const pricing = pricingService.calculate(cart, promoCode);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        pricing,
        promoCode,
        applyPromoCode,
        subtotal: pricing.subtotal,
        discount: pricing.discount,
        deliveryFee: pricing.deliveryFee,
        total: pricing.total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
