import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* A acao primaria do produto: o Button do registry vestindo a pill lima.
   Mora aqui (e nao no buttonVariants) porque ui/button.tsx e registry puro
   e pode ser sobrescrito; a marca vive por cima, nunca dentro.
   Altura unica: o h-8 do size default. Lima e preenchimento, nunca texto:
   o texto em cima e sempre sobre-lima. Nao recriar esta receita na mao. */
export function BotaoLima({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "bg-lima text-sobre-lima rounded-full px-3.5 font-semibold hover:bg-lima/85",
        className,
      )}
      {...props}
    />
  );
}
