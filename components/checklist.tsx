"use client";

import { Check } from "lucide-react";

/* O item entra por prop, sempre. Quem carrega o dado (banco, arquivo, estado
   local) e o consumidor: o componente so sabe do texto e do estado feito. */
export type ChecklistItem = {
  item: string;
  feito: boolean;
};

export function ItemCheck({
  item,
  onToggle,
}: {
  item: ChecklistItem;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="border-risco flex w-full items-start gap-[11px] border-b py-[9px] text-left text-ui leading-normal last:border-b-0"
    >
      {/* a lima e preenchimento, nunca texto: o check em cima dela e sobre-lima */}
      <span
        className={`mt-px flex h-[19px] w-[19px] flex-none items-center justify-center rounded-md border-[1.5px] transition-colors ${
          item.feito
            ? "border-lima bg-lima text-sobre-lima"
            : "border-risco"
        }`}
      >
        {item.feito ? (
          <Check className="size-[13px]" strokeWidth={2.5} />
        ) : null}
      </span>
      <span
        className={`[text-wrap:pretty] ${
          item.feito ? "text-tinta-fraca line-through" : ""
        }`}
      >
        {item.item}
      </span>
    </button>
  );
}
