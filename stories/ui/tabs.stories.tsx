import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * A aba da marca e a de linha: filete de lima sob a ativa (a lima marca,
 * nunca escreve), inativa em tinta fraca. E o gabarito das abas da RECEITA
 * LOGIN, agora como componente. A pill sobre muted segue disponivel via
 * `variant="default"` pra troca densa dentro de card.
 */
const meta = {
  title: "UI/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DuasAbas: Story = {
  name: "Duas abas",
  render: () => (
    <div className="folha w-96 p-5">
      <Tabs defaultValue="entrar">
        <TabsList>
          <TabsTrigger value="entrar">Entrar</TabsTrigger>
          <TabsTrigger value="criar">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="entrar" className="text-tinta-fraca pt-3">
          O formulário de entrada mora aqui.
        </TabsContent>
        <TabsContent value="criar" className="text-tinta-fraca pt-3">
          O formulário de cadastro mora aqui.
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const TresAbas: Story = {
  name: "Três abas",
  render: () => (
    <div className="folha w-[480px] max-w-full p-5">
      <Tabs defaultValue="dia">
        <TabsList>
          <TabsTrigger value="dia">Dia</TabsTrigger>
          <TabsTrigger value="semana">Semana</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
        </TabsList>
        <TabsContent value="dia" className="text-tinta-fraca pt-3">
          Quem vem hoje, quem confirmou e quem pagou.
        </TabsContent>
        <TabsContent value="semana" className="text-tinta-fraca pt-3">
          A semana inteira numa tela.
        </TabsContent>
        <TabsContent value="historico" className="text-tinta-fraca pt-3">
          O que já passou, com filtros.
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const PillDensa: Story = {
  name: "Pill densa",
  render: () => (
    <div className="folha w-96 p-5">
      <Tabs defaultValue="lista">
        <TabsList variant="default">
          <TabsTrigger value="lista">Lista</TabsTrigger>
          <TabsTrigger value="grade">Grade</TabsTrigger>
        </TabsList>
        <TabsContent value="lista" className="text-tinta-fraca pt-3">
          A variante pill, pra troca de visão dentro de card.
        </TabsContent>
        <TabsContent value="grade" className="text-tinta-fraca pt-3">
          A mesma coisa em grade.
        </TabsContent>
      </Tabs>
    </div>
  ),
};
