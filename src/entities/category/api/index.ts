import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from 'shared/api'
import { CategoryDTO, CreateCategoryRequestDTO } from 'shared/api/api-client'

const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/categories`,
  }),
  endpoints: (builder) => ({
    getCategories: builder.mutation<ApiResponse<CategoryDTO[]>, void>({
      query: () => ({
        url: '',
        method: 'GET',
        credentials: 'include',
      }),
    }),
    createCategory: builder.mutation<
      ApiResponse<CategoryDTO>,
      CreateCategoryRequestDTO
    >({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
  }),
})

export default categoriesApi
export const { useGetCategoriesMutation, useCreateCategoryMutation } =
  categoriesApi
