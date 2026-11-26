import { Check, X, BadgeCheck, ChevronDown, Lock, ShieldCheck } from "lucide-react";
import { CtaButton, TrustLine } from "../CtaButton";
import { Reveal } from "../Reveal";
import { Section, Title, Mark } from "../ui";

const objections = [
  ["Não tenho tempo.", "As missões levam até 10 minutos e têm uma versão reduzida de 2 minutos para dias corridos."],
  ["Já tentei de tudo.", "O protocolo foi pensado para caber na rotina real: passos curtos, objetivos e sem exigir uma manhã inteira."],
  ["E se eu perder um dia?", "Não precisa recomeçar do zero. Volte ao painel e continue de onde parou, usando a versão curta quando precisar."],
  ["Vale R$ 27?", "Você recebe os 7 dias guiados e os materiais por R$ 27. E ainda conta com 7 dias de garantia para avaliar a compra."],
] as const;

export function Objections() {
  return (
    <Section className="pt-0 md:pt-0">
      <Title>Talvez você esteja com uma destas dúvidas:</Title>
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
          <h3 className="text-3xl font-black">O Protocolo pode fazer sentido para você se…</h3>
          <ul className="mt-5 space-y-3 text-lg">
            {["Sente que começa o dia reagindo a tudo", "Prefere um plano curto, claro e possível de cumprir", "Precisa de atividades que caibam em uma rotina cheia"].map((t) => (
              <li key={t} className="flex gap-3"><Check className="h-6 w-6 shrink-0 text-primary" strokeWidth={3} aria-hidden />{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="card-hard p-8">
          <h3 className="text-3xl font-black">Talvez não seja o que você procura se…</h3>
          <ul className="mt-5 space-y-3 text-lg">
            {["Procura diagnóstico ou tratamento para uma condição de saúde. Este material é educativo e não substitui acompanhamento profissional.", "Espera uma mudança automática sem reservar alguns minutos para praticar."].map((t) => (
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
          <h2 className="text-4xl font-black leading-tight md:text-5xl">Experimente por 7 dias. Sua compra tem garantia.</h2>
          <p className="mt-4 text-xl">Você tem 7 dias a partir da compra para conhecer o conteúdo. Se decidir que não é para você, solicite o reembolso dentro desse prazo, conforme as condições da plataforma de pagamento.</p>
        </div>
      </Reveal>
    </Section>
  );
}

const faq = [
  ["Como recebo o desafio?", "Acesso imediato à área de membros logo após o pagamento. Você também recebe o link de acesso por e-mail."],
  ["Quanto tempo por dia preciso?", "Até 10 minutos. E todo dia tem uma versão de 2 minutos para os dias mais puxados."],
  ["E se eu perder um dia?", "Sem culpa. Cada dia tem versão de 2 minutos e você retoma de onde parou no painel."],
  ["Precisa de algum material?", "O caderno e o planner podem ser usados na tela ou impressos. Papel e caneta ajudam nas atividades, mas não são obrigatórios."],
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
          Amanhã, em vez de tentar organizar tudo na cabeça, você pode começar com <span className="text-cta">um passo simples.</span>
        </h2>
        <p className="mt-6 text-2xl opacity-85">Seu próximo passo pode levar menos de um minuto. A prática começa quando você decidir.</p>
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
        <a href="mailto:contato@7manhasmaisleves.com.br" className="hover:underline">Contato</a>
      </nav>
      <p className="mt-4">© {new Date().getFullYear()} Protocolo Cabeça Limpa</p>
    </footer>
  );
}
