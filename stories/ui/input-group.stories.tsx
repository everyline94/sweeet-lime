import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

/**
 * O campo com prefixo ou sufixo. Registry puro na estrutura; o criterio da
 * casa entra no uso: valor e coluna, entao o campo de dinheiro digita em
 * tabular-nums.
 */
const meta = {
  title: "UI/InputGroup",
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dinheiro: Story = {
  render: () => (
    <div className="folha w-80 p-5">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>R$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          placeholder="0,00"
          inputMode="decimal"
          className="tabular-nums"
        />
      </InputGroup>
    </div>
  ),
};
