import {
  setTransactions,
  useGetTransactionsMutation,
} from 'entities/transaction'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'

export const useGetTransactions = () => {
  const [getTransactions] = useGetTransactionsMutation()
  const dispatch = useAppDispatch()
  const transactions = useAppSelector(
    (state) => state.transactionSlice.transactions,
  )

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await getTransactions().unwrap()
      dispatch(setTransactions(response.data))
    }

    fetchTransactions()
  }, [dispatch, getTransactions])

  return transactions
}
