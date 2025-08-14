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
  },
})

export const { setBankAccounts } = bankAccountsSlice.actions
export default bankAccountsSlice.reducer
