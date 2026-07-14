import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Marca, Selo } from "@/components/marca";

/**
 * O selo: a sigla dentro do quadrado lima. A regra dura do DS mora aqui,
 * o texto sobre a lima e sempre `sobre-lima`, que NAO muda entre claro e
 * escuro, porque a lima tambem nao muda.
 *
 * Nome, subtitulo e sigla entram por prop: a marca e de quem consome.
 * `clara` e a versao pro trilho (a barra escura nos dois temas).
 */
const meta = {
  title: "Padrões/Marca",
  component: Marca,
} satisfies Meta<typeof Marca>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NaFolha: Story = {
  name: "Na folha",
  args: { clara: false },
};

export const NoTrilho: Story = {
  name: "No trilho",
  render: () => (
    <div className="bg-trilho rounded-2xl p-5">
      <Marca clara />
    </div>
  ),
};

export const DeOutraMarca: Story = {
  name: "De outra marca",
  args: {
    nome: "Hub do Negócio",
    sub: "o cockpit numa tela",
    sigla: "H",
  },
};

export const Selos: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Selo tamanho="size-6" />
      <Selo tamanho="size-8" />
      <Selo />
      <Selo tamanho="size-12" />
    </div>
  ),
};
