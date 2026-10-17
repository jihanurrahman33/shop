"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/category?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8">
        {/* Left: Mobile Menu Button & Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black p-1 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link
            href="/"
            className="font-integral text-2xl sm:text-3xl font-black tracking-tighter text-black"
          >
            SHOP.CO
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-base text-black/80 font-normal">
          <div className="relative group cursor-pointer">
            <Link
              href="/category"
              className="flex items-center gap-1 hover:text-black transition-colors"
            >
              <span>Shop</span>
              <ChevronDown size={16} />
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-black/5 rounded-xl py-2 w-48 z-50">
              <Link
                href="/category?category=T-shirts"
                className="block px-4 py-2 hover:bg-gray-50 text-sm text-black"
              >
                T-shirts
              </Link>
              <Link
                href="/category?category=Shorts"
                className="block px-4 py-2 hover:bg-gray-50 text-sm text-black"
              >
                Shorts
              </Link>
              <Link
                href="/category?category=Shirts"
                className="block px-4 py-2 hover:bg-gray-50 text-sm text-black"
              >
                Shirts
              </Link>
              <Link
                href="/category?category=Jeans"
                className="block px-4 py-2 hover:bg-gray-50 text-sm text-black"
              >
                Jeans
              </Link>
            </div>
          </div>
          <Link
            href="/category?sale=true"
            className="hover:text-black transition-colors"
          >
            On Sale
          </Link>
          <Link
            href="/category?new=true"
            className="hover:text-black transition-colors"
          >
            New Arrivals
          </Link>
          <Link href="/#brands" className="hover:text-black transition-colors">
            Brands
          </Link>
        </nav>

        {/* Center-Right: Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <form onSubmit={handleSearch} className="w-full relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
            />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F0F0F0] text-black text-sm rounded-full pl-12 pr-4 py-3 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </form>
        </div>

        {/* Right: Actions (Search Mobile Toggle, Cart, Profile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden text-black p-1 hover:text-gray-700"
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          {/* Cart Icon with Counter */}
          <Link
            href="/cart"
            className="relative text-black p-1 hover:text-gray-700 transition-colors"
            aria-label="View Cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Account Icon */}
          <button
            className="text-black p-1 hover:text-gray-700 transition-colors"
            aria-label="Account"
          >
            <User size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Dropdown */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
            />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full bg-[#F0F0F0] text-black text-sm rounded-full pl-11 pr-4 py-2.5 placeholder:text-black/40 focus:outline-none"
            />
          </form>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-28 bg-white border-b border-black/10 shadow-xl p-6 space-y-4 z-50">
          <Link
            href="/category"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-black py-2 border-b border-black/5"
          >
            Shop All
          </Link>
          <Link
            href="/category?sale=true"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-black py-2 border-b border-black/5"
          >
            On Sale
          </Link>
          <Link
            href="/category?new=true"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-black py-2 border-b border-black/5"
          >
            New Arrivals
          </Link>
          <Link
            href="/#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-black py-2"
          >
            Brands
          </Link>
        </div>
      )}
    </header>
  );
}
