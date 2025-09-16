'use client'

import { useAppDispatch } from 'shared/lib'
import { getApiError, UpdateBankAccountRequestDTO } from 'shared/api'
import { useUpdateBankAccountMutation } from '../api'
import { updateBankAccount } from '../model'

export const useUpdateBankAccount = () => {
  const [updateBankAccountFn] = useUpdateBankAccountMutation()
  const dispatch = useAppDispatch()

  return async (uuid: string, body: UpdateBankAccountRequestDTO) => {
    try {
      const res = await updateBankAccountFn({ uuid, body }).unwrap()
      if (res && res.data) {
        dispatch(updateBankAccount(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
