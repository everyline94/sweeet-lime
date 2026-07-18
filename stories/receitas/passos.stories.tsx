import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA PASSOS v1: o pipeline vertical que substitui os blocos ASCII com
 * seta pra baixo. Ponto de lima na linha do tempo, quem age em negrito, o
 * que faz em tinta fraca. A variante numerada troca o ponto pelo quadradinho
 * de lima com o numero em sobre-lima: a lima e preenchimento, nunca texto.
 */
const meta = {
  title: "Receitas/Passos",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const Pontos: StoryObj = {
  render: () => (
    <div className="fx-card">
      <p className="fx-titulo">A arquitetura completa</p>
      <ol className="pa-lista">
        <li>
          <span className="pa-quem">Humano</span>
          <span className="pa-oque">Define objetivo, critérios e limites</span>
        </li>
        <li>
          <span className="pa-quem">Agente de IA</span>
          <span className="pa-oque">Interpreta, planeja e toma decisões</span>
        </li>
        <li>
          <span className="pa-quem">Hook</span>
          <span className="pa-oque">Transforma uma decisão ou evento em execução</span>
        </li>
        <li>
          <span className="pa-quem">Script</span>
          <span className="pa-oque">Realiza a tarefa determinística</span>
        </li>
        <li>
          <span className="pa-quem">Humano</span>
          <span className="pa-oque">Avalia ou aprova quando necessário</span>
        </li>
      </ol>
    </div>
  ),
};

export const Numerada: StoryObj = {
  render: () => (
    <div className="fx-card">
      <ol className="pa-lista numerada">
        <li>
          <span className="pa-num">1</span>
          <span className="pa-quem">Algo acontece no sistema</span>
        </li>
        <li>
          <span className="pa-num">2</span>
          <span className="pa-quem">O hook identifica o acontecimento</span>
        </li>
        <li>
          <span className="pa-num">3</span>
          <span className="pa-quem">O hook chama um script</span>
        </li>
        <li>
          <span className="pa-num">4</span>
          <span className="pa-quem">O script executa a tarefa determinística</span>
        </li>
      </ol>
    </div>
  ),
};
