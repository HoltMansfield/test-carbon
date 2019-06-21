/* eslint no-script-url: "off" */
import React from 'react'
import Flex from 'flexbox-react'
import { SideNav, SideNavMenu, SideNavItems, SideNavMenuItem } from 'carbon-components-react'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
import { useRouter } from 'hooks/core/use-router/useRouter'


export function SideMenu () {
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()
  const { history } = useRouter()

  const navigate = (url) => {
    history.push(url)
    setShowSideMenu(false)
  }

  return (
      <SideNav
        isFixedNav
        expanded={showSideMenu}
        isChildOfHeader={true}
        aria-label="Side navigation"
        >
        <SideNavItems>
          <SideNavMenu title="Policies">
            <SideNavMenuItem href="javascript:void(0)" onClick={() => navigate('/find-policy')}>
              Find Policy
            </SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)" onClick={() => navigate('/create-policy')}>
              Create Policy
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)" onClick={() => navigate('/create-policy-from-profile')}>
              Create Policy From Profile
            </SideNavMenuItem>
          </SideNavMenu>
        </SideNavItems>
      </SideNav>
  )
}
