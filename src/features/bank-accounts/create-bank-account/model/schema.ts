import { z } from 'zod'

export const createBankAccountSchema = z.object({
  title: z.string().trim().nonempty('Название счета обязательно'),
  balance: z.number('Начальный баланс должен быть числом'),
  currency: z.string().trim(),
})

export type CreateBankAccountFormData = z.infer<typeof createBankAccountSchema>
