import { Button, Input } from 'shared/ui'
import { useSignUpForm, useSignUpSubmit } from '../model'

export const SignUpForm = () => {
  const form = useSignUpForm()

  const onSubmit = useSignUpSubmit(form.setError)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-bg-neutral-primary/70 border-border-neutral-primary flex w-[400px] flex-col gap-6 rounded-2xl border p-8 backdrop-blur-[32px]"
    >
      <h2 className="text-xl font-semibold">Создать новый аккаунт:</h2>
      <div className="flex flex-col gap-4">
        <Input
          {...register('username')}
          errorMessage={errors.username?.message}
          type="text"
          placeholder="Имя пользователя"
          iconStart="user"
        />
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
        />
        <Input
          {...register('repeatPassword')}
          errorMessage={errors.repeatPassword?.message}
          placeholder="Повторите пароль"
          iconStart="lock"
        />
        <Button className={'mx-auto'} type={'submit'}>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}
