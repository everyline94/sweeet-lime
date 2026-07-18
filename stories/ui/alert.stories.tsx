import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CircleAlertIcon, TriangleAlertIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

/**
 * O callout de aviso. Criterio de aceite do kit: aviso nao e marcacao, o
 * filete lateral e atencao (e alerta na destrutiva), nunca lima.
 */
const meta = {
  title: "UI/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Aviso: Story = {
  render: () => (
    <div className="w-96">
      <Alert>
        <TriangleAlertIcon />
        <AlertTitle>Pix não configurado</AlertTitle>
        <AlertDescription>
          Sem chave Pix, o sinal fica desligado e a agenda aceita marcação
          sem garantia.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const Destrutivo: Story = {
  render: () => (
    <div className="w-96">
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>Estorno falhou</AlertTitle>
        <AlertDescription>
          O banco recusou o estorno do sinal. Tente de novo ou resolva
          direto com o paciente.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
