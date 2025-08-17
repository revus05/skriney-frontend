import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDTO } from 'shared/api'

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
    deleteCategory: (state, action: PayloadAction<CategoryDTO>) => {
      state.categories = state.categories.filter(
        (category) => category.uuid !== action.payload.uuid,
      )
    },
  },
})

export const { setCategories, addCategory, deleteCategory } =
  categorySlice.actions
export default categorySlice.reducer
