import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BankAccountDTO } from 'shared/api'

type InitialState = {
  bankAccounts: BankAccountDTO[]
}

const initialState: InitialState = {
  bankAccounts: [],
}

const bankAccountsSlice = createSlice({
  name: 'bankAccountSlice',
  initialState,
  reducers: {
    setBankAccounts: (state, action: PayloadAction<BankAccountDTO[]>) => {
      state.bankAccounts = action.payload
    },
    addBankAccount: (state, action: PayloadAction<BankAccountDTO>) => {
      state.bankAccounts.push(action.payload)
    },
    deleteBankAccount: (state, action: PayloadAction<BankAccountDTO>) => {
      state.bankAccounts = state.bankAccounts.filter(
        (bankAccount) => bankAccount.uuid !== action.payload.uuid,
      )
    },
    updateBankAccount: (state, action: PayloadAction<BankAccountDTO>) => {
      state.bankAccounts = state.bankAccounts.map((bankAccount) =>
        bankAccount.uuid === action.payload.uuid ? action.payload : bankAccount,
      )
    },
  },
})

export const {
  setBankAccounts,
  addBankAccount,
  deleteBankAccount,
  updateBankAccount,
} = bankAccountsSlice.actions
export default bankAccountsSlice.reducer
