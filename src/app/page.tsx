import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import {
  Scissors,
  Shirt,
  Users,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Logo showTagline size="md" />
        <div className="flex items-center gap-3">
          <Link
            href="/home"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            Browse Styles
          </Link>
          <Link
            href="/home"
            className="px-5 py-2.5 bg-[#f5a623] hover:bg-[#e09400] text-white text-sm font-semibold rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Custom style.
              <br />
              <span className="text-[#f5a623]">Made for you.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-md leading-relaxed">
              Get custom-made outfits, explore ready-to-wear fashion and connect
              with professional tailors — all in one app.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/home"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#f5a623] hover:bg-[#e09400] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#f5a623]/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/home"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 hover:border-gray-300 text-gray-800 font-semibold rounded-full transition-colors"
              >
                <Shirt className="w-4 h-4" />
                Browse Styles
              </Link>
            </div>

            {/* Features row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Feature
                icon={Scissors}
                label="Custom Tailoring"
              />
              <Feature
                icon={Shirt}
                label="Ready-to-Wear Fashion"
              />
              <Feature
                icon={Users}
                label="Expert Tailors"
              />
              <Feature
                icon={ShieldCheck}
                label="Secure Payments"
              />
            </div>
          </div>

          {/* Right - App mockup preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="absolute inset-0 bg-white">
                  {/* Mini app UI */}
                  <div className="p-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                          <span className="text-[#f5a623] text-[10px] font-bold">G</span>
                        </div>
                        <span className="text-xs font-bold">
                          Grand<span className="text-[#f5a623]">Box</span>
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-5 h-5 rounded-full bg-gray-100" />
                        <div className="w-5 h-5 rounded-full bg-gray-100" />
                      </div>
                    </div>
                    <div className="h-7 rounded-full bg-gray-100" />
                    <div className="rounded-xl bg-gray-800 h-28 relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=200&fit=crop"
                        alt=""
                        fill
                        className="object-cover opacity-70"
                      />
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-[10px] font-bold">Look Sharp. Feel Confident.</p>
                        <div className="mt-1 w-16 h-5 rounded-full bg-[#f5a623]" />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-between">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-xl bg-gray-100" />
                          <div className="w-8 h-1.5 rounded bg-gray-100" />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[3/4] rounded-lg bg-gray-100" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-[#f5a623]/10 -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gray-100 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / Tagline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 italic">
            Your style.{" "}
            <span className="text-[#f5a623]">Our craft.</span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
              <span>4.9 average rating</span>
            </div>
            <div>500+ expert tailors</div>
            <div>10k+ custom outfits delivered</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GrandBox. Tailoring · Fashion · Your Style.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="w-12 h-12 rounded-xl bg-[#f5a623]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#f5a623]" />
      </div>
      <span className="text-xs font-medium text-gray-700 leading-tight">
        {label}
      </span>
    </div>
  );
}
