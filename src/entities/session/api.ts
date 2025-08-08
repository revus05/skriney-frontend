import { createEffect } from 'effector'
import { api, ApiError, ApiResponse, handleApiError } from 'shared/api'
import { SignUpUserRequestDTO, UserDTO } from 'shared/api/api-client'

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
