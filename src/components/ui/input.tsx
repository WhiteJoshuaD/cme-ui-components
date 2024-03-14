import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "cme-flex cme-h-10 cme-w-full cme-rounded-md cme-border cme-border-input cme-bg-background cme-px-3 cme-py-2 cme-text-sm cme-ring-offset-background file:cme-border-0 file:cme-bg-transparent file:cme-text-sm file:cme-font-medium placeholder:cme-text-muted-foreground focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-cursor-not-allowed disabled:cme-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
