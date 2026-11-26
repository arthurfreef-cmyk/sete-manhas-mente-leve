import { createFileRoute } from "@tanstack/react-router";
import { TopBar, Hero, Pain, Cost, Turn, Method } from "@/components/landing/sections/Top";
import { Days, HowItWorks, Offer, Testimonials } from "@/components/landing/sections/Middle";
import { Objections, ForWho, Guarantee, Faq, FinalCta, Footer } from "@/components/landing/sections/Bottom";
import { StickyCta, ExitPopup } from "@/components/landing/Behaviors";

const TITLE = "Protocolo Cabeça Limpa | 7 dias para uma manhã mais clara";
const DESC = "Um protocolo de 7 dias e 10 minutos por manhã para reduzir o ruído mental e começar o dia com clareza. Área de membros, teste, caderno e planner inclusos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/protocolo-cabeca-limpa-og.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/protocolo-cabeca-limpa-og.svg" },
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
