import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

/**
 * O grupo de botoes colados. Registry puro: bordas e cantos saem da ponte,
 * o separador e o risco.
 */
const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AcoesDaConsulta: Story = {
  name: "Ações da consulta",
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Remarcar</Button>
      <Button variant="outline">Cobrar</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Cancelar</Button>
    </ButtonGroup>
  ),
};
