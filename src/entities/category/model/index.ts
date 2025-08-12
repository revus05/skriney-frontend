import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDTO } from 'shared/api/api-client'

type InitialState = {
  categories: CategoryDTO[]
}

const initialState: InitialState = {
  categories: [],
}

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryDTO[]>) => {
      state.categories = action.payload
    },
    addCategory: (state, action: PayloadAction<CategoryDTO>) => {
      state.categories.push(action.payload)
    },
  },
})

export const { setCategories, addCategory } = categorySlice.actions
export default categorySlice.reducer
