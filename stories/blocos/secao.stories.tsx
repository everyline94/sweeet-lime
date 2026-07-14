import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card, KV, Sec, Vazio } from "@/components/blocos";
import { Badge } from "@/components/ui/badge";

/**
 * A secao: rotulo em caixa alta, dica (ou acao) a direita e o conteudo
 * embaixo, quase sempre um Card. E o esqueleto de toda view.
 */
const meta = {
  title: "Blocos/Seção",
  component: Sec,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Sec>;

export default meta;

// stories de composicao montam a secao inteira no render, entao nao passam
// args: o StoryObj solto e o tipo certo pra elas.
export const ComCard: StoryObj = {
  name: "Com card",
  render: () => (
    <Sec titulo="Precisa de ação hoje" dica="4 itens na lista">
      <Card>
        <div className="border-risco flex items-start gap-3 border-b py-3 first:pt-0.5">
          <div className="min-w-0 flex-1">
            <b className="text-ui font-bold">Contraste do badge de atenção</b>
            <span className="text-tinta-fraca mt-0.5 block text-[12.5px]">
              o tom /12 sobre a folha ficou no limite: remedir no escuro
            </span>
          </div>
          <Badge variant="atencao">revisar</Badge>
        </div>
        <KV k="Contraste medido" v="4.84:1" />
        <KV k="Mínimo exigido" v="4.5:1" />
      </Card>
    </Sec>
  ),
};

export const Vazia: StoryObj = {
  render: () => (
    <Sec titulo="Precisa de ação hoje">
      <Card>
        <Vazio>Nada na fila. Vai construir.</Vazio>
      </Card>
    </Sec>
  ),
};
