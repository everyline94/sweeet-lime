import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Separator } from "@/components/ui/separator";

/**
 * A hairline em risco, sobre Base UI. Entrou de carona como dependencia do
 * field na leva um; a story chegou na leva tres. Horizontal e vertical.
 */
const meta = {
  title: "UI/Separator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Direcoes: Story = {
  name: "Direções",
  render: () => (
    <div className="folha w-80 p-5">
      <p className="text-ui font-semibold">Tela do dia</p>
      <p className="text-tinta-fraca text-ui">Quem vem, quem confirmou, quem pagou.</p>
      <Separator className="my-3" />
      <div className="flex h-5 items-center gap-3 text-ui">
        <span>Dia</span>
        <Separator orientation="vertical" />
        <span>Semana</span>
        <Separator orientation="vertical" />
        <span>Histórico</span>
      </div>
    </div>
  ),
};
