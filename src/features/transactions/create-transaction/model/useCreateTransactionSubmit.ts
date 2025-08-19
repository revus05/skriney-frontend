'use client'

import { useAppDispatch } from 'shared/hooks'
import { getApiError } from 'shared/api'
import { useCreateTransactionMutation } from 'entities/transaction/api'
import { addTransaction } from 'entities/transaction'
import { CreateTransactionFormData } from './schema'
import { CurrencyType } from 'entities/user-settings'

export const useCreateTransactionSubmit = () => {
  const [createTransaction] = useCreateTransactionMutation()
  const dispatch = useAppDispatch()

  return async (data: CreateTransactionFormData) => {
    const formattedData = {
      amount: data.amount,
      currency: data.currency as CurrencyType,
      bankAccountUuid: data.bankAccount,
      categoryUuid: data.category,
    }

    try {
      const res = await createTransaction(formattedData).unwrap()
      if (res && res.data) {
        dispatch(addTransaction(res.data))
      }
    } catch (error) {
      const err = getApiError<Record<string, string>>(error)
      console.log(err)
    }
  }
}
