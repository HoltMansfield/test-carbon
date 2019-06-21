import React from 'react'
import Flex from 'flexbox-react'
import { SideNav, SideNavItems, SideNavMenuItem } from 'carbon-components-react'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
import { useRouter } from 'hooks/core/use-router/useRouter'


export function SideMenu () {
  const { showSideMenu } = useShowSideMenu()
  const { history } = useRouter()

  return (
    <Flex>
      <SideNav
        isFixedNav
        expanded={showSideMenu}
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
