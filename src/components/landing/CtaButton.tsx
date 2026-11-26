import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/checkout";
import { cn } from "@/lib/utils";

export interface CtaButtonProps { children: React.ReactNode; size?: "sm" | "lg"; className?: string }

export function CtaButton({ children, size = "lg", className }: CtaButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn("btn-cta", size === "lg" ? "px-8 py-4 text-base md:text-lg" : "shrink-0 whitespace-nowrap px-4 py-2 text-sm", className)}
    >
      {children}
      {size === "lg" && <ArrowRight className="h-5 w-5" aria-hidden />}
    </a>
  );
}
