'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { CreateBankAccountRequestDTO } from 'shared/api/api-client'
import {
  addBankAccount,
  useCreateBankAccountMutation,
} from 'entities/bank-account'
import { CurrencyType } from 'entities/user-settings'

export function useCreateBankAccountSubmit() {
  const [createBankAccount] = useCreateBankAccountMutation()
  const dispatch = useAppDispatch()
  type FormDate = Omit<CreateBankAccountRequestDTO, 'currency'> & {
    currency: string
  }

  return async (values: FormDate) => {
    try {
      const res = await createBankAccount({
        ...values,
        currency: values.currency as CurrencyType,
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
