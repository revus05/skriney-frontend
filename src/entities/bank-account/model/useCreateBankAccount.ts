'use client'

import { useAppDispatch } from 'shared/lib'
import { CreateBankAccountRequestDTO, getApiError } from 'shared/api'
import { useCreateBankAccountMutation } from '../api'
import { addBankAccount } from '../model'

export const useCreateBankAccount = () => {
  const [createBankAccount] = useCreateBankAccountMutation()
  const dispatch = useAppDispatch()

  return async (data: CreateBankAccountRequestDTO) => {
    try {
      const res = await createBankAccount(data).unwrap()
      if (res && res.data) {
        dispatch(addBankAccount(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
