import { z } from 'zod'
import { passwordSchema } from 'shared/schemas'

export const signUpSchema = z
  .object({
    username: z.string().trim().nonempty('Имя пользователя обязательно'),
    email: z.string().trim().nonempty('Email пользователя обязателен'),
    password: passwordSchema,
    repeatPassword: passwordSchema,
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Пароли не совпадают',
    path: ['repeatPassword'],
  })

export type SignUpFormValues = z.infer<typeof signUpSchema>
