import React from "react";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { CartItem } from "@/types/cart";

interface CartItemRowProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
}

export function CartItemRow({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemRowProps) {
  return (
    <div className="py-4 sm:py-5 first:pt-0 last:pb-0 flex items-center gap-4 sm:gap-5">
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

      {/* Info & Quantity */}
      <div className="flex-1 flex flex-col justify-between min-h-[80px] sm:min-h-[110px]">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-base sm:text-lg text-black uppercase tracking-tight">
            {item.name}
          </h3>
          <button
            onClick={() => onRemove(item.id)}
            className="text-[#FF3333] hover:text-[#cc2929] transition-colors p-1 cursor-pointer"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-black/60 space-y-0.5">
          <p>
            Size: <span className="text-black font-medium">{item.size}</span>
          </p>
          <p>
            Color: <span className="text-black font-medium">{item.color}</span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg sm:text-2xl font-bold text-black">
            ${item.price}
          </span>

          <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 w-28 sm:w-32 text-black">
            <button
              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
              className="text-black hover:text-black/60 transition-colors p-0.5 cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus size={15} />
            </button>
            <span className="font-bold text-xs sm:text-sm">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="text-black hover:text-black/60 transition-colors p-0.5 cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
