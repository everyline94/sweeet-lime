import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";

import { Calendar } from "@/components/ui/calendar";

/**
 * O calendario (react-day-picker, a unica dependencia que entrou por ele).
 * Dia selecionado e marcacao: lima com o numero em sobre-lima, inclusive
 * nas pontas do range; o meio do range e muted, e o hoje tambem, porque
 * hoje nao e selecao.
 */
const meta = {
  title: "UI/Calendar",
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

function DiaUnico() {
  const [dia, setDia] = useState<Date | undefined>(new Date(2026, 6, 24));
  return (
    <Calendar
      mode="single"
      locale={ptBR}
      defaultMonth={new Date(2026, 6)}
      selected={dia}
      onSelect={setDia}
    />
  );
}

export const Selecao: Story = {
  name: "Seleção única",
  render: () => (
    <div className="folha p-3">
      <DiaUnico />
    </div>
  ),
};

function Periodo() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 6, 20),
    to: new Date(2026, 6, 24),
  });
  return (
    <Calendar
      mode="range"
      locale={ptBR}
      defaultMonth={new Date(2026, 6)}
      selected={range}
      onSelect={setRange}
    />
  );
}

export const Intervalo: Story = {
  render: () => (
    <div className="folha p-3">
      <Periodo />
    </div>
  ),
};

export const Desabilitados: Story = {
  render: () => (
    <div className="folha p-3">
      <Calendar
        mode="single"
        locale={ptBR}
        defaultMonth={new Date(2026, 6)}
        disabled={{ dayOfWeek: [0] }}
      />
    </div>
  ),
};
