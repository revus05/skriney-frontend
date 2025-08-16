import { cookies } from 'next/headers'
import { UserDTO, UserSettingsDTO } from 'shared/api/api-client'

export const getPreloadedUser = async (): Promise<{
  authSlice: { user: UserDTO | null }
  userSettingsSlice: { userSettings: UserSettingsDTO | null }
}> => {
  const cookiesObj = await cookies()
  const jwt = cookiesObj.get('jwt')?.value

  if (!jwt) {
    return {
      authSlice: { user: null },
      userSettingsSlice: { userSettings: null },
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
    cache: 'no-store',
    headers: {
      Cookie: `jwt=${jwt}`,
    },
  })

  const user = await res.json().then((res) => res.data)

  return {
    authSlice: { user },
    userSettingsSlice: { userSettings: user.userSettings },
  }
}
