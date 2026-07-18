import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

/**
 * A anatomia do campo: rotulo no gabarito lc-campo (12.5px/600, tinta
 * fraca), descricao em tinta fraca e erro em alerta. O card de escolha
 * marcado tinge de lima a 10%, a marcacao do sistema. O Label sozinho segue
 * puro do registry; o vestido e o Field.
 */
const meta = {
  title: "UI/Field",
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CampoCompleto: Story = {
  name: "Campo completo",
  render: () => (
    <div className="folha w-96 p-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="clinica">Nome da clínica</FieldLabel>
          <Input id="clinica" placeholder="Sorriso da Vila" />
          <FieldDescription>
            Aparece no WhatsApp e no comprovante do sinal.
          </FieldDescription>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="pix">Chave Pix</FieldLabel>
          <Input id="pix" aria-invalid placeholder="CNPJ, e-mail ou telefone" />
          <FieldError errors={[{ message: "Sem chave Pix não há sinal: preencha antes de ativar a cobrança." }]} />
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const CardDeEscolha: Story = {
  name: "Card de escolha",
  render: () => (
    <div className="folha w-96 p-5">
      <FieldGroup>
        <FieldLabel>
          <Field orientation="horizontal">
            <Checkbox defaultChecked />
            <div className="flex flex-col gap-0.5">
              <FieldTitle>Confirmação automática</FieldTitle>
              <FieldDescription>
                A IA confirma a consulta um dia antes, pelo WhatsApp.
              </FieldDescription>
            </div>
          </Field>
        </FieldLabel>
        <FieldLabel>
          <Field orientation="horizontal">
            <Checkbox />
            <div className="flex flex-col gap-0.5">
              <FieldTitle>Pix de sinal</FieldTitle>
              <FieldDescription>
                Cobra o sinal na hora de marcar. Sem chave Pix, fica desligado.
              </FieldDescription>
            </div>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </div>
  ),
};
