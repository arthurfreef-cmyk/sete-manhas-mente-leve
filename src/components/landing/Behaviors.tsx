import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { COUNTDOWN_ATIVO, COUNTDOWN_FIM, VAGAS_ATIVO, VAGAS_TEXTO } from "@/lib/checkout";

/** Botão fixo no mobile, aparece depois do hero. */
export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-dark-foreground/10 bg-dark/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <CtaButton className="min-h-14 w-full">Começar por R$ 27</CtaButton>
    </div>
  );
}

const KEY = "7m-exit-shown";
/** Pop-up de saída honesto, 1 vez por sessão. */
export function ExitPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    const trigger = () => { if (sessionStorage.getItem(KEY)) return; sessionStorage.setItem(KEY, "1"); setOpen(true); };
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0) trigger(); };
    let lastY = window.scrollY; let lastT = Date.now();
    const onScroll = () => {
      const y = window.scrollY; const t = Date.now();
      const speed = (lastY - y) / Math.max(t - lastT, 1); // px/ms subindo
      if (window.innerWidth < 768 && y > 1200 && speed > 2.5) trigger();
      lastY = y; lastT = t;
    };
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { document.removeEventListener("mouseleave", onLeave); window.removeEventListener("scroll", onScroll); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/70 p-5 animate-in fade-in" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="exit-title" className="relative w-full max-w-md rounded-3xl border-4 border-cta bg-background p-8 text-center shadow-hard" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setOpen(false)} aria-label="Fechar" className="absolute right-4 top-4 rounded-full p-1 hover:bg-muted"><X className="h-5 w-5" /></button>
        <h2 id="exit-title" className="text-3xl font-black">Antes de sair:</h2>
        <p className="mt-4 text-lg">10 minutos por dia. Garantia de 7 dias. Se não valer, você recebe o dinheiro de volta.</p>
        <CtaButton className="mt-6 w-full md:w-full" onClick={() => setOpen(false)}>Quero tentar por R$ 27</CtaButton>
      </div>
    </div>
  );
}

/** Urgência real apenas: desligada por padrão. */
export function UrgencyBar() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    if (!COUNTDOWN_ATIVO || !COUNTDOWN_FIM) return;
    const end = new Date(COUNTDOWN_FIM).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const showCountdown = COUNTDOWN_ATIVO && left !== null && left > 0;
  const showVagas = VAGAS_ATIVO && VAGAS_TEXTO;
  if (!showCountdown && !showVagas) return null;
  const h = Math.floor((left ?? 0) / 3.6e6), m = Math.floor(((left ?? 0) % 3.6e6) / 6e4), s = Math.floor(((left ?? 0) % 6e4) / 1000);
  return (
    <p className="mt-4 text-center text-sm font-bold text-cta">
      {showCountdown && <>Termina em {h}h {m}m {s}s</>}{showCountdown && showVagas && " • "}{showVagas && VAGAS_TEXTO}
    </p>
  );
}
