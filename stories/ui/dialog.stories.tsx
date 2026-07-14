import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { BotaoLima } from "@/components/botao";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

/**
 * O modal do DS (registry base-nova, sobre Base UI). Substitui qualquer
 * modal a mao: fundo popover (folha), radius do token, overlay com blur.
 * Arquivo igual ao do registry: atualizar com
 * `npm run ui:add -- dialog --overwrite`, nunca editar na mao.
 *
 * Confirmar e sempre BotaoLima; cancelar e Button outline.
 */
const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Formulario: Story = {
  render: function Formulario() {
    const [aberto, setAberto] = useState(false);

    return (
      <>
        <BotaoLima onClick={() => setAberto(true)}>Editar contato</BotaoLima>

        <Dialog open={aberto} onOpenChange={setAberto}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Editar contato</DialogTitle>
              <DialogDescription>
                Nome, cargo e o jeito de responder.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3">
              <Input defaultValue="Dra. Helena" />
              <Input defaultValue="Advogada" />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAberto(false)}>
                Cancelar
              </Button>
              <BotaoLima onClick={() => setAberto(false)}>Salvar</BotaoLima>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};
