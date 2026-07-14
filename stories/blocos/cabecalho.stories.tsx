import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cabecalho } from "@/components/blocos";
import { Button } from "@/components/ui/button";

/**
 * O cabecalho de toda tela: titulo em display, lede em tinta fraca e as
 * acoes a direita. E o que da a mesma cara pra todas as views de um produto.
 */
const meta = {
  title: "Blocos/Cabeçalho",
  component: Cabecalho,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Cabecalho>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    titulo: "Fundação",
    lede: "As cores com nome proprio, a escala de tipo e a ponte pro shadcn: tudo sai de um arquivo so, e trocar uma linha la muda o produto inteiro.",
  },
};

export const ComAcao: Story = {
  name: "Com ação",
  args: {
    titulo: "Componentes",
    lede: "Oito do registry e nove proprios. Peça nova só entra com story junto.",
    acoes: (
      <Button className="bg-lima text-sobre-lima hover:bg-lima/85">
        Adicionar peça
      </Button>
    ),
  },
};

export const SoTitulo: Story = {
  name: "Só título",
  args: { titulo: "Catálogo" },
};
