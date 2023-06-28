import service from 'helpers/axios'

export const LanguageService = {
  setLanguageType: (type: string) =>
    type === 'rus'
      ? service.get('./json/rusLanguage.json')
      : service.get('./json/engLanguage.json'),
}
