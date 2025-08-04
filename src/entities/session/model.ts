import { atom } from 'shared/lib'
import { registerUserFx } from 'entities/session/api'
import { createEffect, sample } from 'effector'
import { RegisterRequestDTO, UserDTO } from 'shared/api/api-client'
import { ApiError, ApiResponse } from 'shared/api'

export const sessionModel = atom(() => {
  const registerUser = createEffect<
    RegisterRequestDTO,
    ApiResponse<UserDTO>,
    ApiError
  >(registerUserFx)

  sample({
    clock: registerUser.doneData,
    fn: (data) => console.log('все хорошо', data),
  })

  return { registerUser }
})
