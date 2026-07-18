import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Prompt } from "@/components/prompt";

/**
 * O prompt copiavel: a RECEITA PROMPT v1 vestida de React. O visual mora no
 * `tokens.css`; o componente poe o clique em cima (clipboard com fallback e
 * o estado Copiado por dois segundos). O botao e a pilula lima com o texto
 * em sobre-lima, a regra dura do sistema. O clique aqui funciona: teste.
 */
const meta = {
  title: "Padrões/Prompt",
  component: Prompt,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Prompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exemplo: Story = {
  args: {
    rotulo: "Prompt · Exemplo 4 · Leads",
    children:
      "Tenho um estúdio de implementação de IA, então eu implemento automações, crio agentes personalizados e ajudo empresas a implementarem IA nos seus negócios. Busque uma lista de 5 leads em Belo Horizonte, filtre e qualifique eles para que eu saiba com quais preciso entrar em contato primeiro.",
  },
};

export const Curto: Story = {
  args: {
    rotulo: "Template · Próximos dias",
    children: "Colar o resumo, baixar o vídeo e rodar gerar.py.",
  },
};
