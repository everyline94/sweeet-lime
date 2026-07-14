import type { Preview } from "@storybook/nextjs-vite";
import type { ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../styles/tokens.css";
import "./fontes.css";

const preview: Preview = {
  // toda story ganha pagina de Docs de graca: o catalogo se documenta sozinho
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    a11y: { test: "todo" },
    options: {
      storySort: {
        order: ["Fundação", "UI", "Blocos", "Padrões"],
      },
    },
  },

  // o toggle claro/escuro do sistema, aqui dentro.
  // e nesta tela que voce descobre que o componente quebra no escuro,
  // antes de descobrir na pagina.
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { claro: "", escuro: "dark" },
      defaultTheme: "claro",
    }),
    (Story) => (
      <div className="bg-canvas text-tinta w-[760px] max-w-full rounded-3xl p-10">
        <Story />
      </div>
    ),
  ],
};

export default preview;
