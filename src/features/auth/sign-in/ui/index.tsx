import { Button, Input } from 'shared/ui'
import { setShowPassword, useSignInForm, useSignInSubmit } from '../model'
import { useAppDispatch, useAppSelector } from 'shared/hooks'

export const SignInForm = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm()

  const onSubmit = useSignInSubmit()

  const showPassword = useAppSelector(
    (state) => state.signInFormSlice.showPassword,
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-bg-neutral-primary/70 border-border-neutral-primary flex w-[400px] flex-col gap-6 rounded-2xl border p-8 backdrop-blur-[32px]"
    >
      <h2 className="text-xl font-semibold">Войти в аккаунт:</h2>
      <div className="flex flex-col gap-4">
        <Input
          {...register('email')}
          errorMessage={errors.email?.message}
          type="email"
          placeholder="Email"
          iconStart="email"
        />
        <Input
          {...register('password')}
          errorMessage={errors.password?.message}
          placeholder="Пароль"
          iconStart="lock"
          type={showPassword ? 'text' : 'password'}
          iconEnd={showPassword ? 'eyeSlash' : 'eye'}
          onIconEndClick={(e) => {
            e.stopPropagation()
            dispatch(setShowPassword(!showPassword))
          }}
        />
        <Button className={'mx-auto'} type={'submit'}>
          Войти
        </Button>
      </div>
    </form>
  )
}
