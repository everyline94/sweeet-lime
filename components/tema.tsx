"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

const semAssinatura = () => () => {};

/* toggle de tema por next-themes; so decide o icone depois de montar,
   pra nao brigar com a hidratacao (snapshot do servidor e false) */
export function BotaoTema({ noTrilho = false }: { noTrilho?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const montado = useSyncExternalStore(
    semAssinatura,
    () => true,
    () => false,
  );
  const escuro = montado && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(escuro ? "light" : "dark")}
      aria-label={escuro ? "Usar tema claro" : "Usar tema escuro"}
      title="Tema"
      className={cn(
        "grid size-9 place-items-center rounded-xl transition-colors",
        noTrilho
          ? "text-white/45 hover:bg-white/8 hover:text-white/80"
          : "text-tinta-fraca hover:bg-tinta/5 hover:text-tinta",
      )}
    >
      {escuro ? (
        <Sun className="size-[17px]" strokeWidth={1.75} />
      ) : (
        <Moon className="size-[17px]" strokeWidth={1.75} />
      )}
    </button>
  );
}
