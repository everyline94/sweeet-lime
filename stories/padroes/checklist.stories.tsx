import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Card } from "@/components/blocos";
import { ItemCheck, type ChecklistItem } from "@/components/checklist";

/**
 * O item de checklist. Clique pra marcar: o estado mora em quem usa, o
 * componente so recebe `item` e `onToggle`. A caixinha marcada e lima com o
 * check em sobre-lima, nunca lima como texto.
 */
const meta = {
  title: "Padrões/Checklist",
  component: ItemCheck,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ItemCheck>;

export default meta;

const ITENS: ChecklistItem[] = [
  { item: "Tokens importados antes de qualquer componente", feito: true },
  { item: "Fontes servidas: Manrope e JetBrains Mono", feito: true },
  { item: "Toggle de tema ligado no provider", feito: false },
  { item: "Contraste conferido no claro e no escuro", feito: false },
];

// a lista guarda o estado no render, entao nao passa args
export const Lista: StoryObj = {
  render: function Lista() {
    const [itens, setItens] = useState(ITENS);

    return (
      <Card className="max-w-md">
        {itens.map((it) => (
          <ItemCheck
            key={it.item}
            item={it}
            onToggle={() =>
              setItens((atual) =>
                atual.map((x) =>
                  x.item === it.item ? { ...x, feito: !x.feito } : x,
                ),
              )
            }
          />
        ))}
      </Card>
    );
  },
};
