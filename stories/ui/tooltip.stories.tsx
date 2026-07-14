import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * Registry puro (base-nova). Em uso no shell: o botao Sair do rodape da
 * sidebar troca o `title` nativo por este Tooltip.
 *
 * Como e igual ao registry, `npm run ui:add -- tooltip --overwrite`
 * atualiza sem perder nada.
 */
const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Gate do dia</Button>} />
        <TooltipContent>90% dos horários de hoje já confirmados</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
