import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SeletorData } from "@/components/seletor-data";

/**
 * O date picker do sistema: popover + calendar + botao com a data em
 * tabular-nums. E a peca da tela de remarcar: escolheu o dia, o popover
 * fecha e o botao mostra a data. Sem value/onChange ele se controla
 * sozinho, como aqui.
 */
const meta = {
  title: "Padrões/SeletorData",
  component: SeletorData,
} satisfies Meta<typeof SeletorData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Remarcar: Story = {
  render: () => (
    <div className="folha flex items-center gap-3 p-5">
      <span className="text-ui">Remarcar para</span>
      <SeletorData placeholder="Escolher data" />
    </div>
  ),
};
