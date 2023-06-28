import * as yup from 'yup'

export const contactForm = () =>
  yup.object({
    name: yup.string().required('Заполните поле'),
    email: yup.string().email('Введите корректную почту').required('Заполните поле'),
    subject: yup.string().min(6, 'Минимум 6 символов').required('Заполните поле'),
    message: yup.string().min(11, 'Минимум 6 символов').required('Заполните поле'),
  })
