'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { useCreateTransactionMutation } from 'entities/transaction/api'
import { addTransaction } from 'entities/transaction'
import { CreateTransactionFormValues } from './schema'
import { CurrencyType } from 'entities/user-settings'

export function useCreateTransactionSubmit() {
  const [createTransaction] = useCreateTransactionMutation()
  const dispatch = useAppDispatch()

  return async (values: CreateTransactionFormValues) => {
    const data = {
      sum: values.sum,
      currency: values.currency as CurrencyType,
      bankAccountUuid: values.bankAccount,
      categoryUuid: values.category,
    }

    try {
      const res = await createTransaction(data).unwrap()
      if (res && res.data) {
        dispatch(addTransaction(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
