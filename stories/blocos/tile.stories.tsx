import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tile } from "@/components/blocos";

/**
 * O stat card: numero grande, chip de fonte no canto (de onde aquele numero
 * saiu), rotulo e um detalhe opcional. O `tom` so pinta o numero, nunca o
 * fundo.
 */
const meta = {
  title: "Blocos/Stat card",
  component: Tile,
  parameters: { layout: "padded" },
  argTypes: {
    tom: { control: "select", options: [undefined, "success", "warning", "danger"] },
  },
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    num: "4.81:1",
    cap: "contraste da tinta fraca sobre o canvas",
    chip: "medido",
    detalhe: "Todo token de texto passa AA nos dois temas, conferido no claro e no escuro.",
  },
};

// as duas de baixo montam a grade no render, sem args: StoryObj solto
export const Tons: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-3">
      <Tile num="17" cap="componentes no catálogo" chip="código" tom="success" />
      <Tile num="3" cap="peças sem story" chip="dívida" tom="warning" />
      <Tile num="1.09:1" cap="folha sobre canvas no escuro" chip="risco" tom="danger" />
      <Tile num="#e6f87f" cap="a lima, a mesma nos dois temas" chip="token" />
    </div>
  ),
};

export const Mini: StoryObj = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      <Tile mini num={13} cap="cores com nome" />
      <Tile mini num={7} cap="degraus de tipo" />
      <Tile mini num={2} cap="temas" tom="danger" />
    </div>
  ),
};
