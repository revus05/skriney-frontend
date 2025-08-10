'use client'

import { signIn, useSignInUserMutation } from 'entities/session'
import { useAppDispatch } from 'shared/hooks'
import { useRouter } from 'next/navigation'
import { getApiError } from 'shared/api'
import { addToast } from '@heroui/toast'
import { createElement } from 'react'
import { Icons } from 'shared/ui'
import { SignInFormValues } from './schema'
import { paths } from 'shared/navigation'

export function useSignInSubmit() {
  const [signInUser] = useSignInUserMutation()
  const dispatch = useAppDispatch()
  const router = useRouter()

  return async (values: SignInFormValues) => {
    try {
      const res = await signInUser(values).unwrap()
      if (res && res.data) {
        dispatch(signIn(res.data))
        router.replace(paths.home)
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      if (err.status === 401)
        addToast({
          title: err.message,
          classNames: {
            base: 'border-border-neutral-primary bg-bg-neutral-tertiary/70 rounded-3xl border px-6 py-4 backdrop-blur-[32px]',
            title: 'text-text-semantic-error-primary font-bold',
            icon: 'fill-icon-semantic-error-primary font-bold',
          },
          icon: createElement(Icons.dollarCircle),
        })
    }
  }
}
