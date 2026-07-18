import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect } from "react";

import { Prompt } from "@/components/prompt";

/**
 * O prompt copiavel: a RECEITA PROMPT v1 vestida de React. O clique copia
 * numa cascata de tres degraus, porque iframe com sandbox nega a API e o
 * botao nao pode falhar mudo: clipboard.writeText com catch, execCommand
 * conferindo o retorno, e no ultimo degrau o texto se seleciona sozinho e
 * o rotulo vira "Copia com cmd+C". Teste o clique nas duas primeiras
 * stories; a terceira simula o sandbox negando tudo.
 */
const meta = {
  title: "Padrões/Prompt",
  component: Prompt,
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

/* Nega os dois primeiros degraus enquanto a story esta montada, como um
   iframe com sandbox faria, e devolve tudo no unmount. Clique no botao:
   o texto se seleciona em lima e o rotulo pede o atalho. */
function SandboxNegado() {
  useEffect(() => {
    const writeOriginal = navigator.clipboard?.writeText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText = () =>
        Promise.reject(new Error("negado pelo sandbox"));
    }
    const execOriginal = document.execCommand;
    document.execCommand = () => false;
    return () => {
      if (navigator.clipboard && writeOriginal) {
        navigator.clipboard.writeText = writeOriginal;
      }
      document.execCommand = execOriginal;
    };
  }, []);

  return (
    <Prompt rotulo="Prompt · Sem clipboard">
      Num iframe com sandbox a API é negada. Clique em Copiar: este texto se
      seleciona sozinho e o botão passa a pedir o atalho.
    </Prompt>
  );
}

export const SemClipboard: Story = {
  name: "Sem clipboard (o terceiro degrau)",
  render: () => <SandboxNegado />,
};
