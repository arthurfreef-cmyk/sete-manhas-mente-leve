import { Check, Smartphone, Brain, AlarmClock, RotateCcw, BatteryLow, PenLine, Sparkles, Target, Star, Users } from "lucide-react";
import { CtaButton, TrustLine } from "../CtaButton";
import { ProductMockup } from "../ProductMockup";
import { Reveal } from "../Reveal";
import { Section, Title, Mark } from "../ui";
import { PROOF_COUNT, PROOF_RATING } from "@/lib/checkout";

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-dark-foreground/10 bg-dark text-dark-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <p className="text-xs font-semibold md:text-sm">⚡ Protocolo Cabeça Limpa • 7 dias para uma manhã mais clara</p>
        <CtaButton size="sm">Entrar agora</CtaButton>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="bg-dark px-5 pb-20 pt-12 text-dark-foreground md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cta md:text-sm">Para quem acorda já cansado(a) da própria cabeça</p>
          <h1 className="mt-5 text-[2.6rem] font-black leading-[1.02] tracking-tight md:text-7xl">
            Protocolo <Mark>Cabeça Limpa</Mark>: 7 dias para sair do caos mental em 10 minutos por manhã.
          </h1>
          <p className="mt-6 text-lg opacity-85 md:text-xl">
            Sem acordar às 5h. Sem rotina de influencer. Um método simples para descarregar, limpar e priorizar seus pensamentos antes de começar o dia.
          </p>
          <ul className="mt-6 space-y-3 text-lg">
            {["Área de membros com 7 dias liberados em sequência", "Missões de 10 minutos e versão de 2 minutos para dias difíceis", "Teste, caderno, planner e acompanhamento do progresso"].map((t) => (
              <li key={t} className="flex gap-3"><Check className="mt-0.5 h-6 w-6 shrink-0 text-cta" strokeWidth={3} aria-hidden />{t}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3">
            <CtaButton>Quero limpar minha cabeça · R$ 27</CtaButton>
            <TrustLine />
          </div>
          {(PROOF_COUNT || PROOF_RATING) && (
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
              {PROOF_COUNT && <span className="flex items-center gap-2"><Users className="h-5 w-5 text-cta" aria-hidden />{PROOF_COUNT} pessoas já fizeram</span>}
              {PROOF_RATING && <span className="flex items-center gap-2"><Star className="h-5 w-5 fill-cta text-cta" aria-hidden />Nota média {PROOF_RATING}</span>}
            </div>
          )}
        </Reveal>
        <Reveal><ProductMockup /></Reveal>
      </div>
    </header>
  );
}

const pains = [
  { icon: Brain, text: "Seu despertador toca e seu cérebro já abriu 47 abas." },
  { icon: Smartphone, text: "Você pega o celular ainda deitado e, em 2 minutos, já está reagindo ao problema de outra pessoa." },
  { icon: AlarmClock, text: "Você começa o dia atrasado, mesmo acordando no horário." },
  { icon: RotateCcw, text: "Já tentou rotina matinal de 1 hora. Durou 4 dias." },
  { icon: BatteryLow, text: "À noite, a sensação é de ter corrido o dia todo e não ter feito o que importava." },
];

export function Pain() {
  return (
    <Section>
      <Title>Seja honesto: isso é o <Mark>seu dia</Mark> hoje?</Title>
      <ul className="mx-auto max-w-3xl space-y-4">
        {pains.map(({ icon: Icon, text }) => (
          <Reveal as="li" key={text} className="card-hard flex items-center gap-5 p-5 md:p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dark text-cta"><Icon className="h-6 w-6" aria-hidden /></span>
            <span className="text-lg font-semibold md:text-xl">{text}</span>
          </Reveal>
        ))}
      </ul>
      <p className="mt-10 text-center font-display text-2xl font-black md:text-3xl">Se você marcou 2 ou mais, <Mark>continue lendo.</Mark></p>
    </Section>
  );
}

export function Cost() {
  return (
    <Section tone="dark">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Title className="mb-8">Quanto custa <span className="text-cta">mais um mês</span> assim?</Title>
        <p className="text-xl leading-relaxed opacity-90">
          Cada manhã perdida em piloto automático é um dia inteiro vivido no modo reativo. Em 30 dias são 30 manhãs. Em um ano, 365 oportunidades de começar o dia no controle, jogadas fora por falta de um método simples.
        </p>
        <div className="mt-10"><CtaButton>Quero mudar isso agora</CtaButton></div>
      </Reveal>
    </Section>
  );
}

export function Turn() {
  return (
    <Section tone="sage">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Title className="mb-8">O problema nunca foi disciplina.</Title>
        <p className="text-xl leading-relaxed md:text-2xl">
          Você não precisa de mais força de vontade. Precisa de <strong className="font-extrabold">MENOS peso na cabeça</strong>. Rotinas longas pedem energia que você não tem. Aqui, a gente tira o peso primeiro. Depois organiza.
        </p>
      </Reveal>
    </Section>
  );
}

const method = [
  { letter: "D", title: "Descarregar", text: "Tire tudo da cabeça e jogue no papel. O que está escrito deixa de pesar.", icon: PenLine },
  { letter: "L", title: "Limpar", text: "Corte o ruído logo ao acordar. Menos estímulo, mais clareza.", icon: Sparkles },
  { letter: "P", title: "Priorizar", text: "Escolha só 3 coisas. O resto vira 'talvez'.", icon: Target },
];

export function Method() {
  return (
    <Section>
      <Title>O Método D.L.P.: <Mark>3 movimentos</Mark> para destravar sua manhã</Title>
      <div className="grid gap-6 md:grid-cols-3">
        {method.map(({ letter, title, text, icon: Icon }, i) => (
          <Reveal key={letter} className="card-hard p-8">
            <div className="flex items-start justify-between">
              <span className="text-sm font-extrabold text-muted-foreground">0{i + 1}</span>
              <Icon className="h-7 w-7 text-primary" aria-hidden />
            </div>
            <span className="mt-2 block font-display text-8xl font-black leading-none text-primary">{letter}</span>
            <h3 className="mt-4 text-3xl font-black">{title}</h3>
            <p className="mt-3 text-lg text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-semibold">Simples o bastante para fazer cansado. Poderoso o bastante para mudar o tom do dia inteiro.</p>
    </Section>
  );
}
