# sweeet-lime

O design system da lima. As cores têm nome próprio (canvas, folha, trilho, tinta,
risco, lima) e tudo sai de um arquivo só, `styles/tokens.css`. Trocar uma linha lá
muda todo projeto que consome. A regra dura: a lima é preenchimento, nunca texto, e o
que escreve em cima dela é sempre `sobre-lima`, que não muda entre claro e escuro.

Extraído de um app interno, que segue sendo a implementação de referência.

## Como um projeto novo consome

O registry do shadcn é a porta principal: o consumidor recebe o código, não um binário.

1. Sirva o registry: `npm run registry:build && npm run registry:serve` (fica em :4000).
2. No projeto que vai consumir, rode `npx shadcn@latest init -b base -p nova`.
3. Aponte pro registry no `components.json` dele:
   `"registries": { "@sweeet-lime": "http://localhost:4000/r/{name}.json" }`
4. Instale o que quiser: `npx shadcn@latest add @sweeet-lime/botao`. Vêm juntos os
   tokens, o Button e as duas fontes.
5. No CSS da aplicação (o `app/globals.css`), deixe só a primeira linha:
   `@import "../styles/tokens.css";`. Ela já traz o Tailwind, o tw-animate-css e a
   ponte pro shadcn. Nada pode vir antes.

As fontes chegam sozinhas: os itens `manrope` e `jetbrains-mono` são do tipo
`registry:font`, então o `shadcn add` escreve o `next/font/google` no `layout.tsx` do
consumidor e pendura as variáveis no `<html>`. Em projeto que não é Next, importe as
duas do Google Fonts e defina `--font-manrope` e `--font-jetbrains` no `:root`, do
jeito que o `.storybook/fontes.css` faz aqui.

Quem preferir o import direto (sem registry) instala a pasta por caminho de arquivo ou
git e usa os `exports` do `package.json`: `sweeet-lime/tokens.css`, `sweeet-lime` e
`sweeet-lime/components/*`.

Uma pegadinha: o `tokens.css` faz `@import "shadcn/tailwind.css"`, então o pacote
`shadcn` precisa estar instalado como dependência, não só chamado por `npx`.

## O catálogo

```bash
npm run storybook          # o catálogo em :6006, claro e escuro em toda story
npm run build-storybook    # prova que compila, gera storybook-static/
npm run registry:build     # gera public/r/*.json
```

O Storybook é o lugar de descobrir que o componente quebra no escuro antes de descobrir
na página. Peça nova só entra com story junto. Pra abrir o `storybook-static/` na mão,
use um servidor que não corte o `.html` da URL (`python3 -m http.server` serve; o
`npx serve` com clean urls quebra o iframe e mostra "No Preview").

## A fronteira do shadcn

O `components.json` liga o CLI do shadcn (`style: base-nova`, que é Base UI e não Radix).
Nunca rode `shadcn init` aqui: ele reescreveria o `tokens.css` com os tokens genéricos
dele e mataria o sistema.

| Componente | Origem | `--overwrite` |
|---|---|---|
| `button`, `tooltip`, `input`, `textarea`, `dialog` | registry puro | pode |
| `badge`, `card`, `sheet` | nossos | nunca: apaga a marca |

Na dúvida, `npm run ui:diff -- <componente>` antes de encostar.
