import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here
const post = td.func()
const useHttpDouble = {
  useHttp: () => {
    return {
      post
    }
  }
}
td.replace('hooks/core/use-http/useHttp', useHttpDouble)

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useUserApi } = require('./useUserApi')


afterEach(() => {
  td.reset() // resets all test doubles
})

test('login returns expected value', async () => {
  const loginAttempt = { userName: 'Lorem', password: 'Ipsum' }
  const expectedUser = { firstName: 'Lorem', lastName: 'Ever' }


  // render the hook in an unseen component
  const { result } = renderHook(() => useUserApi())

  td.when(post('user/login', loginAttempt))
    .thenResolve(expectedUser)

  const actual = await result.current.login(loginAttempt)

  // assert that our intial value is as expected
  expect(actual).toEqual(expectedUser)
})
