import React from 'react'
import Flex from 'flexbox-react'
import { SideMenu } from '../side-menu/SideMenu'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'


export function MobileSideMenu () {
  const { setShowSideMenu } = useShowSideMenu()

  return (
    <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
      <Flex flexGrow={1}>
        <Flex><SideMenu /></Flex>
        <Flex flexGrow={1}
          minHeight="100vh"
          onClick={() => setShowSideMenu(false)}>
        </Flex>
      </Flex>
    </Flex>
  )
}
