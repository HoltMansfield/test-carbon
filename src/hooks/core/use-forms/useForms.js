import { validateYupSchema } from 'formik'


export const useForms = () => {
  const formIsValid = (values, validationSchema) => {
    try {
      validateYupSchema(values, validationSchema, true)
      return true
    } catch (err) {
      return false
    }
  }

  const getErrors = (fieldName, errors, touched) => {
    if (errors[fieldName] && touched[fieldName]) {
      return errors[fieldName]
    }

    return null
  }

  const hasErrors = (fieldName, errors, touched) => {
    return getErrors(fieldName, errors, touched) !== null
  }

  return {
    formIsValid,
    getErrors,
    hasErrors
  }
}
