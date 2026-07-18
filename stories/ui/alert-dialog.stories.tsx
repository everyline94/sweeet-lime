import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

/**
 * A confirmacao de acao seria, sobre Base UI. Registry puro: a ponte de
 * tokens veste tudo (popup em folha, rodape em muted, acao destrutiva na
 * dupla alerta do proprio Button). Abra pra conferir nos dois temas.
 */
const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CancelarConsulta: Story = {
  name: "Cancelar consulta",
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">Cancelar consulta</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancelar a consulta das 09:15?</AlertDialogTitle>
          <AlertDialogDescription>
            Carlos Prado será avisado pelo WhatsApp e o sinal de R$ 95,00
            entra na fila de estorno. Isso não dá pra desfazer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Voltar</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Cancelar e estornar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
