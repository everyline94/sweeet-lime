# sweeet-lime

O design system da lima. As cores têm nome próprio (canvas, folha, trilho, tinta,
risco, lima) e tudo sai de um arquivo só, `styles/tokens.css`. Trocar uma linha lá
muda todo projeto que consome. A regra dura: a lima é preenchimento, nunca texto, e o
que escreve em cima dela é sempre `sobre-lima`, que não muda entre claro e escuro.

Extraído de um app interno, que segue sendo a implementação de referência.

## Como um projeto novo consome

O registry do shadcn é a porta principal: o consumidor recebe o código, não um binário.
Ele está no ar em <https://sweeet-lime.vercel.app>, então não precisa de nada rodando
na sua máquina.

1. No projeto que vai consumir, rode `npx shadcn@latest init -b base -p nova`.
2. Instale direto pela URL:
   `npx shadcn@latest add https://sweeet-lime.vercel.app/r/botao.json`. Vêm juntos os
   tokens, o Button e as duas fontes.
3. Se for pegar várias peças, registre o namespace no `components.json` do projeto:
   `"registries": { "@sweeet-lime": "https://sweeet-lime.vercel.app/r/{name}.json" }`.
   Aí é `npx shadcn@latest add @sweeet-lime/blocos`, e assim por diante.
4. No CSS da aplicação (o `app/globals.css`), deixe a primeira linha ser
   `@import "../styles/tokens.css";`. Ela já traz o Tailwind, o tw-animate-css e a
   ponte pro shadcn. Nada pode vir antes.

Pra desenvolver o sistema, o registry local ainda existe: `npm run registry:build &&
npm run registry:serve` sobe em :4000 e o consumidor aponta pra lá em vez da Vercel.

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
| `button`, `tooltip`, `input`, `textarea`, `dialog`, `alert-dialog`, `skeleton`, `label`, `separator`, `popover`, `select`, `dropdown-menu`, `avatar`, `breadcrumb`, `button-group`, `input-group`, `scroll-area`, `combobox`, `command` | registry puro | pode |
| `badge`, `card`, `sheet`, `table`, `checkbox`, `tabs`, `field`, `switch`, `alert`, `kbd`, `progress`, `radio-group`, `pagination`, `toggle`, `toggle-group`, `input-otp` | nossos | nunca: apaga a marca |

Na dúvida, `npm run ui:diff -- <componente>` antes de encostar.
