import React from 'react'
import { Link } from 'react-router-dom'
import Flex from 'flexbox-react'
import { SideNav, SideNavItems, SideNavMenuItem } from 'carbon-components-react'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
// import { } from './styled'


export function SideMenu () {
  const { setShowSideMenu } = useShowSideMenu()

  return (
    <Flex>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={true}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <SideNavMenuItem>
            <Flex><Link to="/find-policy">Find Policy</Link></Flex>
          </SideNavMenuItem>
        </SideNavItems>
      </SideNav>
    </Flex>
  )
}
