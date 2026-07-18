import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA VAZIO v1: o estado vazio com dignidade. Em vez de um aviso
 * apagado, o conteudo futuro vira capitulo anunciado: borda tracejada,
 * numero grande em mono, chip "em breve" de lima e o ritual numerado do que
 * acontece quando o conteudo chegar.
 */
const meta = {
  title: "Receitas/Vazio",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const CapituloAnunciado: StoryObj = {
  name: "Capítulo anunciado",
  render: () => (
    <div className="vz-card">
      <div className="vz-topo">
        <span className="vz-num">02</span>
        <h4 className="vz-titulo">Dia 2</h4>
        <span className="vz-chip">em breve</span>
      </div>
      <p className="vz-lede">Quando a aula sair, o ritual é este:</p>
      <ol className="vz-ritual">
        <li>Colar o resumo em <code>dia-02/resumo.md</code></li>
        <li>Baixar vídeo e transcrição para <code>dia-02/</code></li>
        <li>Aprofundar o resumo cruzando com a transcrição</li>
        <li>Rodar <code>.venv/bin/python gerar.py</code></li>
      </ol>
    </div>
  ),
};

export const ChipMini: StoryObj = {
  name: "Chip mini",
  render: () => (
    <div className="flex items-center gap-3">
      <span className="vz-chip">em breve</span>
      <span className="vz-chip mini">em breve</span>
    </div>
  ),
};
