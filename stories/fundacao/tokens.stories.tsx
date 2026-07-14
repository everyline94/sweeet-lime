import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * A fundacao do sweeet-lime: as cores com nome proprio e a escala de tipo.
 * Tudo aqui sai de `styles/tokens.css`, que e a fonte unica. Trocar uma linha
 * la muda todo consumidor, e muda esta pagina junto.
 *
 * Troque o tema na barra de cima: a regra e que a lima nao muda entre claro
 * e escuro, e por isso o texto sobre ela (sobre-lima) tambem nao muda.
 */
const meta = {
  title: "Fundação/Tokens",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

const CORES = [
  { nome: "canvas", classe: "bg-canvas", uso: "o fundo. cinza esverdeado, nunca branco" },
  { nome: "folha", classe: "bg-folha", uso: "onde o conteudo mora: o card, o documento" },
  { nome: "trilho", classe: "bg-trilho", uso: "a barra lateral. escura nos dois temas" },
  { nome: "tinta", classe: "bg-tinta", uso: "todo texto" },
  { nome: "tinta-fraca", classe: "bg-tinta-fraca", uso: "legenda, rotulo, secundario" },
  { nome: "risco", classe: "bg-risco", uso: "toda borda" },
  { nome: "lima", classe: "bg-lima", uso: "marcacao e preenchimento. NUNCA texto" },
  { nome: "sobre-lima", classe: "bg-sobre-lima", uso: "o texto quando o fundo e lima" },
  { nome: "alerta", classe: "bg-alerta", uso: "perigo e aviso forte" },
  { nome: "sobre-alerta", classe: "bg-sobre-alerta", uso: "o texto quando o fundo e alerta" },
  { nome: "ok", classe: "bg-ok", uso: "o verde do placar" },
  { nome: "atencao", classe: "bg-atencao", uso: "o ambar do placar" },
];

export const Cores: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {CORES.map((c) => (
        <div key={c.nome} className="flex items-center gap-3">
          <span
            className={`border-risco size-11 flex-none rounded-lg border ${c.classe}`}
          />
          <div className="min-w-0">
            <div className="font-mono text-xs font-bold">{c.nome}</div>
            <div className="text-tinta-fraca text-[12px] [text-wrap:pretty]">
              {c.uso}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Tipografia: StoryObj = {
  render: () => (
    <div className="space-y-5">
      <div>
        <div className="text-display">Sweeet Lime</div>
        <code className="text-tinta-fraca text-xs">text-display</code>
      </div>
      <div>
        <div className="text-h2 font-extrabold">A cor que marca, nunca a que escreve</div>
        <code className="text-tinta-fraca text-xs">text-h2</code>
      </div>
      <div>
        <div className="text-lede text-tinta-fraca">
          Um punhado de nomes proprios: canvas, folha, trilho, tinta, risco, lima.
        </div>
        <code className="text-tinta-fraca text-xs">text-lede</code>
      </div>
      <div>
        <div className="text-corpo">
          O corpo de texto dos documentos, no tamanho de leitura.
        </div>
        <code className="text-tinta-fraca text-xs">text-corpo</code>
      </div>
      <div>
        <div className="text-ui">O texto da interface: item de lista, botão, campo.</div>
        <code className="text-tinta-fraca text-xs">text-ui</code>
      </div>
      <div>
        <div className="text-rotulo text-tinta-fraca uppercase">Precisa de ação hoje</div>
        <code className="text-tinta-fraca text-xs">text-rotulo</code>
      </div>
      <div>
        <div className="text-mono font-mono">--lima: #e6f87f</div>
        <code className="text-tinta-fraca text-xs">font-mono / text-mono</code>
      </div>
    </div>
  ),
};
