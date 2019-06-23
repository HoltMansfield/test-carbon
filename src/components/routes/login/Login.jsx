import React from 'react'
import { LoginForm } from './login-form/LoginForm'
import { useUserApi } from 'hooks/rest-api/use-user-api/useUserApi'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { useLoggedInUser } from 'hooks/core/use-logged-in-user/useLoggedInUser'
// import { useLoginLogic } from './useLoginLogic'
// import { } from './styled'


export default function Login () {
  const { login: serverLogin } = useUserApi()
  const { login } = useLoggedInUser()
  const { history } = useRouter()
  // const { someValue } = useLoginLogic()

  // const onSubmit = async (data) => {
  //   const result = await login(data)
  //   if(result) {
  //     login()
  //     history.push('/find-policy')
  //   }
  // }
  const onSubmit = async (data) => {
    await serverLogin()
    if(data.domain === 'raptors' && data.usernameName === 'test' && data.password === '1234') {
      login({ firstName: 'Pascal', lastName: 'Siakim' })
      setTimeout(() => {
        history.push('/find-policy')
      }, 2000)
    }
  }

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-0 bx--col-lg-4">

        </div>
        <div className="bx--col-sm-12 bx--col-lg-4">
          <LoginForm onSubmit={onSubmit} />
        </div>
        <div className="bx--col-sm-0 bx--col-lg-4">

        </div>
      </div>
    </div>
  )
}
