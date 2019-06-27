import { useLoggedInUser } from 'hooks/core/use-logged-in-user/useLoggedInUser'
import { any } from 'ramda'

/*
    A given user has roles such as (Create, Delete, Edit)
    A given Portal Operation can be assigned to multiple roles such that
    A user may require either Edit or Admin to peform a given portal operation

    This algo is:
      Does the user have one of the required roles?
*/

export const useRBAC = () => {
  const { loggedInUser } = useLoggedInUser()

  const checkRequiredRoles = (requiredRole) => {
    // for each user role, see if any of them match this requiredRole
    return any(userAssignedRole => userAssignedRole === requiredRole)(loggedInUser.roles)
  }

  const hasAccess = (requireRoles) => {
    if(!loggedInUser || !loggedInUser.roles) {
      return false
    }

    // for each required role, check if the user has at least one of these roles
    return any(checkRequiredRoles)(requireRoles)
  }

  return {
    hasAccess
  }
}
