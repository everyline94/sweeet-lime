import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * A area de rolagem com a barra do sistema. Registry puro: a barra sai da
 * ponte, o conteudo e de quem consome.
 */
const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const PACIENTES = [
  "Ana Sousa", "Bruna Lima", "Carlos Prado", "Diego Farias", "Elisa Ramos",
  "Fábio Nunes", "Gabriela Reis", "Heitor Alves", "Iara Campos", "João Pedro",
  "Karen Duarte", "Luan Castro", "Marina Dias", "Nina Barros", "Otávio Melo",
];

export const ListaLonga: Story = {
  name: "Lista longa",
  render: () => (
    <div className="folha w-72 p-4">
      <p className="text-rotulo text-tinta-fraca mb-2 uppercase">Pacientes</p>
      <ScrollArea className="h-48">
        <ul className="space-y-1 pr-3">
          {PACIENTES.map((p) => (
            <li key={p} className="border-risco border-b py-1.5 text-ui last:border-0">
              {p}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  ),
};
