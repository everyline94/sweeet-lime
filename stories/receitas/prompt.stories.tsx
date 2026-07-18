import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA PROMPT v1: o material reutilizavel ganha botao. Aqui e so o
 * visual, classes direto do `tokens.css`, como uma pagina gerada por script
 * consome; o clique fica por conta do consumidor. Quem esta em React usa o
 * componente Prompt (em Padroes/Prompt), que ja traz o comportamento.
 */
const meta = {
  title: "Receitas/Prompt",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const Card: StoryObj = {
  render: () => (
    <div className="pr-card">
      <div className="pr-topo">
        <span className="pr-rotulo">Prompt · Exemplo 4 · Leads</span>
        <button className="pr-copiar" type="button">Copiar</button>
      </div>
      <p className="pr-texto">
        Tenho um estúdio de implementação de IA. Busque uma lista de 5 leads
        em Belo Horizonte, filtre e qualifique eles para que eu saiba com
        quais preciso entrar em contato primeiro.
      </p>
    </div>
  ),
};

export const Copiado: StoryObj = {
  name: "Estado copiado",
  render: () => (
    <div className="pr-card">
      <div className="pr-topo">
        <span className="pr-rotulo">Template · Próximos dias</span>
        <button className="pr-copiar" type="button" disabled>Copiado</button>
      </div>
      <p className="pr-texto">O botão desabilita por dois segundos após o clique.</p>
    </div>
  ),
};

export const SemClipboard: StoryObj = {
  name: "Sem clipboard",
  render: () => (
    <div className="pr-card">
      <div className="pr-topo">
        <span className="pr-rotulo">Prompt · Sem clipboard</span>
        <button className="pr-copiar" type="button">Copia com cmd+C</button>
      </div>
      <p className="pr-texto">
        O terceiro rótulo do vocabulário: quando a API e o execCommand
        falham, o consumidor seleciona o texto e o botão pede o atalho.
      </p>
    </div>
  ),
};
