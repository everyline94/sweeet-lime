import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

/**
 * O drawer lateral. E o Sheet do registry com um ajuste nosso, entao
 * `ui:add sheet --overwrite` desfaz o ajuste: confira com
 * `npm run ui:diff -- sheet` antes de encostar.
 *
 * Aqui ele e sempre CONTROLADO (`open` + `onOpenChange`), do jeito que um card
 * abre o documento inteiro. Nao usamos SheetTrigger.
 */
const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  render: function Drawer() {
    const [aberto, setAberto] = useState(false);

    return (
      <>
        <Button
          className="bg-lima text-sobre-lima hover:bg-lima/85"
          onClick={() => setAberto(true)}
        >
          Abrir o documento
        </Button>

        <Sheet open={aberto} onOpenChange={setAberto}>
          <SheetContent
            side="right"
            className="bg-folha w-full sm:max-w-[560px]"
          >
            <SheetHeader className="border-risco border-b px-6 pb-4 pt-6">
              <SheetTitle className="text-h3 font-bold">
                O que o sistema é
              </SheetTitle>
            </SheetHeader>
            <div className="text-corpo text-tinta space-y-3 px-6 py-5 [text-wrap:pretty]">
              <p>
                Uma linguagem visual que cabe num arquivo: as cores com nome
                próprio, a escala de tipo e a ponte que traduz o vocabulário do
                shadcn pra essa marca.
              </p>
              <p className="text-tinta-fraca">
                É por causa dessa ponte que um componente vindo cru do registry
                já nasce na cor certa.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  },
};
