import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  // O catalogo mora em stories/ e espelha components/:
  //   fundacao/ = os tokens do DS      ui/      = os componentes shadcn
  //   blocos/   = os blocos de tela    padroes/ = marca, checklist, toast.
  // Story colada ao componente tambem e lida, se um dia for esse o gosto.
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/nextjs-vite",
};
export default config;
