import { Check, X, BadgeCheck, ChevronDown, Lock, ShieldCheck } from "lucide-react";
import { CtaButton, TrustLine } from "../CtaButton";
import { Reveal } from "../Reveal";
import { Section, Title, Mark } from "../ui";

const objections = [
  ["Não tenho tempo.", "São 10 minutos. Tem versão de 2."],
  ["Já tentei de tudo.", "Você tentou rotinas longas. Esta tira peso, não adiciona tarefa."],
  ["E se eu perder um dia?", "Sem culpa. Cada dia tem versão de 2 minutos e você retoma de onde parou no painel."],
  ["Vale R$ 27?", "Menos que um lanche. Se não valer, devolvemos."],
] as const;

export function Objections() {
  return (
    <Section className="pt-0 md:pt-0">
      <Title>Você pode estar <Mark>pensando…</Mark></Title>
      <div className="grid gap-5 md:grid-cols-2">
        {objections.map(([q, a]) => (
          <Reveal key={q} className="card-hard p-7">
            <p className="font-display text-2xl font-black">"{q}"</p>
            <p className="mt-3 text-lg text-muted-foreground">→ {a}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ForWho() {
  return (
    <Section className="pt-0 md:pt-0">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card-hard bg-accent p-8">
          <h3 className="text-3xl font-black">Isto é para você se…</h3>
          <ul className="mt-5 space-y-3 text-lg">
            {["Vive no piloto automático", "Quer começar simples", "Tem pouco tempo"].map((t) => (
              <li key={t} className="flex gap-3"><Check className="h-6 w-6 shrink-0 text-primary" strokeWidth={3} aria-hidden />{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="card-hard p-8">
          <h3 className="text-3xl font-black">Isto NÃO é para você se…</h3>
          <ul className="mt-5 space-y-3 text-lg">
            {["Busca tratamento clínico. O desafio não substitui psicólogo ou médico.", "Quer mágica sem agir."].map((t) => (
              <li key={t} className="flex gap-3"><X className="h-6 w-6 shrink-0 text-destructive" strokeWidth={3} aria-hidden />{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Guarantee() {
  return (
    <Section tone="sage">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <BadgeCheck className="h-32 w-32 shrink-0 md:h-40 md:w-40" strokeWidth={1.25} aria-hidden />
        <div>
          <h2 className="text-4xl font-black leading-tight md:text-5xl">Risco zero. Você só perde se não tentar.</h2>
          <p className="mt-4 text-xl">Faça o desafio por 7 dias. Se sentir que não valeu, pede o reembolso e devolvemos 100%. Sem perguntas, sem burocracia.</p>
        </div>
      </Reveal>
    </Section>
  );
}

const faq = [
  ["Como recebo o desafio?", "Acesso imediato à área de membros logo após o pagamento. Você também recebe o link de acesso por e-mail."],
  ["Quanto tempo por dia preciso?", "Até 10 minutos. E todo dia tem uma versão de 2 minutos para os dias mais puxados."],
  ["E se eu perder um dia?", "Sem culpa. Cada dia tem versão de 2 minutos e você retoma de onde parou no painel."],
  ["Precisa de algum material?", "Só papel e caneta."],
  ["Isso substitui terapia?", "Não. É um programa educativo de bem-estar e organização mental. Não substitui acompanhamento com psicólogo ou médico."],
  ["E se eu não gostar?", "Você tem garantia incondicional de 7 dias. Se sentir que não valeu, devolvemos 100% do seu dinheiro."],
] as const;

export function Faq() {
  return (
    <Section>
      <Title>Perguntas frequentes</Title>
      <div className="mx-auto max-w-3xl space-y-4">
        {faq.map(([q, a]) => (
          <details key={q} className="card-hard group p-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold">
              {q}
              <ChevronDown className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <p className="px-6 pb-6 text-lg text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="flex min-h-[90vh] items-center bg-dark px-5 py-24 text-dark-foreground">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">
          Amanhã de manhã, você pode acordar <span className="text-cta">de um jeito diferente</span>, ou do mesmo jeito de sempre.
        </h2>
        <p className="mt-6 text-2xl opacity-85">A escolha leva 30 segundos.</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CtaButton>Quero acessar o Protocolo · R$ 27</CtaButton>
          <TrustLine />
          <div className="flex flex-wrap justify-center gap-5 text-sm opacity-80">
            <span className="flex items-center gap-2"><Lock className="h-4 w-4" aria-hidden />Pagamento seguro</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden />Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark px-5 pb-28 pt-10 text-center text-sm text-dark-foreground/70 md:pb-10">
      <p className="mx-auto max-w-2xl">Este programa tem caráter educativo e não substitui acompanhamento psicológico, psiquiátrico ou médico. Resultados variam de pessoa para pessoa.</p>
      <nav className="mt-4 flex justify-center gap-5" aria-label="Links legais">
        <a href="#termos" className="hover:underline">Termos</a>
        <a href="#privacidade" className="hover:underline">Privacidade</a>
        <a href="mailto:contato@protocolocabecalimpa.com.br" className="hover:underline">Contato</a>
      </nav>
      <p className="mt-4">© {new Date().getFullYear()} Protocolo Cabeça Limpa</p>
    </footer>
  );
}
