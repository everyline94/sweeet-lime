import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * O select, sobre Base UI. Registry puro: gatilho na borda de controle
 * (risco-forte, como o input), popup em folha, e o item destacado em lima
 * com texto sobre-lima, a mesma semantica do ::selection do sistema (o
 * destacado e o que o Enter escolhe).
 */
const meta = {
  title: "UI/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Procedimento: Story = {
  render: () => (
    <div className="folha w-80 p-5">
      <Select defaultValue="limpeza">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Procedimento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="avaliacao">Avaliação</SelectItem>
          <SelectItem value="limpeza">Limpeza</SelectItem>
          <SelectItem value="canal">Canal</SelectItem>
          <SelectItem value="extracao">Extração</SelectItem>
          <SelectItem value="clareamento" disabled>
            Clareamento (em breve)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
