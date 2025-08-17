import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  baseQuery,
  CategoryDTO,
  CreateCategoryRequestDTO,
  DeleteBankAccountRequestDTO,
} from 'shared/api'

const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: baseQuery('categories'),
  endpoints: (builder) => ({
    getCategories: builder.mutation<ApiResponse<CategoryDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
    createCategory: builder.mutation<
      ApiResponse<CategoryDTO>,
      CreateCategoryRequestDTO
    >({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
    }),
    deleteCategory: builder.mutation<
      ApiResponse<CategoryDTO>,
      DeleteBankAccountRequestDTO
    >({
      query: (body) => ({
        url: '/delete',
        method: 'DELETE',
        body,
      }),
    }),
  }),
})

export default categoriesApi
export const {
  useGetCategoriesMutation,
  useCreateCategoryMutation: useCreateTransactionMutation,
  useDeleteCategoryMutation: useDeleteTransactionMutation,
} = categoriesApi
