import { createFileRoute } from "@tanstack/react-router";
import { TopBar, Hero, Pain, Cost, Turn, Method } from "@/components/landing/sections/Top";
import { Days, HowItWorks, Offer, Testimonials } from "@/components/landing/sections/Middle";
import { Objections, ForWho, Guarantee, Faq, FinalCta, Footer } from "@/components/landing/sections/Bottom";
import { StickyCta, ExitPopup } from "@/components/landing/Behaviors";

const TITLE = "7 Manhãs Mais Leves: pare de acordar com a cabeça a mil";
const DESC = "Desafio de 7 manhãs, 10 minutos por dia, no seu WhatsApp. Tire o peso da cabeça antes do dia começar. R$ 27 com garantia de 7 dias.";

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

function Index() {
  return (
    <div className="min-h-screen text-lg md:text-base">
      <TopBar />
      <Hero />
      <Pain />
      <Cost />
      <Turn />
      <Method />
      <Days />
      <HowItWorks />
      <Offer />
      <Testimonials />
      <Section12Wrapper />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyCta />
      <ExitPopup />
    </div>
  );
}

/** Objeções e "para quem é" dividem o mesmo fundo claro. */
function Section12Wrapper() {
  return (<div className="bg-background pt-20 md:pt-28"><Objections /><ForWho /></div>);
}
