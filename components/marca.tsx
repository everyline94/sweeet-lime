import { cn } from "@/lib/utils";

/* O selo: a sigla dentro do quadrado lima. O texto sobre lima e sempre
   sobre-lima, que nao muda de tema; e essa a regra dura do DS. A sigla entra
   por prop porque a marca e de quem consome, nao do sistema. */
export function Selo({
  sigla = "S",
  tamanho = "size-9",
  className,
}: {
  sigla?: string;
  tamanho?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-lima text-sobre-lima grid shrink-0 place-items-center rounded-xl text-base font-extrabold",
        tamanho,
        className,
      )}
      aria-hidden
    >
      {sigla}
    </span>
  );
}

export function Marca({
  nome = "sweeet-lime",
  sub = "o design system",
  sigla,
  clara = false,
}: {
  nome?: string;
  sub?: string;
  sigla?: string;
  clara?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Selo sigla={sigla ?? nome.charAt(0).toUpperCase()} />
      <div className="min-w-0">
        <div
          className={cn(
            "text-[15px] font-bold leading-tight",
            clara ? "text-white" : "text-tinta",
          )}
        >
          {nome}
        </div>
        <div
          className={cn(
            "text-[11px]",
            clara ? "text-white/45" : "text-tinta-fraca",
          )}
        >
          {sub}
        </div>
      </div>
    </div>
  );
}
