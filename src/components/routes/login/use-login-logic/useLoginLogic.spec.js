import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useLoginLogic } = require('./useLoginLogic')


afterEach(() => {
  td.reset() // resets all test doubles
})

test('logic returns expected value', () => {
  // render the hook in an unseen component
  const { result } = renderHook(() => useLoginLogic())

  const actual = result.current.logic()

  // assert that our intial value is as expected
  expect(actual).toEqual('')
})