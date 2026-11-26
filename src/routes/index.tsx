import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Smartphone, ListTodo, RotateCcw, BatteryLow, PenLine, Sparkles, Target,
  Check, X, ShieldCheck, Lock, BadgeCheck, ChevronDown, UserRound, Clock,
} from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { PhoneMockup } from "@/components/landing/PhoneMockup";
import { Reveal } from "@/components/landing/Reveal";

const TITLE = "7 Manhãs Mais Leves — Desafio de 7 dias por R$ 27";
const DESC = "Um desafio de 10 minutos por dia, no seu WhatsApp, para reduzir o caos mental e começar o dia com mais clareza.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pains = [
  { icon: Brain, text: "Acorda e a cabeça já está pensando em tudo ao mesmo tempo" },
  { icon: Smartphone, text: "Pega o celular na cama e já começa o dia reagindo" },
  { icon: ListTodo, text: "Sente que tem coisa demais para fazer e não sabe por onde começar" },
  { icon: RotateCcw, text: "Já tentou rotinas matinais gigantes e desistiu na segunda semana" },
  { icon: BatteryLow, text: "Termina o dia cansada(o) sem sentir que fez o que importava" },
];

const method = [
  { letter: "D", title: "Descarregar", text: "Tire tudo da cabeça e coloque no papel.", icon: PenLine, tone: "bg-accent" },
  { letter: "L", title: "Limpar", text: "Reduza estímulos e ruídos logo ao acordar.", icon: Sparkles, tone: "bg-secondary" },
  { letter: "P", title: "Priorizar", text: "Escolha só o que realmente importa no dia.", icon: Target, tone: "bg-muted" },
];

const days = [
  ["Descarga mental", "5 minutos para esvaziar a cabeça no papel"],
  ["Manhã sem tela", "Os primeiros 15 minutos sem celular"],
  ["Corpo antes da mente", "Respiração e alongamento de 3 minutos"],
  ["Regra das 3", "Escolha apenas 3 prioridades"],
  ["Ambiente leve", "Organize 1 ponto que te incomoda"],
  ["Luz, água e movimento", "O trio simples da energia"],
  ["Sua manhã mínima", "Monte sua rotina personalizada de 10 minutos"],
] as const;

const bonus = [
  ["7 missões diárias no seu WhatsApp", "R$ 47"],
  ["Guia do Desafio em PDF", "R$ 27"],
  ["Checklist de acompanhamento imprimível", "R$ 17"],
  ["Versão \"dia ruim\" de 2 minutos para cada missão", "R$ 12"],
  ["Mensagens de resgate se você perder um dia", "R$ 7"],
] as const;

const testimonials = [
  { name: "Nome da pessoa", city: "Cidade – UF" },
  { name: "Nome da pessoa", city: "Cidade – UF" },
  { name: "Nome da pessoa", city: "Cidade – UF" },
];

