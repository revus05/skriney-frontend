'use client'

import { Button, Input } from 'shared/ui'
import { useForm } from '@effector-reform/react'
import { signUpUserModel } from 'features/auth/sign-up'
import { useUnit } from 'effector-react'
import { sessionModel } from 'entities/session'

export const SignUpForm = () => {
  const { values, fields, errors, onSubmit } = useForm(signUpUserModel.form)

  const [
    showPassword,
    showRepeatPassword,
    showPasswordChanged,
    showRepeatPasswordChanged,
    isSignUpPending,
  ] = useUnit([
    signUpUserModel.$showPassword,
    signUpUserModel.$showRepeatPassword,
    signUpUserModel.showPasswordChanged,
    signUpUserModel.showRepeatPasswordChanged,
    sessionModel.signUpUser.pending,
  ])

  return (
    <form
      onSubmit={onSubmit}
      className="bg-bg-neutral-primary/70 border-border-neutral-primary flex w-[400px] flex-col gap-6 rounded-2xl border p-8 backdrop-blur-[32px]"
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
          disabled={isSignUpPending}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}
