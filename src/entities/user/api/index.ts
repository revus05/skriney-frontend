import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  baseQuery,
  SignInUserRequestDTO,
  UserDTO,
} from 'shared/api'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery('users'),
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
        body,
      }),
    }),
  }),
})

export default userApi
export const { useSignInUserMutation, useSignUpUserMutation } = userApi
