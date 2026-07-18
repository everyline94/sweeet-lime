import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * RECEITA QUADROS v1: tabela vira card, nada rola de lado no celular.
 * Comparacao de dois lados vira versus, tabela de linhas vira um card por
 * linha, tabela de duas colunas vira pares com hairline e uma coluna de
 * valores curtos vira chips.
 */
const meta = {
  title: "Receitas/Quadros",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const Versus: StoryObj = {
  render: () => (
    <div className="qd-versus">
      <div className="qd-lado">
        <span className="qd-tag">IA</span>
        <ul>
          <li>"Esta imagem parece não seguir a proporção da identidade."</li>
          <li>
            <span className="qd-dim">Natureza</span>Trabalha com probabilidade
          </li>
          <li>Flexível</li>
        </ul>
      </div>
      <span className="qd-vs" aria-hidden="true">vs</span>
      <div className="qd-lado">
        <span className="qd-tag">Script</span>
        <ul>
          <li>"A imagem tem 1080 por 1350 px? A proporção é 4:5? Está em RGB?"</li>
          <li>
            <span className="qd-dim">Natureza</span>Trabalha com regras
          </li>
          <li>Confiável</li>
        </ul>
      </div>
    </div>
  ),
};

export const CardsDeLinha: StoryObj = {
  name: "Cards de linha",
  render: () => (
    <div className="qd-cards">
      <div className="qd-card">
        <span className="qd-num">01</span>
        <div className="qd-miolo">
          <p className="qd-titulo">Manuais</p>
          <div className="qd-campo">
            <span className="qd-rotulo">Quem dispara</span>
            <span className="qd-valor">Humano, nas duas pontas</span>
          </div>
        </div>
      </div>
      <div className="qd-card">
        <span className="qd-num">02</span>
        <div className="qd-miolo">
          <p className="qd-titulo">Assistidas</p>
          <div className="qd-campo">
            <span className="qd-rotulo">Quem dispara</span>
            <span className="qd-valor">Evento; humano aprova com evidências</span>
          </div>
        </div>
      </div>
      <div className="qd-card">
        <span className="qd-num">03</span>
        <div className="qd-miolo">
          <p className="qd-titulo">Automática</p>
          <div className="qd-campo">
            <span className="qd-rotulo">Quem dispara</span>
            <span className="qd-valor">Evento; ninguém aprova, você é notificado</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Pares: StoryObj = {
  render: () => (
    <div className="qd-pares">
      <div className="qd-par cabeca">
        <span className="qd-chave">Camada</span>
        <span className="qd-valor">Contribuição</span>
      </div>
      <div className="qd-par">
        <span className="qd-chave">Humanos</span>
        <span className="qd-valor">Intenção, qualidade e direção</span>
      </div>
      <div className="qd-par">
        <span className="qd-chave">IAs</span>
        <span className="qd-valor">Contexto, planejamento, escolha de ações</span>
      </div>
      <div className="qd-par">
        <span className="qd-chave">Scripts</span>
        <span className="qd-valor">Execução repetível com precisão</span>
      </div>
    </div>
  ),
};

export const Chips: StoryObj = {
  render: () => (
    <div className="qd-chips-grupo">
      <p className="qd-chips-titulo">Exemplos de gatilho</p>
      <div className="qd-chips">
        <span className="qd-chip">Clique de botão</span>
        <span className="qd-chip">Receber e-mail</span>
        <span className="qd-chip">Todo dia às 8</span>
        <span className="qd-chip">Novo cliente</span>
        <span className="qd-chip meta">Dia 1</span>
        <span className="qd-chip meta atencao">Em andamento</span>
      </div>
    </div>
  ),
};
