import { atom } from 'shared/lib'
import { createField, createForm } from '@effector-reform/core'
import { z } from 'zod'
import { zodAdapter } from '@effector-reform/zod'
import { createEvent, createStore, sample } from 'effector'
import { sessionModel } from 'entities/session'
import { ApiError } from 'shared/api'

export const signUpUserModel = atom(() => {
  const showPasswordChanged = createEvent<boolean>()
  const showRepeatPasswordChanged = createEvent<boolean>()

  const $showPassword = createStore<boolean>(false).on(
    showPasswordChanged,
    (_, v) => v,
  )
  const $showRepeatPassword = createStore<boolean>(false).on(
    showRepeatPasswordChanged,
    (_, v) => v,
  )

  const form = createForm({
    schema: {
      username: createField<string>(''),
      email: createField<string>(''),
      password: createField<string>(''),
      repeatPassword: createField<string>(''),
    },
    validation: zodAdapter(
      z
        .object({
          username: z.string().trim().nonempty('Имя пользователя обязательно'),
          email: z.string().trim().nonempty('Email пользователя обязателен'),
          password: z
            .string()
            .min(8, 'Минимальная длина пароля 8 символов')
            .max(64, 'Максимальная длина пароля 64 символа')
            .trim(),
          repeatPassword: z
            .string()
            .min(8, 'Минимальная длина пароля 8 символов')
            .max(64, 'Максимальная длина пароля 64 символа')
            .trim(),
        })
        .refine((data) => data.password === data.repeatPassword, {
          message: 'Пароли не совпадают',
          path: ['password'],
        }),
    ),
    validationStrategies: ['submit'],
  })

  sample({
    clock: form.validatedAndSubmitted,
    source: form.$values,
    fn: (values) => ({
      username: values.username,
      email: values.email,
      password: values.password,
    }),
    target: sessionModel.signUpUser,
  })

  sample({
    clock: sessionModel.signUpUser.failData,
    source: { formValues: form.$values, formErrors: form.$errors },
    fn: ({ formValues, formErrors }, error: ApiError) => {
      const errors = error.data as Record<string, string>
      return {
        values: formValues,
        errors: {
          ...formErrors,
          ...errors,
        },
      }
    },
    target: form.fill,
  })

  return {
    form,
    $showPassword,
    $showRepeatPassword,
    showPasswordChanged,
    showRepeatPasswordChanged,
  }
})
