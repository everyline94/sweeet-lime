import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

/**
 * O seletor de visao. Item ativo e marcacao: lima com o texto em
 * sobre-lima (a regra vale tambem pro Toggle solto, que entrou de carona
 * e carrega o mesmo estilo).
 */
const meta = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visao: Story = {
  name: "Visão",
  render: () => (
    <ToggleGroup defaultValue={["dia"]} toggleMultiple={false}>
      <ToggleGroupItem value="dia">Dia</ToggleGroupItem>
      <ToggleGroupItem value="semana">Semana</ToggleGroupItem>
      <ToggleGroupItem value="mes">Mês</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Contorno: Story = {
  render: () => (
    <ToggleGroup defaultValue={["confirmadas"]} variant="outline">
      <ToggleGroupItem value="todas">Todas</ToggleGroupItem>
      <ToggleGroupItem value="confirmadas">Confirmadas</ToggleGroupItem>
      <ToggleGroupItem value="pagas">Pagas</ToggleGroupItem>
    </ToggleGroup>
  ),
};
