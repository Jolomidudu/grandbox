import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showTagline = false, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-xl", tag: "text-[10px]" },
    md: { icon: "w-10 h-10", text: "text-2xl", tag: "text-xs" },
    lg: { icon: "w-14 h-14", text: "text-4xl", tag: "text-sm" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "rounded-full bg-black flex items-center justify-center shrink-0",
          s.icon
        )}
      >
        <span className="text-[#f5a623] font-bold text-lg leading-none">G</span>
      </div>
      <div className="flex flex-col">
        <span className={cn("font-bold tracking-tight", s.text)}>
          Grand<span className="text-[#f5a623]">Box</span>
        </span>
        {showTagline && (
          <span className={cn("text-gray-500 tracking-widest uppercase", s.tag)}>
            Tailoring · Fashion · Your Style
          </span>
        )}
      </div>
    </Link>
  );
}
