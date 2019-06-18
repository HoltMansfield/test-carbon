import * as actions from '../'

test('setLoggedInUser should create SET_USER action', () => {
  const expected = {}

  expect(actions.foundation.setLoggedInUser(expected)).toEqual({
    type: 'SET_USER',
    loggedInUser: expected
  })
})

test('setSelectedLanguage should create SET_SELECTED_LANGUAGE action', () => {
  const expected = 'en'

  expect(actions.foundation.setSelectedLanguage(expected)).toEqual({
    type: 'SET_SELECTED_LANGUAGE',
    selectedLanguage: expected
  })
})

test('setShowSpinner should create SET_SHOW_SPINNER action', () => {
  const expected = true

  expect(actions.foundation.setShowSpinner(expected)).toEqual({
    type: 'SET_SHOW_SPINNER',
    newSpinnerState: expected,
  })
})

test('setShowOverlay should create SET_SHOW_OVERLAY action', () => {
  const expected = true

  expect(actions.foundation.setShowOverlay(expected)).toEqual({
    type: 'SET_SHOW_OVERLAY',
    newOverlayState: expected,
  })
})

test('should create the expected setShowSideMenu action', () => {
  const expectedValue = {}
  const expectedAction = {
    type: 'SET_SHOW_SIDE_MENU',
    showSideMenu: expectedValue
  }
  // execute our action creator
  const action = actions.foundation.setShowSideMenu(expectedValue)

  // assert that our action creator creates the expected action
  expect(action).toEqual(expectedAction)
})
