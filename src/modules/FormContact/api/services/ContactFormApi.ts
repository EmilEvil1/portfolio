import service from 'helpers/axios'
import { IFormDefaultProps } from 'modules/FormContact/types'

export const ContactFormService = {
  sendForm: (data: IFormDefaultProps) =>
    service.post('https://jsonplaceholder.typicode.com/todsos/1', data),
  getInfo: () => service.get('https://jsonplaceholder.typicode.com/todos/1'),
  getInfoTest: () => service.get('./json/rusLanguage.json'),
}
