import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TransactionDTO } from 'shared/api'

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
      state.transactions = [action.payload, ...state.transactions]
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.uuid !== action.payload,
      )
    },
  },
})

export const { setTransactions, addTransaction, deleteTransaction } =
  transactionSlice.actions
export default transactionSlice.reducer
