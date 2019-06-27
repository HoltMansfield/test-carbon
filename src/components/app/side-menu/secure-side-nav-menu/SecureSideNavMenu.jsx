import React from 'react'
import { SideNavMenu } from 'carbon-components-react'
import { useRBAC } from 'hooks/core/use-rbac/useRBAC'
// import { } from './styled'


export function SecureSideNavMenu ({ requiredRoles, title, isActive, renderIcon, children }) {
  const { hasAccess } = useRBAC()
  const content = (
    <SideNavMenu title={title} isActive={isActive} renderIcon={renderIcon}>
      {children}
    </SideNavMenu>
  )

  // requiredRoles is null, nothing to check
  if (!requiredRoles) {
    return content
  }

  // this menu is restricted, only display it if the user has one of the required roles
  if (hasAccess(requiredRoles)) {
    return content
  }

  return null
}
