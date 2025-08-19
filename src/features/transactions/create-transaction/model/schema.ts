import { z } from 'zod'

export const createTransactionSchema = z.object({
  amount: z.string().transform((str, ctx) => {
    const trimmed = str.trim()
    if (trimmed === '') {
      ctx.addIssue({ code: 'custom', message: 'Сумма обязательна' })
      return z.NEVER
    }
    const num = Number(trimmed)
    if (isNaN(num)) {
      ctx.addIssue({ code: 'custom', message: 'Сумма должна быть числом' })
      return z.NEVER
    }
    if (num === 0) {
      ctx.addIssue({ code: 'custom', message: 'Сумма не может быть равна 0' })
      return z.NEVER
    }
    return trimmed
  }),
  category: z.string().trim().nonempty('Категория обязательна'),
  bankAccount: z.string().trim().nonempty('Счет обязателен'),
  currency: z.string().trim().nonempty('Валюта обязательна'),
})

export type CreateTransactionFormData = z.infer<typeof createTransactionSchema>
