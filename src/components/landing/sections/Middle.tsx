import { Check, Clock, Lock, ShieldCheck, Star, UserRound } from "lucide-react";
import { CtaButton } from "../CtaButton";
import { ProductMockup } from "../ProductMockup";
import { Reveal } from "../Reveal";

import { UrgencyBar } from "../Behaviors";
import { Section, Title, Mark } from "../ui";
import { TESTIMONIALS, type Testimonial } from "@/lib/checkout";

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
  const steps = ["Acesse a Área de Membros por login ou link mágico", "Faça a mini-aula e a missão de 10 minutos no seu ritmo", "Conclua o dia, acompanhe seu progresso e avance"];
  return (
    <Section>
      <Title>Como funciona <Mark>na Área de Membros</Mark></Title>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s} className="card-hard flex items-center gap-5 p-6">
              <span className="font-display text-5xl font-black text-primary">{i + 1}</span>
              <span className="text-xl font-bold">{s}</span>
            </Reveal>
          ))}
        </ol>
        <Reveal><ProductMockup /></Reveal>
        <p className="text-sm text-muted-foreground md:col-span-2">Lembretes por WhatsApp e e-mail são opcionais e podem ser ativados dentro da área de membros.</p>
      </div>
    </Section>
  );
}

const stack = [
  ["Área de Membros Cabeça Limpa", "R$ 67", "Entre por login ou link mágico e avance pelos 7 dias liberados em sequência. Cada dia inclui mini-aula de 2 minutos, missão de 10 minutos, versão dia ruim de 2 minutos, botão Concluir dia, barra de progresso e contador de dias seguidos."],
  ["Teste Índice de Ruído Mental", "R$ 19", "Responda 8 perguntas no início e refaça o teste no Dia 7. Compare seu resultado de 0 a 100 antes e depois."],
  ["Caderno de Execução em PDF · 30+ páginas", "R$ 37", "Descarregue os pensamentos, aplique a Regra das 3, organize o ambiente e monte seu plano da Manhã Mínima."],
  ["Planner imprimível de 7 dias · PDF A4", "R$ 17", "Acompanhe cada missão no papel e marque seu avanço ao longo da semana."],
  ["Cartão SOS de 2 Minutos", "R$ 12", "Consulte uma página de orientação rápida nos dias de caos, também disponível na área de membros."],
  ["Certificado e Relatório Final personalizado", "R$ 9", "Receba seu resultado, veja o que mudou e registre a rotina Minha Manhã Mínima montada no Dia 7."],
] as const;

export function Offer() {
  return (
    <Section tone="dark" id="oferta">
      <Title>Tudo o que você recebe <span className="text-cta">hoje</span></Title>
      <Reveal className="mx-auto max-w-2xl rounded-3xl border-4 border-cta bg-dark-card p-6 shadow-cta md:p-10">
        <ul className="divide-y divide-dark-foreground/15">
          {stack.map(([item, value, benefit]) => (
            <li key={item} className="flex items-start justify-between gap-4 py-4">
              <span className="flex min-w-0 items-start gap-3"><Check className="mt-0.5 h-6 w-6 shrink-0 text-cta" strokeWidth={3} aria-hidden /><span><span className="font-semibold">{item}</span><span className="mt-1 block text-sm font-normal leading-relaxed opacity-80">{benefit}</span></span></span>
              <span className="shrink-0 text-right text-xs opacity-70"><span className="block">valor de referência</span><span className="text-sm line-through">{value}</span></span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-lg">Valor de referência: <span className="line-through opacity-70">R$ 161</span></p>
        <div className="mt-8 text-center">
          <p className="opacity-75">De <span className="line-through">R$ 161</span> por</p>
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
  if (!hasReal) return null;
  return (
    <Section>
      <Title>O que dizem quem já fez</Title>
      <div className="grid gap-6 md:grid-cols-3">{TESTIMONIALS.map((t) => <TestimonialCard key={t.name + t.city} t={t} />)}</div>
    </Section>
  );
}
