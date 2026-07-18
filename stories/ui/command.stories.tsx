import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

/**
 * A paleta de comando (cmdk). Registry puro: folha, hairlines e o
 * destacado pela ponte; atalhos em mono via Kbd do proprio registry.
 */
const meta = {
  title: "UI/Command",
  component: Command,
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paleta: Story = {
  render: () => (
    <Command className="border-risco w-96 rounded-xl border shadow-md">
      <CommandInput placeholder="Buscar ação ou paciente..." />
      <CommandList>
        <CommandEmpty>Nada encontrado.</CommandEmpty>
        <CommandGroup heading="Ações">
          <CommandItem>
            Nova consulta
            <CommandShortcut>N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Cobrar sinal
            <CommandShortcut>C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Pacientes">
          <CommandItem>Ana Sousa</CommandItem>
          <CommandItem>Carlos Prado</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
