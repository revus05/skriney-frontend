'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import {
  addBankAccount,
  useCreateBankAccountMutation,
} from 'entities/bank-account'
import { CurrencyType } from 'entities/user-settings'
import { CreateBankAccountFormData } from 'features/bank-accounts/create-bank-account/model/schema'

export const useCreateBankAccountSubmit = () => {
  const [createBankAccount] = useCreateBankAccountMutation()
  const dispatch = useAppDispatch()

  return async (data: CreateBankAccountFormData) => {
    try {
      const res = await createBankAccount({
        title: data.title,
        currency: data.currency as CurrencyType,
        balance: +data.balance,
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
