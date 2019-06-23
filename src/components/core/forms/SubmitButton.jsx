import React from 'react'
import Flex from 'flexbox-react'
import { Button } from 'carbon-components-react'
import { useForms } from 'hooks/core/use-forms/useForms'


export function SubmitButton ({ children, onSubmit, values, validationSchema }) {
  const { formIsValid } = useForms()

  return (
    <Flex margin="10px 0">
      <Button onClick={onSubmit} disabled={!formIsValid(values, validationSchema)}>{children}</Button>
    </Flex>
  )
}