const faq = [
  ["Como recebo o desafio?", "Pelo WhatsApp, logo após a compra. Se preferir, você também pode receber tudo por e-mail."],
  ["Quanto tempo por dia preciso?", "Até 10 minutos. E todo dia tem uma versão de 2 minutos para os dias mais puxados."],
  ["E se eu perder um dia?", "Sem culpa. Você recebe uma mensagem de resgate e retoma de onde parou."],
  ["Precisa de algum material?", "Só papel e caneta."],
  ["Isso substitui terapia?", "Não. É um programa educativo de bem-estar e organização mental. Não substitui acompanhamento com psicólogo ou médico."],
  ["E se eu não gostar?", "Você tem garantia incondicional de 7 dias. Se sentir que não valeu, devolvemos 100% do seu dinheiro."],
] as const;

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-semibold md:text-4xl">{children}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      {/* 1. Barra superior */}
      <div className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
          <p className="text-xs font-medium md:text-sm">Desafio de 7 dias • Começa assim que você entra</p>
          <CtaButton size="sm">Quero entrar</CtaButton>
        </div>
      </div>

      {/* 2. Hero */}
      <header className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-24">
        <Reveal>
          <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-medium md:text-sm">
            7 dias • 10 minutos por dia • No seu WhatsApp
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            7 manhãs para acordar com a cabeça mais leve
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Um desafio simples, de 10 minutos por dia, para reduzir o caos mental e começar o dia com mais clareza, sem acordar às 5h e sem rotina impossível.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <CtaButton>Quero começar o desafio por R$ 27</CtaButton>
            <p className="text-sm text-muted-foreground">Acesso imediato • Garantia de 7 dias</p>
          </div>
        </Reveal>
        <Reveal><PhoneMockup /></Reveal>
      </header>

      {/* 3. Dor */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle>Você se reconhece nisso?</SectionTitle>
          <ul className="space-y-4">
            {pains.map(({ icon: Icon, text }) => (
              <Reveal as="li" key={text} className="flex items-center gap-4 rounded-2xl border bg-background p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>{text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Virada */}
      <section className="px-4 py-20">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-secondary p-8 text-center md:p-14">
          <h2 className="text-3xl font-semibold md:text-4xl">O problema não é falta de disciplina</h2>
          <p className="mt-5 text-lg leading-relaxed">
            É excesso de coisas na cabeça. Rotinas longas pedem energia que você não tem. O desafio 7 Manhãs Mais Leves faz o oposto: tira peso primeiro, depois organiza.
          </p>
        </Reveal>
      </section>

      {/* 5. Método */}
      <section className="px-4 py-20">
        <SectionTitle sub="Três passos simples que se repetem ao longo das 7 manhãs.">O Método D.L.P.</SectionTitle>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {method.map(({ letter, title, text, icon: Icon, tone }) => (
            <Reveal key={letter} className={`rounded-3xl p-8 shadow-soft ${tone}`}>
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl font-semibold text-primary">{letter}</span>
                <Icon className="h-8 w-8 text-accent-foreground" aria-hidden />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Os 7 dias */}
      <section className="bg-card px-4 py-20">
        <SectionTitle>Os 7 dias</SectionTitle>
        <ol className="mx-auto max-w-2xl border-l-2 border-primary/40 pl-8">
          {days.map(([title, text], i) => (
            <Reveal as="li" key={title} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[3.05rem] flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Dia {i + 1}</p>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mx-auto mt-10 flex max-w-max items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-medium">
          <Clock className="h-4 w-4" aria-hidden /> Dia puxado? Todo dia tem uma versão de 2 minutos.
        </p>
      </section>

      {/* 7. O que você recebe */}
      <section className="px-4 py-20">
        <SectionTitle>O que você recebe</SectionTitle>
        <Reveal className="mx-auto max-w-2xl rounded-3xl border bg-card p-6 shadow-soft md:p-10">
          <ul className="divide-y">
            {bonus.map(([item, value]) => (
              <li key={item} className="flex items-center justify-between gap-4 py-4">
                <span className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden /> {item}
                </span>
                <span className="text-sm text-muted-foreground line-through">{value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-lg">
            Valor real: <span className="text-muted-foreground line-through">R$ 110</span>
          </p>
        </Reveal>
      </section>

      {/* 8. Para quem é */}
      <section className="bg-card px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-accent p-8">
            <h3 className="text-2xl font-semibold">É para você que…</h3>
            <ul className="mt-5 space-y-3">
              {["Vive no piloto automático", "Quer começar simples", "Tem pouco tempo"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-accent-foreground" aria-hidden />{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-3xl border bg-background p-8">
            <h3 className="text-2xl font-semibold">Não é para você que…</h3>
            <ul className="mt-5 space-y-3">
              {["Busca tratamento clínico (o desafio não substitui psicólogo ou médico)", "Quer resultados mágicos sem fazer nada"].map((t) => (
                <li key={t} className="flex gap-3"><X className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 9. Depoimentos */}
      <section className="px-4 py-20">
        <SectionTitle>Quem já fez</SectionTitle>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} className="rounded-3xl border bg-card p-7 shadow-soft">
              <p className="italic text-muted-foreground">[Substituir por depoimento real]</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <UserRound className="h-6 w-6 text-muted-foreground" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. Oferta */}
      <section id="oferta" className="px-4 py-20">
        <Reveal className="mx-auto max-w-lg rounded-3xl border-2 border-primary bg-card p-8 text-center shadow-soft md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">7 Manhãs Mais Leves</p>
          <p className="mt-4 text-muted-foreground">De <span className="line-through">R$ 97</span> por apenas</p>
          <p className="font-display text-7xl font-semibold md:text-8xl">R$ 27</p>
          <p className="mt-2 text-muted-foreground">pagamento único, acesso imediato</p>
          <CtaButton className="mt-8 w-full">Quero começar agora</CtaButton>
          <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Lock className="h-4 w-4" aria-hidden />Pagamento seguro</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden />Garantia de 7 dias</span>
          </div>
        </Reveal>
      </section>

      {/* 11. Garantia */}
      <section className="px-4 pb-20">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-secondary p-8 text-center md:flex-row md:text-left">
          <BadgeCheck className="h-20 w-20 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
          <div>
            <h2 className="text-2xl font-semibold">Garantia incondicional de 7 dias</h2>
            <p className="mt-2">Se você fizer o desafio e sentir que não valeu, devolvemos 100% do seu dinheiro.</p>
          </div>
        </Reveal>
      </section>

      {/* 12. FAQ */}
      <section className="bg-card px-4 py-20">
        <SectionTitle>Perguntas frequentes</SectionTitle>
        <div className="mx-auto max-w-2xl space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border bg-background p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton>Quero começar o desafio por R$ 27</CtaButton>
        </div>
      </section>

      <footer className="px-4 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} 7 Manhãs Mais Leves. Este desafio é educativo e não substitui acompanhamento profissional.
      </footer>
    </div>
  );
}
