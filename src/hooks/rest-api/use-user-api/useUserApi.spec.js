import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useUserApi } = require('./useUserApi')


afterEach(() => {
  td.reset() // resets all test doubles
})

test('login returns expected value', () => {
  // render the hook in an unseen component
  const { result } = renderHook(() => useUserApi())

  const actual = result.current.login()

  // assert that our intial value is as expected
  expect(actual).toEqual('')
})
