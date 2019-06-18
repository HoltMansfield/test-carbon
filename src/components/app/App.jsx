import React from 'react'
import Flex from 'flexbox-react'
import { RouteTable } from '../routes/RouteTable'
import { AppBar } from './app-bar/AppBar'
import { SideMenu } from './side-menu/SideMenu'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'


import Swipe from 'react-easy-swipe'


export function App () {
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()
  const { isDevice, isLargeDesktop } = useScreenSizes()

  const onSwipeMove = (position, event) => {
    const swipeEnd = event.changedTouches[0].clientX
    if(swipeEnd > 15 && !showSideMenu) {
      setShowSideMenu(true)
    }
  }

  if (isDevice) {
    return (
      <Swipe onSwipeMove={onSwipeMove}>
        <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
          <RouteTable />
        </Flex>
      </Swipe>
    )
  }

  if (isLargeDesktop) {
    return (
      <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
        <Flex>
          <AppBar />
        </Flex>
        <Flex flexGrow={1}>
          <Flex width="200px">
            <SideMenu />
          </Flex>
          <Flex flexGrow={1}>
            <RouteTable />
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Flex>
        <AppBar />
      </Flex>
      <Flex>
        <RouteTable />
      </Flex>
    </Flex>
  )
}
