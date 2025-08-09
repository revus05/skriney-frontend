import { Button, Input } from 'shared/ui'
import { useSignInForm, useSignInSubmit } from '../model'

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm()

  const onSubmit = useSignInSubmit()

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
          type="password"
          placeholder="Пароль"
          iconStart="lock"
        />
        <Button className={'mx-auto'} type={'submit'}>
          Войти
        </Button>
      </div>
    </form>
  )
}
