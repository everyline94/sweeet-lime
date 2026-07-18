import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@/components/ui/checkbox";

/**
 * O controle de formulario (o item de lista com check e o Checklist, em
 * Padroes). A caixa marcada e lima com o check em sobre-lima, que nao muda
 * entre claro e escuro. A borda desmarcada e a borda de controle
 * (risco-forte), a mesma do input.
 */
const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Estados: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <label className="flex items-center gap-2 text-ui">
        <Checkbox /> livre
      </label>
      <label className="flex items-center gap-2 text-ui">
        <Checkbox defaultChecked /> marcado
      </label>
      <label className="flex items-center gap-2 text-ui">
        <Checkbox indeterminate /> parcial
      </label>
      <label className="text-tinta-fraca flex items-center gap-2 text-ui">
        <Checkbox disabled defaultChecked /> travado
      </label>
    </div>
  ),
};

export const NumaLista: Story = {
  name: "Numa lista",
  render: () => (
    <div className="folha w-80 p-5">
      <p className="text-rotulo text-tinta-fraca mb-3 uppercase">
        Fechamento do dia
      </p>
      <div className="space-y-2.5">
        <label className="flex items-center gap-2.5 text-ui">
          <Checkbox defaultChecked /> Confirmar agenda de amanhã
        </label>
        <label className="flex items-center gap-2.5 text-ui">
          <Checkbox defaultChecked /> Conferir sinais recebidos
        </label>
        <label className="flex items-center gap-2.5 text-ui">
          <Checkbox /> Reagendar faltas de hoje
        </label>
      </div>
    </div>
  ),
};
