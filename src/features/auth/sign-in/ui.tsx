'use client'

import { Button, Input } from 'shared/ui'
import { useForm } from '@effector-reform/react'
import { signInFormModel } from './model'
import { useUnit } from 'effector-react'

export const SignInForm = () => {
  const { values, fields, errors, onSubmit } = useForm(signInFormModel.form)

  const [showPassword, showPasswordChanged] = useUnit([
    signInFormModel.$showPassword,
    signInFormModel.showPasswordChanged,
  ])

  return (
    <form
      onSubmit={onSubmit}
      className="bg-bg-neutral-primary/70 border-border-neutral-primary flex w-[400px] flex-col gap-6 rounded-2xl border p-8 backdrop-blur-[32px]"
    >
      <h2 className="text-xl font-semibold">Войти в аккаунт:</h2>
      <div className="flex flex-col gap-4">
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
        <Button className={'mx-auto'} type={'submit'}>
          Войти
        </Button>
      </div>
    </form>
  )
}
