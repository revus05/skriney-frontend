'use client'

import { Button, Input } from 'shared/ui'
import { useForm } from '@effector-reform/react'
import { registerUserModel } from 'features/auth/register'
import { useUnit } from 'effector-react'
import { sessionModel } from 'entities/session'

export const RegisterForm = () => {
  const { values, fields, errors, onSubmit } = useForm(registerUserModel.form)

  const [
    showPassword,
    showRepeatPassword,
    showPasswordChanged,
    showRepeatPasswordChanged,
    registrationPending,
  ] = useUnit([
    registerUserModel.$showPassword,
    registerUserModel.$showRepeatPassword,
    registerUserModel.showPasswordChanged,
    registerUserModel.showRepeatPasswordChanged,
    sessionModel.registerUser.pending,
  ])

  return (
    <form
      onSubmit={onSubmit}
      className="bg-bg-neutral-primary/70 border-border-neutral-primary flex w-[400px] flex-col gap-6 rounded-2xl border p-8"
    >
      <h2 className="text-xl font-semibold">Создать новый аккаунт:</h2>
      <div className="flex flex-col gap-4">
        <Input
          value={values.username}
          onValueChange={fields.username.onChange}
          errorMessage={fields.username.error || errors.username}
          type="text"
          placeholder="Имя пользователя"
          iconStart="user"
        />
        <Input
          value={values.email}
          onValueChange={fields.email.onChange}
          errorMessage={fields.email.error || errors.email}
          type="email"
          placeholder="Email"
          iconStart="email"
        />
        <Input
          value={values.password}
          onValueChange={fields.password.onChange}
          errorMessage={fields.password.error || errors.password}
          type={showPassword ? 'text' : 'password'}
          placeholder="Пароль"
          iconStart="lock"
          iconEnd={showPassword ? 'eyeSlash' : 'eye'}
          onIconEndClick={(e) => {
            e.stopPropagation()
            showPasswordChanged(!showPassword)
          }}
        />
        <Input
          value={values.repeatPassword}
          onValueChange={fields.repeatPassword.onChange}
          errorMessage={fields.repeatPassword.error || errors.repeatPassword}
          type={showRepeatPassword ? 'text' : 'password'}
          placeholder="Повторите пароль"
          iconStart="lock"
          iconEnd={showRepeatPassword ? 'eyeSlash' : 'eye'}
          onIconEndClick={(e) => {
            e.stopPropagation()
            showRepeatPasswordChanged(!showRepeatPassword)
          }}
        />
        <Button
          className={'mx-auto'}
          type={'submit'}
          disabled={registrationPending}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}
