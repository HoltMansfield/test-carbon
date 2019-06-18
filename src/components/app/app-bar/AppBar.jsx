import React from 'react'
import Flex from 'flexbox-react'
import { Header, HeaderName, HeaderGlobalAction, HeaderGlobalBar } from 'carbon-components-react'
import UserAvatar from '@carbon/icons-react/es/user--avatar/16'
import Menu from '@carbon/icons-react/es/menu/16'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
// import { } from './styled'


export function AppBar () {
  const { isLargeDesktop } = useScreenSizes()
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()

  return (
    <Flex flexGrow={1} height="48px">
      <Header aria-label="IBM Platform Name">
        {!isLargeDesktop &&
          <HeaderGlobalAction onClick={() => setShowSideMenu(!showSideMenu)} aria-label="navigation menu">
            <Menu/>
          </HeaderGlobalAction>
        }
        <HeaderName href="#">Schedule 1</HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="user menu">
            <UserAvatar/>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </Flex>
  )
}
