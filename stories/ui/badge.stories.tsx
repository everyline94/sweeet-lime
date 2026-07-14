import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/components/ui/badge";

/**
 * NOSSO Badge, nao o do registry: as variantes lima, ok, atencao e alerta
 * sao do placar do DS e nao existem no shadcn. Um
 * `ui:add badge --overwrite` apaga tudo isso. Nunca rode.
 *
 * O default e `neutro` (nao `default`), porque o selo mais comum na tela e o
 * discreto.
 */
const meta = {
  title: "UI/Badge",
  component: Badge,
  args: { children: "rascunho" },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutro", "default", "lima", "ok", "atencao", "alerta", "contorno"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const Variantes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="neutro">neutro</Badge>
      <Badge variant="default">default</Badge>
      <Badge variant="lima">lima</Badge>
      <Badge variant="ok">ok</Badge>
      <Badge variant="atencao">atenção</Badge>
      <Badge variant="alerta">alerta</Badge>
      <Badge variant="contorno">contorno</Badge>
    </div>
  ),
};

/** Como um fluxo usa: o estado do item vira cor. */
export const NoFluxo: Story = {
  name: "No fluxo",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="neutro">rascunho</Badge>
      <Badge variant="lima">em revisão</Badge>
      <Badge variant="atencao">parado há 3 dias</Badge>
      <Badge variant="alerta">vence em 2 dias</Badge>
      <Badge variant="ok">publicado</Badge>
    </div>
  ),
};
