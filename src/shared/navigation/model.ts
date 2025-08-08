import { createGate } from 'effector-react'
import { atom } from 'shared/lib'
import { attach, createStore } from 'effector'

export interface RouterLike {
  push: (url: string) => void | Promise<boolean>
  replace?: (url: string) => void | Promise<boolean>
  back?: () => void
}

export const navigationModel = atom(() => {
  const RouterGate = createGate<{ router: RouterLike }>()

  const $router = createStore<RouterLike | null>(null, {
    serialize: 'ignore',
  })
    .on(RouterGate.state, (_, { router }) => router)
    .reset(RouterGate.close)

  const pushFx = attach({
    source: $router,
    effect: (router, url: string) => router?.push(url),
  })

  return { RouterGate, pushFx }
})
