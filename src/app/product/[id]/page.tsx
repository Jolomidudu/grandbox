"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  Shield,
  Package,
  Truck,
  Ruler,
  ChevronRight,
} from "lucide-react";
import { getProductById, formatPrice } from "@/lib/data";
import { BottomNav } from "@/components/BottomNav";
import { cn } from "@/lib/utils";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold">Product not found</h1>
          <Link href="/" className="text-[#f5a623] mt-2 inline-block">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  const features = [
    { icon: Shield, label: "Custom Fit & Style" },
    { icon: Package, label: "Premium Fabrics" },
    { icon: Truck, label: "2-3 Weeks Delivery" },
    { icon: Ruler, label: "Free Measurements" },
  ];

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="p-2 -ml-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold text-sm">Product Details</h1>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-10 md:px-6 md:py-8">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[3/4] md:aspect-square md:rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {images.length > 1 && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "relative w-12 h-14 rounded-lg overflow-hidden border-2 transition-all",
                      selectedImage === i
                        ? "border-[#f5a623] scale-105"
                        : "border-white/80 opacity-80 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="px-4 py-5 md:px-0 md:py-0 space-y-5">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-[#f5a623]">
                  {formatPrice(product.price, product.currency)}
                </span>
                {product.isCustom && (
                  <span className="px-2 py-0.5 bg-[#f5a623]/10 text-[#f5a623] text-xs font-semibold rounded-full">
                    Custom Made
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 text-center"
                >
                  <f.icon className="w-5 h-5 text-[#f5a623]" />
                  <span className="text-[11px] font-medium text-gray-700 leading-tight">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Options */}
            {product.isCustom && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Choose Options</h3>
                <OptionRow
                  label="Fabric"
                  value={selectedFabric || "Select fabric"}
                  onClick={() => setSelectedFabric("Premium Wool")}
                />
                <OptionRow
                  label="Style"
                  value={selectedStyle || "Select style"}
                  onClick={() => setSelectedStyle("Classic Fit")}
                />
                <OptionRow
                  label="Size"
                  value={selectedSize || "Select size"}
                  onClick={() => setSelectedSize("Custom Measured")}
                />
              </div>
            )}

            {/* CTA */}
            <div className="pt-2">
              <Link
                href={`/book?product=${product.id}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#f5a623] hover:bg-[#e09400] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#f5a623]/25"
              >
                <span className="text-lg">🧥</span>
                Book This Design
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function OptionRow({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-gray-200 hover:border-[#f5a623]/50 hover:bg-[#f5a623]/5 transition-colors text-left"
    >
      <div>
        <span className="text-xs text-gray-500">{label}</span>
        <p className="text-sm font-medium text-gray-900">{value}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
}
