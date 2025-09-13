import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export { getValueWithStringKey } from './get-value-with-string-key'
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
