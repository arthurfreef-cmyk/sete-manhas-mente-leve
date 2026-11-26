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
        <p className="text-xs font-semibold md:text-sm">⚡ Sua manhã não precisa começar no modo sobrevivência</p>
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
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cta md:text-sm">SE SUA MENTE NÃO DESLIGA, COMECE POR AQUI</p>
          <h1 className="mt-5 text-[2.6rem] font-black leading-[1.02] tracking-tight md:text-7xl">
            Chega de acordar com a cabeça <Mark>a mil.</Mark>
          </h1>
          <p className="mt-6 text-lg opacity-85 md:text-xl">
            Conheça o Protocolo Cabeça Limpa: um plano prático de 7 dias, com atividades de até 10 minutos, para tirar os pensamentos do modo turbulência e começar a manhã com mais clareza. Sem acordar às 5h, sem rotina impossível e sem precisar mudar sua vida inteira de uma vez.
          </p>
          <ul className="mt-6 space-y-3 text-lg">
            {["7 etapas guiadas para você não ficar perdido(a)", "Atividades de 10 minutos — com versão de 2 minutos para dias corridos", "Teste inicial, caderno, planner e acompanhamento da sua evolução"].map((t) => (
              <li key={t} className="flex gap-3"><Check className="mt-0.5 h-6 w-6 shrink-0 text-cta" strokeWidth={3} aria-hidden />{t}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3">
            <CtaButton>QUERO COMEÇAR MINHA VIRADA · R$ 27</CtaButton>
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
      <Title>Você também sente que sua cabeça <Mark>nunca dá pausa?</Mark></Title>
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
        <Title className="mb-8">O preço de continuar deixando tudo <span className="text-cta">para depois</span></Title>
        <p className="text-xl leading-relaxed opacity-90">
          Quando você começa o dia tentando lembrar de tudo, qualquer tarefa parece urgente. A manhã passa, a lista cresce e aquela sensação de estar sempre atrasado continua. Você não precisa esperar chegar ao limite para experimentar um jeito mais simples de organizar o começo do dia.
        </p>
        <div className="mt-10"><CtaButton>QUERO SAIR DO PILOTO AUTOMÁTICO</CtaButton></div>
      </Reveal>
    </Section>
  );
}

export function Turn() {
  return (
    <Section tone="sage">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Title className="mb-8">Talvez você não precise de mais disciplina. Precise de um começo mais leve.</Title>
        <p className="text-xl leading-relaxed md:text-2xl">
          Não é sobre virar uma pessoa superprodutiva da noite para o dia. É sobre parar de tentar resolver tudo mentalmente. Com passos curtos, você coloca as ideias no papel, reduz distrações e escolhe o que merece sua atenção primeiro.
        </p>
      </Reveal>
    </Section>
  );
}

const method = [
  { letter: "D", title: "Descarregar", text: "Coloque no papel o que está ocupando sua mente. Em vez de tentar lembrar de tudo, comece enxergando o que está aí.", icon: PenLine },
  { letter: "L", title: "Limpar", text: "Diminua o excesso de estímulos e dê alguns minutos para sua atenção voltar para o que importa.", icon: Sparkles },
  { letter: "P", title: "Priorizar", text: "Defina até três prioridades realistas. Você não precisa resolver a vida inteira antes do café.", icon: Target },
];

export function Method() {
  return (
    <Section>
      <Title>Um método simples para organizar a manhã: <Mark>Descarregar, Limpar e Priorizar.</Mark></Title>
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
      <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-semibold">Pequenos passos que cabem na vida real — inclusive naqueles dias em que falta tempo e sobra coisa na cabeça.</p>
    </Section>
  );
}
