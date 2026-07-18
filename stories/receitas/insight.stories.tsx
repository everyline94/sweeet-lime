import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA INSIGHT v1: hierarquia pro que importa, em tres degraus. O
 * destaque comum leva filete de lima; a nota rebaixa o filete pra
 * risco-forte; o insight principal ganha o card de lima cheia, com o texto
 * sempre em sobre-lima, que nao muda entre claro e escuro porque a lima
 * tambem nao muda.
 */
const meta = {
  title: "Receitas/Insight",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const Destaque: StoryObj = {
  render: () => (
    <div className="in-marca">
      <span className="in-rotulo">Insight</span>
      <p>Um assistente responde a comandos. Um agente persegue objetivos.</p>
    </div>
  ),
};

export const Nota: StoryObj = {
  render: () => (
    <div className="in-marca nota">
      <span className="in-rotulo">Nota</span>
      <p>
        Durante a aula ele numerou Memória como sete, antes de inserir Saída
        no slide-resumo final.
      </p>
    </div>
  ),
};

export const InsightPrincipal: StoryObj = {
  name: "Insight principal",
  render: () => (
    <div className="in-lima">
      <span className="in-rotulo">Insight principal do capítulo</span>
      <p>
        Não use IA para executar o que um script consegue garantir. Use IA
        para decidir quando, por que e qual script deve ser executado.
      </p>
    </div>
  ),
};
