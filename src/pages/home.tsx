'use client'

import { Button, Input } from 'shared/ui'
import { useState } from 'react'

const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  return (
    <main className="flex min-h-screen grow items-center justify-center">
      <div className="bg-bg-neutral-primary/70 border-border-neutral-primary flex w-[400px] flex-col gap-6 rounded-2xl border p-8">
        <h2 className="text-xl font-semibold">Создать новый аккаунт:</h2>
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Имя пользователя" iconStart="user" />
          <Input type="email" placeholder="Email" iconStart="email" />
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Пароль"
            iconStart="lock"
            iconEnd={showPassword ? 'eyeSlash' : 'eye'}
            onIconEndClick={(e) => {
              e.stopPropagation()
              setShowPassword((prev) => !prev)
            }}
          />
          <Input
            type={showRepeatPassword ? 'text' : 'password'}
            placeholder="Повторите пароль"
            iconStart="lock"
            iconEnd={showRepeatPassword ? 'eyeSlash' : 'eye'}
            onIconEndClick={(e) => {
              e.stopPropagation()
              setShowRepeatPassword((prev) => !prev)
            }}
          />
        </div>
        <Button className={'mx-auto'}>Зарегистрироваться</Button>
      </div>
    </main>
  )
}

export default HomePage
