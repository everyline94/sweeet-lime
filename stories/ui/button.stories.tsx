import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BotaoLima } from "@/components/botao";
import { Button } from "@/components/ui/button";

/**
 * O Button do shadcn (estilo base-nova, sobre Base UI), tematizado pelos
 * tokens do DS. Arquivo igual ao do registry: nao editar na mao, so
 * atualizar com `npm run ui:add -- button --overwrite`.
 *
 * A acao primaria do produto e o `BotaoLima` (components/botao.tsx): o
 * Button vestindo a pill lima, com altura unica (h-8). E a UNICA receita
 * de acao em lima; nao recriar na mao nas views.
 */
const meta = {
  title: "UI/Button",
  component: Button,
  args: { children: "Publicar" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const Variantes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primário</Button>
      <Button variant="outline">Contorno</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="ghost">Fantasma</Button>
      <Button variant="destructive">Perigo</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Tamanhos: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="default">default</Button>
      <Button size="lg">lg</Button>
    </div>
  ),
};

/** A ação primária das views: fundo lima, texto sempre sobre-lima. */
export const AcaoEmLima: Story = {
  name: "Ação em lima (BotaoLima)",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <BotaoLima>Publicar</BotaoLima>
      <BotaoLima size="xs">chip ativo</BotaoLima>
    </div>
  ),
};
