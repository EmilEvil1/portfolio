import { useMutation, useQuery } from 'react-query'
import { ContactFormService } from '../services'

export const useSendContactFrom = () => useMutation('postContactForm', ContactFormService.sendForm)
export const useInfo = () => useQuery('TestInfo', ContactFormService.getInfo)
export const useInfoTest = () => useQuery('TestInfo1', ContactFormService.getInfoTest)
