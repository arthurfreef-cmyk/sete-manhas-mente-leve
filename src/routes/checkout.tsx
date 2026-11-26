import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, Check, Lock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — 7 Manhãs Mais Leves" },
      { name: "description", content: "Finalize sua inscrição no desafio 7 Manhãs Mais Leves por R$ 27, com acesso imediato e garantia de 7 dias." },
      { property: "og:title", content: "Checkout — 7 Manhãs Mais Leves" },
      { property: "og:description", content: "Garanta sua vaga no desafio de 7 dias por R$ 27." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const included = ["7 missões diárias no WhatsApp", "Guia do Desafio em PDF", "Checklist imprimível", "Versões de 2 minutos", "Mensagens de resgate"];

function Checkout() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    if (name.length < 2) return setError("Informe seu nome.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Informe um e-mail válido.");
    if (phone.length < 10) return setError("Informe um WhatsApp com DDD.");
    setError(null);
    setSent(true);
  }

  const field = "w-full rounded-xl border bg-background px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar
      </Link>
      <h1 className="mt-6 text-3xl font-semibold md:text-4xl">Falta pouco para sua primeira manhã leve</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <section className="rounded-3xl border bg-card p-6 shadow-soft md:col-span-3 md:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <Check className="mx-auto h-14 w-14 text-primary" aria-hidden />
              <h2 className="mt-4 text-2xl font-semibold">Dados recebidos!</h2>
              <p className="mt-2 text-muted-foreground">O pagamento online ainda será conectado. Em breve você receberá o desafio no seu WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <h2 className="text-xl font-semibold">Seus dados</h2>
              <label className="block text-sm font-medium">Nome<input name="name" className={`mt-1 ${field}`} autoComplete="name" /></label>
              <label className="block text-sm font-medium">E-mail<input name="email" type="email" className={`mt-1 ${field}`} autoComplete="email" /></label>
              <label className="block text-sm font-medium">WhatsApp (com DDD)<input name="phone" type="tel" className={`mt-1 ${field}`} placeholder="(11) 99999-9999" autoComplete="tel" /></label>
              {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
              <button type="submit" className="btn-cta w-full px-8 py-4 text-lg">Finalizar compra por R$ 27</button>
              <div className="flex flex-wrap justify-center gap-5 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Lock className="h-4 w-4" aria-hidden />Pagamento seguro</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden />Garantia de 7 dias</span>
              </div>
            </form>
          )}
        </section>

        <aside className="h-fit rounded-3xl bg-secondary p-6 md:col-span-2 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">Resumo</p>
          <h2 className="mt-2 text-2xl font-semibold">7 Manhãs Mais Leves</h2>
          <ul className="mt-5 space-y-2 text-sm">
            {included.map((i) => <li key={i} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />{i}</li>)}
          </ul>
          <div className="mt-6 border-t border-foreground/10 pt-4">
            <p className="text-sm text-muted-foreground line-through">R$ 97</p>
            <p className="font-display text-4xl font-semibold">R$ 27</p>
            <p className="text-sm text-muted-foreground">pagamento único</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
