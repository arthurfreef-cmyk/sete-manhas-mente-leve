import { CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChatMsg { from: "bot" | "me"; text: string }
const defaultMessages: ChatMsg[] = [
  { from: "bot", text: "Bom dia! ☀️ Dia 1: Descarga mental." },
  { from: "bot", text: "Papel e caneta. 5 minutos. Escreva tudo o que está na sua cabeça." },
  { from: "me", text: "FEITO ✅" },
  { from: "me", text: "Nossa, parece que tirei um peso" },
  { from: "bot", text: "É isso! O que está no papel deixa de pesar 🌿" },
  { from: "bot", text: "Amanhã: manhã sem tela. Até lá!" },
];

export function PhoneMockup({ messages = defaultMessages, tilt = true, className }: { messages?: ChatMsg[]; tilt?: boolean; className?: string }) {
  return (
    <div
      className={cn("mx-auto w-[280px] rounded-[2.5rem] border-[10px] border-phone bg-chat text-foreground shadow-phone md:w-[320px]", tilt && "md:rotate-3", className)}
      role="img"
      aria-label="Exemplo de conversa do desafio no WhatsApp"
    >
      <div className="flex items-center gap-3 rounded-t-[1.8rem] bg-primary px-4 py-3 text-primary-foreground">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta font-display text-sm font-black text-cta-foreground">7M</div>
        <div>
          <p className="text-sm font-semibold">7 Manhãs Mais Leves</p>
          <p className="text-xs opacity-80">online</p>
        </div>
      </div>
      <div className="flex min-h-[400px] flex-col gap-2.5 p-3.5">
        {messages.map((m, i) => (
          <div
            key={m.text}
            style={{ animationDelay: `${i * 0.35}s` }}
            className={cn(
              "max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-700",
              m.from === "me" ? "self-end rounded-br-sm bg-chat-me" : "self-start rounded-bl-sm bg-chat-bubble",
            )}
          >
            {m.text}
            <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
              07:{String(i + 2).padStart(2, "0")}
              {m.from === "me" && <CheckCheck className="h-3.5 w-3.5 text-read" aria-label="lida" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
