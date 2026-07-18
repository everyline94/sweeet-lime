import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA COLUNA v1: a coluna de leitura de quem consome so o CSS, sem o
 * componente Pagina. O conteudo centra no palco com `margin-inline: auto`,
 * a medida fecha em 860px (1240px na variante `larga`) e a prosa em
 * `doc-md` completa com os 68ch por linha. E a correcao do diagnostico 01
 * do swarm: pagina gerada por script nunca mais nasce colada na esquerda.
 * O palco desta story e mais estreito que a medida, entao aqui o que se ve
 * e o centramento; os 860px valem na tela larga de verdade.
 */
const meta = {
  title: "Receitas/Coluna",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const ComProsa: StoryObj = {
  name: "Com prosa",
  render: () => (
    <div className="co-pagina">
      <div className="folha doc-md p-6">
        <h2>A coluna respira no centro do palco</h2>
        <p>
          Antes, a coluna tinha largura máxima mas não tinha margem
          automática: o conteúdo grudava na esquerda e sobrava um vazio à
          direita. Com a receita, o contêiner centra sozinho e a linha de
          texto para nos 68 caracteres.
        </p>
        <p>
          Quem está em React usa o componente <code>Pagina</code> de
          blocos; quem gera HTML por script usa esta classe e pronto.
        </p>
      </div>
    </div>
  ),
};

export const Larga: StoryObj = {
  render: () => (
    <div className="co-pagina larga">
      <div className="folha doc-md p-6">
        <p>
          A variante <code>larga</code> abre a medida pra 1240px: é a da
          tela de painel, com tiles e tabelas, não a de leitura.
        </p>
      </div>
    </div>
  ),
};
