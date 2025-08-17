import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDTO } from 'shared/api'

type InitialState = {
  user: UserDTO | null
}

const initialState: InitialState = {
  user: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserDTO>) => {
      state.user = action.payload
    },
  },
})

export const { signIn } = userSlice.actions
export default userSlice.reducer
