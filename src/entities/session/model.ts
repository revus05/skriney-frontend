import { atom } from 'shared/lib'
import { getMeWithJwtFx, signInUserFx, signUpUserFx } from './api'
import { createEffect, createStore, sample } from 'effector'
import {
  SignInUserRequestDTO,
  SignUpUserRequestDTO,
  UserDTO,
} from 'shared/api/api-client'
import { ApiError, ApiResponse } from 'shared/api'
import { createGate } from 'effector-react'
import Cookie from 'js-cookie'
import { navigationModel, paths } from 'shared/navigation'
import { createAction } from 'effector-action'

export const sessionModel = atom(() => {
  const SessionGate = createGate()

  const signUpUser = createEffect<
    SignUpUserRequestDTO,
    ApiResponse<UserDTO>,
    ApiError
  >(signUpUserFx)

  const signInUser = createEffect<
    SignInUserRequestDTO,
    ApiResponse<UserDTO>,
    ApiError
  >(signInUserFx)

  const getMeWithJwt = createEffect<void, ApiResponse<UserDTO>, ApiError>(
    getMeWithJwtFx,
  )

  const $user = createStore<UserDTO | null>(null)

  const $jwtCookie = createStore<string | null>(Cookie.get('jwt') || null)

  sample({
    clock: signUpUserFx.doneData,
    fn: () => paths.signIn,
    target: navigationModel.pushFx,
  })

  createAction(signInUserFx.doneData, {
    target: {
      user: $user,
      push: navigationModel.pushFx,
    },
    fn: (target, { data }) => {
      target.user(data)
      target.push(paths.home)
    },
  })

  sample({
    clock: [SessionGate.open, signInUserFx.doneData],
    fn: () => Cookie.get('jwt') || null,
    target: $jwtCookie,
  })

  sample({
    clock: SessionGate.open,
    source: $jwtCookie,
    filter: (jwtCookie) => !jwtCookie,
    fn: () => paths.signIn,
    target: navigationModel.pushFx,
  })

  sample({
    clock: SessionGate.open,
    source: $jwtCookie,
    filter: (jwtCookie) => !!jwtCookie,
    target: getMeWithJwt,
  })

  return { $user, signUpUser, signInUser, SessionGate, $jwtCookie }
})
