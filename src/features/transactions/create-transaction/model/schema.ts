import { z } from 'zod'

export const createTransactionSchema = z.object({
  amount: z.number('Сумма должна быть числом'),
  category: z.string().trim().nonempty('Категория обязательна'),
  bankAccount: z.string().trim().nonempty('Счет обязателен'),
  currency: z.string().trim(),
})

export type CreateTransactionFormData = z.infer<typeof createTransactionSchema>
