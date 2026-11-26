import { Check, Clock, Lock, ShieldCheck, Gift, AlertTriangle, Star, UserRound } from "lucide-react";
import { CtaButton, TrustLine } from "../CtaButton";
import { PhoneMockup } from "../PhoneMockup";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";
import { UrgencyBar } from "../Behaviors";
import { Section, Title, Mark } from "../ui";
import { BONUS_ATIVO, TESTIMONIALS, type Testimonial } from "@/lib/checkout";

const days = [
  ["Descarga mental", "5 minutos para esvaziar a cabeça no papel", "Você vai sentir a cabeça esvaziar"],
  ["Manhã sem tela", "Os primeiros 15 minutos sem celular", "Você começa o dia no seu ritmo, não no dos outros"],
  ["Corpo antes da mente", "Respiração e alongamento de 3 minutos", "Você acorda o corpo antes das preocupações"],
  ["Regra das 3", "Escolha apenas 3 prioridades", "Você termina o dia sabendo o que fez de importante"],
  ["Ambiente leve", "Organize 1 ponto que te incomoda", "Você vê menos bagunça e pensa com mais calma"],
  ["Luz, água e movimento", "O trio simples da energia", "Você sente mais disposição sem precisar de esforço"],
  ["Sua manhã mínima", "Monte sua rotina personalizada de 10 minutos", "Você sai com uma manhã que é sua de verdade"],
] as const;

export function Days() {
  return (
    <Section tone="dark">
      <Title>Sua semana, <span className="text-cta">manhã por manhã</span></Title>
      <ol className="mx-auto max-w-3xl space-y-5 border-l-4 border-cta/40 pl-6 md:pl-10">
        {days.map(([title, mission, benefit], i) => (
          <Reveal as="li" key={title} className="relative rounded-2xl border-2 border-dark-foreground/15 bg-dark-card p-6">
            <span className="absolute -left-[2.85rem] top-6 flex h-10 w-10 items-center justify-center rounded-full bg-cta font-display text-lg font-black text-cta-foreground md:-left-[3.85rem]">{i + 1}</span>
            <p className="text-xs font-extrabold uppercase tracking-widest text-cta">Dia {i + 1}</p>
            <h3 className="mt-1 text-2xl font-black">{title}</h3>
            <p className="mt-2"><strong>Missão:</strong> {mission}</p>
            <p className="mt-1 flex items-center gap-2 text-sm opacity-75"><Clock className="h-4 w-4" aria-hidden />Versão dia ruim: 2 min</p>
            <p className="mt-3 italic text-sage">{benefit}</p>
          </Reveal>
        ))}
      </ol>
      <div className="mt-12 text-center"><CtaButton>Quero começar o dia 1</CtaButton></div>
    </Section>
  );
}

export function HowItWorks() {
  const steps = ["Compre e receba o acesso na hora", "Receba a missão do dia toda manhã", "Responda FEITO e avance"];
  return (
    <Section>
      <Title>Como funciona <Mark>no WhatsApp</Mark></Title>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s} className="card-hard flex items-center gap-5 p-6">
              <span className="font-display text-5xl font-black text-primary">{i + 1}</span>
              <span className="text-xl font-bold">{s}</span>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <PhoneMockup tilt={false} messages={[
            { from: "bot", text: "Oi! Notei que ontem não rolou a missão." },
            { from: "bot", text: "Sem culpa. Retome daqui. 💛" },
            { from: "bot", text: "Hoje vale até a versão de 2 minutos." },
            { from: "me", text: "FEITO ✅" },
          ]} />
        </Reveal>
      </div>
    </Section>
  );
}

const stack = [
  ["7 missões diárias no seu WhatsApp", "R$ 47"],
  ["Guia do Desafio em PDF", "R$ 27"],
  ["Checklist de acompanhamento imprimível", "R$ 17"],
  ["Versão \"dia ruim\" de 2 minutos para cada missão", "R$ 12"],
  ["Mensagens de resgate se você perder um dia", "R$ 7"],
] as const;

export function Offer() {
  return (
    <Section tone="dark" id="oferta">
      <Title>Tudo o que você recebe <span className="text-cta">hoje</span></Title>
      <Reveal className="mx-auto max-w-2xl rounded-3xl border-4 border-cta bg-dark-card p-6 shadow-cta md:p-10">
        <ul className="divide-y divide-dark-foreground/15">
          {stack.map(([item, value]) => (
            <li key={item} className="flex items-center justify-between gap-4 py-4">
              <span className="flex items-center gap-3 font-semibold"><Check className="h-6 w-6 shrink-0 text-cta" strokeWidth={3} aria-hidden />{item}</span>
              <span className="shrink-0 text-sm opacity-60 line-through">{value}</span>
            </li>
          ))}
          {BONUS_ATIVO && (
            <li className="flex items-center justify-between gap-4 py-4">
              <span className="flex items-center gap-3 font-semibold"><Gift className="h-6 w-6 shrink-0 text-cta" aria-hidden />Mini-guia Noite Leve <em className="text-sm font-normal text-cta">bônus para quem entrar hoje</em></span>
            </li>
          )}
        </ul>
        <p className="mt-6 text-center text-lg">Valor real: <span className="line-through opacity-70">R$ <CountUp to={110} /></span></p>
        <div className="mt-8 text-center">
          <p className="opacity-75">De <span className="line-through">R$ 97</span> por</p>
          <p className="font-display text-8xl font-black leading-none text-cta md:text-9xl">R$ 27</p>
          <p className="mt-3 opacity-85">ou 1 pagamento único. Menos de R$ 3,90 por manhã.</p>
        </div>
        <CtaButton className="mt-8 w-full md:w-full">Quero começar agora</CtaButton>
        <UrgencyBar />
        <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm opacity-80">
          <span className="flex items-center gap-2"><Lock className="h-4 w-4" aria-hidden />Pagamento seguro</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden />Garantia de 7 dias</span>
        </div>
      </Reveal>
    </Section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Reveal className="card-hard p-7">
      <div className="flex gap-1" aria-label={`${t.stars} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, i) => <Star key={i} className={i < t.stars ? "h-5 w-5 fill-cta text-cta" : "h-5 w-5 text-muted-foreground"} aria-hidden />)}
      </div>
      <p className="mt-4 text-lg">"{t.text}"</p>
      {t.print && <img src={t.print} alt={`Print do WhatsApp de ${t.name}`} loading="lazy" className="mt-4 rounded-xl border" />}
      <div className="mt-6 flex items-center gap-3">
        {t.photo ? <img src={t.photo} alt={t.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
          : <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary"><UserRound className="h-6 w-6 text-muted-foreground" aria-hidden /></span>}
        <div><p className="font-bold">{t.name}</p><p className="text-sm text-muted-foreground">{t.city}</p></div>
      </div>
    </Reveal>
  );
}

export function Testimonials() {
  const hasReal = TESTIMONIALS.length > 0;
  if (!hasReal && !import.meta.env.DEV) return null;
  return (
    <Section>
      <Title>O que dizem quem já fez</Title>
      {hasReal ? (
        <div className="grid gap-6 md:grid-cols-3">{TESTIMONIALS.map((t) => <TestimonialCard key={t.name + t.city} t={t} />)}</div>
      ) : (
        <p className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border-2 border-dashed border-cta p-6 font-semibold">
          <AlertTriangle className="h-6 w-6 shrink-0 text-cta" aria-hidden />
          Modo de edição: adicione depoimentos reais em TESTIMONIALS. Esta seção fica oculta no site publicado enquanto estiver vazia.
        </p>
      )}
    </Section>
  );
}
