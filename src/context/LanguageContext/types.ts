import { Dispatch, ReactElement, SetStateAction } from 'react'
import { AxiosResponse } from 'axios'

export interface ILangContext {
  language: AxiosResponse | string | undefined
  setLanguage: Dispatch<SetStateAction<AxiosResponse | undefined>>
}

export type LanguageContextType = [language: string, value: (e: string) => void]

export interface ProviderProps {
  children: ReactElement
}
