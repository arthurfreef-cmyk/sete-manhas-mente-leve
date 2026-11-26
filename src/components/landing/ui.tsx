import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Tone = "light" | "dark" | "sage";
const tones: Record<Tone, string> = {
  light: "bg-background text-foreground",
  dark: "bg-dark text-dark-foreground",
  sage: "bg-sage text-sage-foreground",
};

export function Section({ tone = "light", children, className, id }: { tone?: Tone; children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cn("px-5 py-20 md:py-28", tones[tone], className)}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

export function Title({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("mx-auto mb-12 max-w-3xl text-center text-4xl font-black leading-[1.05] tracking-tight md:text-6xl", className)}>{children}</h2>;
}

/** Marca-texto âmbar para palavras-chave. */
export function Mark({ children }: { children: ReactNode }) {
  return <mark className="mark">{children}</mark>;
}
