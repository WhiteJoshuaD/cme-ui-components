import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "cme-peer cme-inline-flex cme-h-6 cme-w-11 cme-shrink-0 cme-cursor-pointer cme-items-center cme-rounded-full cme-border-2 cme-border-transparent cme-transition-colors focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 focus-visible:cme-ring-offset-background disabled:cme-cursor-not-allowed disabled:cme-opacity-50 data-[state=checked]:cme-bg-primary data-[state=unchecked]:cme-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "cme-pointer-events-none cme-block cme-h-5 cme-w-5 cme-rounded-full cme-bg-background cme-shadow-lg cme-ring-0 cme-transition-transform data-[state=checked]:cme-translate-x-5 data-[state=unchecked]:cme-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
