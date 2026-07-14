// blocos compartilhados pelas views, no design system do mandar-maia:
// canvas, folha, tinta, risco, lima. Nao e biblioteca de componente:
// so o que mais de uma tela usa. Os componentes shadcn moram em ui/.

import { Card as CardUi } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Pagina({
  larga = false,
  children,
}: {
  larga?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 pb-20 pt-7 md:px-8 md:pt-10 ${
        larga ? "max-w-[1240px]" : "max-w-[860px]"
      }`}
    >
      {children}
    </div>
  );
}

/* O cabecalho padrao da view: titulo display grande, lede em tinta fraca
   e uma linha opcional de acoes a direita, como na referencia. */
export function Cabecalho({
  titulo,
  lede,
  acoes,
}: {
  titulo: string;
  lede?: React.ReactNode;
  acoes?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-display">
          {titulo}
        </h1>
        {lede ? (
          <p className="lede text-tinta-fraca mt-2 max-w-[52ch] text-[15px] leading-relaxed md:text-lede">
            {lede}
          </p>
        ) : null}
      </div>
      {acoes ? <div className="flex flex-none items-center gap-2">{acoes}</div> : null}
    </div>
  );
}

export function Sec({
  titulo,
  dica,
  acao,
  children,
}: {
  titulo: string;
  dica?: string;
  acao?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="mb-3 flex items-baseline justify-between gap-2.5">
        <h2 className="text-rotulo text-tinta-fraca uppercase">{titulo}</h2>
        {acao ??
          (dica ? (
            <span className="text-tinta-fraca text-xs">{dica}</span>
          ) : null)}
      </div>
      {children}
    </section>
  );
}

/* a casca de card das views: o Card de ui/ com o padding padrao ja posto.
   Um Card so no DS; este aqui e adaptador, nao um segundo componente. */
export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <CardUi className={cn("block px-5 py-4", className)}>{children}</CardUi>
  );
}

/* o chip mono discreto (selo de fonte do Tile, tag "local" do gabinete) */
export function ChipMono({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "border-risco bg-canvas text-tinta-fraca rounded-full border px-2 py-0.5 font-mono text-[10px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* O stat card da referencia: numero grande, chip discreto no canto,
   rotulo embaixo e um detalhe opcional. */
export function Tile({
  num,
  cap,
  tom,
  mini = false,
  chip,
  detalhe,
}: {
  num: React.ReactNode;
  cap: React.ReactNode;
  tom?: "success" | "warning" | "danger";
  mini?: boolean;
  chip?: React.ReactNode;
  detalhe?: React.ReactNode;
}) {
  const cor =
    tom === "success"
      ? "text-ok"
      : tom === "warning"
        ? "text-atencao"
        : tom === "danger"
          ? "text-alerta"
          : "";
  return (
    <div className={`folha ${mini ? "px-4 py-3" : "px-5 py-4"}`}>
      <div className="flex items-start justify-between gap-2">
        <div
          className={`font-extrabold tabular-nums leading-[1.15] tracking-[-0.02em] ${
            mini ? "text-[21px]" : "text-[30px]"
          } ${cor}`}
        >
          {num}
        </div>
        {chip ? (
          <ChipMono className="mt-0.5 flex-none">{chip}</ChipMono>
        ) : null}
      </div>
      <div
        className={`text-tinta-fraca [text-wrap:balance] ${
          mini ? "mt-0.5 text-[11px]" : "mt-1 text-xs font-medium"
        }`}
      >
        {cap}
      </div>
      {detalhe ? (
        <div className="text-tinta-fraca mt-1.5 text-[11px] leading-snug [text-wrap:pretty]">
          {detalhe}
        </div>
      ) : null}
    </div>
  );
}

export function KV({ k, v }: { k: React.ReactNode; v: React.ReactNode }) {
  return (
    <div className="border-risco flex justify-between gap-3.5 border-b py-[9px] text-ui last:border-b-0">
      <span className="text-tinta-fraca">{k}</span>
      <span className="text-right font-semibold tabular-nums [text-wrap:balance]">
        {v}
      </span>
    </div>
  );
}

export function Vazio({ children }: { children: React.ReactNode }) {
  return <p className="text-tinta-fraca py-1.5 text-[13px]">{children}</p>;
}

/* botao fantasma pequeno, o gesto de acao discreta das views */
export function BotaoLeve({
  onClick,
  title,
  children,
  className = "",
}: {
  onClick?: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={cn(
        "text-tinta-fraca hover:bg-tinta/5 hover:text-tinta inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-[12.5px] font-medium transition-colors",
        className,
      )}
    >
      {children}
    </button>
  );
}
