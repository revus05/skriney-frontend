import { z } from 'zod'

export const createBankAccountSchema = z.object({
  title: z.string().trim().nonempty('Название счета обязательно'),
  balance: z.string().transform((str, ctx) => {
    const trimmed = str.trim()
    if (trimmed === '') {
      return '0'
    }
    const num = Number(trimmed)
    if (isNaN(num)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Начальный баланс должен быть числом',
      })
      return z.NEVER
    }
    return trimmed
  }),
  currency: z.string().trim().nonempty('Валюта обязательна'),
})

export type CreateBankAccountFormData = z.infer<typeof createBankAccountSchema>
