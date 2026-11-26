const messages = [
  { from: "bot", text: "Bom dia! ☀️ Dia 1 do desafio: Descarga mental." },
  { from: "bot", text: "Pegue papel e caneta. Por 5 minutos, escreva tudo o que está na sua cabeça." },
  { from: "me", text: "Feito! Já me sinto mais leve 🙌" },
  { from: "bot", text: "Lindo! Amanhã: manhã sem tela. Até lá 🌿" },
];

export function PhoneMockup() {
  return (
    <div className="mx-auto w-[280px] rounded-[2.5rem] border-8 border-foreground/90 bg-chat shadow-soft md:w-[310px]" aria-label="Exemplo de mensagens do desafio no WhatsApp">
      <div className="flex items-center gap-3 rounded-t-[2rem] bg-primary px-4 py-3 text-primary-foreground">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/25 font-display text-sm font-semibold">7M</div>
        <div>
          <p className="text-sm font-semibold">7 Manhãs Mais Leves</p>
          <p className="text-xs opacity-80">online</p>
        </div>
      </div>
      <div className="flex min-h-[380px] flex-col gap-3 p-4">
        {messages.map((m, i) => (
          <div
            key={m.text}
            style={{ animationDelay: `${i * 0.4}s` }}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-700 ${
              m.from === "me" ? "self-end rounded-br-sm bg-secondary" : "self-start rounded-bl-sm bg-chat-bubble"
            }`}
          >
            {m.text}
            <span className="mt-1 block text-right text-[10px] text-muted-foreground">07:0{i + 2}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
