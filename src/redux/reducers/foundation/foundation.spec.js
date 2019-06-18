import { foundation, initialState } from './foundation'
import * as actions from '../../actions'


test('should handle initial state', () => {
  expect(foundation(undefined, {})).toEqual(initialState)
})

test('should set loggedInUser to new value', () => {
  const newLoggedInUser = { name: 'Lorem' }
  const expectedState = {
    ...initialState,
    loggedInUser: newLoggedInUser
  }

  expect(foundation(undefined, actions.foundation.setLoggedInUser(newLoggedInUser)))
    .toEqual(expectedState)
})

test('should set selectedLanguage to new value', () => {
  const newLanguage = 'fr'
  const expectedState = {
    ...initialState,
    selectedLanguage: newLanguage
  }

  expect(foundation(undefined, actions.foundation.setSelectedLanguage(newLanguage)))
    .toEqual(expectedState)
})

test('should set showSpinner to new value', () => {
  const newShowSpinnerValue = true
  const expectedState = {
    ...initialState,
    showSpinner: newShowSpinnerValue
  }

  expect(foundation(undefined, actions.foundation.setShowSpinner(newShowSpinnerValue)))
    .toEqual(expectedState)
})

test('should set showOverlay to new value', () => {
  const newShowOverlayValue = true
  const expectedState = {
    ...initialState,
    showOverlay: newShowOverlayValue
  }

  expect(foundation(undefined, actions.foundation.setShowOverlay(newShowOverlayValue)))
    .toEqual(expectedState)
})

test('should set showSideMenu to new value', () => {
  const newValue = 'new-value'
  const expectedState = {
    ...initialState,
    showSideMenu: newValue
  }
  // create an action
  const action = actions.foundation.setShowSideMenu(newValue)
  // test the reducer with an action and an inital state
  const updatedState = foundation(initialState, action)
  // confirm that state was correctly updated
  expect(updatedState).toEqual(expectedState)
})
