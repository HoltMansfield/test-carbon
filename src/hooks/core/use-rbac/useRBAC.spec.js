import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here
const expectedRole = 'Admin'
const roles = [expectedRole]
const loggedInUser = { firstName: 'Pascal', lastName: 'Siakim', roles }
const useLoggedInUserDouble = {
  useLoggedInUser: () => {
    return {
      loggedInUser
    }
  }
}
td.replace('hooks/core/use-logged-in-user/useLoggedInUser', useLoggedInUserDouble)

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useRBAC } = require('./useRBAC')


afterEach(() => {
  td.reset() // resets all test doubles
})

test('hasAccess returns true when user has required role', () => {
  // render the hook in an unseen component
  const { result } = renderHook(() => useRBAC())

  const actual = result.current.hasAccess([expectedRole])

  // assert that our intial value is as expected
  expect(actual).toEqual(true)
})

test('hasAccess returns false when user DOES NOT HAVE the required role', () => {
  // render the hook in an unseen component
  const { result } = renderHook(() => useRBAC())

  const actual = result.current.hasAccess(['Ninja'])

  // assert that our intial value is as expected
  expect(actual).toEqual(false)
})
