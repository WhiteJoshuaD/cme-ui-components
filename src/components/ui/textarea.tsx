import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "cme-flex cme-min-h-[80px] cme-w-full cme-rounded-md cme-border cme-border-input cme-bg-background cme-px-3 cme-py-2 cme-text-sm cme-ring-offset-background placeholder:cme-text-muted-foreground focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-cursor-not-allowed disabled:cme-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
