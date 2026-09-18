import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Package } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-gray-400" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">No orders yet</h1>
        <p className="text-gray-600 mt-2 text-sm">
          Your custom and ready-to-wear orders will appear here.
        </p>
        <Link
          href="/shop"
          className="inline-block mt-6 px-6 py-3 bg-[#f5a623] text-white font-semibold rounded-full"
        >
          Start Shopping
        </Link>
      </main>
      <BottomNav />
    </div>
  );
}
