import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * O menu de acoes, sobre Base UI. Registry puro: popup em folha, item
 * destacado em lima com sobre-lima (a semantica do ::selection), acao
 * destrutiva em alerta e atalho em mono pela ponte. O caso tipico e o menu
 * de linha da tabela.
 */
const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AcoesDeLinha: Story = {
  name: "Ações de linha",
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Ações</Button>} />
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Consulta das 09:15</DropdownMenuLabel>
        <DropdownMenuItem>
          Remarcar
          <DropdownMenuShortcut>R</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Cobrar sinal</DropdownMenuItem>
        <DropdownMenuItem>Abrir no WhatsApp</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Cancelar consulta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
