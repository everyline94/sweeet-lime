import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Selo } from "@/components/marca";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * NOSSO Card, nao o do registry: o do shadcn traz sombra e borda propria,
 * este veste a classe `folha` do DS (a superficie onde o conteudo mora) e
 * assina o rodape em mono, do jeito que os cards de documento pedem.
 * Nao rode `ui:add card --overwrite`.
 */
const meta = {
  title: "UI/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <Selo tamanho="size-8" className="mb-2" />
        <CardTitle>O que o sistema entrega</CardTitle>
        <CardDescription>
          tokens, componentes e catálogo: uma linguagem só
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3" />
      <CardFooter>README.md</CardFooter>
    </Card>
  ),
};

/** O card de documento: rodapé assinando o arquivo que abre no drawer. */
export const CardDeDocumento: Story = {
  name: "Card de documento",
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>Regras inegociáveis</CardTitle>
          <Badge variant="lima">3 regras</Badge>
        </div>
        <CardDescription>
          a lima nunca é texto, o foco é sempre visível, contraste medido nos
          dois temas
        </CardDescription>
      </CardHeader>
      <CardContent className="text-tinta-fraca pb-3 text-ui [text-wrap:pretty]">
        As três decisões que não se renegociam por gosto nenhum.
      </CardContent>
      <CardFooter>DESIGN.md</CardFooter>
    </Card>
  ),
};
