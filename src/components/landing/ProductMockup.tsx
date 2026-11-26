import { ShieldCheck } from "lucide-react";

export function ProductMockup({ className = "" }: { className?: string }) {
  const tasks = ["Descarregar pensamentos", "Reduzir estímulos", "Definir 3 prioridades", "Preparar o ambiente", "Fazer a manhã mínima", "Revisar o que funcionou", "Montar minha rotina"];
  return (
    <div className={`relative mx-auto aspect-[16/10] w-full max-w-[560px] select-none ${className}`} role="img" aria-label="Mockup do Protocolo Cabeça Limpa com área de membros, caderno, planner e cartão SOS">
      <div className="absolute left-[2%] top-[10%] z-10 h-[76%] w-[29%] -rotate-[7deg] rounded-md bg-[#e9dfca] p-2 shadow-[0_18px_35px_-15px_rgba(0,0,0,.5)] sm:block">
        <div className="flex h-full flex-col items-center justify-between border border-[#9a8c73]/40 bg-[#f6f0e5] px-2 py-3 text-center">
          <span className="text-[7px] font-bold uppercase tracking-[.22em] text-[#64796b]">Caderno de Execução</span>
          <div><span className="font-display text-[clamp(11px,2vw,19px)] font-black leading-none text-[#26352f]">Protocolo<br/>Cabeça Limpa</span><p className="mt-2 text-[7px] leading-tight text-[#58675e]">7 dias para sair do caos mental em 10 minutos por manhã</p></div>
          <div className="h-1 w-10 rounded-full bg-[#d9a64c]" />
          <span className="text-[6px] font-semibold uppercase tracking-widest text-[#64796b]">Método D.L.P.</span>
        </div>
      </div>
      <div className="absolute right-[1%] top-[8%] z-0 h-[82%] w-[28%] rotate-[6deg] rounded-sm bg-white p-2 shadow-[0_18px_35px_-15px_rgba(0,0,0,.35)] sm:block">
        <div className="h-full border border-slate-200 p-2 text-[#34443c]">
          <p className="text-center text-[7px] font-black uppercase tracking-widest">Planner · 7 dias</p>
          <p className="mt-1 text-center text-[6px] text-slate-500">Protocolo Cabeça Limpa</p>
          <div className="mt-3 space-y-2">{tasks.map((task, i) => <div key={task} className="flex items-center gap-1.5 border-b border-slate-100 pb-1"><span className="flex h-3 w-3 items-center justify-center rounded-sm border border-[#8fae9b] text-[6px]">{i < 2 ? "✓" : ""}</span><span className="text-[6px]">{i + 1}. {task}</span></div>)}</div>
          <p className="mt-3 text-center text-[6px] text-slate-400">Minha Manhã Mínima</p>
        </div>
      </div>
      <div className="absolute left-1/2 top-[3%] z-20 h-[94%] w-[42%] min-w-[108px] max-w-[205px] -translate-x-1/2 rounded-[1.55rem] border-[5px] border-[#18241f] bg-[#18241f] p-1 shadow-[0_24px_45px_-15px_rgba(0,0,0,.55)]">
        <div className="relative h-full overflow-hidden rounded-[1.15rem] bg-[#f8f7f1] px-2.5 pb-2 pt-5 text-[#26352f] sm:px-3.5 sm:pt-6">
          <div className="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-[#18241f]" />
          <p className="text-[clamp(6px,1vw,9px)] font-extrabold text-[#64806d]">ÁREA DE MEMBROS</p>
          <p className="mt-1 text-[clamp(9px,1.55vw,15px)] font-black leading-tight">Protocolo<br/>Cabeça Limpa</p>
          <div className="mt-2 rounded-lg bg-white p-2 shadow-sm">
            <div className="flex items-center justify-between text-[clamp(6px,.9vw,8px)] font-bold"><span>Dia 3 de 7</span><span className="text-[#6c8a75]">43%</span></div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#e4e9e2]"><div className="h-full w-[43%] rounded-full bg-[#8fae9b]" /></div>
          </div>
          <div className="mt-2 rounded-lg border border-[#dce5dc] bg-[#edf3ec] p-2">
            <p className="text-[clamp(6px,.9vw,8px)] font-bold uppercase tracking-wide text-[#6a806e]">Missão de hoje</p>
            <p className="mt-1 text-[clamp(7px,1.1vw,10px)] font-bold leading-tight">Descarregue o que está ocupando sua cabeça.</p>
            <p className="mt-1 text-[clamp(6px,.85vw,8px)] leading-tight text-slate-600">Escreva sem filtrar por 10 minutos. Depois escolha o que merece sua atenção.</p>
          </div>
          <div className="mt-2 rounded-lg bg-white p-2 shadow-sm">
            <p className="text-[clamp(6px,.9vw,8px)] font-bold">Seu progresso</p>
            <div className="mt-1 flex gap-1">{Array.from({length:7},(_,i)=><span key={i} className={`h-2 flex-1 rounded-sm ${i<3?"bg-[#8fae9b]":"bg-[#e4e9e2]"}`}/>)}</div>
            <p className="mt-1 text-[clamp(5px,.8vw,7px)] text-slate-500">2 dias seguidos</p>
          </div>
          <div className="mt-2 rounded-md bg-[#263c30] py-2 text-center text-[clamp(6px,.95vw,8px)] font-bold text-white">Concluir dia</div>
          <p className="mt-2 text-center text-[clamp(5px,.75vw,7px)] text-slate-500">Método D.L.P. · Descarregar, Limpar, Priorizar</p>
        </div>
      </div>
      <div className="absolute bottom-[3%] left-[5%] z-30 rounded-lg border border-[#d9dfd7] bg-white px-2.5 py-2 shadow-[0_10px_22px_-10px_rgba(0,0,0,.35)] sm:left-[15%]">
        <p className="text-[clamp(7px,1vw,10px)] font-black text-[#26352f]">SOS 2 minutos</p><p className="text-[clamp(5px,.8vw,7px)] text-slate-500">Para os dias de caos</p>
      </div>
      <div className="absolute bottom-[2%] right-[3%] z-30 flex h-[clamp(45px,10vw,76px)] w-[clamp(45px,10vw,76px)] flex-col items-center justify-center rounded-full border-[3px] border-[#d8ad60] bg-[#fff9e9] text-center text-[#80602b] shadow-lg sm:right-[10%]">
        <ShieldCheck className="h-4 w-4" /><span className="text-[clamp(5px,.8vw,7px)] font-black leading-tight">GARANTIA</span><span className="text-[clamp(7px,1vw,10px)] font-black">7 DIAS</span>
      </div>
    </div>
  );
}
