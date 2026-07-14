import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RefreshCw, Send } from "lucide-react";

import { BotaoLeve, Card, ChipMono, KV, Vazio } from "@/components/blocos";
import { Spinner } from "@/components/spinner";

/**
 * Os miudos que as telas repetem: o par chave/valor, o botao fantasma, o
 * chip mono, o giro de carregamento e o texto de lista vazia.
 *
 * O selo de tom e o `Badge` de `components/ui/` (story em UI/Badge); o
 * `Card` daqui e o de ui/ com o padding padrao ja posto (adaptador, nao um
 * segundo componente).
 */
const meta = {
  title: "Blocos/Miúdos",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const ParChaveValor: StoryObj = {
  name: "KV",
  render: () => (
    <Card>
      <KV k="Cor de destaque" v="#e6f87f" />
      <KV k="Texto sobre a lima" v="#16181a" />
      <KV k="Raio base" v="1rem" />
      <KV k="Fonte" v="Manrope" />
    </Card>
  ),
};

export const ChipMonoStory: StoryObj = {
  name: "ChipMono",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <ChipMono>token</ChipMono>
      <ChipMono>registry</ChipMono>
      <ChipMono className="px-2.5 uppercase tracking-[.05em]">local</ChipMono>
    </div>
  ),
};

export const Giro: StoryObj = {
  name: "Spinner",
  render: () => (
    <div className="text-tinta-fraca flex items-center text-[13px]">
      <Spinner className="mr-2.5" />
      carregando
    </div>
  ),
};

export const BotaoFantasma: StoryObj = {
  name: "BotaoLeve",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <BotaoLeve>
        <Send className="size-[13px]" strokeWidth={1.75} /> Copiar o token
      </BotaoLeve>
      <BotaoLeve>
        <RefreshCw className="size-[13px]" strokeWidth={1.75} /> Gerar de novo
      </BotaoLeve>
    </div>
  ),
};

export const ListaVazia: StoryObj = {
  name: "Vazio",
  render: () => (
    <Card>
      <Vazio>Nenhuma peça nesta seção.</Vazio>
    </Card>
  ),
};
