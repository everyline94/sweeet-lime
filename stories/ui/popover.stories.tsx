import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

/**
 * A casca de popup do sistema, sobre Base UI. Registry puro: folha, anel de
 * risco e a sombra que muda no escuro, tudo pela ponte. E a base visual que
 * select e dropdown-menu reutilizam; o date picker vai compor com ela.
 */
const meta = {
  title: "UI/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DetalheDoPaciente: Story = {
  name: "Detalhe do paciente",
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Carlos Prado</Button>} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Carlos Prado</PopoverTitle>
          <PopoverDescription>
            Canal às 09:15, sinal de R$ 95,00 pago. Última consulta em
            março, sem faltas no histórico.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};
