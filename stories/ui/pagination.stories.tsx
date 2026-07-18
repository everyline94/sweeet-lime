import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

/**
 * A paginacao do historico. Pagina ativa e marcacao: lima com o numero em
 * sobre-lima, e os numeros em tabular-nums pra coluna nao dancar.
 */
const meta = {
  title: "UI/Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Historico: Story = {
  name: "Histórico",
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious text="Anterior" href="#" onClick={(e) => e.preventDefault()} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive onClick={(e) => e.preventDefault()}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={(e) => e.preventDefault()}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext text="Próxima" href="#" onClick={(e) => e.preventDefault()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
