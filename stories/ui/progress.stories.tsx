import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

/**
 * A barra de progresso e o filete do sistema: indicador em lima sobre
 * trilho de muted (o mesmo desenho da receita do trilho). O valor ja vem
 * em tabular-nums do registry.
 */
const meta = {
  title: "UI/Progress",
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComRotulo: Story = {
  name: "Com rótulo",
  render: () => (
    <div className="folha w-96 p-5">
      <Progress value={64}>
        <ProgressLabel>Confirmações de amanhã</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
};

export const Solta: Story = {
  render: () => (
    <div className="folha w-96 p-5">
      <Progress value={30} />
    </div>
  ),
};
