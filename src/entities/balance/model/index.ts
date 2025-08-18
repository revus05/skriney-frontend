import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BalanceSummaryDTO } from 'shared/api'

type InitialState = {
  summary: BalanceSummaryDTO | null
}

const initialState: InitialState = {
  summary: null,
}

const balanceSlice = createSlice({
  name: 'balanceSlice',
  initialState,
  reducers: {
    setBalanceSummary: (state, action: PayloadAction<BalanceSummaryDTO>) => {
      state.summary = action.payload
    },
  },
})

export const { setBalanceSummary } = balanceSlice.actions
export default balanceSlice.reducer
