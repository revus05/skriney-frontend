import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BalanceSummaryDTO, DailyBalanceDTO } from 'shared/api'

type InitialState = {
  dailyBalances: DailyBalanceDTO[]
  summary: BalanceSummaryDTO | null
}

const initialState: InitialState = {
  dailyBalances: [],
  summary: null,
}

const balanceSlice = createSlice({
  name: 'balanceSlice',
  initialState,
  reducers: {
    setDailyBalances: (state, action: PayloadAction<DailyBalanceDTO[]>) => {
      state.dailyBalances = action.payload
    },
    setBalanceSummary: (state, action: PayloadAction<BalanceSummaryDTO>) => {
      state.summary = action.payload
    },
  },
})

export const { setDailyBalances, setBalanceSummary } = balanceSlice.actions
export default balanceSlice.reducer
