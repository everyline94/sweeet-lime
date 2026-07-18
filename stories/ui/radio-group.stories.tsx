import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/**
 * A escolha exclusiva. Selecao e marcacao: o marcado e lima com o miolo em
 * sobre-lima, o mesmo par do checkbox. A borda livre e a de controle
 * (risco-forte).
 */
const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Duracao: Story = {
  name: "Duração",
  render: () => (
    <div className="folha w-80 p-5">
      <p className="text-rotulo text-tinta-fraca mb-3 uppercase">
        Duração da consulta
      </p>
      <RadioGroup defaultValue="45">
        <label className="flex items-center gap-2.5 text-ui">
          <RadioGroupItem value="30" /> 30 minutos
        </label>
        <label className="flex items-center gap-2.5 text-ui">
          <RadioGroupItem value="45" /> 45 minutos
        </label>
        <label className="flex items-center gap-2.5 text-ui">
          <RadioGroupItem value="60" /> 1 hora
        </label>
        <label className="text-tinta-fraca flex items-center gap-2.5 text-ui">
          <RadioGroupItem value="custom" disabled /> Personalizada (em breve)
        </label>
      </RadioGroup>
    </div>
  ),
};
