import { useHttp } from 'hooks/core/use-http/useHttp'


export const useUserApi = () => {
  const { post } = useHttp()

  const login = async (loginAttempt) => {
    const result = await post('user/login', loginAttempt)
    return result
  }

  return {
    login
  }
}
