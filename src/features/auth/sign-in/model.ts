import { atom } from 'shared/lib'
import { createField, createForm } from '@effector-reform/core'
import { zodAdapter } from '@effector-reform/zod'
import { z } from 'zod'
import { createEvent, createStore, sample } from 'effector'
import { sessionModel } from 'entities/session'

export const signInFormModel = atom(() => {
  const showPasswordChanged = createEvent<boolean>()

  const $showPassword = createStore<boolean>(false).on(
    showPasswordChanged,
    (_, v) => v,
  )

  const form = createForm({
    schema: {
      email: createField<string>(''),
      password: createField<string>(''),
    },
    validation: zodAdapter(
      z.object({
        email: z.string().trim().nonempty('Email пользователя обязателен'),
        password: z
          .string()
          .min(8, 'Минимальная длина пароля 8 символов')
          .max(64, 'Максимальная длина пароля 64 символа')
          .trim(),
      }),
    ),
    validationStrategies: ['submit'],
  })

  sample({
    clock: form.validatedAndSubmitted,
    source: form.$values,
    fn: (values) => ({
      email: values.email,
      password: values.password,
    }),
    target: sessionModel.signInUser,
  })

  return { form, $showPassword, showPasswordChanged }
})
