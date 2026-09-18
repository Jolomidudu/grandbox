import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function AppHomePage() {
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Hero Banner - Custom Tailoring */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=400&fit=crop"
              alt="Custom tailoring"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 p-6 sm:p-10 max-w-xl">
            <span className="inline-block px-3 py-1 bg-[#f5a623]/20 text-[#f5a623] text-xs font-semibold rounded-full mb-3 tracking-wide uppercase">
              Custom Tailoring
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
              Look Sharp.
              <br />
              Feel Confident.
            </h1>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              Premium custom outfits for every occasion.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#f5a623] hover:bg-[#e09400] text-white font-semibold rounded-full transition-colors text-sm"
            >
              Book a Tailor
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Shop by Category */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Shop by Category</h2>
            <Link
              href="/shop"
              className="text-sm font-medium text-[#f5a623] hover:underline"
            >
              See all
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* Featured Styles */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Featured Styles</h2>
            <Link
              href="/shop"
              className="text-sm font-medium text-[#f5a623] hover:underline"
            >
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* More products */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Popular Right Now</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-black text-white p-6 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">
              Your style. <span className="text-[#f5a623]">Our craft.</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Connect with expert tailors, choose premium fabrics, and get
              perfectly fitted outfits delivered to your door.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/book"
                className="px-5 py-2.5 bg-[#f5a623] hover:bg-[#e09400] text-white font-semibold rounded-full text-sm transition-colors"
              >
                Book a Tailor
              </Link>
              <Link
                href="/shop"
                className="px-5 py-2.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full text-sm transition-colors"
              >
                Browse Styles
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
