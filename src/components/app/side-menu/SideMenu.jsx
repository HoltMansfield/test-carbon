/* eslint no-script-url: "off" */
import React from 'react'
import { SideNav, SideNavMenu, SideNavItems, SideNavMenuItem } from 'carbon-components-react'
import Document from '@carbon/icons-react/es/document/16'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { MenuItemText } from './styled'


export function SideMenu () {
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()
  const { history } = useRouter()

  const navigate = (url) => {
    history.push(url)
    setShowSideMenu(false)
  }

  const getAriaCurrent = (url) => {
    if(history.location.pathname === url) {
      return 'page'
    }

    return 'false'
  }

  const getActiveStateForMenu = (string) => {
    return history.location.pathname.includes(string)
  }

  return (
      <SideNav
        isFixedNav
        expanded={showSideMenu}
        isChildOfHeader={true}
        aria-label="Side navigation"
        >
        <SideNavItems>
          <SideNavMenu title="Policies" isActive={getActiveStateForMenu('policy')} renderIcon={Document}>
            <SideNavMenuItem aria-current={getAriaCurrent('/find-policy')} onClick={() => navigate('/find-policy')} href="javascript:void(0)">
              <MenuItemText>Find Policy</MenuItemText>
            </SideNavMenuItem>
            <SideNavMenuItem aria-current={getAriaCurrent('/create-policy')} onClick={() => navigate('/create-policy')} href="javascript:void(0)">
              <MenuItemText>Create Policy</MenuItemText>
            </SideNavMenuItem>
            <SideNavMenuItem aria-current={getAriaCurrent('/create-policy-from-profile')} onClick={() => navigate('/create-policy-from-profile')} href="javascript:void(0)">
              <MenuItemText>Create Policy From Profile</MenuItemText>
            </SideNavMenuItem>
          </SideNavMenu>
        </SideNavItems>
      </SideNav>
  )
}
