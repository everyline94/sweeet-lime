import { cn } from "@/lib/utils";

/* o giro padrao de carregamento das telas de espera (auth, views, moldura) */
export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "border-risco border-t-tinta inline-block h-[18px] w-[18px] animate-spin rounded-full border-2",
        className,
      )}
    />
  );
}
