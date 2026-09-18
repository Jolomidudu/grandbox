import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 group-hover:border-[#f5a623] transition-colors">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
        {category.name}
      </span>
    </Link>
  );
}
