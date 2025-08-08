import { atom } from 'shared/lib'
import { signUpUserFx } from 'entities/session/api'
import { createEffect, sample } from 'effector'
import { SignUpUserRequestDTO, UserDTO } from 'shared/api/api-client'
import { ApiError, ApiResponse } from 'shared/api'

export const sessionModel = atom(() => {
  const signUpUser = createEffect<
    SignUpUserRequestDTO,
    ApiResponse<UserDTO>,
    ApiError
  >(signUpUserFx)

  sample({
    clock: signUpUser.doneData,
    fn: (data) => console.log('все хорошо', data),
  })

  return { signUpUser }
})
