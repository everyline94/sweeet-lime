import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Input e Textarea do registry (base-nova), tematizados pela ponte: a borda
 * de controle e o token `--risco-forte` (via `--color-input`), que passa 3:1
 * na folha e no canvas nos dois temas; o risco comum (1.34:1) e so pra borda
 * decorativa. Arquivos iguais aos do registry: atualizar com
 * `npm run ui:add -- input textarea --overwrite`, nunca editar na mao.
 */
const meta = {
  title: "UI/Input",
  component: Input,
  args: { placeholder: "Nome da clínica" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const Estados: Story = {
  render: () => (
    <div className="grid w-72 gap-3">
      <Input placeholder="Vazio" />
      <Input defaultValue="Clínica Sorriso" />
      <Input disabled placeholder="Desabilitado" />
      <Input aria-invalid placeholder="Inválido" />
    </div>
  ),
};

export const AreaDeTexto: Story = {
  name: "Textarea",
  render: () => (
    <div className="grid w-72 gap-3">
      <Textarea placeholder="Como deve responder..." />
      <Textarea disabled placeholder="Desabilitada" />
    </div>
  ),
};
