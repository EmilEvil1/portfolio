import { useQuery } from 'react-query'
import { LanguageService } from '../services'
import { Root } from 'all'

export const useChangeLanguage = (type: string) =>
  useQuery('Language', () => LanguageService.setLanguageType(type))
export const useGetLanguage = () => useQuery<Root>('Language')
