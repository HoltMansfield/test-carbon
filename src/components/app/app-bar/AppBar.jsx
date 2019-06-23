import React from 'react'
import { Header, HeaderName, HeaderGlobalAction, HeaderGlobalBar } from 'carbon-components-react'
import UserAvatar from '@carbon/icons-react/es/user--avatar/16'
import Menu from '@carbon/icons-react/es/menu/16'
import Close from '@carbon/icons-react/es/close/16'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
import { useLoggedInUser } from 'hooks/core/use-logged-in-user/useLoggedInUser'



export function AppBar ({ children }) {
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()
  const { logout, loggedInUser } = useLoggedInUser()

  if(!loggedInUser) {
    return (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="/">Data Passports</HeaderName>
      </Header>
    )
  }

  return (
    <Header aria-label="IBM Platform Name">
      { showSideMenu &&
        <HeaderGlobalAction onClick={() => setShowSideMenu(false)} aria-label="navigation menu">
          <Close/>
        </HeaderGlobalAction>
      }
      { !showSideMenu &&
        <HeaderGlobalAction onClick={() => setShowSideMenu(true)} aria-label="navigation menu">
          <Menu/>
        </HeaderGlobalAction>
      }
      <HeaderName href="/">Data Passports</HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="user menu" onClick={() => logout()}>
          <UserAvatar/>
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      {children}
    </Header>
  )
}
