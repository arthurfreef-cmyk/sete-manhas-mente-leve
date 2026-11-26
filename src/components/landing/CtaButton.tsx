import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/checkout";
import { cn } from "@/lib/utils";

export interface CtaButtonProps { children: React.ReactNode; size?: "sm" | "lg"; className?: string; onClick?: () => void }

export function CtaButton({ children, size = "lg", className, onClick }: CtaButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      onClick={onClick}
      className={cn(
        "btn-cta group",
        size === "lg" ? "cta-pulse min-h-16 w-full px-6 py-4 text-base uppercase md:w-auto md:px-10 md:text-xl" : "shrink-0 whitespace-nowrap px-4 py-2 text-sm",
        className,
      )}
    >
      {children}
      {size === "lg" && <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 cta-arrow" aria-hidden />}
    </a>
  );
}

export function TrustLine({ className }: { className?: string }) {
  return <p className={cn("text-sm opacity-80", className)}>🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias</p>;
}
