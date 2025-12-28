import { z } from 'zod'

export const updateCategorySchema = z.object({
  title: z.string().trim().nonempty('Название счета обязательно'),
  emoji: z.string(),
})

export type UpdateCategoryFormData = z.infer<typeof updateCategorySchema>
