import React from 'react'
import Flex from 'flexbox-react'
import { TextInput } from 'carbon-components-react'
import { useForms } from 'hooks/core/use-forms/useForms.js'
import { ErrorMessage } from './ErrorMessage'
/*
  <FormikTextField
    id="ID_HERE"
    label="LABEL_HERE"
    formikProps={props}
  />
*/
export function FormikTextField (props) {
  const { getErrors, hasErrors } = useForms()
  const { id, label, type } = props
  const { values, errors, touched, handleChange, handleBlur } = props.formikProps

  return (
    <Flex flexDirection="column" flexGrow={1} margin="10px 0">
      <TextInput
        id={id}
        name={id}
        value={values[id]}
        labelText={label}
        invalid={hasErrors(id, errors, touched)}
        onChange={handleChange}
        onBlur={handleBlur}
        type={ type || 'text' }
      />
      <Flex margin="10px">
        <ErrorMessage text={getErrors(id, errors, touched)} />
      </Flex>
    </Flex>
  )
}
