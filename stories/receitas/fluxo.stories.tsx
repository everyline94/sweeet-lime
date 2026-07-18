import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA FLUXO v1: o diagrama que aposenta o ASCII. Classes direto do
 * `tokens.css`, sem componente React: e assim que uma pagina gerada por
 * script consome. Card de canvas, nos de folha, setas com rotulo em mono.
 * No estreito (ate 700px) o fluxo empilha na vertical.
 */
const meta = {
  title: "Receitas/Fluxo",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const TresNos: StoryObj = {
  name: "Três nós",
  render: () => (
    <div className="fx-card">
      <p className="fx-titulo">Swarm · a imagem da aula</p>
      <div className="fx-fluxo">
        <div className="fx-no">
          <span className="fx-nome">Humanos</span>
          <span className="fx-papel">Julgamento e escolhas</span>
          <span className="fx-modos">Líder · Colaborador</span>
        </div>
        <div className="fx-seta">
          <span className="fx-rotulo"></span>
          <span className="fx-linha"></span>
        </div>
        <div className="fx-no">
          <span className="fx-nome">IAs</span>
          <span className="fx-papel">Inteligência</span>
          <span className="fx-modos">Assistentes (chatbot) · Agentes de IA (autonomia)</span>
        </div>
        <div className="fx-seta">
          <span className="fx-rotulo">hooks</span>
          <span className="fx-linha"></span>
        </div>
        <div className="fx-no">
          <span className="fx-nome">Scripts</span>
          <span className="fx-papel">Execução determinística</span>
          <span className="fx-modos">Scripts e rotinas</span>
        </div>
      </div>
    </div>
  ),
};

export const Pilulas: StoryObj = {
  name: "Pílulas",
  render: () => (
    <div className="fx-card">
      <div className="fx-pills">
        <span className="fx-pill">Quando X acontecer</span>
        <span className="fx-pillseta" aria-hidden="true">&rarr;</span>
        <span className="fx-pill">execute Y</span>
      </div>
      <div className="fx-pills">
        <span className="fx-pill">Todos os dias, às 3h</span>
        <span className="fx-pillseta" aria-hidden="true">&rarr;</span>
        <span className="fx-pill">execute o script</span>
      </div>
    </div>
  ),
};

export const PainelMono: StoryObj = {
  name: "Painel mono",
  render: () => (
    <div className="fx-mono">
      <pre>{"mesma entrada + mesmas regras = mesmo resultado"}</pre>
    </div>
  ),
};
