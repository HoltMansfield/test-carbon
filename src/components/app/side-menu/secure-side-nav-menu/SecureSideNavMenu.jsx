import React from 'react'
import { SideNavMenu } from 'carbon-components-react'
// import { } from './styled'


export function SecureSideNavMenu ({ title, isActive, renderIcon, children }) {
  return (
    <SideNavMenu title={title} isActive={isActive} renderIcon={renderIcon}>
      {children}
    </SideNavMenu>
  )
}
