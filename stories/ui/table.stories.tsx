import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * A tabela do painel: hairlines em risco, cabecalho no padrao rotulo (caps,
 * tinta fraca) e numeros tabulares pra valor alinhar em coluna. Divergiu do
 * registry de proposito: th e celula sao marca, entao aqui e nosso e o
 * `--overwrite` apagaria isso.
 */
const meta = {
  title: "UI/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const DIA = [
  { hora: "08:30", paciente: "Ana Sousa", procedimento: "Limpeza", valor: "R$ 180,00", status: "pagou" },
  { hora: "09:15", paciente: "Carlos Prado", procedimento: "Canal", valor: "R$ 950,00", status: "confirmou" },
  { hora: "10:00", paciente: "Marina Dias", procedimento: "Avaliação", valor: "R$ 0,00", status: "sem resposta" },
  { hora: "11:30", paciente: "João Pedro", procedimento: "Extração", valor: "R$ 420,00", status: "confirmou" },
];

function BadgeDoStatus({ status }: { status: string }) {
  if (status === "pagou") return <Badge variant="ok">pagou</Badge>;
  if (status === "confirmou") return <Badge variant="lima">confirmou</Badge>;
  return <Badge variant="atencao">sem resposta</Badge>;
}

export const TelaDoDia: Story = {
  name: "Tela do dia",
  render: () => (
    <div className="folha w-[640px] max-w-full p-5">
      <Table>
        <TableCaption>Sexta, 4 consultas, R$ 1.550,00 no dia.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Hora</TableHead>
            <TableHead>Paciente</TableHead>
            <TableHead>Procedimento</TableHead>
            <TableHead className="text-right">Valor</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DIA.map((c) => (
            <TableRow key={c.hora}>
              <TableCell className="font-mono text-xs">{c.hora}</TableCell>
              <TableCell className="font-semibold">{c.paciente}</TableCell>
              <TableCell>{c.procedimento}</TableCell>
              <TableCell className="text-right">{c.valor}</TableCell>
              <TableCell>
                <BadgeDoStatus status={c.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};
