'use client'

import { useAppDispatch } from 'shared/lib'
import { useRouter } from 'next/navigation'
import { paths } from 'shared/navigation'
import { useSignOutUserMutation } from 'entities/user/api'
import { signOut } from 'entities/user/model'

export const useSignOutSubmit = () => {
  const [signOutUser] = useSignOutUserMutation()
  const dispatch = useAppDispatch()
  const router = useRouter()

  return async () => {
    try {
      const res = await signOutUser().unwrap()
      if (res) {
        dispatch(signOut())
        router.replace(paths.signIn)
      }
    } catch (error) {
      console.error(error)
    }
  }
}
