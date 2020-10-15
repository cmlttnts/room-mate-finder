import './LoginForm.scss'
import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const requiredFieldMsg = 'This field is required'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required(requiredFieldMsg),
  password: Yup.string()
    .min(6, 'minimum 6 characters')
    .required(requiredFieldMsg),
})

const initialValues = {
  email: '',
  password: '',
}

const LoginForm = (): React.ReactElement | null => {
  return (
    <div className="LoginForm">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <label htmlFor="email">Email: </label>
          <Field name="email" type="email" autoComplete="off" id="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password: </label>
          <Field
            name="password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm
