'use server'

import { cookies, headers } from 'next/headers'
import { ApiResponse, UserDTO, UserSettingsDTO } from 'shared/api'

export type PreloadedState = {
  authSlice: { user: UserDTO | null }
  userSettingsSlice: { userSettings: UserSettingsDTO | null }
  language: 'EN' | 'RU'
  theme: 'DARK' | 'LIGHT' | 'SYSTEM'
}

export const getPreloadedState = async (): Promise<PreloadedState> => {
  const cookiesObj = await cookies()
  const jwt = cookiesObj.get('jwt')?.value

  const language = await getUserLanguage()

  if (!jwt) {
    return {
      authSlice: { user: null },
      userSettingsSlice: { userSettings: null },
      language,
      theme: 'SYSTEM',
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
    cache: 'no-store',
    headers: {
      Cookie: `jwt=${jwt}`,
    },
  })

  const user = await res.json().then((res: ApiResponse<UserDTO>) => res.data)

  if (!user.userSettings.language) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user-settings/update-language`,
      {
        method: 'POST',
        cache: 'no-store',
        headers: {
          Cookie: `jwt=${jwt}`,
        },
        body: JSON.stringify({ language }),
      },
    )

    const updatedUserSettings = await res
      .json()
      .then((res: ApiResponse<UserSettingsDTO>) => res.data)

    user.userSettings.language = updatedUserSettings.language as 'EN' | 'RU'
  }

  return {
    authSlice: { user },
    userSettingsSlice: { userSettings: user.userSettings },
    language: user.userSettings.language,
    theme: user.userSettings.userTheme,
  }
}

export const getUserLanguage = async (): Promise<'EN' | 'RU'> => {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language')
  const language =
    acceptLanguage?.split(',')[0].split('-')[0].toUpperCase() || 'EN'

  if (language === 'EN' || language === 'RU') {
    return language
  }

  return 'EN'
}
