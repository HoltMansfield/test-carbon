import React from 'react'
import Flex from 'flexbox-react'
import { RouteTable } from '../routes/RouteTable'
import { AppBar } from './app-bar/AppBar'
import { SideMenu } from './side-menu/SideMenu'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'


export function App () {
  const { isDevice, isLargeDesktop } = useScreenSizes()

  if (isDevice) {
    return (
      <Flex flexGrow={1}>
        <RouteTable />
      </Flex>
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
