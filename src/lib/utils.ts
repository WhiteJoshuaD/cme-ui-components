import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

const twMerge = extendTailwindMerge({
  prefix: 'cme-',
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
