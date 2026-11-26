import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowLeft, AudioLines, Check, CheckCircle2, ChevronRight, Circle,
  FileText, Lock, ShieldCheck, Sparkles, Sunrise,
} from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizar pedido — 7 Manhãs Mais Leves" },
      { name: "description", content: "Finalize seu pedido e personalize sua experiência com os materiais extras." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const BASE_PRICE = 27;
const orderBumps = [
  {
    id: "despejo",
    price: 9.9,
    title: "Despejo Mental Guiado",
    eyebrow: "7 modelos prontos",
    description: "Perguntas guiadas para tirar os pensamentos da cabeça, organizar as prioridades e aliviar a sensação de sobrecarga.",
    detail: "Um modelo diferente para cada momento em que a mente parece não desligar.",
    icon: FileText,
    color: "bg-violet-50 text-violet-700",
  },
  {
    id: "audios",
    price: 14.9,
    title: "Áudios “Corta o Ruído”",
    eyebrow: "7 áudios de 3 minutos",
    description: "Dê o play e siga uma orientação curta para desacelerar os pensamentos e começar o desafio sem complicação.",
    detail: "Áudios rápidos para acompanhar sua rotina, mesmo nos dias corridos.",
    icon: AudioLines,
    color: "bg-sky-50 text-sky-700",
  },
  {
    id: "manha",
    price: 12.9,
    title: "Pacote Anti-Procrastinação de Manhã",
    eyebrow: "Scripts práticos",
    description: "Frases prontas para usar quando bater a vontade de pegar o celular e adiar o que realmente importa.",
    detail: "Um empurrão prático para sair do piloto automático e começar o dia.",
    icon: Sunrise,
    color: "bg-amber-50 text-amber-700",
  },
] as const;

const included = [
  "7 missões diárias pelo WhatsApp",
  "Guia do Desafio em PDF",
  "Checklist imprimível",
  "Versões rápidas de 2 minutos",
  "Mensagens de resgate para dias difíceis",
];

const money = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function Checkout() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const total = useMemo(
    () => BASE_PRICE + orderBumps.reduce((sum, item) => sum + (selected.includes(item.id) ? item.price : 0), 0),
    [selected],
  );

  function toggleBump(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");

    if (name.length < 2) return setError("Informe seu nome completo.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Confira o endereço de e-mail informado.");
    if (phone.length < 10 || phone.length > 13) return setError("Informe um WhatsApp válido com DDD.");
    setError(null);
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3.5 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15";

  return (
    <main className="min-h-screen bg-[#f7f8f6] pb-12">
      <header className="border-b border-border/70 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar ao site
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <Lock className="h-4 w-4" aria-hidden /> Ambiente de compra
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-8 md:pt-12">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="h-4 w-4" aria-hidden /> Seu próximo passo
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-[#26352f] md:text-5xl">
            Sua próxima manhã pode começar diferente.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Confira seu pedido, adicione os materiais extras que fizerem sentido e preencha seus dados.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Pedido</span>
            <span className="h-px w-8 bg-border" />
            <span className="flex items-center gap-1.5"><Circle className="h-3.5 w-3.5" /> Seus dados</span>
            <span className="h-px w-8 bg-border" />
            <span className="flex items-center gap-1.5"><Circle className="h-3.5 w-3.5" /> Pagamento</span>
          </div>
        </div>

        {sent ? (
          <section className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-8 text-center shadow-soft md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Check className="h-8 w-8" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-[#26352f]">Seus dados foram validados!</h2>
            <p className="mx-auto mt-3 max-w-lg leading-relaxed text-muted-foreground">
              O formulário está pronto, mas o gateway de pagamento ainda precisa ser conectado para gerar sua cobrança. Nenhum pagamento foi realizado.
            </p>
            <Link to="/" className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:underline">
              Voltar para a página inicial <ChevronRight className="h-4 w-4" />
            </Link>
          </section>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid items-start gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6">
              <section className="rounded-3xl border border-border bg-white p-5 shadow-soft md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Seu pedido</p>
                    <h2 className="mt-1 text-2xl font-semibold text-[#26352f]">7 Manhãs Mais Leves</h2>
                    <p className="mt-1 text-sm text-muted-foreground">O plano principal para começar com mais clareza e intenção.</p>
                  </div>
                  <span className="shrink-0 rounded-xl bg-emerald-50 px-3 py-2 text-lg font-bold text-emerald-800">{money(BASE_PRICE)}</span>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#42534b]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-5">
                  <span className="text-sm text-muted-foreground">Oferta de acesso</span>
                  <span className="text-right"><span className="mr-2 text-sm text-muted-foreground line-through">R$ 97,00</span><strong className="text-2xl text-[#26352f]">{money(BASE_PRICE)}</strong></span>
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-white p-5 shadow-soft md:p-8">
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                    <Sparkles className="h-3.5 w-3.5" /> Turbine sua experiência
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-[#26352f]">Adicione materiais especiais</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    São opcionais. Marque apenas os extras que deseja incluir no seu pedido.
                  </p>
                </div>

                <div className="space-y-3">
                  {orderBumps.map((item) => {
                    const active = selected.includes(item.id);
                    const Icon = item.icon;
                    return (
                      <label
                        key={item.id}
                        className={`group flex cursor-pointer gap-3 rounded-2xl border-2 p-4 transition-all md:gap-4 md:p-5 ${active ? "border-emerald-500 bg-emerald-50/70 shadow-sm" : "border-border bg-white hover:border-emerald-300 hover:bg-emerald-50/30"}`}
                      >
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => toggleBump(item.id)}
                          className="sr-only"
                          aria-label={`Adicionar ${item.title} por ${money(item.price)}`}
                        />
                        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${active ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-300 bg-white text-transparent group-hover:border-emerald-400"}`}>
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center justify-between gap-2">
                            <span className="flex items-center gap-2">
                              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}><Icon className="h-5 w-5" aria-hidden /></span>
                              <span className="font-bold leading-tight text-[#26352f]">{item.title}</span>
                            </span>
                            <span className="font-bold text-emerald-800">{money(item.price)}</span>
                          </span>
                          <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-emerald-700">{item.eyebrow}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{item.description}</span>
                          <span className="mt-2 block text-xs leading-relaxed text-[#617068]">{item.detail}</span>
                          <span className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold ${active ? "text-emerald-800" : "text-emerald-700"}`}>
                            {active ? <><CheckCircle2 className="h-4 w-4" /> Adicionado ao pedido</> : "Toque para adicionar ao pedido"}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-white p-5 shadow-soft md:p-8">
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Quase lá</p>
                  <h2 className="mt-1 text-2xl font-semibold text-[#26352f]">Para onde enviar seu acesso?</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Preencha com seus dados corretos.</p>
                </div>
                <div className="grid gap-4">
                  <label className="block text-sm font-semibold text-[#34443c]">Nome completo
                    <input name="name" className={field} placeholder="Como podemos chamar você?" autoComplete="name" required />
                  </label>
                  <label className="block text-sm font-semibold text-[#34443c]">Seu melhor e-mail
                    <input name="email" type="email" className={field} placeholder="voce@email.com" autoComplete="email" required />
                  </label>
                  <label className="block text-sm font-semibold text-[#34443c]">WhatsApp com DDD
                    <input name="phone" type="tel" className={field} placeholder="(11) 99999-9999" autoComplete="tel" inputMode="tel" required />
                  </label>
                </div>
                {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
              </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6">
              <section className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-[#26352f]">Resumo do pedido</h2>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-3"><span className="text-muted-foreground">7 Manhãs Mais Leves</span><strong>{money(BASE_PRICE)}</strong></div>
                  {orderBumps.filter((item) => selected.includes(item.id)).map((item) => (
                    <div key={item.id} className="flex justify-between gap-3"><span className="max-w-[190px] text-muted-foreground">{item.title}</span><strong className="shrink-0">{money(item.price)}</strong></div>
                  ))}
                  {selected.length === 0 && <p className="rounded-xl bg-slate-50 px-3 py-3 text-xs leading-relaxed text-muted-foreground">Seus adicionais aparecerão aqui quando forem selecionados.</p>}
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <div className="flex items-end justify-between gap-3">
                    <span className="text-sm font-semibold text-[#34443c]">Total do pedido</span>
                    <span className="text-3xl font-bold tracking-tight text-[#26352f]">{money(total)}</span>
                  </div>
                  <p className="mt-1 text-right text-xs text-muted-foreground">Pagamento único</p>
                </div>
                <button type="submit" className="btn-cta mt-6 w-full px-5 py-4 text-base">
                  Continuar com meu pedido <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" aria-hidden /> Seus dados são usados para processar o pedido
                </div>
              </section>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden />
                  <div><p className="text-sm font-bold text-emerald-900">Garantia de 7 dias</p><p className="mt-1 text-xs leading-relaxed text-emerald-800">Você tem 7 dias para conhecer o material e decidir se ele faz sentido para você.</p></div>
                </div>
              </div>
              <p className="px-2 text-center text-[11px] leading-relaxed text-muted-foreground">
                Ao continuar, você confirma que os dados informados estão corretos. Os adicionais são opcionais e só entram no total quando selecionados.
              </p>
            </aside>
          </form>
        )}
        <footer className="mt-10 flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><Lock className="h-3.5 w-3.5" /> Seus dados são tratados com cuidado</div>
          <p>7 Manhãs Mais Leves · Todos os direitos reservados</p>
        </footer>
      </div>
    </main>
  );
}
