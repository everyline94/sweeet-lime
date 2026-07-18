# todo: extração do sweeet-lime

## v1 (feito)

- [x] Ler o app de origem inteiro na ordem do brief (globals, configs, storybook,
      componentes, stories, layout e as decisões registradas)
- [x] `styles/tokens.css`: cópia integral do `hub/app/globals.css`
- [x] `lib/utils.ts` e os 8 componentes de `components/ui/`, byte a byte
- [x] Componentes próprios: blocos, botao, moldura, spinner, toast, tema, theme-provider
- [x] `checklist.tsx` e `marca.tsx` com desvio declarado (abaixo)
- [x] Catálogo: 15 títulos, 36 stories, categoria `padroes/` no lugar de `hub/`
- [x] `package.json` com `exports`, `components.json` com o namespace do registry
- [x] `registry.json` com 21 itens e `npx shadcn build` gerando `public/r/`
- [x] Storybook sobe, claro e escuro funcionam, `build-storybook` gera estático que abre
- [x] Prova de consumo: app scratch instalou `@sweeet-lime/botao` pelo registry e
      renderizou a lima `#e6f87f` com texto `#16181a`, na Manrope
- [x] a11y: axe rodado nas 36 stories nos dois temas, comparado com o original.
      Mesmo conjunto de violações, zero nova.
- [x] Publicar o registry: no ar em https://sweeet-lime.vercel.app, repo publico em
      github.com/everyline94/sweeet-lime. Provado com o app scratch instalando pela URL
      publica, sem servidor local no ar.

## Desvios em relação ao original (com motivo)

- `components/checklist.tsx`: o `import type { ChecklistItem } from "@/lib/dados"` saiu.
  O tipo nasce local, na forma mínima que o componente usa (`item` e `feito`). Motivo:
  `lib/dados.ts` é a camada de Supabase do hub, e os campos `id`, `secao` e `ordem` eram
  do banco dele. Sem isso o DS arrastaria o app junto.
- `components/marca.tsx`: `Selo` ganhou a prop `sigla` e `Marca` ganhou `nome`, `sub` e
  `sigla`, com default neutro. Motivo: o original cravava "Hub do Negócio" e o "H" no
  código. A marca é de quem consome, não do sistema. Estrutura e tokens intactos.
- `styles/tokens.css`: três comentários que citavam caminhos do app de origem
  (`hub/app/globals.css`, `demo/index.html`, `docs/direcao/`) passaram a citar o novo
  arquivo. Motivo: comentário que aponta pra arquivo inexistente é comentário mentindo.
  Nenhum token, seletor ou valor mudou.
- Stories: a copy de exemplo do app de origem (nome de produto, preço, nome de cliente)
  virou copy neutra sobre o próprio sistema. O código das stories não mudou, só os
  literais. A story do checklist perdeu os campos de banco no mock.
- `.storybook/preview.tsx`: import aponta pra `../styles/tokens.css` e o `storySort` fecha
  em "Padrões" no lugar de "Hub".

## Ficou de fora

- `components/auth.tsx`: importa `@/lib/supabase`. É gate de sessão, não é DS.
- `components/shell.tsx`: importa `next/link` e `usePathname`. Depende de rota.
- `lib/supabase.ts`, `lib/dados.ts`, `lib/use-dados.tsx`, `scripts/sync-docs.mjs`, e tudo
  em `app/` que não era o `globals.css`.
- Dependências `@supabase/supabase-js`, `@dnd-kit/*` e `marked`.

## v4: primeira leva do shadcn pro painel-cliente (corte aprovado no inventário)

- [x] `table` (nosso: th no padrão rótulo, hover tinta/5, tabular-nums)
- [x] `skeleton` (puro: o muted da ponte já resolve)
- [x] `checkbox` (nosso: marcado em lima com check sobre-lima, indeterminado com traço)
- [x] `tabs` (nosso: variante line com filete de lima vira default, pill continua)
- [x] `field` + `label` (label puro; field nosso: rótulo lc-campo, card de escolha em lima)
      Carona: `separator` entrou como dependência do field, sem story, puro
