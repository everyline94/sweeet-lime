import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap [&>svg]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        lima: "border-transparent bg-lima text-sobre-lima",
        neutro: "border-risco bg-canvas text-tinta-fraca",
        ok: "border-transparent bg-ok/12 text-ok",
        atencao: "border-transparent bg-atencao/12 text-atencao",
        alerta: "border-transparent bg-alerta/12 text-alerta",
        contorno: "border-risco text-tinta",
      },
    },
    defaultVariants: {
      variant: "neutro",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
