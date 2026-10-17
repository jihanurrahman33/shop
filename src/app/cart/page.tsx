"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Trash2,
  Minus,
  Plus,
  Tag,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    deliveryFee,
    total,
    applyPromoCode,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput.trim());
      setPromoSuccess(true);
    }
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

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
          {/* Left: Cart Items List (7 cols on Desktop) */}
          <div className="lg:col-span-7 border border-black/10 rounded-[20px] p-4 sm:p-6 divide-y divide-black/10 bg-white">
            {cart.map((item) => (
              <div
                key={item.id}
                className="py-4 sm:py-5 first:pt-0 last:pb-0 flex items-center gap-4 sm:gap-5"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-[#F0EEED] rounded-[16px] overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-h-[80px] sm:min-h-[110px]">
                  {/* Top line: Title & Delete */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base sm:text-lg text-black uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#FF3333] hover:text-[#cc2929] transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Attributes */}
                  <div className="text-xs sm:text-sm text-black/60 space-y-0.5">
                    <p>
                      Size:{" "}
                      <span className="text-black font-medium">{item.size}</span>
                    </p>
                    <p>
                      Color:{" "}
                      <span className="text-black font-medium">{item.color}</span>
                    </p>
                  </div>

                  {/* Bottom line: Price & Stepper */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg sm:text-2xl font-bold text-black">
                      ${item.price}
                    </span>

                    {/* Quantity Stepper */}
                    <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 w-28 sm:w-32 text-black">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(0, item.quantity - 1))
                        }
                        className="text-black hover:text-black/60 transition-colors p-0.5"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>
                      <span className="font-bold text-xs sm:text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-black hover:text-black/60 transition-colors p-0.5"
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Order Summary Card (5 cols on Desktop) */}
          <div className="lg:col-span-5 border border-black/10 rounded-[20px] p-6 space-y-6 bg-white sticky top-28">
            <h2 className="font-bold text-xl sm:text-2xl text-black">
              Order Summary
            </h2>

            {/* Calculations */}
            <div className="space-y-4 text-base">
              <div className="flex items-center justify-between text-black/60">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-black/60">
                <span>Discount (-20%)</span>
                <span className="font-bold text-[#FF3333]">-${discount}</span>
              </div>
              <div className="flex items-center justify-between text-black/60">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>

              <hr className="border-black/10" />

              <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-black">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex items-center gap-3">
              <div className="relative flex-1">
                <Tag
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full bg-[#F0F0F0] text-black text-sm rounded-full pl-11 pr-4 py-3 placeholder:text-black/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-black/80 transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>
            {promoSuccess && (
              <p className="text-xs text-green-600 font-medium -mt-2">
                ✓ 20% Discount code applied!
              </p>
            )}

            {/* Go to Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/80 transition-all shadow-md cursor-pointer text-sm sm:text-base"
            >
              <span>Go to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
