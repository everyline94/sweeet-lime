import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

/**
 * A busca com digitacao, sobre Base UI. Registry puro: campo na borda de
 * controle, popup em folha, destacado em lima com sobre-lima (a semantica
 * do ::selection). O caso tipico e achar paciente pelo nome.
 */
const meta = {
  title: "UI/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const PACIENTES = [
  "Ana Sousa",
  "Bruna Lima",
  "Carlos Prado",
  "Gabriela Reis",
  "João Pedro",
  "Marina Dias",
];

export const BuscaDePaciente: Story = {
  name: "Busca de paciente",
  render: () => (
    <div className="folha w-80 p-5">
      <Combobox items={PACIENTES}>
        <ComboboxInput placeholder="Buscar paciente..." />
        <ComboboxContent>
          <ComboboxEmpty>Nenhum paciente com esse nome.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};