- [x] `alert-dialog` (puro: ponte veste tudo, destrutivo pela dupla alerta do Button)
- [x] Stories em `stories/ui/`, uma por item (menos separator), claro e escuro
- [x] `registry.json`, `index.ts` e a tabela de fronteira do README atualizados
- [x] `registry:build` no fim

Gate de consumo caiu (decisão do fechamento do kit): as levas entram em sequência.

## v5: leva dois

- [x] `popover`, `select`, `dropdown-menu` (puros: folha, borda de controle e o
      destacado em lima com sobre-lima saem da ponte; destacado = semântica do
      ::selection)
- [x] `switch` (nosso: ligado lima com polegar sobre-lima; desligado fica no
      risco-forte, conferido no claro: 3.81:1 na folha, 3.19:1 no canvas)
- [x] Stories, registry.json, index.ts, README, registry:build, commit

## v6: leva três

Critérios de aceite do fechamento: seleção é lima com texto/ícone sobre-lima
(radio, página ativa, toggle ativo, dia do calendar); aviso é atencao com filete
lateral, nunca lima; valores/horários/códigos em tabular-nums, mono em coluna.

- [x] Puros: avatar, breadcrumb, button-group, input-group, scroll-area,
      combobox, command (deps novas: cmdk, input-otp)
- [x] Nossos: alert (filete lateral atencao/alerta), kbd (mono), progress
      (indicador lima, o filete), radio-group (lima + sobre-lima), pagination
      (ativa lima, tabular-nums), toggle e toggle-group (ativo lima), input-otp
      (slots mono tabular-nums). Toggle entrou de carona do toggle-group.
- [x] Story de cada peça mais a do separator prometida; registry, index, README
- [x] registry:build, build-storybook, conferência visual (pagination escuro,
      alert claro), commit

## v7: calendar e date picker (react-day-picker entra aqui, e só aqui)

## v3: receitas do swarm (aprovadas no antes-depois.html do bootcamp)

- [x] Tokens `--sobre-trilho` e `--sobre-trilho-fraca` no `:root`, com ponte no
      `@theme inline`. Constantes, sem redeclaração no `.dark`: lógica do sobre-lima.
- [x] RECEITA COLUNA v1 (`co-pagina`, com variante `larga`): a coluna centrada pra
      consumo só-CSS, mesmos números do componente `Pagina`
- [x] Medida de leitura no `.doc-md p` (`max-width: 68ch`), replicada na cópia do hub
      (`painel-odonto/hub/app/globals.css`). O personal-hub segue sem: sincronizar
      quando o `sync-tokens.mjs` da v2 existir, ou reinstalar os tokens pelo registry.
- [x] RECEITA FLUXO v1 (`fx-`), PASSOS v1 (`pa-`), QUADROS v1 (`qd-`, com chips),
      PROMPT v1 (`pr-`), INSIGHT v1 (`in-`), VAZIO v1 (`vz-`), TRILHO v1 (`tr-`,
      item ativo com `color-mix` de lima a 10%)
- [x] Componente `prompt.tsx` no registry (a RECEITA PROMPT vestida de React)
- [x] Story de cada receita em `stories/receitas/` e do Prompt em `padroes/`
- [x] `registry:build` e `build-storybook` passando
- [x] Página do hub que consome `doc-md` pra conferir o 68ch:
      `hub/app/direcao/[doc]/page.tsx` (qualquer documento de direção)

## v2

- [ ] `sync-tokens.mjs` com alvos parametrizados. O conceito é bom (o DS como fonte, os
      consumidores single-file recebendo cópia gerada dos blocos `:root` e `.dark`), mas
      os únicos alvos que existem hoje moram no app de origem. Desenho: um
      `sync-tokens.config.json` na raiz com `{ "alvos": ["../caminho/index.html"] }` e o
      script lendo dali em vez da lista fixa. Entra quando existir o primeiro consumidor
      single-file fora do app de origem.
- [ ] Story do `moldura.tsx` (o único componente que veio sem story).
- [ ] Dívida herdada do original, não introduzida aqui: `ui-input--estados` acusa `label`
      crítico no axe, e `badge`/`button`/`marca no trilho` acusam `color-contrast` no
      claro. Vale corrigir na fonte e devolver pro app de origem.
