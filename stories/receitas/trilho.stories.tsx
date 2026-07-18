import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA TRILHO v1: a navegacao com progresso visivel. O filete de lima
 * acompanha o scroll (a largura e do consumidor), o item de trilho carrega
 * ponto lido e estado ativo, e a pilula abre o glossario. O texto sobre o
 * trilho usa `sobre-trilho` e `sobre-trilho-fraca`, que nao mudam entre os
 * temas porque o trilho e escuro nos dois. O item de termo mora na folha
 * (a gaveta e o sheet do registry), por isso fala em tinta e risco.
 */
const meta = {
  title: "Receitas/Trilho",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const Filete: StoryObj = {
  render: () => (
    <div className="tr-filete" style={{ position: "relative" }}>
      <i style={{ width: "44%" }} />
    </div>
  ),
};

export const Itens: StoryObj = {
  name: "Itens com ponto lido",
  render: () => (
    <div className="tr-raiz w-72 rounded-2xl p-5">
      <div className="tr-grupo">
        <p className="tr-dia">Dia 1</p>
        <ul className="tr-lista">
          <li>
            <a className="tr-item lido" href="#" onClick={(e) => e.preventDefault()}>
              <span className="tr-ponto" aria-hidden="true"></span>
              <span className="tr-rotulo">
                <span className="tr-curto">Cap. 1</span>
                <span className="tr-resto">Humanos, IAs, Scripts e Orquestração</span>
              </span>
            </a>
          </li>
          <li>
            <a className="tr-item lido ativo" href="#" onClick={(e) => e.preventDefault()}>
              <span className="tr-ponto" aria-hidden="true"></span>
              <span className="tr-rotulo">
                <span className="tr-curto">Cap. 2</span>
                <span className="tr-resto">Os três níveis de automação</span>
              </span>
            </a>
          </li>
          <li>
            <a className="tr-item" href="#" onClick={(e) => e.preventDefault()}>
              <span className="tr-ponto" aria-hidden="true"></span>
              <span className="tr-rotulo">
                <span className="tr-curto">Cap. 3</span>
                <span className="tr-resto">Primeiros princípios</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <button className="tr-pilula" type="button">
        Glossário <kbd>g</kbd>
      </button>
    </div>
  ),
};

export const Termos: StoryObj = {
  name: "Termos (na folha)",
  render: () => (
    <div className="folha max-w-sm p-5">
      <div className="tr-termo">
        <span className="tr-cap">Cap. 1</span>
        <b>Hook</b>
        <p>Gatilho por evento: quando X acontecer, execute Y.</p>
      </div>
      <div className="tr-termo">
        <span className="tr-cap">Cap. 1</span>
        <b>Cron job</b>
        <p>Tarefa agendada por tempo, não por evento.</p>
      </div>
    </div>
  ),
};
