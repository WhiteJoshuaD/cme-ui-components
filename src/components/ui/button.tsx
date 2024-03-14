import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cme-inline-flex cme-items-center cme-justify-center cme-whitespace-nowrap cme-rounded-md cme-text-sm cme-font-medium cme-ring-offset-background cme-transition-colors focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-pointer-events-none disabled:cme-opacity-50",
  {
    variants: {
      variant: {
        default: "cme-bg-primary cme-text-primary-foreground hover:cme-bg-primary/90",
        destructive:
          "cme-bg-destructive cme-text-destructive-foreground hover:cme-bg-destructive/90",
        outline:
          "cme-border cme-border-input cme-bg-background hover:cme-bg-accent hover:cme-text-accent-foreground",
        secondary:
          "cme-bg-secondary cme-text-secondary-foreground hover:cme-bg-secondary/80",
        ghost: "hover:cme-bg-accent hover:cme-text-accent-foreground",
        link: "cme-text-primary cme-underline-offset-4 hover:cme-underline",
      },
      size: {
        default: "cme-h-10 cme-px-4 cme-py-2",
        sm: "cme-h-9 cme-rounded-md cme-px-3",
        lg: "cme-h-11 cme-rounded-md cme-px-8",
        icon: "cme-h-10 cme-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
