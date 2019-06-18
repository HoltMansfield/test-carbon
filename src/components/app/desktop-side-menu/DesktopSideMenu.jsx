import React from 'react'
import { SideMenu } from '../side-menu/SideMenu'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'


export function DesktopSideMenu () {
  const { showSideMenu } = useShowSideMenu()

  if(!showSideMenu) {
    return null
  }

  return (
    <SideMenu />
  )
}
