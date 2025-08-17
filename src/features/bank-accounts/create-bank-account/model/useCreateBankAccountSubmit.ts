'use client'

import { useAppDispatch } from 'shared/hooks'
import { CreateBankAccountRequestDTO, getApiError } from 'shared/api'
import {
  addBankAccount,
  useCreateBankAccountMutation,
} from 'entities/bank-account'
import { CurrencyType } from 'entities/user-settings'

export const useCreateBankAccountSubmit = () => {
  const [createBankAccount] = useCreateBankAccountMutation()
  const dispatch = useAppDispatch()
  type FormDate = Omit<CreateBankAccountRequestDTO, 'currency'> & {
    currency: string
  }

  return async (data: FormDate) => {
    try {
      const res = await createBankAccount({
        ...data,
        currency: data.currency as CurrencyType,
      }).unwrap()
      if (res && res.data) {
        dispatch(addBankAccount(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
