import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import {
  setBankAccounts,
  useGetBankAccountsMutation,
} from 'entities/bank-account'

export const useGetBankAccounts = () => {
  const [getBankAccounts] = useGetBankAccountsMutation()
  const dispatch = useAppDispatch()
  const bankAccounts = useAppSelector(
    (state) => state.bankAccountsSlice.bankAccounts,
  )

  useEffect(() => {
    const fetchBankAccounts = async () => {
      const response = await getBankAccounts().unwrap()
      dispatch(setBankAccounts(response.data))
    }

    fetchBankAccounts()
  }, [dispatch, getBankAccounts])

  return bankAccounts
}
