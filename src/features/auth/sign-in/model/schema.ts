import { z } from 'zod'
import { passwordSchema } from 'shared/schemas'

export const signInSchema = z.object({
  email: z.string().trim().nonempty('Email пользователя обязателен'),
  password: passwordSchema,
})

export type SignInFormData = z.infer<typeof signInSchema>
