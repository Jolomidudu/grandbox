"use client";

import Link from "next/link";
import { Search, Bell, ShoppingCart, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Logo size="sm" />

          {/* Search - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search for outfits, tailors, fabrics, etc..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a623]/50 focus:border-[#f5a623]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#f5a623] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <Link
              href="/cart"
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </Link>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search outfits, tailors, fabrics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a623]/50"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all",
          mobileOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="px-4 py-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/tailors"
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Book a Tailor
          </Link>
          <Link
            href="/orders"
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Orders
          </Link>
          <Link
            href="/profile"
            className="block px-3 py-2 rounded-lg hover:bg-gray-50 font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
