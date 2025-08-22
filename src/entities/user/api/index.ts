import { createApi } from '@reduxjs/toolkit/query/react'
import {
  ApiResponse,
  baseQuery,
  SignInUserRequestDTO,
  UpdateUserImageRequestDTO,
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
    updateUserImage: builder.mutation<
      ApiResponse<UserDTO>,
      UpdateUserImageRequestDTO
    >({
      query: (body) => ({
        url: '/update-image',
        method: 'PATCH',
        body,
      }),
    }),
  }),
})

export default userApi
export const {
  useSignInUserMutation,
  useSignUpUserMutation,
  useUpdateUserImageMutation,
} = userApi
