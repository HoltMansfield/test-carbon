import React from 'react'
import Flex from 'flexbox-react'
import Swipe from 'react-easy-swipe'
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from 'react-offcanvas'
import { RouteTable } from '../routes/RouteTable'
import { AppBar } from './app-bar/AppBar'
import { SideMenu } from './side-menu/SideMenu'
import { MobileSideMenu } from './mobile-side-menu/MobileSideMenu'
import { DesktopSideMenu } from './desktop-side-menu/DesktopSideMenu'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'


export function App () {
  const { showSideMenu, setShowSideMenu } = useShowSideMenu()
  const { isDevice, isLargeDesktop } = useScreenSizes()

  if (isDevice) {
    return (
      <Swipe onSwipeRight={() => setShowSideMenu(true)} onSwipeLeft={() => setShowSideMenu(false)}>
        <OffCanvas
          width={document.body.clientWidth}
          transitionDuration={300}
          isMenuOpened={showSideMenu}
          position={"left"}
          effect={"overlay"}
        >
          <OffCanvasBody>
            <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
              <Flex>
                <AppBar />
              </Flex>
              <Flex>
                <RouteTable />
              </Flex>
            </Flex>
          </OffCanvasBody>
          <OffCanvasMenu>
            <MobileSideMenu />
          </OffCanvasMenu>
        </OffCanvas>
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
          <Flex width="300px" style={{ borderRight: 'solid 1px black'}}>
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
    <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
      <Flex>
        <AppBar />
      </Flex>
      <Flex>
        <Flex flexDirection="column">
          <Flex><DesktopSideMenu /></Flex>
          <Flex><RouteTable /></Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
