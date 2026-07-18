import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

/**
 * O avatar, sobre Base UI. Registry puro: fallback de iniciais em muted, e
 * o badge de status em primary (tinta), que e indicador, nao marcacao, por
 * isso nao e lima.
 */
const meta = {
  title: "UI/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Iniciais: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CP</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    </div>
  ),
};

export const Grupo: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>
  ),
};
