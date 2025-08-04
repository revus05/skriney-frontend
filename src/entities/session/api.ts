import { createEffect } from 'effector'
import { api, ApiError, ApiResponse, handleApiError } from 'shared/api'
import { RegisterRequestDTO, UserDTO } from 'shared/api/api-client'

export const registerUserFx = createEffect<
  RegisterRequestDTO,
  ApiResponse<UserDTO>,
  ApiError
>(async (form) => {
  try {
    const response = await api.post('/users/register', form)
    return response.data
  } catch (error) {
    throw handleApiError(error)
  }
})
