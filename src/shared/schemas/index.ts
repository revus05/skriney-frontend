import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(8, 'Минимальная длина пароля 8 символов')
  .max(64, 'Максимальная длина пароля 64 символа')
  .trim()
