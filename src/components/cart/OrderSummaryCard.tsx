"use client";

import React, { useState } from "react";
import { Tag, ArrowRight } from "lucide-react";
import { OrderPricing } from "@/types/cart";

interface OrderSummaryCardProps {
  pricing: OrderPricing;
  onApplyPromo: (code: string) => boolean;
  onCheckout: () => void;
}

export function OrderSummaryCard({
  pricing,
  onApplyPromo,
  onCheckout,
}: OrderSummaryCardProps) {
  const [promoInput, setPromoInput] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      onApplyPromo(promoInput.trim());
      setPromoSuccess(true);
    }
  };

  return (
    <div className="border border-black/10 rounded-[20px] p-6 space-y-6 bg-white sticky top-28">
      <h2 className="font-bold text-xl sm:text-2xl text-black">Order Summary</h2>

      <div className="space-y-4 text-base">
        <div className="flex items-center justify-between text-black/60">
          <span>Subtotal</span>
          <span className="font-bold text-black">${pricing.subtotal}</span>
        </div>
        <div className="flex items-center justify-between text-black/60">
          <span>Discount (-20%)</span>
          <span className="font-bold text-[#FF3333]">-${pricing.discount}</span>
        </div>
        <div className="flex items-center justify-between text-black/60">
          <span>Delivery Fee</span>
          <span className="font-bold text-black">${pricing.deliveryFee}</span>
        </div>

        <hr className="border-black/10" />

        <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-black">
          <span>Total</span>
          <span>${pricing.total}</span>
        </div>
      </div>

      {/* Promo Code Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
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

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-black text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/80 transition-all shadow-md cursor-pointer text-sm sm:text-base"
      >
        <span>Go to Checkout</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
