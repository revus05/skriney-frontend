import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from 'shared/api'
import { SignInUserRequestDTO, UserDTO } from 'shared/api/api-client'

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/users`,
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<ApiResponse<UserDTO>, SignInUserRequestDTO>({
      query: (body) => ({
        url: '/sign-up',
        method: 'POST',
        body,
      }),
    }),
    signInUser: builder.mutation<ApiResponse<UserDTO>, SignInUserRequestDTO>({
      query: (body) => ({
        url: '/sign-in',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
  }),
})

export default authApi
export const { useSignInUserMutation, useSignUpUserMutation } = authApi
