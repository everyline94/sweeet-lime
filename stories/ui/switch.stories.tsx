import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Switch } from "@/components/ui/switch";

/**
 * Ligado e lima com o polegar em sobre-lima, a marcacao do sistema.
 * Desligado fica no risco-forte, a borda de controle, que passa o 3:1 do
 * WCAG no claro (3.81 na folha, 3.19 no canvas). Confira os dois estados
 * nos dois temas antes de usar em superficie nova.
 */
const meta = {
  title: "UI/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Estados: Story = {
  render: () => (
    <div className="folha w-80 space-y-3 p-5">
      <label className="flex items-center justify-between gap-3 text-ui">
        Confirmação automática <Switch defaultChecked />
      </label>
      <label className="flex items-center justify-between gap-3 text-ui">
        Pix de sinal <Switch />
      </label>
      <label className="text-tinta-fraca flex items-center justify-between gap-3 text-ui">
        Lembrete em véspera <Switch disabled />
      </label>
      <label className="flex items-center justify-between gap-3 text-ui">
        Compacto <Switch size="sm" defaultChecked />
      </label>
    </div>
  ),
};
