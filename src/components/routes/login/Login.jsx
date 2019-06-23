import React from 'react'
import Flex from 'flexbox-react'
import { LoginForm } from './login-form/LoginForm'
// import { useLoginLogic } from './useLoginLogic'
// import { } from './styled'


export default function Login () {
  // const { someValue } = useLoginLogic()
  const onSubmit = (data) => {
    debugger
  }

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-12 bx--col-lg-4">
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}
