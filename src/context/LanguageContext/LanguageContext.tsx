import React, { createContext, FC, useContext, useState } from 'react'
import { LanguageContextType, ProviderProps } from './types'

const LanguageHandling = createContext<LanguageContextType>(['rus', (value: string) => value])

export const useLanguageContext = () => useContext(LanguageHandling)

export const LanguageContext: FC<ProviderProps> = ({ children }) => {
  const language = useState<string>('rus')
  return <LanguageHandling.Provider value={language}>{children}</LanguageHandling.Provider>
}
