import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDTO } from 'shared/api/api-client'

type InitialState = {
  user: UserDTO | null
}

const initialState: InitialState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserDTO>) => {
      state.user = action.payload
    },
  },
})

export const { signIn } = authSlice.actions
export default authSlice.reducer
