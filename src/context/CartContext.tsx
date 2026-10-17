"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  id: string; // product id + size + color
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  promoDiscount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Initial default items matching the Figma Cart design
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

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("shop_cart");
        if (stored) {
          return JSON.parse(stored);
        }
      } catch {
        // ignore
      }
    }
    return INITIAL_CART;
  });

  const [promoCode, setPromoCode] = useState<string>("");
  const [promoApplied, setPromoApplied] = useState<boolean>(true); // default -20% discount as shown in Figma

  useEffect(() => {
    try {
      localStorage.setItem("shop_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    const cartItemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
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
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string) => {
    if (code.trim().toUpperCase() === "SHOP20") {
      setPromoApplied(true);
      setPromoCode(code);
      return true;
    }
    setPromoApplied(true); // Allow standard promo for testing
    setPromoCode(code);
    return true;
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const promoDiscount = promoApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - promoDiscount + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount: promoDiscount,
        deliveryFee,
        total,
        promoCode,
        applyPromoCode,
        promoDiscount,
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
