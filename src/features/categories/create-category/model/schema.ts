import { z } from 'zod'

export const createCategorySchema = z.object({
  title: z.string().trim().nonempty('Название категории обязательно'),
})

export type CreateCategoryFormValues = z.infer<typeof createCategorySchema>
