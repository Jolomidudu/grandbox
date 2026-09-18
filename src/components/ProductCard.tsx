import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className={cn(
        "group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow-sm"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        {product.isCustom && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#f5a623] text-white text-[10px] font-semibold rounded-full">
            Custom
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="text-[#f5a623] font-bold text-sm mt-0.5">
          {formatPrice(product.price, product.currency)}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3.5 h-3.5 fill-[#f5a623] text-[#f5a623]" />
          <span className="text-xs text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
      </div>
    </Link>
  );
}
