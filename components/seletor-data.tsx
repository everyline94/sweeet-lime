"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/* O date picker do sistema: popover + calendar + botao com a data por
   extenso. O dia selecionado e lima com o numero em sobre-lima (regra do
   calendar). Controlado por fora quando value/onChange vierem; guarda o
   estado sozinho quando nao. */
export function SeletorData({
  value,
  onChange,
  placeholder = "Escolher data",
  locale = "pt-BR",
  className = "",
}: {
  value?: Date;
  onChange?: (data: Date | undefined) => void;
  placeholder?: string;
  locale?: string;
  className?: string;
}) {
  const [interna, setInterna] = useState<Date | undefined>(undefined);
  const [aberto, setAberto] = useState(false);
  const data = value ?? interna;

  function escolher(d: Date | undefined) {
    if (onChange) onChange(d);
    else setInterna(d);
    setAberto(false);
  }

  return (
    <Popover open={aberto} onOpenChange={setAberto}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={`min-w-44 justify-start gap-2 tabular-nums ${className}`.trim()}
          >
            <CalendarIcon data-icon="inline-start" />
            {data
              ? data.toLocaleDateString(locale, {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : placeholder}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={data} onSelect={escolher} />
      </PopoverContent>
    </Popover>
  );
}
