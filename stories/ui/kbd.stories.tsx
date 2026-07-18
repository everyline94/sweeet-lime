import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Kbd, KbdGroup } from "@/components/ui/kbd";

/**
 * A tecla. Divergiu do registry num detalhe de criterio: codigo e em mono
 * (JetBrains), nunca na sans do texto. O resto (muted, tamanho) e ponte.
 */
const meta = {
  title: "UI/Kbd",
  component: Kbd,
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Teclas: Story = {
  render: () => (
    <div className="folha flex items-center gap-6 p-5 text-ui">
      <span className="flex items-center gap-2">
        Glossário <Kbd>g</Kbd>
      </span>
      <span className="flex items-center gap-2">
        Busca
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </span>
    </div>
  ),
};
