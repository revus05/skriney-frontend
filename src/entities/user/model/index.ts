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
    updateUserImage: (state, action: PayloadAction<string>) => {
      if (!state.user) {
        return
      }

      state.user.image = action.payload
    },
  },
})

export const { signIn, updateUserImage } = userSlice.actions
export default userSlice.reducer
