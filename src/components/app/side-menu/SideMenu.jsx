import React from 'react'
import Flex from 'flexbox-react'
import { SideNav, SideNavItems, SideNavMenuItem } from 'carbon-components-react'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
import { useRouter } from 'hooks/core/use-router/useRouter'
// import { } from './styled'


export function SideMenu () {
  const { showSideMenu } = useShowSideMenu()
  const { isLargeDesktop } = useScreenSizes()
  const { history } = useRouter()
  const shouldShowSideMenu = isLargeDesktop || showSideMenu

  return (
    <Flex>
      <SideNav
        isFixedNav
        expanded={shouldShowSideMenu}
        isChildOfHeader={true}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <SideNavMenuItem>
            <Flex onClick={() => history.push('/find-policy')}>Find Policy</Flex>
          </SideNavMenuItem>
        </SideNavItems>
      </SideNav>
    </Flex>
  )
}
