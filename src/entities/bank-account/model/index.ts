import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BankAccountDTO } from 'shared/api/api-client'

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
  },
})

export const { setBankAccounts, addBankAccount, deleteBankAccount } =
  bankAccountsSlice.actions
export default bankAccountsSlice.reducer
