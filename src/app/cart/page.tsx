"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { OrderSummaryCard } from "@/components/cart/OrderSummaryCard";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    pricing,
    applyPromoCode,
  } = useCart();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-black/60 mb-6 sm:mb-8">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-black font-medium">Cart</span>
      </nav>

      {/* Page Title */}
      <h1 className="font-integral text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-6 sm:mb-8">
        YOUR CART
      </h1>

      {checkoutComplete ? (
        <div className="text-center py-20 border border-black/10 rounded-[20px] bg-[#F9F9F9] p-8 space-y-4">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="font-integral text-2xl sm:text-3xl font-black text-black">
            ORDER CONFIRMED!
          </h2>
          <p className="text-black/60 max-w-md mx-auto text-sm sm:text-base">
            Thank you for shopping with SHOP.CO. We have received your order and
            will notify you once it ships.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : cart.length === 0 ? (
        <div className="text-center py-20 border border-black/10 rounded-[20px] bg-[#F9F9F9] p-8 space-y-4">
          <ShoppingBag size={48} className="mx-auto text-black/30" />
          <h2 className="font-integral text-xl sm:text-2xl font-bold text-black">
            YOUR CART IS EMPTY
          </h2>
          <p className="text-black/60 max-w-sm mx-auto text-sm">
            Looks like you haven&apos;t added any items to your cart yet. Explore our
            latest arrivals!
          </p>
          <div className="pt-2">
            <Link
              href="/category"
              className="inline-block bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Items List */}
          <div className="lg:col-span-7 border border-black/10 rounded-[20px] p-4 sm:p-6 divide-y divide-black/10 bg-white">
            {cart.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <OrderSummaryCard
              pricing={pricing}
              onApplyPromo={applyPromoCode}
              onCheckout={() => setCheckoutComplete(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
