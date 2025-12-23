import { z } from 'zod'

export const updateBankAccountSchema = z.object({
  title: z.string().trim().nonempty('Название счета обязательно'),
  currency: z.string().trim().nonempty('Валюта обязательна'),
  emoji: z.string(),
})

export type UpdateBankAccountFormData = z.infer<typeof updateBankAccountSchema>
