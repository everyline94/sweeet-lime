import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

/**
 * O codigo de verificacao (o caminho pro login da clinica por WhatsApp).
 * Codigo e coluna: os slots digitam em mono com tabular-nums, o criterio
 * da casa. Bordas na borda de controle, foco no anel do sistema.
 */
const meta = {
  title: "UI/InputOTP",
  component: InputOTP,
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SeisDigitos: Story = {
  name: "Seis dígitos",
  render: () => (
    <div className="folha p-5">
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};
