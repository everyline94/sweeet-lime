import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Toaster, toast } from "@/components/toast";
import { Button } from "@/components/ui/button";

/**
 * O toast do sistema: emissor de 30 linhas, sem contexto e sem biblioteca.
 * `<Toaster />` fica no layout, e qualquer lugar chama `toast("...")`.
 * Some sozinho em 2,6s.
 */
const meta = {
  title: "Padrões/Toast",
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <>
      <Button
        className="bg-lima text-sobre-lima hover:bg-lima/85"
        onClick={() => toast("Link copiado")}
      >
        Disparar o toast
      </Button>
      <Toaster />
    </>
  ),
};
