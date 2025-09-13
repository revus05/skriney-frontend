'use client'

import { createContext, FC, ReactNode, useContext } from 'react'
import { getValueWithStringKey } from 'shared/lib'
import en from './messages/en.json'
import ru from './messages/ru.json'

export const languagesMap = {
  en,
  ru,
} as const

type NestedStringObject = {
  [key: string]: string | NestedStringObject
}

type Language = keyof typeof languagesMap

type I18nContextType = {
  language: Language
  messages: NestedStringObject
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

type I18ProviderProps = {
  children: ReactNode
  language: Language
}

export const I18Provider: FC<I18ProviderProps> = ({ children, language }) => {
  return (
    <I18nContext.Provider
      value={{ language, messages: languagesMap[language] }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export type Translate = (key: string, fallback?: string) => string

export const useTranslation = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within an I18Provider')
  }

  const { messages } = context

  const t: Translate = (key: string, fallback?: string): string =>
    (getValueWithStringKey(messages, key) as string) || fallback || key

  return t
}
