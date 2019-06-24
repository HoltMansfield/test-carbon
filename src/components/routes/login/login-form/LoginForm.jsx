import React from 'react'
import Flex from 'flexbox-react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { SubmitButton, FormikTextField } from 'components'
// import { } from './styled'


function LoginFormRaw (props) {
  const { values, onSubmit } = props

  return (
    <Flex flexDirection="column">
      <Flex>
        <FormikTextField
          id="domain"
          label="Domain"
          formikProps={props}
        />
      </Flex>
      <Flex>
        <FormikTextField
          id="userName"
          label="Username"
          formikProps={props}
        />
      </Flex>
      <Flex>
        <FormikTextField
          id="password"
          label="Password"
          formikProps={props}
          type="password"
        />
      </Flex>
      <Flex>
        <SubmitButton
          onSubmit={() => onSubmit(values)}
          values={values}
          validationSchema={validationSchema}
        >
          Save
        </SubmitButton>
      </Flex>
    </Flex>
  )
}
const validationSchema = Yup.object().shape({
  domain: Yup.string().required('Domain is required'),
  userName: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})
const formikConfig = {
  validationSchema,
  validateOnChange: true,
  enableReinitialize: true,
  mapPropsToValues: props => {
    return {
      domain: '',
      userName: '',
      password: '',
    }
  }
}
export const LoginForm = withFormik(formikConfig)(LoginFormRaw)
