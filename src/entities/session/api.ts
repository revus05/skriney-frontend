import { createEffect } from 'effector'
import { api, ApiError, ApiResponse, handleApiError } from 'shared/api'
import {
  SignInUserRequestDTO,
  SignUpUserRequestDTO,
  UserDTO,
} from 'shared/api/api-client'

export const signUpUserFx = createEffect<
  SignUpUserRequestDTO,
  ApiResponse<UserDTO>,
  ApiError
>(async (form) => {
  try {
    const response = await api.post('/users/sign-up', form)
    return response.data
  } catch (error) {
    throw handleApiError(error)
  }
})

export const signInUserFx = createEffect<
  SignInUserRequestDTO,
  ApiResponse<UserDTO>,
  ApiError
>(async (form) => {
  try {
    const response = await api.post('/users/sign-in', form, {
      withCredentials: true,
    })
    return response.data
  } catch (error) {
    throw handleApiError(error)
  }
})

export const getMeWithJwtFx = createEffect<
  void,
  ApiResponse<UserDTO>,
  ApiError
>(async () => {
  try {
    const response = await api.get('/users/me', { withCredentials: true })
    return response.data
  } catch (error) {
    throw handleApiError(error)
  }
})
