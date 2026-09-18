import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { User, Settings, Heart, MapPin, CreditCard, LogOut } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: User, label: "Edit Profile", href: "#" },
  { icon: Heart, label: "Wishlist", href: "#" },
  { icon: MapPin, label: "Addresses", href: "#" },
  { icon: CreditCard, label: "Payment Methods", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <Header />
      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-[#f5a623]/20 flex items-center justify-center mx-auto">
            <User className="w-10 h-10 text-[#f5a623]" />
          </div>
          <h1 className="mt-3 text-xl font-bold text-gray-900">Guest User</h1>
          <p className="text-sm text-gray-500">Sign in to sync your orders</p>
          <button className="mt-4 px-6 py-2.5 bg-[#f5a623] text-white font-semibold rounded-full text-sm">
            Sign In / Register
          </button>
        </div>

        <div className="mt-6 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {menuItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 ${
                i !== 0 ? "border-t border-gray-100" : ""
              }`}
            >
              <item.icon className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-800">{item.label}</span>
            </Link>
          ))}
        </div>

        <button className="mt-4 w-full flex items-center justify-center gap-2 py-3 text-red-500 font-medium">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </main>
      <BottomNav />
    </div>
  );
}
