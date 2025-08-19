import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDTO, CategoryStatDTO } from 'shared/api'

type InitialState = {
  categories: CategoryDTO[]
  stats: CategoryStatDTO[]
}

const initialState: InitialState = {
  categories: [],
  stats: [],
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
    setCategoriesStats: (state, action: PayloadAction<CategoryStatDTO[]>) => {
      state.stats = action.payload
    },
  },
})

export const {
  setCategories,
  addCategory,
  deleteCategory,
  setCategoriesStats,
} = categorySlice.actions
export default categorySlice.reducer
