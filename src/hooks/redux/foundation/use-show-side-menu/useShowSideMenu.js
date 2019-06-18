import { useSubstate } from 'use-substate'
import * as actions from 'redux/actions'


export const useShowSideMenu = () => {
  const [showSideMenu, dispatch] = useSubstate(state => {
    return state.foundation.showSideMenu
  })

  const setShowSideMenu = (newShowSideMenu) => {
    dispatch(actions.foundation.setShowSideMenu(newShowSideMenu))
  }

  return {
    showSideMenu,
    setShowSideMenu
  }
}
