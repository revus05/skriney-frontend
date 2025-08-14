import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TransactionDTO } from 'shared/api/api-client'

type InitialState = {
  transactions: TransactionDTO[]
}

const initialState: InitialState = {
  transactions: [],
}

const transactionSlice = createSlice({
  name: 'transactionSlice',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<TransactionDTO[]>) => {
      state.transactions = action.payload
    },
    addTransaction: (state, action: PayloadAction<TransactionDTO>) => {
      state.transactions.push(action.payload)
    },
    deleteTransaction: (state, action: PayloadAction<TransactionDTO>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.uuid !== action.payload.uuid,
      )
    },
  },
})

export const { setTransactions, addTransaction, deleteTransaction } =
  transactionSlice.actions
export default transactionSlice.reducer
