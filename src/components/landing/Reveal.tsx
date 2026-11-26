import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps { children: ReactNode; className?: string; as?: "div" | "section" | "li" }

/** Fade-in sutil ao entrar na tela. */
export function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref as never} className={cn("reveal", className)}>{children}</Tag>;
}
