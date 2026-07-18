import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Skeleton } from "@/components/ui/skeleton";

/**
 * O fantasma de carregamento. Registry puro: o pulso sai do muted, que a
 * ponte de tokens ja traduz pro degrau de tinta sobre o canvas, nos dois
 * temas. Nunca lima: carregar nao e marcacao.
 */
const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinhaDeTabela: Story = {
  name: "Linha de tabela",
  render: () => (
    <div className="folha w-[560px] max-w-full space-y-3 p-5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  ),
};

export const Cartao: Story = {
  name: "Cartão",
  render: () => (
    <div className="folha w-72 space-y-3 p-5">
      <Skeleton className="size-11 rounded-xl" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  ),
};
