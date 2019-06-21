import React from 'react'
import { Header, HeaderName, HeaderGlobalAction, HeaderGlobalBar } from 'carbon-components-react'
import UserAvatar from '@carbon/icons-react/es/user--avatar/16'
import Menu from '@carbon/icons-react/es/menu/16'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'



export function AppBar ({ children }) {
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()

  return (
    <Header aria-label="IBM Platform Name">
      <HeaderGlobalAction onClick={() => setShowSideMenu(!showSideMenu)} aria-label="navigation menu">
        <Menu/>
      </HeaderGlobalAction>
      <HeaderName href="/">Data Passports</HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="user menu">
          <UserAvatar/>
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      {children}
    </Header>
  )
}
