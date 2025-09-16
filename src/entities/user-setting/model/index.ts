import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserSettingsDTO } from 'shared/api'

type InitialState = {
  userSettings: UserSettingsDTO | null
}

const initialState: InitialState = {
  userSettings: null,
}

const userSettingsSlice = createSlice({
  name: 'userSettingsSlice',
  initialState,
  reducers: {
    setUserSettings: (state, action: PayloadAction<UserSettingsDTO>) => {
      state.userSettings = action.payload
    },
  },
})

export const { setUserSettings } = userSettingsSlice.actions
export default userSettingsSlice.reducer
