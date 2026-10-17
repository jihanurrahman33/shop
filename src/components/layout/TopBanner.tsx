"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-black text-white px-4 py-2 text-xs md:text-sm font-normal relative flex items-center justify-center">
      <p className="text-center">
        Sign up and get 20% off to your first order.{" "}
        <Link
          href="/category"
          className="font-medium underline underline-offset-4 hover:text-gray-300 transition-colors"
        >
          Sign Up Now
        </Link>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
