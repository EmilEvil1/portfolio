import React, { FC } from 'react'
import { Form, Formik, FormikProps } from 'formik'
import { IFormDefaultProps } from './types'
import { contactForm } from './validation'
import { FormWrapper } from './styles'
import { Button, Input } from 'ui'
import { useGetLanguage } from 'modules'

export const FormContact: FC = () => {
  const { data } = useGetLanguage()

  const initialValueForm: IFormDefaultProps = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const onSubmit = (data: IFormDefaultProps) => {
    // contactFormApi.mutateAsync(data).catch((reason) => setError(reason.response.status))
    alert(JSON.stringify(data))
  }

  return (
    <Formik
      initialValues={initialValueForm}
      onSubmit={(value: IFormDefaultProps) => onSubmit(value)}
      validationSchema={contactForm}
      enableReinitialize
    >
      {(props: FormikProps<IFormDefaultProps>) => {
        const { values, touched, errors, handleChange, handleSubmit, ...other } = props
        const validate = Boolean(values.email && values.name && values.subject && values.message)
        return (
          <FormWrapper>
            <Form>
              <Input
                inputName='name'
                labelName={data?.fourth?.form?.name?.label}
                htmlFor='name'
                type='text'
                placeholder={data?.fourth?.form?.name?.placeholder}
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                {...other}
              />
              <Input
                inputName='email'
                labelName={data?.fourth?.form?.email?.label}
                htmlFor='email'
                type='email'
                placeholder={data?.fourth?.form?.email?.placeholder}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                {...other}
              />
              <Input
                inputName='subject'
                labelName={data?.fourth?.form?.subject?.label}
                htmlFor='subject'
                type='text'
                placeholder={data?.fourth?.form?.subject?.placeholder}
                value={values.subject}
                onChange={handleChange}
                error={touched.subject && Boolean(errors.subject)}
                helperText={touched.subject && errors.subject}
                {...other}
              />
              <Input
                inputName='message'
                labelName={data?.fourth?.form?.message?.label}
                htmlFor='message'
                type='text'
                placeholder={data?.fourth?.form?.message?.placeholder}
                value={values.message}
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                {...other}
              />
              <Button
                disabled={!validate}
                onClick={handleSubmit}
                text={data?.fourth?.form?.submitBtn}
              />
            </Form>
          </FormWrapper>
        )
      }}
    </Formik>
  )
}
